import React from 'react';
import { CatAction } from '../types';
import { FoodIcon, PetIcon, PlayIcon, NapIcon } from '../constants';

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children, label, disabled }) => (
  <button
    onClick={onClick}
    aria-label={label}
    disabled={disabled}
    className="flex flex-col items-center justify-center space-y-2 text-stone-700 hover:text-amber-700 transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-stone-700"
  >
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 border-2 border-amber-200 group-hover:border-amber-400 group-disabled:scale-100 group-disabled:shadow-md group-disabled:border-amber-200">
      {children}
    </div>
    <span className="text-sm font-semibold">{label}</span>
  </button>
);


interface ActionButtonsProps {
  onAction: (action: CatAction) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onAction }) => {
  return (
    <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 justify-items-center">
      <ActionButton onClick={() => onAction(CatAction.FEED)} label="Feed">
        <FoodIcon className="w-8 h-8 text-orange-500" />
      </ActionButton>
      <ActionButton onClick={() => onAction(CatAction.PET)} label="Pet">
        <PetIcon className="w-8 h-8 text-pink-500" />
      </ActionButton>
      <ActionButton onClick={() => onAction(CatAction.PLAY)} label="Play">
        <PlayIcon className="w-8 h-8 text-teal-500" />
      </ActionButton>
      <ActionButton onClick={() => onAction(CatAction.NAP)} label="Nap">
        <NapIcon className="w-8 h-8 text-indigo-500" />
      </ActionButton>
    </div>
  );
};

export default ActionButtons;
