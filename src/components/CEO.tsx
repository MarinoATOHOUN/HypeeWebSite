import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ceoPic from "@/assets/marino-pdg.png";

export const CEO = () => {
  return (
    <section id="ceo" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ceoPic}
                alt="Marino ATOHOUN - CEO de Hypee"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/30 rounded-3xl"
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* CEO Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-sm font-medium text-primary">Vision & Leadership</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl font-heading font-bold mb-6"
            >
              Bâtir l'Afrique{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">numérique</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mb-8"
            >
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground/90 italic leading-relaxed pl-8">
                "Nous ne construisons pas pour l'Afrique. Nous construisons avec l'Afrique, 
                par l'Afrique, pour que chaque voix trouve son écho."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Fondateur et CEO de Hypee, je porte la conviction qu'internet doit refléter 
                la diversité du monde. L'Afrique mérite des plateformes qui comprennent ses 
                langues, célèbrent ses cultures et amplifient ses talents.
              </p>
              <p>
                De HypeeConnect à Donumi et Storya, chaque produit est une réponse à un besoin 
                réel exprimé par notre communauté. Notre mission ne s'arrête jamais à la 
                technologie : elle commence et finit toujours avec les humains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="mt-6 pt-6 border-t border-border/50"
            >
              <p className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                Marino ATOHOUN
              </p>
              <p className="text-sm text-muted-foreground mt-1">Founder & CEO, Hypee</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
              <span className="text-sm font-medium text-muted-foreground">
                Rejoignez la révolution numérique africaine
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
