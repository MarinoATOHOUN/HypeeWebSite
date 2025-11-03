import Navigation from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { NewsMarquee } from "@/components/NewsMarquee";
import { Vision } from "@/components/Vision";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CEO } from "@/components/CEO";
import { Impact } from "@/components/Impact";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";
import { NetworkBackground } from "@/components/NetworkBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NetworkBackground />
      <Navigation />
      <NewsMarquee />
      <main>
        <Hero />
        <Vision />
        <Products />
        <Testimonials />
        <Partners />
        <CEO />
        <Impact />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
