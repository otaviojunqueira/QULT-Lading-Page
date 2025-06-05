import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface CaseProps {
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}

const SuccessCases: React.FC = () => {
  const cases: CaseProps[] = [
    {
      title: "Município de Quatis/RJ",
      description: "Aplicação dos recursos da Lei Aldir Blanc.",
      value: "R$ 145 mil",
      imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Instituto Toré",
      description: "Projeto patrocinado pela Volkswagen.",
      value: "R$ 2 milhões",
      imageUrl: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Circuito 191",
      description: "Evento com 7 mil participantes.",
      value: "R$ 800 mil captados",
      imageUrl: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length);
  };

  return (
    <section id="cases" className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-800">
          Cases de Sucesso
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Conheça alguns dos nossos projetos de destaque e os resultados alcançados.
        </p>

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Mobile view (slider) */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-[28rem] bg-neutral-100">
                <img 
                  src={cases[activeIndex].imageUrl} 
                  alt={cases[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 inline-block px-3 py-1 bg-secondary-600 text-white text-sm font-medium rounded">
                    {cases[activeIndex].value}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{cases[activeIndex].title}</h3>
                  <p className="text-white/80 mb-4">{cases[activeIndex].description}</p>
                  <a href="#" className="inline-flex items-center text-secondary-400 hover:text-secondary-300">
                    Veja mais <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-between mt-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? 'bg-primary-800' : 'bg-neutral-300'
                    }`}
                    aria-label={`Ir para o caso ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
                aria-label="Próximo caso"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Desktop view (grid) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {cases.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md group">
                <div className="relative h-64">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="mb-3 inline-block px-3 py-1 bg-secondary-600 text-white text-sm font-medium rounded">
                    {item.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 mb-4">{item.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-800 hover:text-primary-700 font-medium"
                  >
                    Veja mais <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;