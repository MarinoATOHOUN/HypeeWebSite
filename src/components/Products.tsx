import { Users, Mic, PenTool, ChefHat, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mockupHypeeConnect from "@/assets/mockup-hypeeconnect.png";
import mockupDonumi from "@/assets/mockup-donumi.png";
import mockupStorya from "@/assets/mockup-storya.png";
import mockupEvivi from "@/assets/mockup-evivi.png";

const products = [
  {
    name: "HypeeConnect",
    description: "Le réseau social africain qui connecte créateurs, marques et entreprises. Partagez et monétisez votre contenu authentique.",
    icon: Users,
    link: "/hypeeconnect",
    image: mockupHypeeConnect,
  },
  {
    name: "Donumi",
    description: "La première plateforme de podcasts en langues africaines. Créez et écoutez du contenu dans votre langue maternelle.",
    icon: Mic,
    link: "/donumi",
    image: mockupDonumi,
  },
  {
    name: "Storya",
    description: "Plateforme d'écriture assistée par IA pour jeunes auteurs africains. Structurez et enrichissez vos histoires.",
    icon: PenTool,
    link: "/storya",
    image: mockupStorya,
  },
  {
    name: "Évivi",
    description: "Le réseau social de la gastronomie africaine. Partagez vos recettes, découvrez la richesse culinaire du continent.",
    icon: ChefHat,
    link: "/evivi",
    image: mockupEvivi,
  },
];

export const Products = () => {
  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Notre <span className="bg-gradient-primary bg-clip-text text-transparent">écosystème</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre plateformes complémentaires pour transformer le paysage numérique africain
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={product.link}>
                <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glass-card border-2 hover:border-primary/30">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
