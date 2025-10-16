import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const MAX_POINTS = 24;
const CHART_WIDTH = 640;
const CHART_HEIGHT = 240;

type MonitoringPoint = {
  id: number;
  timestamp: number;
  score: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const drift = () => Math.random() * 4 - 2;

const buildInitialSeries = () => {
  let base = 88;
  const seed = Date.now() - MAX_POINTS * 60000;
  return Array.from({ length: MAX_POINTS }, (_, index) => {
    base = clamp(base + drift(), 76, 97);
    return {
      id: seed + index,
      timestamp: seed + index * 60000,
      score: Number(base.toFixed(1))
    };
  });
};

const getPaths = (points: MonitoringPoint[]) => {
  if (points.length === 0) {
    return { linePath: '', areaPath: '', coordinates: [] as Array<{ x: number; y: number }> };
  }

  const minScore = 70;
  const maxScore = 100;
  const width = CHART_WIDTH;
  const height = CHART_HEIGHT;
  const denominator = Math.max(points.length - 1, 1);

  const coordinates = points.map((point, index) => {
    const x = (index / denominator) * width;
    const normalized = clamp((point.score - minScore) / (maxScore - minScore), 0, 1);
    const y = height - normalized * height;
    return { x, y };
  });

  const linePath = coordinates
    .map((coordinate, index) => `${index === 0 ? 'M' : 'L'} ${coordinate.x.toFixed(2)} ${coordinate.y.toFixed(2)}`)
    .join(' ');

  const areaPath = `${linePath} L ${width.toFixed(2)} ${height.toFixed(2)} L 0 ${height.toFixed(2)} Z`;

  return { linePath, areaPath, coordinates };
};

const formatTime = (timestamp: number) =>
  new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

export const MonitoringInsights = () => {
  const [points, setPoints] = useState<MonitoringPoint[]>(() => buildInitialSeries());
  const [totalEvaluations, setTotalEvaluations] = useState(points.length);
  const firstEvaluationAt = useRef(points[0]?.timestamp ?? Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPoints((current) => {
        const last = current[current.length - 1];
        const nextScore = clamp((last?.score ?? 86) + drift(), 74, 99);
        const nextPoint: MonitoringPoint = {
          id: Date.now(),
          timestamp: Date.now(),
          score: Number(nextScore.toFixed(1))
        };
        return [...current.slice(-MAX_POINTS + 1), nextPoint];
      });
      setTotalEvaluations((prev) => prev + 1);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const { linePath, areaPath, coordinates } = useMemo(() => getPaths(points), [points]);

  const latestPoint = points[points.length - 1];
  const previousPoint = points[points.length - 2];
  const variation = latestPoint && previousPoint ? Number((latestPoint.score - previousPoint.score).toFixed(1)) : 0;
  const rollingAverage = useMemo(() => {
    const windowSize = Math.min(points.length, 10);
    if (windowSize === 0) return 0;
    const slice = points.slice(-windowSize);
    const sum = slice.reduce((accumulator, point) => accumulator + point.score, 0);
    return Number((sum / windowSize).toFixed(1));
  }, [points]);

  const windowDurationHours = useMemo(() => {
    const first = points[0];
    const last = points[points.length - 1];
    if (!first || !last) return 1;
    const diff = last.timestamp - first.timestamp;
    return Math.max(diff / 3_600_000, 0.1);
  }, [points]);

  const evaluationsPerHour = Number((points.length / windowDurationHours).toFixed(0));

  return (
    <section className="insights" id="insights">
      <div className="insights-header">
        <div>
          <h2>Monitoria em tempo real</h2>
          <p>
            Cada avaliação de atendimento atualiza instantaneamente o gráfico. Use esta visualização para acompanhar a performance das
            células e reagir rápido a desvios de qualidade.
          </p>
        </div>
        <div className="insights-stats">
          <div className="insight-stat">
            <span>Total de monitorias</span>
            <strong>{totalEvaluations}</strong>
          </div>
          <div className={`insight-stat ${variation >= 0 ? 'positive' : 'negative'}`}>
            <span>Variação da última nota</span>
            <strong>{variation >= 0 ? '+' : ''}{variation.toFixed(1)} pts</strong>
          </div>
          <div className="insight-stat">
            <span>Média móvel (10)</span>
            <strong>{rollingAverage.toFixed(1)}%</strong>
          </div>
          <div className="insight-stat">
            <span>Monitorias / hora</span>
            <strong>{evaluationsPerHour}</strong>
          </div>
        </div>
      </div>
      <div className="monitoring-chart">
        <svg viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} preserveAspectRatio="none" role="img" aria-label="Gráfico de monitoria em tempo real">
          <defs>
            <linearGradient id="monitoringAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(180, 132, 255, 0.48)" />
              <stop offset="100%" stopColor="rgba(76, 29, 149, 0.05)" />
            </linearGradient>
            <linearGradient id="monitoringLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c4a0ff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          {areaPath && (
            <motion.path
              d={areaPath}
              fill="url(#monitoringAreaGradient)"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              key={`area-${points[points.length - 1]?.id ?? 'empty'}`}
            />
          )}
          {linePath && (
            <motion.path
              d={linePath}
              fill="transparent"
              stroke="url(#monitoringLineGradient)"
              strokeWidth={3}
              strokeLinecap="round"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              key={`line-${points[points.length - 1]?.id ?? 'empty'}`}
            />
          )}
          {coordinates.map((coordinate, index) => (
            <motion.circle
              key={points[index]?.id ?? index}
              cx={coordinate.x}
              cy={coordinate.y}
              r={index === coordinates.length - 1 ? 5 : 3}
              fill={index === coordinates.length - 1 ? '#c084fc' : 'rgba(192, 132, 252, 0.35)'}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </svg>
      </div>
      <div className="monitoring-footnote">
        <span>Última monitoria registrada às {latestPoint ? formatTime(latestPoint.timestamp) : '--:--:--'}</span>
        <span>
          Frequência estimada desde {formatTime(firstEvaluationAt.current)} | Integração pronta para eventos de QA em tempo real.
        </span>
      </div>
    </section>
  );
};

export default MonitoringInsights;
