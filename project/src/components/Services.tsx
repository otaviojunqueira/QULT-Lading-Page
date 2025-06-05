import React from 'react';
import { 
  FileText, 
  DollarSign, 
  Search, 
  Building2, 
  GraduationCap,
  Quote,
  ClipboardCheck
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
  law?: string;
  details?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlight, law, details }) => {
  return (
    <div className="card group hover:border-qult-pink hover:border transition-all relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5 group-hover:opacity-10 transition-opacity"></div>
      <div className="relative">
        <div className="w-12 h-12 mb-4 text-qult-blue group-hover:text-qult-pink transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 bg-gradient-qult-1 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        {details && (
          <ul className="text-sm text-neutral-600 mb-4 space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-qult-teal">•</span>
                {detail}
              </li>
            ))}
          </ul>
        )}
        {highlight && (
          <div className="text-sm bg-qult-blue/5 backdrop-blur-sm text-qult-blue p-3 rounded-md mb-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5"></div>
            <span className="relative">{highlight}</span>
          </div>
        )}
        {law && (
          <span className="inline-block bg-gradient-qult-2 text-white text-xs font-medium px-3 py-1 rounded shadow-sm">
            {law}
          </span>
        )}
      </div>
    </div>
  );
};

const Testimonial: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-neutral-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5 group-hover:opacity-10 transition-opacity"></div>
      <div className="relative">
        <Quote className="h-6 w-6 text-qult-pink mb-3" />
        <p className="italic text-neutral-700 mb-3 text-sm">{quote}</p>
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText size={32} />,
      title: "Elaboração de Projetos",
      description: "Desenvolvimento completo de projetos culturais para editais e leis de incentivo.",
      details: [
        "Análise de viabilidade",
        "Planejamento orçamentário",
        "Documentação completa",
        "Cronograma detalhado"
      ],
      highlight: "Taxa de aprovação superior a 90% nos últimos 3 anos"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Captação de Recursos",
      description: "Estratégias eficientes para captação de recursos e patrocínios culturais.",
      details: [
        "Identificação de fontes",
        "Negociação com patrocinadores",
        "Gestão de contrapartidas",
        "Relatórios de resultados"
      ],
      law: "Lei Rouanet"
    },
    {
      icon: <Search size={32} />,
      title: "Análise de Editais",
      description: "Avaliação detalhada de editais culturais e orientação estratégica.",
      details: [
        "Interpretação de requisitos",
        "Avaliação de elegibilidade",
        "Recomendações técnicas",
        "Suporte na inscrição"
      ]
    },
    {
      icon: <Building2 size={32} />,
      title: "Gestão de Projetos",
      description: "Acompanhamento integral da execução de projetos culturais.",
      details: [
        "Coordenação de equipe",
        "Controle financeiro",
        "Relatórios periódicos",
        "Prestação de contas"
      ],
      law: "Lei Paulo Gustavo"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Formação Cultural",
      description: "Capacitação e treinamento para gestores e produtores culturais.",
      details: [
        "Workshops práticos",
        "Cursos especializados",
        "Mentoria individual",
        "Material didático"
      ]
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Prestação de Contas",
      description: "Suporte completo na prestação de contas de projetos culturais.",
      details: [
        "Organização documental",
        "Relatórios financeiros",
        "Comprovação de metas",
        "Suporte jurídico"
      ],
      highlight: "100% de aprovação nas prestações de contas realizadas"
    }
  ];

  const testimonials = [
    {
      quote: "A QULT foi fundamental para o sucesso do nosso projeto cultural. Profissionalismo e excelência em cada etapa.",
      author: "Maria Silva",
      role: "Diretora Cultural - Fundação CSN"
    },
    {
      quote: "Graças à consultoria da QULT, conseguimos aprovar nosso primeiro projeto na Lei Rouanet.",
      author: "João Santos",
      role: "Produtor Cultural"
    },
    {
      quote: "Equipe altamente capacitada e comprometida com resultados. Recomendo fortemente!",
      author: "Ana Oliveira",
      role: "Secretária de Cultura - Quatis"
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura de pontos */}
        <div className="absolute inset-0 bg-texture-dots bg-dots-md opacity-5"></div>
        
        {/* Gradientes de fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-qult-4 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-qult-2 opacity-60"></div>
        
        {/* Efeito de ruído */}
        <div className="absolute inset-0 bg-texture-noise opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Nossos{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Soluções completas para{' '}
            <span className="bg-gradient-qult-2 bg-clip-text text-transparent font-medium">
              projetos culturais
            </span>{' '}
            e{' '}
            <span className="bg-gradient-qult-3 bg-clip-text text-transparent font-medium">
              captação de recursos
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            O que nossos{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;