
import React from 'react';
import { Droplets, Pipette, Trash2, Waves, Hammer, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Desentupimento de Pias',
    desc: 'Remoção de gordura e detritos que obstruem a passagem da água.',
    icon: Droplets,
  },
  {
    title: 'Ralos e Canos',
    desc: 'Limpeza profunda em ralos de banheiros, quintais e áreas de serviço.',
    icon: Waves,
  },
  {
    title: 'Vasos Sanitários',
    desc: 'Desentupimento higiênico sem danificar a porcelana ou tubulação.',
    icon: Pipette,
  },
  {
    title: 'Rede de Esgoto',
    desc: 'Manutenção corretiva e preventiva em tubulações principais.',
    icon: Trash2,
  },
  {
    title: 'Limpeza de Fossa',
    desc: 'Esgotamento e limpeza técnica com equipamentos de sucção modernos.',
    icon: Hammer,
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">O Que Fazemos Por Você</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos soluções completas para qualquer tipo de obstrução, utilizando tecnologia de ponta para garantir eficiência e limpeza.</p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <s.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
            <p className="text-slate-600 mb-6">{s.desc}</p>
            <a 
              href="https://wa.me/5519996665646" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Saber mais <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
        
        {/* Extra CTA Card */}
        <div className="bg-red-600 p-8 rounded-2xl shadow-xl flex flex-col justify-center text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Precisa de outro serviço?</h3>
          <p className="mb-8 opacity-90">Fazemos orçamentos personalizados para qualquer problema hidráulico.</p>
          <a 
            href="https://wa.me/5519996665646" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Falar com Técnico
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
