import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ¡El Sabor que Te Encanta, Directo a Tu Puerta!
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Arepas, Cachapas, Hamburguesas y Helados. ¡Una explosión de sabor en cada bocado!
        </motion.p>
        <motion.a
          href="#menu"
          className="bg-amber-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 150 }}
        >
          Ver Nuestro Menú
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;