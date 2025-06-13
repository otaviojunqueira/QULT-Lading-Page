import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  category: string;
  results: string[];
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Festival Cultural de Quatis",
    description: "Desenvolvimento e execução do maior festival cultural da região, integrando música, arte e gastronomia local.",
    category: "Gestão Cultural",
    results: [
      "15.000+ participantes",
      "30+ artistas locais",
      "R$ 200mil em impacto econômico"
    ],
    imageUrl: "/cases/festival-quatis.png"
  },
  {
    title: "Programa Cultura nas Escolas",
    description: "Implementação de programa educacional que integra atividades culturais ao currículo escolar.",
    category: "Educação Cultural",
    results: [
      "50+ escolas atendidas",
      "10.000+ alunos impactados",
      "8 oficinas culturais"
    ],
    imageUrl: "/cases/toré.png"
  },
  {
    title: "Restauração Centro Histórico",
    description: "Projeto de captação de recursos e gestão para restauração do patrimônio histórico municipal.",
    category: "Patrimônio Cultural",
    results: [
      "R$ 1.2M captados",
      "5 prédios restaurados",
      "Aumento de 60% no turismo"
    ],
    imageUrl: "/cases/circuito.png"
  }
];

const Cases: React.FC = () => {
  return (
    <section className="relative bg-hero py-24 text-white overflow-hidden" id="cases">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">Boas</span>{' '}
            Experiências
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformamos em realidade, gerando impacto 
            cultural e social em diferentes comunidades.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index}
              className="group bg-white/[0.03] backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/[0.05] transition-all duration-300"
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
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-qult-2 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {caseStudy.description}
                </p>

                {/* Results */}
                <div className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-qult-1 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0">
                <a 
                  href="#contato" 
                  className="inline-flex items-center text-sm text-white/80 hover:text-white group/link transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Quer transformar sua ideia em uma boa experiência também?
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5524998165187&text&type=phone_number&app_absent=0" 
            className="btn btn-primary inline-flex items-center group"
          >
            <span>Vamos conversar</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cases;