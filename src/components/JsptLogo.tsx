import React from 'react';

interface JsptLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  withGlow?: boolean;
}

export const JsptLogo: React.FC<JsptLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  withGlow = false,
}) => {
  const sizeMap = {
    sm: { height: 34, iconSize: 28, textClass: 'text-base', subClass: 'text-[9px]' },
    md: { height: 48, iconSize: 42, textClass: 'text-xl', subClass: 'text-[11px]' },
    lg: { height: 64, iconSize: 56, textClass: 'text-2xl md:text-3xl', subClass: 'text-xs' },
    xl: { height: 88, iconSize: 76, textClass: 'text-4xl md:text-5xl', subClass: 'text-sm md:text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Wing Emblem matching JSPT official logo */}
      <div className={`relative flex-shrink-0 ${withGlow ? 'drop-shadow-[0_0_16px_rgba(56,189,248,0.5)]' : ''}`}>
        <svg
          width={currentSize.iconSize}
          height={currentSize.iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:scale-105"
        >
          <defs>
            <linearGradient id="featherGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="featherGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="featherGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="featherGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="featherGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="100%" stopColor="#65A30D" />
            </linearGradient>
            <linearGradient id="featherGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A3E635" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            <linearGradient id="featherGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="featherGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
          </defs>

          {/* Wing Feathers radiating upwards to right */}
          {/* Feather 1 (Top Cyan Main) */}
          <path
            d="M20 18 C25 2, 42 12, 42 32 C42 48, 30 52, 22 55 C16 45, 14 30, 20 18 Z"
            fill="url(#featherGrad1)"
          />
          {/* Feather 2 */}
          <path
            d="M15 28 C22 20, 36 28, 36 44 C36 54, 26 58, 19 60 C13 50, 11 40, 15 28 Z"
            fill="url(#featherGrad2)"
          />
          {/* Feather 3 */}
          <path
            d="M10 42 C16 35, 30 40, 30 55 C30 62, 22 65, 16 66 C10 58, 7 50, 10 42 Z"
            fill="url(#featherGrad3)"
          />
          {/* Feather 4 (Cyan to Green) */}
          <path
            d="M8 58 C13 52, 26 56, 26 68 C26 73, 19 75, 14 76 C9 70, 6 64, 8 58 Z"
            fill="url(#featherGrad4)"
          />
          {/* Feather 5 (Green) */}
          <path
            d="M10 70 C15 65, 26 68, 26 78 C26 82, 20 84, 16 85 C12 80, 9 75, 10 70 Z"
            fill="url(#featherGrad5)"
          />
          {/* Feather 6 (Lime-Yellow) */}
          <path
            d="M15 80 C20 76, 29 78, 29 86 C29 89, 24 91, 20 91 C17 87, 14 83, 15 80 Z"
            fill="url(#featherGrad6)"
          />
          {/* Feather 7 (Gold-Orange) */}
          <path
            d="M22 88 C26 85, 34 87, 34 92 C34 95, 29 96, 26 96 C24 93, 21 90, 22 88 Z"
            fill="url(#featherGrad7)"
          />
          {/* Feather 8 (Orange Tip) */}
          <path
            d="M30 93 C34 91, 39 92, 39 96 C39 98, 35 99, 33 99 C31 97, 29 95, 30 93 Z"
            fill="url(#featherGrad8)"
          />
        </svg>
      </div>

      {/* Typography: JESUS SAVES PRAYER TEAM */}
      <div className="flex flex-col tracking-wider">
        <span className={`font-black font-cinzel text-white leading-none tracking-[0.18em] ${currentSize.textClass}`}>
          JESUS
        </span>
        {showSubtitle && (
          <span className={`font-medium tracking-[0.25em] text-slate-300 uppercase ${currentSize.subClass} mt-1`}>
            SAVES PRAYER TEAM
          </span>
        )}
      </div>
    </div>
  );
};
