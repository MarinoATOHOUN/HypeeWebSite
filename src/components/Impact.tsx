import { motion } from "framer-motion";
import { Globe, Zap, Handshake, Briefcase, Languages, Rocket, Target } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import pattern from "@/assets/pattern-innovation.jpg";

// A more reusable and animated counter
const AnimatedCounter = ({ value, label, suffix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    const start = 0;
    const end = value;
    const startTime = performance.now();

    const animateCount = (timestamp) => {
      const progress = (timestamp - startTime) / (duration * 1000);
      const current = Math.min(start + progress * (end - start), end);
      setCount(Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        +{count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mt-2">{label}</p>
    </div>
  );
};


export const Impact = () => {
  const stats = [
    { value: 10, label: "Langues locales en intégration" },
    { value: 4, label: "Projets lancés" },
    { value: 2, label: "Partenaires stratégiques" },
  ];

  const impactAreas = [
    {
      icon: Rocket,
      title: "4 Projets Lancés",
      description: "Quatre produits innovants déjà en action pour construire l'avenir numérique de l'Afrique.",
    },
    {
      icon: Languages,
      title: "+10 Langues Locales",
      description: "L'intégration de langues locales pour rendre nos plateformes accessibles à travers le continent.",
    },
    {
      icon: Handshake,
      title: "Partenariats Stratégiques",
      description: "Collaboration avec des acteurs clés pour décupler notre force de frappe et notre expertise.",
    },
    {
        icon: Target,
        title: "Solutions à Problèmes Réels",
        description: "Nous nous attaquons à de vrais problèmes avec des solutions pensées pour et par le contexte africain.",
    },
  ];

  return (
    <section id="impact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div 
            className="absolute inset-0 opacity-5"
            style={{
                backgroundImage: `url(${pattern})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Notre <span className="bg-gradient-secondary bg-clip-text text-transparent">Impact</span> à ce jour
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Même avant notre lancement public, nous bâtissons les fondations d'une révolution numérique.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </motion.div>
        
        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {area.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 max-w-2xl mx-auto">
            L'impact ne fait que commencer.
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Soyez aux premières loges de la transformation numérique de l'Afrique.
          </p>
          <a href="#join">
            <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
              Devenir un pionnier
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};