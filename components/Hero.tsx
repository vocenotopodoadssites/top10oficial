
import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-red-50 text-red-600 font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
            🚨 Emergência? Atendemos Campinas e Região
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Desentupidora Top 10: <br />
            <span className="text-red-600">Solução Rápida e Limpa 24h</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Atendimento imediato para residências, condomínios e empresas em <span className="font-bold text-slate-900">Campinas e toda a região</span>. Orçamento gratuito e garantia total do serviço.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <a 
              href="https://wa.me/5519996665646" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp agora
            </a>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <CheckCircle className="w-5 h-5 text-red-600" />
              Visita Gratuita
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Residencial
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Comercial
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Industrial
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://i.imgur.com/o8kR38g.png" 
              alt="Técnico Desentupidora Top 10" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
              <p className="font-bold text-lg">Especialistas prontos em Campinas!</p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-50 rounded-full -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
