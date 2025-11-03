import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin, Zap, Users, Award } from 'lucide-react';

const Carrieres = () => {
  const openPositions = [
    { title: "Développeur Full-Stack Senior", location: "Télétravail", type: "Temps plein" },
    { title: "Lead Designer UI/UX", location: "Télétravail", type: "Temps plein" },
    { title: "Growth Hacker & Marketing Digital", location: "Télétravail", type: "Contrat" },
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Impact Direct", description: "Votre travail influence directement des millions d'utilisateurs en Afrique." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Culture Collaborative", description: "Rejoignez une équipe soudée où l'entraide est la norme." },
    { icon: <Award className="w-8 h-8 text-primary" />, title: "Excellence & Innovation", description: "Nous visons l'excellence en repoussant constamment les limites." },
  ];

  const testimonials = [
    { quote: "Chez Hypee, j'ai l'opportunité de résoudre des défis complexes qui ont un réel impact. C'est incroyablement stimulant.", name: "Aïcha Diallo", role: "Ingénieure Logicielle" },
    { quote: "L'autonomie et la confiance accordées à chaque membre de l'équipe sont les raisons pour lesquelles j'aime travailler ici.", name: "Kwame N'krumah", role: "Product Manager" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl font-extrabold text-primary mb-4 animate-fade-in-down">Rejoignez la Révolution</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Nous ne construisons pas seulement des applications. Nous façonnons l'avenir de l'interaction sociale en Afrique.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-24 space-y-32">
        <section id="avantages">
          <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi nous rejoindre ?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="postes">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos postes ouverts</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border flex justify-between items-center hover:bg-card-foreground/5 transition-colors">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{position.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-4 mt-1">
                    <span><MapPin className="inline w-4 h-4 mr-1" />{position.location}</span>
                    <span><Briefcase className="inline w-4 h-4 mr-1" />{position.type}</span>
                  </div>
                </div>
                <Button>Postuler</Button>
              </div>
            ))}
          </div>
        </section>
        
        <section id="temoignages">
          <h2 className="text-4xl font-bold mb-12 text-center">Paroles de notre équipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-lg">
                <p className="text-lg italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="candidature">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Prêt à nous impressionner ?</h2>
            <p className="text-muted-foreground mb-8">
              Nous sommes toujours à la recherche de talents exceptionnels. Envoyez-nous votre candidature spontanée.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 py-7 px-10 text-lg">
              Déposez votre CV
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Carrieres;
