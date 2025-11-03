import { motion } from "framer-motion";
import logoblackbenAI from '../assets/logoblackbenAI.png';

const partners = [
  {
    name: "BlackBenAI",
    logo: logoblackbenAI,
    url: "https://blackbenai.com",
    description: "Une entreprise béninoise qui construit L'Intelligence Artificielle au service de l'Afrique. BlackBenAI construit des modèles enracinés dans les réalités africaines pour transformer le continent."
  },
];

export const Partners = () => {
  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Notre Partenaire
          </h2>
          <p className="text-muted-foreground">
            Il soutient notre vision d'une Afrique digitale
          </p>
        </motion.div>

        <div className="flex justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-md"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 mb-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-muted-foreground">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};