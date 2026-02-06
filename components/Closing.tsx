
import React from 'react';
import { AlertTriangle, MessageCircle } from 'lucide-react';

const Closing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-red-50 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
              Não tente resolver sozinho e piore a situação!
            </h2>
            
            <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              O uso de produtos químicos corrosivos ou objetos pontiagudos pode danificar seriamente a sua tubulação, gerando um prejuízo muito maior. 
              <span className="block mt-4 font-bold text-red-600">Chame quem entende do assunto e tem o equipamento certo para resolver o problema na raiz.</span>
            </p>
            
            <a 
              href="https://wa.me/5519996665646" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-7 h-7" />
              Solicitar Orçamento Grátis
            </a>
          </div>
          
          {/* Decorative icons in background */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <AlertTriangle className="w-64 h-64 -translate-y-20 translate-x-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
