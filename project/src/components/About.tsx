import React from 'react';
import { Calendar, Award, Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Sobre a <span className="text-secondary-600">QULT</span>
          </h2>
          
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-lg mb-8 leading-relaxed">
              A QULT é uma empresa referência em soluções para a cultura, com sede em Barra Mansa-RJ. 
              Atuamos na elaboração de projetos, gestão de editais (como Lei Paulo Gustavo e PNAB), 
              captação de recursos e produção de eventos, garantindo resultados como R$ 2 milhões em 
              patrocínios e R$ 600 mil em recursos aplicados para nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm border border-neutral-100">
                <Calendar className="w-10 h-10 text-primary-800 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Desde 2007</h3>
                <p className="text-sm text-neutral-600">
                  Mais de 18 anos de experiência no setor cultural
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm border border-neutral-100">
                <Award className="w-10 h-10 text-primary-800 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Resultados</h3>
                <p className="text-sm text-neutral-600">
                  R$ 2 milhões captados em patrocínios para clientes
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm border border-neutral-100">
                <Check className="w-10 h-10 text-primary-800 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Confiança</h3>
                <p className="text-sm text-neutral-600">
                  CNPJ ativo e projetos em todo o território nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;