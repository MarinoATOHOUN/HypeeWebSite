import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, Globe2, Headphones, Upload, Radio, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import mockupDonumi from "@/assets/mockup-donumi.png";
import { NetworkBackground } from "@/components/NetworkBackground";

const Donumi = () => {
  const features = [
    {
      icon: Languages,
      title: "20+ Langues Africaines",
      description: "Créez et écoutez des podcasts en wolof, swahili, lingala, yoruba, et bien plus.",
    },
    {
      icon: Upload,
      title: "Publication Simplifiée",
      description: "Enregistrez, éditez et publiez vos podcasts en quelques clics.",
    },
    {
      icon: Globe2,
      title: "Distribution Mondiale",
      description: "Diffusez vos contenus sur toutes les plateformes internationales.",
    },
    {
      icon: Headphones,
      title: "Écoute Hors-ligne",
      description: "Téléchargez vos épisodes préférés pour les écouter sans connexion.",
    },
    {
      icon: Radio,
      title: "Découverte Personnalisée",
      description: "Algorithme intelligent adapté aux préférences culturelles africaines.",
    },
    {
      icon: Mic,
      title: "Studio Mobile",
      description: "Enregistrez directement depuis votre smartphone avec qualité professionnelle.",
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
                className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-secondary">Podcasts en Langues Locales</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-secondary">Donumi</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La première plateforme de podcasts dédiée aux langues africaines. 
                Écoutez, créez et partagez des histoires dans votre langue maternelle.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-secondary shadow-glow">
                  Découvrir les podcasts
                </Button>
                <Button size="lg" variant="outline">
                  Créer mon podcast
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
                src={mockupDonumi}
                alt="Donumi Interface"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Langues disponibles", value: "20+" },
              { label: "Podcasts publiés", value: "500+" },
              { label: "Créateurs actifs", value: "1K+" },
              { label: "Heures d'écoute", value: "10K+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-heading font-bold text-gradient-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Fonctionnalités <span className="text-gradient-secondary">Puissantes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour les podcasteurs africains
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
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
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
            className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Lancez votre podcast sur <span className="text-gradient-secondary">Donumi</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez des centaines de créateurs qui donnent vie aux langues africaines
            </p>
            <Button size="lg" className="bg-gradient-secondary shadow-glow">
              Commencer gratuitement
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donumi;
