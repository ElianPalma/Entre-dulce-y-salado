import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ChefHat } from 'lucide-react';
import logo from '../Imagenes/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-2xl z-50 px-8 transition-all duration-300 ${
        isScrolled ? 'py-2 md:py-3 border-b border-amber-100' : 'py-4 md:py-5 border-b-2 border-amber-200'
      }`}
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-center items-center max-w-6xl relative">
        {/* Ícono de Chef */}
        <motion.div 
          className="absolute left-0 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className={`flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg transition-all duration-300 ${
              isScrolled ? 'w-8 h-8 md:w-10 md:h-10 p-1' : 'w-10 h-10 md:w-12 md:h-12 p-2 md:p-3'
            }`}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChefHat className={`text-white transition-all duration-300 ${isScrolled ? 'w-4 h-4 md:w-6 md:h-6' : 'w-6 h-6 md:w-8 md:h-8'}`} />
          </motion.div>
        </motion.div>

        {/* Logo */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={logo} 
            className={`transition-all duration-300 ${isScrolled ? 'w-[60px] md:w-[80px]' : 'w-[80px] md:w-[110px]'}`} 
            alt="Logo de la marca" 
          />
        </motion.div>

        {/* Botón de WhatsApp */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=5804166148320" 
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute right-0 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 ${
            isScrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'
          }`}
          whileHover={{ boxShadow: "0 10px 20px rgba(34, 197, 94, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <FaWhatsapp className={`transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`} />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;