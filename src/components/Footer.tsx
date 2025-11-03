import { Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoHypee from "../assets/logo-hypee.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoHypee} alt="Hypee Logo" className="w-12 mb-4 rounded-lg" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              L'entreprise mère qui crée les réseaux sociaux africains de demain.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/hypee_africa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/company/hypee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://instagram.com/hypee.africa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://github.com/hypee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Produits</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hypeeconnect" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  HypeeConnect
                </a>
              </li>
              <li>
                <a href="#donumi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Donumi
                </a>
              </li>
              <li>
                <a href="#storya" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Storya
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#mission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Notre mission
                </a>
              </li>
              <li>
                <Link to="/carrieres" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/presse" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Presse
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Restez informé de nos actualités et lancements
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="votre@email.com" 
                className="bg-background"
                aria-label="Email pour newsletter"
              />
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                <Mail className="w-4 h-4 mr-2" />
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hypee. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link to="/conditions-d-utilisation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};