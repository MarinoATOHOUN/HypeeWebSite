import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Dernière mise à jour : 24 juillet 2024
          </p>
          <p>
            Hypee attache une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit les données que nous collectons, comment nous les utilisons et les partageons.
          </p>
          <h2 className="text-2xl font-bold mt-8">Collecte de l'information</h2>
          <p>
            Nous collectons des informations lorsque vous vous inscrivez sur notre site, vous abonnez à notre newsletter ou remplissez un formulaire. Les informations collectées incluent votre nom, votre adresse e-mail et votre numéro de téléphone.
          </p>
          <h2 className="text-2xl font-bold mt-8">Utilisation des informations</h2>
          <p>
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
            <li>Fournir un contenu publicitaire personnalisé</li>
            <li>Améliorer notre site Web</li>
            <li>Améliorer le service client et vos besoins de prise en charge</li>
            <li>Vous contacter par e-mail</li>
            <li>Administrer un concours, une promotion, ou une enquête</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8">Divulgation à des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite;