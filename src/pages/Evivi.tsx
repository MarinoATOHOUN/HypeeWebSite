import { ChefHat, Globe, Heart, TrendingUp, Users, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mockupEvivi from "@/assets/mockup-evivi.png";

const features = [
  {
    icon: ChefHat,
    title: "Recettes Authentiques",
    description: "Partagez et découvrez des milliers de recettes africaines traditionnelles et modernes.",
  },
  {
    icon: Users,
    title: "Communauté Passionnée",
    description: "Connectez-vous avec des chefs, food bloggers et passionnés de cuisine africaine.",
  },
  {
    icon: Globe,
    title: "Diversité Culinaire",
    description: "Explorez la richesse gastronomique de tout le continent africain.",
  },
  {
    icon: Heart,
    title: "Stories Culinaires",
    description: "Racontez l'histoire derrière chaque plat et transmettez votre héritage.",
  },
  {
    icon: TrendingUp,
    title: "Tendances Food",
    description: "Suivez les dernières tendances et innovations de la gastronomie africaine.",
  },
  {
    icon: Award,
    title: "Concours & Défis",
    description: "Participez à des challenges culinaires et gagnez en visibilité.",
  },
];

const Evivi = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-green-500/10" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="absolute top-8 left-4">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                  Évivi
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Le réseau social qui célèbre la gastronomie africaine
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Partagez vos recettes, racontez vos histoires culinaires et découvrez la richesse 
                de la cuisine africaine à travers les yeux de milliers de passionnés.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <ChefHat className="w-5 h-5" />
                  Rejoindre la communauté
                </Button>
                <Button size="lg" variant="outline">
                  Découvrir les recettes
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={mockupEvivi}
                  alt="Évivi App Mockup"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Une plateforme <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">complète</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tous les outils dont vous avez besoin pour partager votre passion culinaire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-orange-500/30">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-12 text-center border-2 border-orange-500/20"
          >
            <ChefHat className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h2 className="text-4xl font-heading font-bold mb-6">
              Prêt à partager vos créations culinaires ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de passionnés qui célèbrent la gastronomie africaine sur Évivi
            </p>
            <Button size="lg" className="gap-2">
              Créer mon compte
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Evivi;
