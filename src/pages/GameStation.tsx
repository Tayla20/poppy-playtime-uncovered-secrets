
import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";
import { GameHeader } from "@/components/GameHeader";
import { GameChallenges } from "@/components/GameChallenges";
import { GameGrid } from "@/components/GameGrid";

const GameStation = () => {
  const [horrorMode, setHorrorMode] = useState(false);
  const { trackPageVisit, addCompletedPuzzle, showMessageWithJump } = usePuzzleSystem();

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  useEffect(() => {
    trackPageVisit('game-station');
    
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setHorrorMode(true);
        setTimeout(() => setHorrorMode(false), 3000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      <GameHeader isHourOfJoyActive={isHourOfJoyActive} />

      <div className="container mx-auto px-4 py-16">
        {/* Alert Banner for Hour of Joy */}
        {isHourOfJoyActive && (
          <div className="mb-8 p-4 bg-red-900 border border-red-400 rounded animate-pulse">
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
              <p className="text-red-300 text-center font-bold">
                WARNING: GAMES ARE NOW AUTONOMOUS - PLAYERS BECOME PERMANENT PARTICIPANTS
              </p>
            </div>
          </div>
        )}

        <GameChallenges 
          isHourOfJoyActive={isHourOfJoyActive}
          addCompletedPuzzle={addCompletedPuzzle}
          showMessageWithJump={showMessageWithJump}
        />

        <GameGrid 
          isHourOfJoyActive={isHourOfJoyActive}
          addCompletedPuzzle={addCompletedPuzzle}
        />
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Game Division. {isHourOfJoyActive ? 'Under new management.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 'Where every game lasts forever' : 'Where every game is a learning experience'}
          </p>
          <div className="text-xs text-pink-400 mt-1 opacity-50">
            <span className="invisible-text">
              {isHourOfJoyActive ? 'The games have won' : 'The games choose their players'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameStation;
