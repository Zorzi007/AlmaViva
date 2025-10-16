import { AppHeader } from './components/AppHeader';
import { FilterToolbar } from './components/FilterToolbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Layout } from './components/Layout';
import { MonitoringInsights } from './components/MonitoringInsights';
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
        <MonitoringInsights />
        <SiteFooter />
      </Layout>
      <ProductModal />
    </div>
  );
};

export default App;
