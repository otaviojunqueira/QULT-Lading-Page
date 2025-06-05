import React from 'react';
import { 
  FileText, 
  DollarSign, 
  Search, 
  Building2, 
  GraduationCap,
  Quote,
  BookOpen,
  Users,
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
    <div className="card group hover:border-primary-800 hover:border transition-all">
      <div className="w-12 h-12 mb-4 text-primary-800 group-hover:text-secondary-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      {details && (
        <ul className="text-sm text-neutral-600 mb-4 space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-secondary-600">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
      {highlight && (
        <div className="text-sm bg-primary-50 text-primary-800 p-3 rounded-md mb-3">
          {highlight}
        </div>
      )}
      {law && (
        <span className="inline-block bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded">
          {law}
        </span>
      )}
    </div>
  );
};

const Testimonial: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
      <Quote className="h-6 w-6 text-secondary-600 mb-3" />
      <p className="italic text-neutral-700 mb-3 text-sm">{quote}</p>
      <div>
        <p className="font-semibold text-sm">{author}</p>
        <p className="text-xs text-neutral-500">{role}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-full h-full" />,
      title: "Diagnóstico de Políticas Culturais",
      description: "Mapeamento detalhado da realidade cultural do município, identificando seus ativos culturais, desafios, potencialidades e demandas.",
      details: [
        "Levantamento de dados e indicadores culturais",
        "Análise da estrutura institucional e marcos legais",
        "Pesquisas participativas com agentes culturais"
      ],
      highlight: "Pesquisa CRIATIVIDADE COM POTENCIAL DE DESENVOLVIMENTO NA REGIÃO DO MÉDIO PARAÍBA para Fundação CSN",
      law: "Lei nº 14.835/2024"
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      title: "Formação em Gestão Cultural",
      description: "Capacitação técnica nas áreas de gestão cultural, produção cultural, elaboração de projetos e legislação aplicada.",
      details: [
        "Oficinas e seminários sobre cadeia produtiva da cultura",
        "Conteúdos sobre editais públicos e sistemas de fomento",
        "Formações presenciais e online para multiplicadores"
      ],
      highlight: "Capacitação de mais de 500 agentes culturais em todo território nacional"
    },
    {
      icon: <FileText className="w-full h-full" />,
      title: "Elaboração de Editais Culturais",
      description: "Redação técnica e jurídica completa de instrumentos de seleção pública, como prêmios e chamadas.",
      details: [
        "Definição de critérios objetivos de avaliação",
        "Formatação dos objetos culturais",
        "Garantia de conformidade com Lei nº 14.903/2024"
      ],
      highlight: "Elaboração de editais para Lei Paulo Gustavo em diversos municípios",
      law: "Lei nº 14.903/2024"
    },
    {
      icon: <ClipboardCheck className="w-full h-full" />,
      title: "Prestação de Contas",
      description: "Suporte técnico completo para execução e prestação de contas das leis de fomento à cultura.",
      details: [
        "Lei Paulo Gustavo e Política Nacional Aldir Blanc",
        "Acompanhamento via sistema Transferegov",
        "Orientações sobre execução e obrigações legais"
      ],
      highlight: "100% de aprovação nas prestações de contas realizadas"
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      title: "Captação de Recursos",
      description: "Assessoria na captação de recursos junto a entes federativos e programas específicos.",
      details: [
        "Identificação de editais e convênios",
        "Elaboração de propostas técnicas",
        "Acompanhamento de inscrições no Transferegov"
      ],
      highlight: "R$ 800 mil captados para o Circuito 191/RJ"
    },
    {
      icon: <Building2 className="w-full h-full" />,
      title: "Sistema Municipal de Cultura",
      description: "Implementação completa do CPF da Cultura: Conselho, Plano e Fundo Municipal.",
      details: [
        "Criação e estruturação do Conselho Municipal",
        "Elaboração participativa do Plano Municipal",
        "Regulamentação do Fundo Municipal"
      ],
      highlight: "Implementação bem-sucedida em Barra Mansa e Volta Redonda",
      law: "Lei nº 14.835/2024"
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Formação para Captação via ICMS",
      description: "Formações específicas sobre mecanismos de incentivo fiscal para desenvolvimento de projetos locais.",
      details: [
        "ProAC - Programa de Ação Cultural de São Paulo",
        "Lei nº 12.268/2006 para benefícios fiscais",
        "Estruturação de projetos para captação via ICMS"
      ],
      highlight: "Capacitação de empresários e artistas em toda região do Vale do Paraíba"
    },
    {
      icon: <BookOpen className="w-full h-full" />,
      title: "Assistência em Políticas Públicas",
      description: "Assistência técnica continuada para formulação e implementação de políticas culturais.",
      details: [
        "Atuação nos níveis municipal, estadual e federal",
        "Articulação com agentes culturais e instituições",
        "Alinhamento ao Sistema Nacional de Cultura"
      ],
      highlight: "Desenvolvimento de políticas culturais em mais de 10 municípios"
    }
  ];

  const testimonials = [
    {
      quote: "Fundamental para a execução da Lei Aldir Blanc em nosso município.",
      author: "Leandro Sant'anna",
      role: "Secretário de Cultura de Quatis/RJ"
    },
    {
      quote: "Destacada competência na área cultural, com serviços especializados de alto nível.",
      author: "Thiago Granja",
      role: "Fundação Casa da Cultura de Resende"
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-800">
          Nossos Serviços em Políticas Públicas e Gestão Cultural
        </h2>
        <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-12">
          Soluções especializadas para municípios, artistas e empresas, alinhadas aos marcos regulatórios nacionais.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlight={service.highlight}
              law={service.law}
              details={service.details}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Precisa de ajuda com editais, diagnósticos ou formação?
          </h3>
          <a 
            href="#contato" 
            className="inline-block px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-md transition-all duration-300"
          >
            Fale com nossos especialistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;