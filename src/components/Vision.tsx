import { Target, Lightbulb, Heart } from "lucide-react";
import africaNetworkImage from "@/assets/africa-network.jpg";

export const Vision = () => {
  return (
    <section id="vision" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${africaNetworkImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Notre <span className="bg-gradient-primary bg-clip-text text-transparent">vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'Afrique ne manque pas de voix. Elle manque d'espaces pour les amplifier.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Créer des réseaux sociaux au service de l'Afrique et de son émancipation numérique, 
              où chaque créateur trouve sa place.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bâtir des plateformes africaines modernes qui donnent la parole, les outils 
              et la valeur économique aux créateurs du continent.
            </p>
          </div>
          
          {/* Values Card */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Valeurs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Authenticité culturelle, innovation responsable et création de valeur 
              pour les communautés africaines d'abord.
            </p>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <blockquote className="text-2xl sm:text-3xl font-heading font-medium text-foreground/90 italic leading-relaxed">
            "Les plateformes existantes ignorent les réalités africaines. 
            Nous construisons des espaces numériques adaptés aux cultures locales."
          </blockquote>
          <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};
