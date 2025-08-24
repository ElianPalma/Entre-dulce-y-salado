import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ChefHat } from 'lucide-react'; // Un icono para el logo, ¡porque somos elegantes!

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-2xl z-50 py-5 px-8 border-b border-amber-100"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChefHat className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            Entre Dulce y Salado
          </motion.h1>
        </motion.div>
        <motion.a
          href="https://api.whatsapp.com/send?phone=5804166148320" // ¡Cambia esto por tu número de WhatsApp!
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-7 py-3 rounded-full flex items-center gap-2 text-lg font-bold shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          whileHover={{ boxShadow: "0 10px 20px rgba(34, 197, 94, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <FaWhatsapp className="text-2xl" />
          Pedir Ahora
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;