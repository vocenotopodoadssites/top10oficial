
import React from 'react';
import { MapPin, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5519996665646";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://i.imgur.com/o8kR38g.png" 
                  alt="Desentupidora Top 10" 
                  className="h-14 w-auto brightness-0 invert hover:scale-105 transition-transform" 
                />
              </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Referência em desentupimentos rápidos em Campinas e Região. Atendimento humanizado e focado na solução definitiva com garantia total por escrito.
            </p>
            <div className="flex gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Contact Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Contato
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <div className="font-bold text-white">(19) 99666-5646</div>
                  <div className="text-xs">Chamar no WhatsApp</div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <div>contato@desentupidoratop10.com.br</div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <div>Atendimento exclusivo em:<br />Campinas e Região Metropolitana</div>
              </li>
            </ul>
          </div>
          
          {/* Areas Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Áreas Atendidas
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-slate-400 text-sm">
              <li>• Campinas</li>
              <li>• Paulínia</li>
              <li>• Valinhos</li>
              <li>• Vinhedo</li>
              <li>• Sumaré</li>
              <li>• Hortolândia</li>
              <li>• Indaiatuba</li>
              <li>• Americana</li>
            </ul>
          </div>
          
          {/* Payment Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Pagamento
            </h3>
            <p className="text-slate-400 text-sm mb-6">Facilitamos para você com diversas formas de pagamento.</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">PIX</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">CARTÃO CRÉDITO</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">DÉBITO</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">BOLETO</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Desentupidora Top 10 - Atendendo Campinas e Região.</p>
          <div className="flex gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Política de Privacidade</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
