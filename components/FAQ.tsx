
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Vocês cobram a visita técnica?',
    r: 'Não! A Desentupidora Top 10 realiza a visita e o orçamento sem compromisso. Você só paga se aprovar o serviço e o valor.'
  },
  {
    q: 'Quanto tempo demora para a equipe chegar?',
    r: 'Temos equipes estratégicas espalhadas por toda a região. O tempo médio de chegada é de 30 a 45 minutos após a confirmação do chamado.'
  },
  {
    q: 'O serviço tem garantia?',
    r: 'Sim. Todos os nossos serviços acompanham certificado de garantia por escrito, garantindo a sua segurança e a qualidade do que foi executado.'
  },
  {
    q: 'Quais as formas de pagamento?',
    r: 'Facilitamos o pagamento para você. Aceitamos Pix, cartões de crédito (parcelamos em até 12 vezes), débito e dinheiro.'
  },
  {
    q: 'Vocês atendem de madrugada?',
    r: 'Com certeza. Nosso plantão funciona 24 horas por dia, 7 dias por semana, inclusive em domingos e feriados. Emergência não tem hora, e nós também não.'
  }
];

const FAQItem: React.FC<{ q: string; r: string }> = ({ q, r }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left font-bold text-slate-800 hover:text-red-600 transition-colors"
      >
        <span>{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed animate-fadeIn">
          {r}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">Tire Suas Dúvidas</h2>
            <p className="text-slate-600">Confira as perguntas mais frequentes dos nossos clientes.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} r={f.r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
