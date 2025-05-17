import React from 'react';
import logoImage from '../assets/ATOS_CAPITAL_BRANCO.png'; 

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
      <img 
        src={logoImage} 
        alt="ATOS CAPITAL" 
        width={width}
        height={height}
        className="object-contain" 
      />
    </div>
  );
};

export default AtosCapitalLogo;