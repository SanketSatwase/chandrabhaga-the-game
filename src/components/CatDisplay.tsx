import React from 'react';
import { CatMood } from '../types';

// A more detailed, cuter representation of Chandrabhaga
const CatIllustration: React.FC<{ mood: CatMood }> = ({ mood }) => {
  const moodTransform = {
    [CatMood.HAPPY]: 'translate-y-[-2px] rotate-[1deg]',
    [CatMood.NEUTRAL]: 'translate-y-0 rotate-0',
    [CatMood.SAD]: 'translate-y-[2px] rotate-[-1deg]',
    [CatMood.SLEEPY]: 'translate-y-[1px] rotate-0',
  }

  const eyePaths = {
    [CatMood.HAPPY]: <><path d="M 52 70 A 10 10 0 0 1 68 70" stroke="black" strokeWidth="3" fill="none" /><path d="M 132 70 A 10 10 0 0 1 148 70" stroke="black" strokeWidth="3" fill="none" /></>,
    [CatMood.NEUTRAL]: <><circle cx="60" cy="75" r="5" fill="black" /><circle cx="140"cy="75" r="5" fill="black" /></>,
    [CatMood.SAD]: <><path d="M 55 80 Q 60 70 65 80" stroke="black" strokeWidth="3" fill="none"/><path d="M 135 80 Q 140 70 145 80" stroke="black" strokeWidth="3" fill="none"/></>,
    [CatMood.SLEEPY]: <><path d="M 50 75 H 70" stroke="black" strokeWidth="4" /><path d="M 130 75 H 150" stroke="black" strokeWidth="4" /></>
  };

  const mouthPath = {
    [CatMood.HAPPY]: <path d="M 90 105 Q 100 120 110 105" stroke="black" strokeWidth="3" fill="none"/>,
    [CatMood.NEUTRAL]: <path d="M 90 110 H 110" stroke="black" strokeWidth="3" />,
    [CatMood.SAD]: <path d="M 90 120 Q 100 105 110 120" stroke="black" strokeWidth="3" fill="none"/>,
    [CatMood.SLEEPY]: <path d="M 90 110 H 110" stroke="black" strokeWidth="3" />
  }

  return (
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 200 200" className={`w-full h-full transition-transform duration-500 ${moodTransform[mood]}`}>
        {/* Ears */}
        <path d="M 30 60 Q 50 10 80 40" fill="#a16207" />
        <path d="M 170 60 Q 150 10 120 40" fill="#a16207" />
        <path d="M 40 60 Q 55 25 75 45" fill="#facc15" />
        <path d="M 160 60 Q 145 25 125 45" fill="#facc15" />

        {/* Head */}
        <circle cx="100" cy="90" r="70" fill="#ca8a04" />
        
        {/* Tabby Markings */}
        <path d="M 100 25 C 90 45, 110 45, 100 25" stroke="#a16207" strokeWidth="5" fill="none"/>
        <path d="M 80 30 C 75 45, 90 45, 85 30" stroke="#a16207" strokeWidth="4" fill="none" transform="rotate(-10 80 30)"/>
        <path d="M 120 30 C 115 45, 130 45, 125 30" stroke="#a16207" strokeWidth="4" fill="none" transform="rotate(10 120 30)"/>

        {/* Muzzle */}
        <path d="M 70 90 C 70 125, 130 125, 130 90" fill="#fef3c7"/>
        
        {/* Eyes */}
        <circle cx="60" cy="75" r="15" fill="#65a30d" />
        <circle cx="140" cy="75" r="15" fill="#65a30d" />
        {eyePaths[mood]}

        {/* Nose */}
        <path d="M 95 95 L 105 95 L 100 102 Z" fill="#f87171" />

        {/* Mouth */}
        {mouthPath[mood]}

        {/* Whiskers */}
        <path d="M 40 100 L 70 105" stroke="black" strokeWidth="1" />
        <path d="M 40 108 L 70 110" stroke="black" strokeWidth="1" />
        <path d="M 40 116 L 70 115" stroke="black" strokeWidth="1" />
        <path d="M 160 100 L 130 105" stroke="black" strokeWidth="1" />
        <path d="M 160 108 L 130 110" stroke="black" strokeWidth="1" />
        <path d="M 160 116 L 130 115" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  );
};


interface CatDisplayProps {
  mood: CatMood;
}

const CatDisplay: React.FC<CatDisplayProps> = ({ mood }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <CatIllustration mood={mood} />
      </div>
      <h2 className="text-3xl font-bold text-amber-800 tracking-wide">Chandrabhaga</h2>
    </div>
  );
};

export default CatDisplay;