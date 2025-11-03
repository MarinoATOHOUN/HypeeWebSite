import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PenTool, Sparkles, BookOpen, Users2, FileEdit, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import mockupStorya from "@/assets/mockup-storya.png";
import { NetworkBackground } from "@/components/NetworkBackground";

const Storya = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Assistant IA Intelligent",
      description: "L'IA vous aide à structurer votre récit, développer vos personnages et enrichir votre style.",
    },
    {
      icon: FileEdit,
      title: "Éditeur Intuitif",
      description: "Interface d'écriture épurée avec outils de formatage et organisation par chapitres.",
    },
    {
      icon: BookOpen,
      title: "Bibliothèque de Ressources",
      description: "Accédez à des guides, templates et exemples pour améliorer votre écriture.",
    },
    {
      icon: Users2,
      title: "Communauté d'Auteurs",
      description: "Partagez vos histoires, recevez des feedbacks et collaborez avec d'autres auteurs.",
    },
    {
      icon: Zap,
      title: "Publication Rapide",
      description: "Publiez vos œuvres en un clic sur la plateforme et touchez vos lecteurs.",
    },
    {
      icon: PenTool,
      title: "Outils d'Écriture Avancés",
      description: "Correcteur, suggestions de synonymes, analyse de style et statistiques de progression.",
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
                className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-medium text-accent">Écriture Assistée par IA</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-hero">Storya</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La plateforme d'écriture qui accompagne les jeunes auteurs africains. 
                Créez, structurez et publiez vos histoires avec l'aide de l'IA.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-hero shadow-glow">
                  Commencer à écrire
                </Button>
                <Button size="lg" variant="outline">
                  Lire les histoires
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
                src={mockupStorya}
                alt="Storya Interface"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Notre <span className="text-gradient-hero">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Donner aux jeunes auteurs africains les outils pour raconter leurs histoires avec confiance. 
              L'IA ne remplace pas votre créativité, elle l'amplifie et vous guide dans votre processus d'écriture.
            </p>
          </motion.div>
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
              Fonctionnalités <span className="text-gradient-hero">Créatives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tous les outils dont vous avez besoin pour écrire votre chef-d'œuvre
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
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <Sparkles className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-lg text-muted-foreground italic mb-4">
                  "Storya m'a aidé à surmonter le syndrome de la page blanche. L'assistant IA comprend mes idées 
                  et m'aide à les structurer sans jamais imposer sa vision. C'est exactement ce dont j'avais besoin."
                </p>
                <div>
                  <div className="font-semibold">Amina K.</div>
                  <div className="text-sm text-muted-foreground">Auteure, Dakar</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 border border-accent/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Racontez votre histoire avec <span className="text-gradient-hero">Storya</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez une communauté d'auteurs passionnés et commencez à écrire dès aujourd'hui
            </p>
            <Button size="lg" className="bg-gradient-hero shadow-glow">
              Créer mon compte gratuitement
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Storya;
