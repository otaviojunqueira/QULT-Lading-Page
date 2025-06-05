import React from 'react';
import { FileText, DollarSign, Film, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card group hover:border-primary-800 hover:border">
      <div className="w-12 h-12 mb-4 text-primary-800 group-hover:text-secondary-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-full h-full" />,
      title: "Consultoria em Políticas Públicas",
      description: "Elaboração de editais, planos de ação e comissões avaliadoras para municípios."
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      title: "Captação de Recursos",
      description: "Formatação de projetos em leis de incentivo e editais (ex.: R$ 800 mil captados para o Circuito 191)."
    },
    {
      icon: <Film className="w-full h-full" />,
      title: "Produção Cultural",
      description: "Eventos de grande porte e oficinas socioculturais (ex.: 7 mil pessoas em 3 dias)."
    },
    {
      icon: <Search className="w-full h-full" />,
      title: "Pesquisas e Diagnósticos",
      description: "Mapeamento de territórios criativos e indicadores culturais."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-800">
          Nossos Serviços
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Oferecemos soluções completas para gestores públicos, agentes culturais e patrocinadores.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;