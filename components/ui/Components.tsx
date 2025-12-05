import React from 'react';

// --- Colors Helper ---
const colorMap = {
  yellow: 'bg-ibuc-yellow text-ibuc-dark border-ibuc-yellow hover:bg-yellow-500',
  blue: 'bg-ibuc-blue text-white border-ibuc-blue hover:bg-blue-600',
  green: 'bg-ibuc-green text-white border-ibuc-green hover:bg-emerald-600',
  red: 'bg-ibuc-red text-white border-ibuc-red hover:bg-rose-600',
  gray: 'bg-gray-200 text-gray-700 border-gray-200 hover:bg-gray-300',
  outline: 'bg-transparent border-2 text-gray-600 hover:bg-gray-50'
};

const badgeColorMap = {
  yellow: 'bg-yellow-100 text-yellow-800',
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-800',
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof colorMap;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'blue', className = '', isLoading, ...props 
}) => {
  return (
    <button 
      className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${colorMap[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => (
  <div className="flex flex-col gap-1 w-full">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input 
      className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-ibuc-blue focus:border-ibuc-blue outline-none transition-all ${error ? 'border-ibuc-red' : 'border-gray-300'} ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-ibuc-red">{error}</span>}
  </div>
);

// --- Card ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
  color?: 'yellow' | 'blue' | 'green' | 'red' | 'white';
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, action, color = 'white' }) => {
  const borderClass = color !== 'white' ? `border-l-4 border-${color === 'yellow' ? 'amber-400' : color === 'blue' ? 'blue-500' : color === 'green' ? 'emerald-500' : 'rose-500'}` : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${borderClass} ${className}`}>
      {(title || action) && (
        <div className="flex justify-between items-center mb-4">
          {title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

// --- Badge ---
interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof badgeColorMap;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray' }) => (
  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColorMap[variant]}`}>
    {children}
  </span>
);

// --- Stat Card ---
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'yellow' | 'blue' | 'green' | 'red';
  subtext?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color, subtext }) => {
  const bgColors = {
    yellow: 'bg-yellow-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    red: 'bg-red-50'
  };
  
  const textColors = {
    yellow: 'text-yellow-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-gray-800">{value}</h4>
        {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
      </div>
      <div className={`p-3 rounded-lg ${bgColors[color]} ${textColors[color]}`}>
        <Icon size={24} />
      </div>
    </div>
  );
};
