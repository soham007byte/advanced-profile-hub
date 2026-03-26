const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Soham Bamane</span>. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground font-mono">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
