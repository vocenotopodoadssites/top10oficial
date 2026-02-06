
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://i.imgur.com/SBsrlCP.png" 
              alt="Serviço de Qualidade Top 10" 
              className="rounded-2xl shadow-lg mt-8 w-full object-cover aspect-[4/5]" 
            />
            <img 
              src="https://i.imgur.com/z7uFVFY.png" 
              alt="Equipamento Profissional Top 10" 
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" 
            />
          </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Experiência e Confiança a Serviço da <span className="text-red-600">Sua Tranquilidade</span>.
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              A Desentupidora Top 10 nasceu com a missão de oferecer um serviço diferenciado em um mercado que exige rapidez e seriedade. Atendemos com exclusividade <span className="font-bold text-slate-900">Campinas e toda a região metropolitana</span>, garantindo agilidade no deslocamento.
            </p>
            <p>
              Não entregamos apenas um cano desobstruído; entregamos um ambiente limpo e a volta da normalidade para sua casa ou empresa. Nossa equipe é treinada para atuar com the máximo de higiene, utilizando equipamentos de última geração que evitam quebra-quebra desnecessário.
            </p>
            <p className="font-semibold text-slate-900">
              Quando o problema aparece em Campinas e Região, a Top 10 resolve.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-10">
            <div>
              <div className="text-3xl font-black text-red-600">100%</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Garantia</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-600">24h</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Disponibilidade</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-600">+15</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Anos no mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
