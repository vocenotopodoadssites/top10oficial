
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Silva',
    text: 'Atendimento nota 10! Chegaram em menos de 30 minutos e resolveram o problema do ralo do banheiro sem sujeira.',
    role: 'Condomínio Spazio',
  },
  {
    name: 'Maria Helena',
    text: 'Precisei de ajuda no domingo à noite e eles foram os únicos que atenderam prontamente. Super educados e profissionais.',
    role: 'Residência Particular',
  },
  {
    name: 'José Oliveira',
    text: 'O preço foi o melhor da região e o serviço ficou impecável. Recomendo fortemente para quem busca seriedade.',
    role: 'Restaurante Sabor & Cia',
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Mais de <br /><span className="text-red-600">5.000</span> atendimentos realizados</h2>
            <p className="text-lg text-slate-600 mb-8">Nossa reputação é construída a cada visita, garantindo a satisfação total de quem confia no nosso trabalho.</p>
            <div className="flex items-center justify-center lg:justify-start gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
              <span className="ml-2 font-bold text-slate-900">4.9/5 no Google</span>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl relative border border-gray-100 shadow-sm">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-red-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-4">"{t.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
