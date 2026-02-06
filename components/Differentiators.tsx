
import React from 'react';
import { ShieldCheck, Zap, Headphones, DollarSign } from 'lucide-react';

const diffs = [
  {
    title: 'Atendimento 24 horas',
    desc: 'Estamos prontos para atender você a qualquer hora do dia ou da noite.',
    icon: Zap,
  },
  {
    title: 'Equipe Especializada',
    desc: 'Técnicos treinados e uniformizados para sua total segurança.',
    icon: ShieldCheck,
  },
  {
    title: 'Equipamentos Modernos',
    desc: 'Tecnologia de vídeo inspeção e hidrojateamento de alta pressão.',
    icon: Headphones,
  },
  {
    title: 'Preço Justo',
    desc: 'Orçamento transparente sem taxas escondidas. Cobrimos ofertas!',
    icon: DollarSign,
  }
];

const Differentiators: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Por Que Escolher a <span className="text-red-500">Top 10?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Trabalhamos duro para sermos a melhor opção em custo-benefício e qualidade de serviço.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {diffs.map((d, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <d.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{d.title}</h3>
              <p className="text-slate-400">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
