import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        <div className="space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-bold">Éditeur du site</h2>
          <p>
            Hypee Inc.
            <br />
            Adresse : 123 Rue de l'Innovation, 75001 Paris, France
            <br />
            E-mail : contact@hypee.com
          </p>
          <h2 className="text-2xl font-bold mt-8">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789.
          </p>
          <h2 className="text-2xl font-bold mt-8">Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;