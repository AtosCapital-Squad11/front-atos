
import React from 'react';

interface AtosCapitalLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const AtosCapitalLogo: React.FC<AtosCapitalLogoProps> = ({ 
  className = "", 
  width = 200, 
  height = 80 
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
      <svg 
        viewBox="0 0 200 80" 
        width={width} 
        height={height} 
        className="fill-atos-red"
      >
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontSize="28" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
        >
          ATOS CAPITAL
        </text>
      </svg>
    </div>
  );
};

export default AtosCapitalLogo;
