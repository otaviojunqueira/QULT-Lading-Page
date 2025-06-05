import React from 'react';
import { Clock, Map, FileCheck } from 'lucide-react';

interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferentialItem: React.FC<DifferentialProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-primary-800/10 flex items-center justify-center shrink-0">
        <div className="text-primary-800">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

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
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Nossos Diferenciais
          </h2>
          
          <div className="space-y-8">
            {differentials.map((differential, index) => (
              <DifferentialItem
                key={index}
                icon={differential.icon}
                title={differential.title}
                description={differential.description}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-primary-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Pronto para transformar sua ideia em realidade?</h3>
            <p className="mb-6">
              Conte com a QULT para impulsionar seus projetos culturais e maximizar seus resultados.
            </p>
            <a 
              href="#contato" 
              className="inline-block px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-md transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;