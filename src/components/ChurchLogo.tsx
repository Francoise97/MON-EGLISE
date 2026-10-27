import React from 'react';

interface ChurchLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'gold';
}

export const ChurchLogo: React.FC<ChurchLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  variant = 'light'
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 shadow-sm p-1.5"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Outer circle / Globe lines */}
          <circle cx="50" cy="50" r="44" stroke="#FEF3C7" strokeWidth="2.5" strokeOpacity="0.8" />
          <ellipse cx="50" cy="50" rx="44" ry="18" stroke="#FEF3C7" strokeWidth="1.2" strokeOpacity="0.5" />
          <line x1="50" y1="6" x2="50" y2="94" stroke="#FEF3C7" strokeWidth="1.2" strokeOpacity="0.5" />
          
          {/* Flame of Pentecost (Spirit) */}
          <path
            d="M50 14C50 14 58 25 58 34C58 40 54 44 50 44C46 44 42 40 42 34C42 25 50 14 50 14Z"
            fill="#FEF08A"
          />
          <path
            d="M50 22C50 22 54 29 54 34C54 38 52 40 50 40C48 40 46 38 46 34C46 29 50 22 50 22Z"
            fill="#F59E0B"
          />

          {/* Dove of the Holy Spirit descending */}
          <path
            d="M50 36C45 31 32 30 26 36C33 38 42 43 46 48C43 49 39 49 35 48C39 52 46 54 50 56C54 54 61 52 65 48C61 49 57 49 54 48C58 43 67 38 74 36C68 30 55 31 50 36Z"
            fill="#FFFFFF"
          />

          {/* Open Bible at the base */}
          <path
            d="M22 66C32 63 43 64 50 69C57 64 68 63 78 66V82C68 79 57 80 50 85C43 80 32 79 22 82V66Z"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="1.5"
          />
          {/* Center spine */}
          <line x1="50" y1="69" x2="50" y2="85" stroke="#78350F" strokeWidth="2" />

          {/* Cross subtle emblem behind */}
          <path
            d="M48 48H52V64H48V48Z"
            fill="#B45309"
            opacity="0.9"
          />
          <path
            d="M44 52H56V55H44V52Z"
            fill="#B45309"
            opacity="0.9"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-base font-bold tracking-tight font-serif whitespace-nowrap ${variant === 'dark' ? 'text-white' : 'text-stone-900'}`}>
            Assemblées de Dieu du Togo
          </span>
          <span className={`text-[10px] uppercase tracking-wider font-semibold ${variant === 'dark' ? 'text-amber-200/90' : 'text-amber-800'}`}>
            Adamavo 2 · Temple de la Résurrection
          </span>
        </div>
      )}
    </div>
  );
};
