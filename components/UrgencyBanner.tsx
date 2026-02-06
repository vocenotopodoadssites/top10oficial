
import React from 'react';
import { FastForward } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-4 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <FastForward className="w-8 h-8 animate-pulse hidden md:block" />
        <p className="text-lg md:text-2xl font-black uppercase tracking-tighter">
          ⚡ Chegamos em até 30 minutos no local ⚡
        </p>
        <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold animate-bounce hidden md:block">
          TEMPO RECORDE
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
