import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import useSmoothScroll from "@/hooks/useSmoothScroll";

import Cursor from "@/components/site/Cursor";
import Preloader from "@/components/site/Preloader";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Storia from "@/components/site/Storia";
import MenuSection from "@/components/site/MenuSection";
import Eventi from "@/components/site/Eventi";
import Gallery from "@/components/site/Gallery";
import Contatti from "@/components/site/Contatti";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

function App() {
  useSmoothScroll();
  return (
    <LanguageProvider>
      <div className="App grain relative min-h-screen bg-crema">
        <Preloader />
        <Cursor />
        <Nav />
        <WhatsAppButton />
        <main>
          <Hero />
          <Marquee />
          <Storia />
          <MenuSection />
          <Eventi />
          <Gallery />
          <Contatti />
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </LanguageProvider>
  );
}

export default App;
