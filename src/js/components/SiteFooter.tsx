export const SiteFooter = () => {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <h4>QualityMon Evolution</h4>
        <p>Construído para portfólio com foco em excelência operacional e storytelling digital.</p>
      </div>
      <div className="footer-meta">
        <a href="mailto:contato@qualitymon.dev">contato@qualitymon.dev</a>
        <span>© {new Date().getFullYear()} Almaviva Lab</span>
      </div>
    </footer>
  );
};
