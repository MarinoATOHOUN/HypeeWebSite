import { Link } from "react-router-dom";
import { Users, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import logoHypee from "../assets/logo-hypee.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-card/80 border-b border-border shadow-lg' : 'bg-card/60 border-b border-border/50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img src={logoHypee} alt="Hypee Logo" className="w-12 rounded-lg" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Vision
              </a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Produits
              </a>
              <a href="#ceo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#join" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="#join">
                <Button className="gap-2 bg-gradient-primary hover:opacity-90 shadow-glow hover:shadow-lg transition-smooth">
                  <Users className="w-4 h-4" />
                  Rejoignez-nous
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-smooth"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                Vision
              </a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                Produits
              </a>
              <a href="#ceo" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                À propos
              </a>
              <a href="#join" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                Contact
              </a>
              <a href="#join" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-primary hover:opacity-90">
                  <Users className="w-4 h-4" />
                  Rejoignez-nous
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
