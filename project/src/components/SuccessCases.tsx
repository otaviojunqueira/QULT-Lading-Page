import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}

const cases: CaseStudy[] = [
  {
    title: "Município de Quatis/RJ",
    description: "Aplicação dos recursos da Lei Aldir Blanc.",
    value: "R$ 145 mil",
    imageUrl: "/cases/festival-quatis.png"
  },
  {
    title: "Instituto Toré",
    description: "Projeto patrocinado pela Volkswagen.",
    value: "R$ 2 milhões",
    imageUrl: "/cases/toré.png"
  },
  {
    title: "Circuito 191",
    description: "Evento com 7 mil participantes.",
    value: "R$ 800 mil captados",
    imageUrl: "/cases/circuito.png"
  }
];

const SuccessCases: React.FC = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden" id="cases">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura de pontos */}
        <div className="absolute inset-0 bg-texture-dots bg-dots-md opacity-5"></div>
        
        {/* Gradientes de fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-qult-1 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-qult-2 opacity-10"></div>
      </div>

      <div className="container relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Boas{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">Experiências</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos de destaque e os resultados alcançados.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Case Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                    {caseStudy.value}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-qult-2 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {caseStudy.description}
                </p>

                <a 
                  href="https://www.google.com" 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-qult-pink group/link transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SuccessCases;