
import React from 'react';

interface StatusBarProps {
  label: string;
  value: number;
  maxValue: number;
  colorClass: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ label, value, maxValue, colorClass }) => {
  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-stone-600">{label}</span>
        <span className="text-sm font-bold text-stone-700">{Math.round(value)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
        <div
          className={`h-4 rounded-full ${colorClass} progress-bar-transition`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StatusBar;
