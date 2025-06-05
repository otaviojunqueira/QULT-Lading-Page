import React from 'react';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  Briefcase,
  BookOpen,
  Building2
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award size={32} />,
      value: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: <Users size={32} />,
      value: '500+',
      label: 'Clientes Atendidos'
    },
    {
      icon: <Target size={32} />,
      value: '90%',
      label: 'Taxa de Aprovação'
    },
    {
      icon: <TrendingUp size={32} />,
      value: 'R$ 2M+',
      label: 'Em Captações'
    }
  ];

  const features = [
    {
      icon: <Briefcase size={32} />,
      title: 'Consultoria Especializada',
      description: 'Orientação profissional em todas as etapas do seu projeto cultural.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Capacitação Contínua',
      description: 'Treinamentos e workshops para gestores e produtores culturais.'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Gestão de Editais',
      description: 'Acompanhamento completo de editais culturais e prestação de contas.'
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura de pontos */}
        <div className="absolute inset-0 bg-texture-dots bg-dots-md opacity-5"></div>
        
        {/* Gradientes de fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-qult-1 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-qult-2 opacity-60"></div>
        
        {/* Efeito de ruído */}
        <div className="absolute inset-0 bg-texture-noise opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Sobre a{' '}
            <span className="bg-gradient-qult-1 bg-clip-text text-transparent">QULT</span>
          </h2>
          <p className="section-subtitle">
            Desde 2007, somos{' '}
            <span className="bg-gradient-qult-2 bg-clip-text text-transparent font-medium">
              referência em soluções
            </span>{' '}
            para a cultura, com foco em{' '}
            <span className="bg-gradient-qult-3 bg-clip-text text-transparent font-medium">
              resultados e excelência
            </span>{' '}
            técnica.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box hover-lift group">
              <div className="text-qult-blue group-hover:text-qult-pink transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="bg-gradient-qult-1 bg-clip-text text-transparent stat-number">
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-qult-blue/5 to-qult-teal/5 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div className="max-w-3xl mx-auto relative">
            <p className="text-lg leading-relaxed mb-6">
              A QULT é uma empresa referência em soluções para a cultura, com sede em Barra Mansa-RJ. 
              Atuamos na elaboração de projetos, gestão de editais (como{' '}
              <span className="bg-gradient-qult-1 bg-clip-text text-transparent font-medium">
                Lei Paulo Gustavo
              </span>{' '}
              e{' '}
              <span className="bg-gradient-qult-2 bg-clip-text text-transparent font-medium">
                PNAB
              </span>
              ), captação de recursos e produção de eventos.
            </p>
            <p className="text-lg leading-relaxed">
              Nossa expertise abrange desde a implementação de sistemas municipais de cultura até 
              a captação de recursos e gestão de projetos culturais, sempre com foco em{' '}
              <span className="bg-gradient-qult-3 bg-clip-text text-transparent font-medium">
                resultados mensuráveis e impacto social
              </span>.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover-lift group">
              <div className="text-qult-blue group-hover:text-qult-pink transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-qult-1 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-[--text-secondary]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block gradient-border rounded-xl p-8 bg-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4">
                Pronto para{' '}
                <span className="bg-gradient-qult-1 bg-clip-text text-transparent">
                  transformar sua ideia
                </span>{' '}
                em realidade?
              </h3>
              <p className="text-[--text-secondary] mb-6">
                Conte com a QULT para impulsionar seus projetos culturais.
              </p>
              <a 
                href="#contato" 
                className="btn btn-primary relative overflow-hidden group"
              >
                <span className="relative z-10">Entre em contato</span>
                <div className="absolute inset-0 bg-texture-dots bg-dots-sm opacity-20"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;