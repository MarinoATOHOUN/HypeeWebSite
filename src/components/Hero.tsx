import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { AfricanPattern } from "./AfricanPattern";
import heroImage from "@/assets/african-tech-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="African Tech Innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90" />
      </div>
      
      <AfricanPattern />

      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-2 border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white/90" />
            <span className="text-sm font-medium text-white/90">L'Afrique numérique se construit ici</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Créer, connecter, libérer
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
              l'Afrique numérique
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Hypee construit les réseaux sociaux africains de demain. 
            Des espaces numériques qui célèbrent nos cultures, 
            amplifient nos voix et créent de la valeur pour nos créateurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#products">
              <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
                Découvrir nos produits
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#vision">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white/25 text-white backdrop-blur-md bg-black/20 hover:bg-black/30 hover:text-white hover:border-white/45 hover:shadow-lg transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/15"
              >
                Notre vision
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 rounded-full glass-card"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 rounded-full glass-card"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};
