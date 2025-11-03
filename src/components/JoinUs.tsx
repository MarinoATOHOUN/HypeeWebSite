import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, Briefcase, Zap, Star, Users } from "lucide-react";
import { useState } from "react";

export const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons très bientôt.",
    });
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Impact Continental",
      description: "Contribuez à des projets qui façonnent l'avenir numérique de l'Afrique et donnent une voix à ses créateurs.",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Projets Innovants",
      description: "Travaillez sur des plateformes de pointe (IA, SocialFi, DePin) qui résolvent des problèmes réels.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Réseau Panafricain",
      description: "Collaborez avec un réseau de talents, de créateurs et d'investisseurs passionnés par le futur du continent.",
    },
  ];

  return (
    <section id="join" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Rejoignez</span> la mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Développeurs, créateurs, investisseurs : construisons ensemble les plateformes qui donneront sa voix à l'Afrique.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Why Join Us Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card border-2 border-primary/20 rounded-3xl p-8 sm:p-12 shadow-elegant hover:shadow-glow transition-all duration-500 hover:border-primary/40 h-full"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Pourquoi nous rejoindre ?</h3>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card border-2 border-primary/20 rounded-3xl p-8 sm:p-12 shadow-elegant hover:shadow-glow transition-all duration-500 hover:border-primary/40"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields remain the same */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Nom complet
                  </label>
                  <Input id="name" type="text" placeholder="Votre nom" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth hover:border-primary/50 hover:bg-background/90" />
                </div>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth hover:border-primary/50 hover:bg-background/90" />
                </div>
              </div>
              {/* Role Input */}
              <div>
                <label htmlFor="role" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Profil / Intérêt
                </label>
                <Input id="role" type="text" placeholder="Ex: Développeur, Investisseur..." value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth hover:border-primary/50 hover:bg-background/90" />
              </div>
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Send className="w-4 h-4 text-primary" />
                  Message
                </label>
                <Textarea id="message" placeholder="Votre message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none hover:border-primary/50 hover:bg-background/90" />
              </div>
              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg py-7 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-semibold relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/30 to-primary-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Send className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Envoyer</span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Nous étudions chaque demande avec attention et répondons sous 48h.
        </motion.p>
      </div>
    </section>
  );
};