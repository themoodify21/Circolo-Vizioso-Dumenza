import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import useSmoothScroll from "@/hooks/useSmoothScroll";

import Cursor from "@/components/site/Cursor";
import Preloader from "@/components/site/Preloader";
import Nav from "@/components/site/Nav";
import Marquee from "@/components/site/Marquee";
import Storia from "@/components/site/Storia";
import MenuSection from "@/components/site/MenuSection";
import Eventi from "@/components/site/Eventi";
import Contatti from "@/components/site/Contatti";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import StoryPage from "@/components/site/StoryPage";
import EventsPage from "@/components/site/EventsPage";

function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main className="pt-20 sm:pt-24">
        <Marquee />
        <Storia />
        <Eventi />
        <MenuSection />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useSmoothScroll();
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App grain relative min-h-screen bg-crema">
          <Cursor />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storia" element={<StoryPage />} />
            <Route path="/eventi" element={<EventsPage />} />
          </Routes>
          <Toaster position="top-center" />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
