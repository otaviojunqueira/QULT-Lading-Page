import React from 'react';
import { Clock, Map, FileCheck, ArrowRight } from 'lucide-react';

interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferentialItem: React.FC<DifferentialProps> = ({ icon, title, description }) => (
  <div className="group bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-6">
    <div className="bg-gradient-qult-1 rounded-lg p-3 text-white group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-qult-2 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Experiência comprovada",
      description: "18 anos no mercado cultural com resultados concretos para clientes públicos e privados."
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Atendimento nacional",
      description: "Elaboração e execução de editais em todo o Brasil, adaptados às necessidades locais."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Transparência",
      description: "Acompanhamento técnico em todas as etapas e prestação de contas detalhada."
    }
  ];

  return (
    <section className="relative bg-hero py-24 overflow-hidden" id="diferenciais">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Nossos{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">
              Diferenciais
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça os pilares que fazem da QULT a escolha certa para seus projetos culturais.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="space-y-6">
          {differentials.map((differential, index) => (
            <DifferentialItem
              key={index}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block gradient-border rounded-xl p-8 bg-white/[0.03] backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Pronto para{' '}
                <span className="bg-gradient-qult-1 bg-clip-text text-transparent">
                  transformar sua ideia
                </span>{' '}
                em realidade?
              </h3>
              <p className="text-black-300 mb-6">
                Conte com a QULT para impulsionar seus projetos culturais e maximizar seus resultados.
              </p>
              <a 
                href="#contato" 
                className="btn btn-primary inline-flex items-center group"
              >
                <span>Entre em contato</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;