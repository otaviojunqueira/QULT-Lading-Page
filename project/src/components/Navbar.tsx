import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-primary-800/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/qult-logo.png" 
            alt="QULT Logo" 
            className={`h-12 w-auto ${isScrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className={`text-sm font-medium transition-colors ${
              isScrolled 
              ? 'text-neutral-700 hover:text-primary-800' 
              : 'text-white hover:text-secondary-400'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className={`text-sm font-medium transition-colors ${
              isScrolled 
              ? 'text-neutral-700 hover:text-primary-800' 
              : 'text-white hover:text-secondary-400'
            }`}
          >
            Serviços
          </a>
          <a 
            href="#cases" 
            className={`text-sm font-medium transition-colors ${
              isScrolled 
              ? 'text-neutral-700 hover:text-primary-800' 
              : 'text-white hover:text-secondary-400'
            }`}
          >
            Cases
          </a>
          <a 
            href="#depoimentos" 
            className={`text-sm font-medium transition-colors ${
              isScrolled 
              ? 'text-neutral-700 hover:text-primary-800' 
              : 'text-white hover:text-secondary-400'
            }`}
          >
            Depoimentos
          </a>
          <a href="#contato" className="btn btn-primary">
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-primary-800' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#sobre" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#cases" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </a>
            <a 
              href="#depoimentos" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contato" 
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;