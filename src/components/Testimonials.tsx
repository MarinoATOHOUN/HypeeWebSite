import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Amina Diallo",
    role: "Créatrice de contenu",
    country: "Sénégal",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    text: "HypeeConnect a transformé ma carrière. Je peux enfin monétiser mon contenu et toucher une vraie communauté africaine.",
    rating: 5
  },
  {
    name: "Kwame Mensah",
    role: "Entrepreneur Tech",
    country: "Ghana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    text: "Storya nous permet de partager notre culture de manière authentique. C'est exactement ce dont l'Afrique avait besoin.",
    rating: 5
  },
  {
    name: "Fatou Ndiaye",
    role: "Artiste musicale",
    country: "Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    text: "Donumi m'a permis de développer ma fanbase et de vendre ma musique directement. Une révolution pour les artistes africains!",
    rating: 5
  },
  {
    name: "Chidi Okonkwo",
    role: "Développeur",
    country: "Nigeria",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    text: "L'innovation africaine à son meilleur. Ces plateformes comprennent vraiment nos besoins et notre culture.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs disent de nos plateformes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
