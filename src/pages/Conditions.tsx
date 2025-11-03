import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Conditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Conditions d'utilisation</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Dernière mise à jour : 24 juillet 2024
          </p>
          <p>
            En accédant au site Web de Hypee, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et convenez que vous êtes responsable du respect de toutes les lois locales applicables.
          </p>
          <h2 className="text-2xl font-bold mt-8">Utilisation de la licence</h2>
          <p>
            La permission est accordée de télécharger temporairement une copie du matériel (information ou logiciel) sur le site Web de Hypee pour une visualisation transitoire personnelle et non commerciale uniquement.
          </p>
          <h2 className="text-2xl font-bold mt-8">Clause de non-responsabilité</h2>
          <p>
            Le matériel sur le site web de Hypee est fourni "tel quel". Hypee ne donne aucune garantie, expresse ou implicite, et décline par la présente toutes les autres garanties.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conditions;