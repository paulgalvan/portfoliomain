const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Paul Galvan
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:paul.galvan@tufts.edu"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              paul.galvan@tufts.edu
            </a>
            <a
              href="https://www.linkedin.com/in/paul-galvan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/paulgalvan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
