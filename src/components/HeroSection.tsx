import { motion } from 'framer-motion';
import { productGroups, products } from '../data/products';

const stats = [
  {
    label: 'Operações monitoradas',
    value: `${products.length}+`,
    caption: 'em diferentes verticais'
  },
  {
    label: 'Nível de automação',
    value: '82%',
    caption: 'fluxos com IA embarcada'
  },
  {
    label: 'Insights recorrentes',
    value: '120k',
    caption: 'alertas estratégicos ao mês'
  }
];

export const HeroSection = () => {
  return (
    <section className="hero" id="overview">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          QualityMon Evolution
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Uma suíte de inteligência viva que conecta operações de DC e CX em um único cockpit, criando experiências sofisticadas e escaláveis.
        </motion.p>
        <motion.div
          className="hero-insights"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-pulse" />
          <span>{productGroups.length} hubs de valor + operação 24/7 orientada a dados.</span>
        </motion.div>
        <div className="hero-cta">
          <motion.a
            href="#products"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explorar ecossistema
          </motion.a>
          <motion.a
            href="#insights"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver relatórios
          </motion.a>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-caption">{stat.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
