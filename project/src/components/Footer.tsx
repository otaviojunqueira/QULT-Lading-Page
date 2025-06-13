import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <img src="/qult-logo.png" alt="QULT Logo" className="h-12 w-auto" onClick={() => window.location.href = '/'}/>
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
                <Phone className="h-5 w-5 mr-3 text-qult-pink shrink-0 mt-0.5" />
                <span>(24) 99816-5187</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-qult-blue shrink-0 mt-0.5" />
                <span>contato@qult.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-qult-green shrink-0 mt-0.5" />
                <span>Rua José Maria da Cruz, 55/202, Barra Mansa-RJ</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 hover:text-qult-pink transition-colors">Siga-nos</h3>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/qult.culturas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/qult-projetos-e-produções-culturais/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
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