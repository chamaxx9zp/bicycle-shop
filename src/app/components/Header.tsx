'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHeaderSolid ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">BikeLife</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</Link>
          <Link href="#product" className="text-gray-300 hover:text-red-500 transition-colors">Product</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">Testimonials</Link>
          <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-black bg-opacity-90 shadow-md">
            <nav className="flex flex-col items-center py-4">
              <Link href="#about" className="py-2 text-gray-300 hover:text-red-500 transition-colors">About</Link>
              <Link href="#product" className="py-2 text-gray-300 hover:text-red-500 transition-colors">Product</Link>
              <Link href="#testimonials" className="py-2 text-gray-300 hover:text-red-500 transition-colors">Testimonials</Link>
              <Link href="#contact" className="py-2 text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
