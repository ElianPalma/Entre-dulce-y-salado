import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa'; // ¡Aquí estaba el detalle!

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <DeliverySection />
      </main>
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=5804166148320" // ¡Cambia esto por tu número de WhatsApp!
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center text-3xl"
        whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default App;