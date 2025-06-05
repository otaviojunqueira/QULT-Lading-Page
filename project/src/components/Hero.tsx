import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen hero-pattern text-white pt-24 flex flex-col justify-center">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Transforme ideias em projetos culturais de impacto
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Consultoria especializada em políticas públicas, captação de recursos e produção cultural desde 2007.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a 
            href="#contato" 
            className="btn px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-md transition-all duration-300 text-base"
          >
            Fale Conosco
          </a>
          
          <a 
            href="#servicos" 
            className="btn px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold rounded-md transition-all duration-300 text-base"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown size={32} className="text-white" />
        </a>
      </div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-primary-900/50"></div>
    </section>
  );
};

export default Hero;