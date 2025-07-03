
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Timer, Target, Zap } from "lucide-react";

interface GameChallengesProps {
  isHourOfJoyActive: boolean;
  addCompletedPuzzle: (puzzle: string) => void;
  showMessageWithJump: (message: string, duration?: number) => void;
}

export const GameChallenges = ({ isHourOfJoyActive, addCompletedPuzzle, showMessageWithJump }: GameChallengesProps) => {
  const [gameScores, setGameScores] = useState<{[key: string]: number}>({});
  
  // Musical Memory Challenge State
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [musicLevel, setMusicLevel] = useState(1);
  const [showingSequence, setShowingSequence] = useState(false);
  
  // Speed Challenge State
  const [speedTargets, setSpeedTargets] = useState<{id: number, x: number, y: number, hit: boolean}[]>([]);
  const [speedActive, setSpeedActive] = useState(false);
  const [speedScore, setSpeedScore] = useState(0);
  
  // Precision Challenge State
  const [precisionTargets, setPrecisionTargets] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [precisionScore, setPrecisionScore] = useState(0);
  const [precisionLevel, setPrecisionLevel] = useState(1);

  const generateMusicSequence = (level: number) => {
    const sequence = [];
    for (let i = 0; i < level + 2; i++) {
      sequence.push(Math.floor(Math.random() * 4));
    }
    return sequence;
  };

  const startMusicGame = () => {
    const newSequence = generateMusicSequence(musicLevel);
    setCurrentSequence(newSequence);
    setPlayerSequence([]);
    setShowingSequence(true);
    
    // Show sequence with timing
    newSequence.forEach((note, index) => {
      setTimeout(() => {
        const button = document.querySelector(`[data-music-note="${note}"]`);
        if (button) {
          button.classList.add('animate-pulse', 'ring-2', 'ring-yellow-400');
          setTimeout(() => {
            button.classList.remove('animate-pulse', 'ring-2', 'ring-yellow-400');
          }, 500);
        }
      }, index * 800);
    });
    
    setTimeout(() => {
      setShowingSequence(false);
    }, newSequence.length * 800 + 500);
  };

  const handleMusicNote = (note: number) => {
    if (showingSequence) return;
    
    const newPlayerSequence = [...playerSequence, note];
    setPlayerSequence(newPlayerSequence);
    
    if (newPlayerSequence[newPlayerSequence.length - 1] !== currentSequence[newPlayerSequence.length - 1]) {
      setPlayerSequence([]);
      setMusicLevel(1);
      return;
    }
    
    if (newPlayerSequence.length === currentSequence.length) {
      if (musicLevel >= 5) {
        setGameScores(prev => ({...prev, music: 100}));
        addCompletedPuzzle('musical-sequence');
        showMessageWithJump("🎵 PERFECT HARMONY ACHIEVED 🎵 Mommy Long Legs approves! Secret staff recreation area unlocked...", 10000);
      } else {
        setMusicLevel(prev => prev + 1);
        setTimeout(() => startMusicGame(), 1000);
      }
      setPlayerSequence([]);
    }
  };

  const startSpeedChallenge = () => {
    setSpeedActive(true);
    setSpeedScore(0);
    
    const targets = [];
    for (let i = 0; i < 10; i++) {
      targets.push({
        id: i,
        x: Math.random() * 300,
        y: Math.random() * 200,
        hit: false
      });
    }
    setSpeedTargets(targets);
    
    setTimeout(() => {
      setSpeedActive(false);
      if (speedScore >= 8) {
        setGameScores(prev => ({...prev, speed: 100}));
        addCompletedPuzzle('speed-challenge');
        showMessageWithJump("⚡ LIGHTNING REFLEXES ⚡ Bunzo's cymbals crash in approval! Speed access protocols activated...", 8000);
      }
    }, 10000);
  };

  const hitSpeedTarget = (targetId: number) => {
    setSpeedTargets(prev => 
      prev.map(target => 
        target.id === targetId ? {...target, hit: true} : target
      )
    );
    setSpeedScore(prev => prev + 1);
  };

  const startPrecisionGame = () => {
    const targets = [];
    for (let i = 0; i < 3; i++) {
      targets.push({
        id: i,
        x: Math.random() * 250 + 25,
        y: Math.random() * 150 + 25,
        size: Math.max(20 - precisionLevel * 2, 8)
      });
    }
    setPrecisionTargets(targets);
  };

  const hitPrecisionTarget = (targetId: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clickX = event.clientX;
    const clickY = event.clientY;
    
    const distance = Math.sqrt(
      Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2)
    );
    
    const target = precisionTargets.find(t => t.id === targetId);
    if (target && distance <= target.size / 2) {
      setPrecisionScore(prev => prev + 1);
      setPrecisionTargets(prev => prev.filter(t => t.id !== targetId));
      
      if (precisionTargets.length === 1) {
        if (precisionLevel >= 5) {
          setGameScores(prev => ({...prev, precision: 100}));
          addCompletedPuzzle('precision-game');
          showMessageWithJump("🎯 PERFECT PRECISION 🎯 PJ's approval earned! Precision access codes revealed...", 8000);
        } else {
          setPrecisionLevel(prev => prev + 1);
          setTimeout(() => startPrecisionGame(), 1000);
        }
      }
    }
  };

  return (
    <>
      {/* Interactive Game Challenges */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
          Interactive Challenges
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Musical Memory Challenge */}
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500`}>
            <CardHeader>
              <CardTitle className="text-pink-400 flex items-center">
                <Music className="w-5 h-5 mr-2" />
                Musical Memory - Level {musicLevel}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                Watch the sequence, then repeat it exactly. Reach level 5 to win!
              </p>
              
              {currentSequence.length === 0 ? (
                <Button 
                  onClick={startMusicGame}
                  className="bg-green-600 hover:bg-green-700 w-full mb-4"
                >
                  Start Challenge
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      data-music-note="0"
                      onClick={() => handleMusicNote(0)}
                      disabled={showingSequence}
                      className="bg-red-600 hover:bg-red-700 h-12"
                    >
                      Red
                    </Button>
                    <Button 
                      data-music-note="1"
                      onClick={() => handleMusicNote(1)}
                      disabled={showingSequence}
                      className="bg-blue-600 hover:bg-blue-700 h-12"
                    >
                      Blue
                    </Button>
                    <Button 
                      data-music-note="2"
                      onClick={() => handleMusicNote(2)}
                      disabled={showingSequence}
                      className="bg-yellow-600 hover:bg-yellow-700 h-12"
                    >
                      Yellow
                    </Button>
                    <Button 
                      data-music-note="3"
                      onClick={() => handleMusicNote(3)}
                      disabled={showingSequence}
                      className="bg-green-600 hover:bg-green-700 h-12"
                    >
                      Green
                    </Button>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    {showingSequence ? "Watch the sequence..." : `Progress: ${playerSequence.length}/${currentSequence.length}`}
                  </div>
                </div>
              )}
              
              {gameScores.music === 100 && (
                <p className="text-green-400 text-sm mt-2">✓ Perfect Score Achieved!</p>
              )}
            </CardContent>
          </Card>

          {/* Speed Challenge */}
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500`}>
            <CardHeader>
              <CardTitle className="text-pink-400 flex items-center">
                <Timer className="w-5 h-5 mr-2" />
                Speed Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                Hit 8 out of 10 moving targets in 10 seconds!
              </p>
              
              {!speedActive ? (
                <Button 
                  onClick={startSpeedChallenge}
                  className="bg-orange-600 hover:bg-orange-700 w-full mb-4 h-12"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  START SPEED TEST
                </Button>
              ) : (
                <div className="relative w-full h-48 bg-gray-900 border rounded mb-4">
                  {speedTargets.map(target => (
                    !target.hit && (
                      <button
                        key={target.id}
                        onClick={() => hitSpeedTarget(target.id)}
                        className="absolute w-6 h-6 bg-red-500 rounded-full animate-pulse hover:bg-red-400"
                        style={{
                          left: `${target.x}px`,
                          top: `${target.y}px`,
                        }}
                      />
                    )
                  ))}
                  <div className="absolute top-2 left-2 text-white text-sm">
                    Score: {speedScore}/10
                  </div>
                </div>
              )}
              
              {gameScores.speed === 100 && (
                <p className="text-green-400 text-sm">✓ Lightning Speed Achieved!</p>
              )}
            </CardContent>
          </Card>

          {/* Precision Challenge */}
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500`}>
            <CardHeader>
              <CardTitle className="text-pink-400 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Precision Game - Level {precisionLevel}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                Hit the exact center of each target. Reach level 5 to win!
              </p>
              
              {precisionTargets.length === 0 ? (
                <Button 
                  onClick={startPrecisionGame}
                  className="bg-purple-600 hover:bg-purple-700 w-full mb-4 h-12"
                >
                  🎯 START PRECISION
                </Button>
              ) : (
                <div className="relative w-full h-48 bg-gray-900 border rounded mb-4">
                  {precisionTargets.map(target => (
                    <button
                      key={target.id}
                      onClick={(e) => hitPrecisionTarget(target.id, e)}
                      className="absolute bg-red-500 rounded-full hover:bg-red-400 flex items-center justify-center text-white text-xs font-bold"
                      style={{
                        left: `${target.x}px`,
                        top: `${target.y}px`,
                        width: `${target.size}px`,
                        height: `${target.size}px`,
                      }}
                    >
                      ●
                    </button>
                  ))}
                  <div className="absolute top-2 left-2 text-white text-sm">
                    Level: {precisionLevel} | Targets: {precisionTargets.length}
                  </div>
                </div>
              )}
              
              {gameScores.precision === 100 && (
                <p className="text-green-400 text-sm">✓ Perfect Precision!</p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Score Tracking */}
      <section className="mb-16">
        <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500`}>
          <CardHeader>
            <CardTitle className="text-pink-400">Game Master Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className={`p-3 rounded ${gameScores.music === 100 ? 'bg-green-800' : 'bg-gray-700'}`}>
                <h4 className="text-pink-400 font-bold">Musical Memory</h4>
                <p className="text-2xl">{gameScores.music || 0}%</p>
              </div>
              <div className={`p-3 rounded ${gameScores.speed === 100 ? 'bg-green-800' : 'bg-gray-700'}`}>
                <h4 className="text-pink-400 font-bold">Speed Challenge</h4>
                <p className="text-2xl">{gameScores.speed || 0}%</p>
              </div>
              <div className={`p-3 rounded ${gameScores.precision === 100 ? 'bg-green-800' : 'bg-gray-700'}`}>
                <h4 className="text-pink-400 font-bold">Precision Game</h4>
                <p className="text-2xl">{gameScores.precision || 0}%</p>
              </div>
            </div>
            
            {Object.keys(gameScores).length === 3 && Object.values(gameScores).every(score => score === 100) && (
              <div className="mt-6 p-4 bg-gold-900 border border-yellow-400 rounded text-center animate-pulse">
                <p className="text-yellow-400 font-bold text-lg">
                  👑 GAME STATION MASTER ACHIEVED 👑
                </p>
                <p className="text-yellow-300 text-sm mt-2">
                  All games mastered! Special facility access codes revealed...
                </p>
                <div className="mt-3 text-xs text-green-400 space-y-1">
                  <p>🔑 Staff Recreation: staff.games / perfectscores</p>
                  <p>🔑 Maintenance Access: bunzo.cymbal / musical-timing</p>
                  <p>🔑 Security Override: mommy.rules / neverstop-playing</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </>
  );
};
