import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-100">
      <Quote className="h-8 w-8 text-qult-blue mb-4" />
      <p className="italic text-neutral-700 mb-4">{quote}</p>
      <div className="mt-4">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "A QULT foi fundamental para a execução dos recursos da Lei Aldir Blanc em nosso município.",
      author: "Leandro Sant'anna",
      role: "Secretário de Cultura de Quatis/RJ"
    },
    {
      quote: "Destacada competência na área cultural, com serviços especializados de alto nível.",
      author: "Thiago Granja",
      role: "Fundação Casa da Cultura de Resende"
    },
    {
      quote: "Resultados extraordinários na captação de recursos e produção de eventos culturais.",
      author: "Maria Silva",
      role: "Coordenadora Cultural de Itaocara"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-800">
          Depoimentos
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          O que nossos clientes e parceiros dizem sobre nosso trabalho.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Parceiros e Clientes</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-32 h-16 flex items-center justify-center">
              <span className="text-neutral-500 font-medium text-sm">Prefeitura de Carmo</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-32 h-16 flex items-center justify-center">
              <span className="text-neutral-500 font-medium text-sm">Prefeitura de Itaocara</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-32 h-16 flex items-center justify-center">
              <span className="text-neutral-500 font-medium text-sm">Prefeitura de Teresópolis</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-32 h-16 flex items-center justify-center">
              <span className="text-neutral-500 font-medium text-sm">Instituto Toré</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;