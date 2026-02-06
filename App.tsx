
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UrgencyBanner from './components/UrgencyBanner';
import Services from './components/Services';
import About from './components/About';
import Differentiators from './components/Differentiators';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <UrgencyBanner />
        <Services />
        <About />
        <Differentiators />
        <SocialProof />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
