import { AppHeader } from './components/AppHeader';
import { FilterToolbar } from './components/FilterToolbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Layout } from './components/Layout';
import { ProductModal } from './components/ProductModal';
import { ProductShowcase } from './components/ProductShowcase';
import { SiteFooter } from './components/SiteFooter';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-shell theme-${theme}`}>
      <InteractiveBackground />
      <Layout>
        <AppHeader theme={theme} onToggleTheme={toggleTheme} />
        <HeroSection />
        <FilterToolbar />
        <ProductShowcase />
        <section className="insights" id="insights">
          <h2>Insights estratégicos em tempo real</h2>
          <p>
            Dashboards proprietários com métricas acionáveis, alertas assistidos por IA e trilhas que conectam valores de DC a CX em uma
            narrativa unificada.
          </p>
          <div className="insight-panels">
            <div>
              <h3>Streaming de Voz do Cliente</h3>
              <p>
                Captação contínua com modelos de NLP, categorização automática e roteamento inteligente para células de resolução.
              </p>
            </div>
            <div>
              <h3>Playbooks Orquestrados</h3>
              <p>
                Scripts dinâmicos que combinam dados operacionais, KPIs financeiros e cultura de atendimento de alto padrão.
              </p>
            </div>
            <div>
              <h3>Governança Data Driven</h3>
              <p>
                Conjunto de rituais e analytics para antecipar riscos, garantir compliance e destravar oportunidades de expansão.
              </p>
            </div>
          </div>
        </section>
        <SiteFooter />
      </Layout>
      <ProductModal />
    </div>
  );
};

export default App;
