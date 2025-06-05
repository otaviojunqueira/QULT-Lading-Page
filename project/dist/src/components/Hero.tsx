import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-hero text-white pt-24 overflow-hidden">
      {/* Content */}
      <div className="container relative mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center z-10">
        {/* Main Heading */}
        <div className="max-w-4xl animate-float">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme ideias em{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">projetos</span>{' '}
            <span className="bg-gradient-qult-2 bg-clip-text text-transparent">culturais</span>{' '}
            de impacto
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Consultoria especializada em{' '}
            <span className="bg-gradient-qult-3 bg-clip-text text-transparent font-medium">
              políticas públicas
            </span>, captação de recursos 
            e produção cultural desde 2007.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-lg p-6 hover:bg-white/[0.05] transition-colors">
            <div className="bg-gradient-qult-1 bg-clip-text text-transparent text-3xl font-bold mb-2">R$ 2M+</div>
            <div className="text-gray-400 text-sm">Em patrocínios</div>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-lg p-6 hover:bg-white/[0.05] transition-colors">
            <div className="bg-gradient-qult-1 bg-clip-text text-transparent text-3xl font-bold mb-2">90+</div>
            <div className="text-gray-400 text-sm">Projetos analisados</div>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-lg p-6 hover:bg-white/[0.05] transition-colors">
            <div className="bg-gradient-qult-1 bg-clip-text text-transparent text-3xl font-bold mb-2">15+</div>
            <div className="text-gray-400 text-sm">Anos de experiência</div>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-lg p-6 hover:bg-white/[0.05] transition-colors">
            <div className="bg-gradient-qult-1 bg-clip-text text-transparent text-3xl font-bold mb-2">50+</div>
            <div className="text-gray-400 text-sm">Municípios atendidos</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a 
            href="#contato" 
            className="btn btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">Fale Conosco</span>
            <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-20"></div>
          </a>
          
          <a 
            href="#servicos" 
            className="btn btn-outline text-white border-white/20 hover:border-white/40 hover:bg-white/5 relative overflow-hidden"
          >
            <span className="relative z-10">Nossos Serviços</span>
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
        </div>

        {/* Featured Clients */}
        <div className="mt-16">
          <p className="text-sm text-gray-400 mb-4">
            <span className="bg-gradient-qult-2 bg-clip-text text-transparent">
              Clientes que confiam em nosso trabalho:
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/[0.03] backdrop-blur-sm hover:bg-qult-orange/50 transition-colors px-6 py-3 rounded-lg cursor-pointer" onClick={() => window.location.href = 'https://fundacaocsn.org.br'}>
              <span className="text-sm font-medium text-gray-300">Fundação CSN</span>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm hover:bg-qult-blue/50 transition-colors px-6 py-3 rounded-lg cursor-pointer" onClick={() => window.location.href = 'https://quatis.rj.gov.br'}>
              <span className="text-sm font-medium text-gray-300">Prefeitura de Quatis</span>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm hover:bg-qult-green/50 transition-colors px-6 py-3 rounded-lg cursor-pointer" onClick={() => window.location.href = 'https://www.itaocara.rj.gov.br'}>
              <span className="text-sm font-medium text-gray-300">Prefeitura de Itaocara</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#sobre" 
          className="p-2 rounded-full bg-white/[0.03] backdrop-blur hover:bg-white/[0.05] transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={24} className="text-white/80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;