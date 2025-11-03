import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, DollarSign, ShoppingBag, Smartphone, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import mockupHypeeConnect from "@/assets/mockup-hypeeconnect.png";
import { NetworkBackground } from "@/components/NetworkBackground";

const HypeeConnect = () => {
  const features = [
    {
      icon: Users,
      title: "Communauté Créateurs",
      description: "Connectez-vous avec des milliers de créateurs africains partageant votre passion.",
    },
    {
      icon: DollarSign,
      title: "Monétisation Directe",
      description: "Gagnez de l'argent grâce à vos contenus via abonnements, tips et partenariats.",
    },
    {
      icon: ShoppingBag,
      title: "Marketplace Intégrée",
      description: "Vendez vos produits et services directement sur la plateforme.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Application optimisée pour une expérience mobile fluide et intuitive.",
    },
    {
      icon: Globe,
      title: "Portée Locale & Globale",
      description: "Touchez votre communauté locale tout en rayonnant à l'international.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Créateur",
      description: "Suivez vos performances et optimisez votre stratégie de contenu.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour
              </Button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-primary">Réseau Social Africain</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-primary">HypeeConnect</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La première plateforme sociale construite par et pour les créateurs africains. 
                Créez, partagez, monétisez votre contenu authentique.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary shadow-glow">
                  Rejoindre la bêta
                </Button>
                <Button size="lg" variant="outline">
                  Voir la démo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.img
                src={mockupHypeeConnect}
                alt="HypeeConnect Interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Fonctionnalités <span className="text-gradient-primary">Clés</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour réussir en tant que créateur africain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Prêt à rejoindre <span className="text-gradient-primary">HypeeConnect</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscrivez-vous dès maintenant pour accéder en avant-première à la plateforme
            </p>
            <Button size="lg" className="bg-gradient-primary shadow-glow">
              Demander un accès bêta
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HypeeConnect;
