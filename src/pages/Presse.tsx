import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Mail } from 'lucide-react';

const Presse = () => {
  const pressReleases = [
    { date: "15 Juillet 2024", title: "Hypee lève 5 millions de dollars pour étendre ses réseaux sociaux en Afrique de l'Ouest.", source: "TechCrunch" },
    { date: "2 Mars 2024", title: "Le lancement de HypeeConnect transforme la communication pour les jeunes entrepreneurs.", source: "Forbes Afrique" },
    { date: "10 Janvier 2024", title: "Hypee récompensé pour son innovation en technologie sociale.", source: "Jeune Afrique" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24 sm:py-32" style={{ backgroundImage: "url('/src/assets/pattern-innovation-DAQvehkv.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 sm:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">Hypee dans les Médias</h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Suivez notre parcours et découvrez comment nous faisons la une de l'actualité technologique en Afrique.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24">
        {/* Press Releases Section */}
        <section id="communiques">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center">Communiqués de Presse</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-card p-5 sm:p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">{release.date} - <span className="font-semibold text-primary">{release.source}</span></p>
                <h3 className="text-lg sm:text-xl font-semibold">{release.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Media Kit Section */}
        <section id="kit-media" className="text-center bg-card p-8 sm:p-12 md:p-16 rounded-2xl shadow-xl border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kit Média</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Téléchargez notre kit média complet incluant logos, images de marque, et informations sur l'entreprise.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 py-5 px-8 sm:py-6 sm:px-10 text-base sm:text-lg">
            <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Télécharger le Kit Média
          </Button>
        </section>

        {/* Press Contact Section */}
        <section id="contact-presse">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Presse</h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Pour toute demande d'interview, d'information ou de collaboration, contactez notre équipe de relations presse.
            </p>
            <a href="mailto:presse@hypee.africa" className="inline-flex items-center text-lg sm:text-xl font-semibold text-primary break-all px-4">
              <Mail className="w-5 h-5 mr-2" />
              presse@hypee.africa
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Presse;
