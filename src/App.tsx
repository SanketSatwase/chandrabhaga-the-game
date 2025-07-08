import React, { useState, useEffect, useCallback } from 'react';
import type { CatState } from './types';
import { CatAction, CatMood } from './types';
import {
  INITIAL_CAT_STATE,
  MAX_STAT_VALUE,
  STAT_DECAY_INTERVAL,
  HAPPINESS_DECAY_RATE,
  HUNGER_INCREASE_RATE,
  ENERGY_DECAY_RATE,
  ACTION_EFFECTS,
  ACTION_MESSAGES
} from './constants';
import CatDisplay from './components/CatDisplay';
import StatusBar from './components/StatusBar';
import ActionButtons from './components/ActionButtons';
import StatusMessage from './components/StatusMessage';

const App: React.FC = () => {
  const [catState, setCatState] = useState<CatState>(INITIAL_CAT_STATE);
  const [catMood, setCatMood] = useState<CatMood>(CatMood.NEUTRAL);
  const [message, setMessage] = useState<string>("Chandrabhaga is waiting for you!");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Stat decay over time
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setCatState(prevState => {
        const newState = {
          happiness: Math.max(0, prevState.happiness - HAPPINESS_DECAY_RATE),
          hunger: Math.min(MAX_STAT_VALUE, prevState.hunger + HUNGER_INCREASE_RATE),
          energy: Math.max(0, prevState.energy - ENERGY_DECAY_RATE),
        };
        if (newState.happiness <= 0 || newState.hunger >= MAX_STAT_VALUE) {
          setIsGameOver(true);
        }
        return newState;
      });
    }, STAT_DECAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isGameOver]);

  // Update cat's mood based on stats
  useEffect(() => {
    if (isGameOver) {
      setCatMood(CatMood.SAD);
      setMessage("Oh no! Chandrabhaga got too sad and ran away...");
      return;
    }

    const { happiness, hunger, energy } = catState;
    if (happiness < 25 || hunger > 80) {
      setCatMood(CatMood.SAD);
      setMessage("Chandrabhaga seems a bit down...");
    } else if (energy < 30) {
      setCatMood(CatMood.SLEEPY);
      setMessage("Chandrabhaga looks sleepy.");
    } else if (happiness > 80 && energy > 60) {
      setCatMood(CatMood.HAPPY);
      setMessage("Chandrabhaga is purrfectly happy!");
    } else {
      setCatMood(CatMood.NEUTRAL);
    }
  }, [catState, isGameOver]);

  const handleAction = useCallback((action: CatAction) => {
    if (isGameOver) return;
    const effects = ACTION_EFFECTS[action];
    setCatState(prevState => ({
      happiness: Math.min(MAX_STAT_VALUE, Math.max(0, prevState.happiness + effects.happiness)),
      hunger: Math.min(MAX_STAT_VALUE, Math.max(0, prevState.hunger + effects.hunger)),
      energy: Math.min(MAX_STAT_VALUE, Math.max(0, prevState.energy + effects.energy)),
    }));
    setMessage(ACTION_MESSAGES[action]);
  }, [isGameOver]);
  
  const handleReset = () => {
    setCatState(INITIAL_CAT_STATE);
    setIsGameOver(false);
    setMessage("Let's give it another try! Chandrabhaga is back!");
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-stone-800 text-amber-50 p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Game Over</h1>
        <p className="text-lg mb-8">{message}</p>
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-amber-100 text-stone-800 font-sans">
      <header className="flex-shrink-0 text-center p-3 bg-amber-300 shadow-md">
        <h1 className="text-3xl font-extrabold text-stone-700 tracking-wider">Chandrabhaga's Day</h1>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-2 w-full max-w-md mx-auto">
            <CatDisplay mood={catMood} />
            <StatusMessage message={message} />
            
            <div className="w-full space-y-1 px-2">
              <StatusBar 
                label="Happiness" 
                value={catState.happiness} 
                maxValue={MAX_STAT_VALUE} 
                colorClass="bg-green-500"
              />
              <StatusBar 
                label="Fullness" 
                value={MAX_STAT_VALUE - catState.hunger} 
                maxValue={MAX_STAT_VALUE} 
                colorClass="bg-orange-500"
              />
              <StatusBar 
                label="Energy" 
                value={catState.energy} 
                maxValue={MAX_STAT_VALUE} 
                colorClass="bg-blue-500"
              />
            </div>

            <ActionButtons onAction={handleAction} />
        </div>
      </main>
    </div>
  );
};

export default App;