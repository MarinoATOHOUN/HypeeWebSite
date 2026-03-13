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

  const navLinkClassName = scrolled
    ? "px-3 py-2 rounded-2xl text-sm text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors"
    : "px-3 py-2 rounded-2xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors";

  return (
    <>
      {/* Desktop Header */}
      <header id="site-header" className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div
            className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl saturate-150 transition-all duration-300 ${
              scrolled
                ? "bg-card/40 border-border/60 shadow-xl"
                : "bg-card/12 border-border/50 shadow-sm"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent opacity-35 transition-opacity duration-300 group-hover:opacity-55" />

            <div className="relative px-4 sm:px-6">
              <div className="h-16 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:justify-items-center">
                {/* Left slot */}
                <div className="flex items-center justify-start md:justify-self-start">
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 rounded-2xl transition-smooth ${
                      scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                    }`}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>

                {/* Desktop Navigation (center) */}
                <nav className="hidden md:flex items-center gap-2">
                  <a href="#vision" className={navLinkClassName}>
                    Vision
                  </a>
                  <a href="#products" className={navLinkClassName}>
                    Produits
                  </a>
                  <a href="#ceo" className={navLinkClassName}>
                    À propos
                  </a>
                  <a href="#join" className={navLinkClassName}>
                    Contact
                  </a>
                </nav>

                {/* Right slot (CTA + Logo) */}
                <div className="flex items-center gap-3 md:justify-self-end">
                  <div className="hidden md:flex items-center gap-3">
                    <button
                      onClick={toggleDarkMode}
                      className={`p-2 rounded-2xl transition-smooth ${
                        scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
                      }`}
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

                  {/* Logo (right) */}
                  <Link to="/" className="flex items-center gap-2">
                    <img src={logoHypee} alt="Hypee Logo" className="w-11 rounded-2xl shadow-sm" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden relative border-t border-border/60 bg-card/80">
                <nav className="px-4 sm:px-6 py-4 flex flex-col gap-2">
                  <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                    Vision
                  </a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                    Produits
                  </a>
                  <a href="#ceo" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
                    À propos
                  </a>
                  <a href="#join" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
