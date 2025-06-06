import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
        : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between relative">
        <a href="/" className="flex items-center space-x-2 group">
          <img 
            src="/qult-logo.png" 
            alt="QULT Logo" 
            className={`h-12 w-auto transition-all duration-300 ${
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            } group-hover:scale-105`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className={`text-sm font-medium transition-all duration-300 nav-link ${
              isScrolled 
              ? 'text-gray-700 hover:text-qult-pink' 
              : 'text-white hover:text-white/80'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className={`text-sm font-medium transition-all duration-300 nav-link ${
              isScrolled 
              ? 'text-gray-700 hover:text-qult-pink' 
              : 'text-white hover:text-white/80'
            }`}
          >
            Serviços
          </a>
          <a 
            href="#cases" 
            className={`text-sm font-medium transition-all duration-300 nav-link ${
              isScrolled 
              ? 'text-gray-700 hover:text-qult-pink' 
              : 'text-white hover:text-white/80'
            }`}
          >
            Boas Experiências
          </a>
          <a 
            href="#diferenciais" 
            className={`text-sm font-medium transition-all duration-300 nav-link ${
              isScrolled 
              ? 'text-gray-700 hover:text-qult-pink' 
              : 'text-white hover:text-white/80'
            }`}
          >
            Diferenciais
          </a>
          <a 
            href="#contato" 
            className="btn btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">Fale Conosco</span>
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-20"></div>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden relative z-10 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm px-4 py-4 shadow-md relative">
          <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5"></div>
          <div className="flex flex-col space-y-4 relative z-10">
            <a 
              href="#sobre" 
              className="text-sm font-medium text-gray-700 hover:text-qult-pink transition-all duration-300 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-sm font-medium text-gray-700 hover:text-qult-pink transition-all duration-300 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#cases" 
              className="text-sm font-medium text-gray-700 hover:text-qult-pink transition-all duration-300 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Boas Experiências
            </a>
            <a 
              href="#depoimentos" 
              className="text-sm font-medium text-gray-700 hover:text-qult-pink transition-all duration-300 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contato" 
              className="btn btn-primary w-full text-center relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Fale Conosco</span>
              <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-20"></div>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;