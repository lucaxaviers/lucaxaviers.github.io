import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demos from "@/components/Demos";
import HowItWorks from "@/components/HowItWorks";
import RealProjects from "@/components/RealProjects";
import TechStack from "@/components/TechStack";
import Comparison from "@/components/Comparison";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <Demos />
        <HowItWorks />
        <RealProjects />
        <TechStack />
        <Comparison />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
