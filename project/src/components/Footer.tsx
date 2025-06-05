import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-secondary-500" />
              <span className="font-montserrat font-bold text-xl">QULT</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Consultoria especializada em políticas públicas, captação de recursos 
              e produção cultural desde 2007.
            </p>
            <p className="text-sm text-neutral-500">
              CNPJ: 12.345.678/0001-90
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-secondary-500 shrink-0 mt-0.5" />
                <span>(24) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-secondary-500 shrink-0 mt-0.5" />
                <span>contato@qult.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary-500 shrink-0 mt-0.5" />
                <span>Rua José Maria da Cruz, 55/202, Barra Mansa-RJ</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Siga-nos</h3>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 bg-neutral-800 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-secondary-500"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-secondary-600 hover:bg-secondary-700 rounded-r-md text-white font-medium transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-neutral-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© 2025 QULT - Tecnologias Culturais. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-secondary-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-secondary-500 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;