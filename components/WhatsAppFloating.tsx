
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloating: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5519996665646" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-bounce"
      aria-label="WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-green-500"></span>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        Estamos Online! 🟢
      </div>
    </a>
  );
};

export default WhatsAppFloating;
