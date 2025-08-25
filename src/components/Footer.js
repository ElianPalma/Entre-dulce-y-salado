import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import qr from '../Imagenes/qr.jpeg';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a 
            href="https://www.instagram.com/dulceysalado1717?igsh=cjE2a2ExYTB4MDd0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="w-8 h-8" />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook className="w-8 h-8" />
          </motion.a>
          <motion.a 
            href="https://api.whatsapp.com/send?phone=5804166148320" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="w-8 h-8" />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-400 text-lg mb-4">
           <a href='https://www.jotform.com/app/252341284413652'> ¡Escanea el código QR para descargar nuestra app!</a>
          </p>
          <a href='https://www.jotform.com/app/252341284413652'> <img 
            src= {qr} 
            alt="Código QR de la App" 
            className="w-32 h-32 mx-auto rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300"
          /></a>
        </motion.div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Entre Dulce y Salado. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;