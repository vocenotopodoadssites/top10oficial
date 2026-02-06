
import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.imgur.com/o8kR38g.png" 
            alt="Desentupidora Top 10 Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600">
            <Clock className="w-4 h-4 text-red-600" />
            <span>Atendimento 24h - Campinas e Região</span>
          </div>
          <a 
            href="https://wa.me/5519996665646" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold transition-colors text-sm sm:text-base shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
