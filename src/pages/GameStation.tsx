import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Crown, Star, AlertTriangle, Skull, Eye, Music, Timer, Target, Zap } from "lucide-react";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";

const GameStation = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [hiddenAccess, setHiddenAccess] = useState(false);
  const [clickSequence, setClickSequence] = useState<number[]>([]);
  const [showClue, setShowClue] = useState("");
  const [horrorMode, setHorrorMode] = useState(false);
  const [gameScores, setGameScores] = useState<{[key: string]: number}>({});
  
  // Musical Memory Challenge State
  const [musicPattern, setMusicPattern] = useState<number[]>([]);
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [musicLevel, setMusicLevel] = useState(1);
  const [showingSequence, setShowingSequence] = useState(false);
  
  // Speed Challenge State
  const [speedStartTime, setSpeedStartTime] = useState<number | null>(null);
  const [speedTargets, setSpeedTargets] = useState<{id: number, x: number, y: number, hit: boolean}[]>([]);
  const [speedActive, setSpeedActive] = useState(false);
  const [speedScore, setSpeedScore] = useState(0);
  
  // Precision Challenge State
  const [precisionTargets, setPrecisionTargets] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [precisionScore, setPrecisionScore] = useState(0);
  const [precisionLevel, setPrecisionLevel] = useState(1);
  
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

  const showRandomClue = (source: string) => {
    const clues = [
      "🎮 The games remember every player's pattern - some patterns unlock deeper access",
      "🎮 Perfect scores in all games reveal hidden facility access codes",
      "🎮 Mommy's rules: Play fair, play forever, never try to leave",
      "🎮 The Game Station was built over the old employee recreation center",
      "🎮 Musical memory requires following the exact sequence shown",
      "🎮 Speed challenges test both accuracy and timing under pressure",
      "🎮 Precision games demand pixel-perfect accuracy to succeed",
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    setShowClue(`${source}: ${randomClue}`);
    setTimeout(() => setShowClue(""), 6000);
  };

  // Musical Memory Game Logic
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
        // Visual feedback for sequence
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
    
    // Check if current note is correct
    if (newPlayerSequence[newPlayerSequence.length - 1] !== currentSequence[newPlayerSequence.length - 1]) {
      // Wrong note - reset
      setPlayerSequence([]);
      setMusicLevel(1);
      showRandomClue("MUSICAL MEMORY");
      return;
    }
    
    // Check if sequence is complete
    if (newPlayerSequence.length === currentSequence.length) {
      if (musicLevel >= 5) {
        // Completed the challenge
        setGameScores(prev => ({...prev, music: 100}));
        addCompletedPuzzle('musical-sequence');
        showMessageWithJump("🎵 PERFECT HARMONY ACHIEVED 🎵 Mommy Long Legs approves! Secret staff recreation area unlocked...", 10000);
      } else {
        // Next level
        setMusicLevel(prev => prev + 1);
        setTimeout(() => startMusicGame(), 1000);
      }
      setPlayerSequence([]);
    }
  };

  // Speed Challenge Logic
  const startSpeedChallenge = () => {
    setSpeedActive(true);
    setSpeedStartTime(Date.now());
    setSpeedScore(0);
    
    // Generate random targets
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
    
    // End after 10 seconds
    setTimeout(() => {
      setSpeedActive(false);
      if (speedScore >= 8) { // Need 8/10 targets hit
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

  // Precision Challenge Logic
  const startPrecisionGame = () => {
    const targets = [];
    for (let i = 0; i < 3; i++) {
      targets.push({
        id: i,
        x: Math.random() * 250 + 25,
        y: Math.random() * 150 + 25,
        size: Math.max(20 - precisionLevel * 2, 8) // Gets smaller each level
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
      
      if (precisionTargets.length === 1) { // Last target
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

  const handleGameClick = (gameId: string, index: number) => {
    setSelectedGame(selectedGame === gameId ? null : gameId);
    const newSequence = [...clickSequence, index];
    setClickSequence(newSequence);
    
    // Hidden sequence: 0,2,1,3 (musical-memory, bunzo, whack-a-wuggy, statue)
    if (JSON.stringify(newSequence.slice(-4)) === JSON.stringify([0,2,1,3])) {
      setHiddenAccess(true);
      addCompletedPuzzle('game-master-sequence');
      showRandomClue("GAME SEQUENCE");
    }
  };

  const games = [
    {
      id: "musical-memory",
      name: "Musical Memory",
      host: isHourOfJoyActive ? "Mommy Long Legs [AUTONOMOUS]" : "Mommy Long Legs",
      difficulty: isHourOfJoyActive ? "FATAL" : "Medium",
      description: isHourOfJoyActive ? "Follow the tune... or become part of it forever!" : "Follow the musical patterns and win amazing prizes!",
      status: isHourOfJoyActive ? "DEADLY" : "Popular",
      secret: isHourOfJoyActive ? "The music never stops. Players who fail join the eternal symphony..." : "The music plays even when no one is watching...",
      beforeJoy: "Staff report that the musical sequences are getting more complex. Some children have been playing for hours without breaks.",
      afterJoy: "The game plays itself now. Spectral melodies echo through empty halls."
    },
    {
      id: "whack-a-wuggy",
      name: "Whack-a-Wuggy",
      host: isHourOfJoyActive ? "Mini Huggies [SWARM]" : "Huggy Wuggy",
      difficulty: isHourOfJoyActive ? "IMPOSSIBLE" : "Easy",
      description: isHourOfJoyActive ? "They whack back now!" : "Test your reflexes with our friendly blue giant!",
      status: isHourOfJoyActive ? "REVERSED" : "New",
      secret: isHourOfJoyActive ? "The Mini Huggies learned. Now they hunt in packs..." : "Sometimes Huggy doesn't go back down...",
      beforeJoy: "Children love this game, but some parents report their kids talking about 'Huggy visiting them at night'.",
      afterJoy: "The mallets lie broken. Huggy and his mini versions roam freely."
    },
    {
      id: "bunzo-bonanza",
      name: "Bunzo's Cymbal Bonanza",
      host: isHourOfJoyActive ? "Bunzo Bunny [CONDUCTOR]" : "Bunzo Bunny",
      difficulty: isHourOfJoyActive ? "MADDENING" : "Hard",
      description: isHourOfJoyActive ? "Keep up with the endless rhythm of chaos!" : "Keep up with Bunzo's musical rhythm!",
      status: isHourOfJoyActive ? "ETERNAL" : "Challenge",
      secret: isHourOfJoyActive ? "The cymbals crash in patterns that drive listeners insane. He conducts an orchestra of screams." : "The cymbals echo through empty halls at night",
      beforeJoy: "The rhythm patterns seem to be getting faster. Some players report hearing cymbals even after leaving.",
      afterJoy: "Bunzo's concert never ends. The cymbals crash with otherworldly rhythms."
    },
    {
      id: "statue-game",
      name: "Statue Game",
      host: isHourOfJoyActive ? "PJ Pug-a-Pillar [WARDEN]" : "PJ Pug-a-Pillar",
      difficulty: isHourOfJoyActive ? "ABSOLUTE" : "Extreme",
      description: isHourOfJoyActive ? "Move and become a permanent statue!" : "Don't move when PJ is watching!",
      status: isHourOfJoyActive ? "PRISON" : "Expert Only",
      secret: isHourOfJoyActive ? "PJ's victims still stand throughout the facility, forever frozen in terror." : "PJ never stops watching, even during 'breaks'",
      beforeJoy: "Security cameras show PJ moving through the facility at night, seemingly checking on 'players' who aren't there.",
      afterJoy: "The game became reality. Stone-still figures line the corridors."
    }
  ];

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors">Playcare</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-pink-900 to-purple-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Gamepad2 className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Final Game Station' : 'Game Station'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-pink-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 'Where games become eternal nightmares!' : 'Where fun never ends and games come alive!'}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            {isHourOfJoyActive ? 'Governed by autonomous toy entities' : 'Hosted by Mommy Long Legs and friends'}
          </p>
        </div>
      </header>

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

        {/* Clue Display */}
        {showClue && (
          <div className="mb-8 p-4 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
            <p className="text-yellow-300 text-center">{showClue}</p>
          </div>
        )}

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

        {/* Featured Host */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-pink-500 max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} text-center flex items-center justify-center`}>
                {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Crown className="w-8 h-8 mr-3" />}
                {isHourOfJoyActive ? 'Your Eternal Host: Mommy Long Legs' : 'Meet Your Game Host: Mommy Long Legs'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">🕷️</div>
              <p className="text-lg text-gray-300 mb-4">
                {isHourOfJoyActive ? 
                  'The most stretchy, most deadly, most controlling host you\'ll ever meet! Mommy Long Legs ensures every game is played forever and no one ever leaves.' :
                  'The most stretchy, most fun, most caring game host you\'ll ever meet! Mommy Long Legs ensures every game is played by the rules and everyone has a permanent good time.'
                }
              </p>
              <p className="text-sm text-gray-400 mb-6">
                {isHourOfJoyActive ? 
                  '"The games choose their players now. And the players never leave." - Mommy Long Legs' :
                  '"A good player follows the rules. A great player never leaves the game." - Mommy Long Legs'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => showRandomClue("MOMMY'S RULES")}
                  className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}
                >
                  {isHourOfJoyActive ? 'Survival Rules' : 'Game Rules'}
                </Button>
                <Button 
                  onClick={() => showRandomClue("PLAYCARE STATUS")}
                  variant="outline" 
                  className="border-pink-400 text-pink-400"
                >
                  {isHourOfJoyActive ? 'Sanctuary Status' : 'Visit Playcare'}
                </Button>
                <Button 
                  onClick={() => showRandomClue("SCHOOL SECTOR")}
                  variant="outline" 
                  className="border-purple-400 text-purple-400"
                >
                  {isHourOfJoyActive ? 'Learning Chambers' : 'School Games'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Games Grid */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} subtle-glow`}>
            {isHourOfJoyActive ? 'Eternal Games' : 'Available Games'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <Card 
                key={game.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500 cursor-pointer transition-all duration-300 hover:border-pink-300 card-hover ${
                  selectedGame === game.id ? 'ring-2 ring-pink-400' : ''
                } ${horrorMode ? 'animate-pulse border-red-400' : ''}`}
                onClick={() => handleGameClick(game.id, index)}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {game.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      game.status === 'New' || game.status === 'REVERSED' ? 'bg-green-600' :
                      game.status === 'Popular' || game.status === 'DEADLY' ? 'bg-blue-600' :
                      game.status === 'Challenge' || game.status === 'ETERNAL' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}>
                      {game.status}
                    </span>
                  </CardTitle>
                  <p className="text-gray-300">Hosted by {game.host}</p>
                  <p className="text-sm text-gray-400">Difficulty: {game.difficulty}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{game.description}</p>
                  
                  {selectedGame === game.id && (
                    <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-pink-500">
                      <div>
                        <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>Game Details</h4>
                        <p className="text-gray-300 text-sm mb-2">{game.secret}</p>
                        <p className="text-gray-400 text-xs italic">
                          {isHourOfJoyActive ? game.afterJoy : game.beforeJoy}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => showRandomClue(`GAME: ${game.name.toUpperCase()}`)}
                          className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}
                        >
                          {isHourOfJoyActive ? 'Enter Game' : 'Play Now'}
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => showRandomClue(`SCORES: ${game.name.toUpperCase()}`)}
                          variant="outline" 
                          className="border-pink-400 text-pink-400"
                        >
                          {isHourOfJoyActive ? 'Final Scores' : 'High Scores'}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Game Characters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Other Game Friends</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🐰</div>
                <h3 className="text-pink-400 font-bold">Bunzo Bunny</h3>
                <p className="text-xs text-gray-400">Musical Genius</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">Meet Bunzo</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🐛</div>
                <h3 className="text-pink-400 font-bold">PJ Pug-a-Pillar</h3>
                <p className="text-xs text-gray-400">The Watcher</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">Play Statue</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🎪</div>
                <h3 className="text-pink-400 font-bold">Candy Cat</h3>
                <p className="text-xs text-gray-400">Sweet Treats</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/playcare">Candy Corner</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-pink-400 font-bold">Mini Huggies</h3>
                <p className="text-xs text-gray-400">Target Practice</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/make-a-friend">Adopt Mini</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Access */}
        {hiddenAccess && (
          <section className="mb-16">
            <Card className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-80 border-red-400 max-w-2xl mx-auto`}>
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Game Master Access' : 'Secret Game Unlocked'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-300 mb-4">
                  {isHourOfJoyActive ? 
                    'You understand the sequence. The toys recognize your pattern. Access granted to the game master protocols...' :
                    'You\'ve discovered the secret sequence! The toys have been watching your gameplay...'
                  }
                </p>
                <div className="text-xs text-gray-400 mb-4 space-y-1">
                  <p>Game Access Code: eternal-games-never-end</p>
                  <p>Facility Code: mommy-knows-best</p>
                  <p>Maintenance: game-station-master</p>
                </div>
                <Button 
                  onClick={() => showRandomClue("SECRET ACCESS")}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {isHourOfJoyActive ? 'Game Master Interface' : 'Enter Secret Area'}
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Game Station Rules */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-pink-500">
            <CardHeader>
              <CardTitle className="text-pink-400">Game Station Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-pink-400 font-bold mb-2">Player Guidelines</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Always follow the game host's instructions</li>
                    <li>• No cheating - Mommy is always watching</li>
                    <li>• Winners get special prizes</li>
                    <li>• Losers get... special attention</li>
                    <li>• Games never truly end</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-pink-400 font-bold mb-2">Safety First</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Stay within designated play areas</li>
                    <li>• Report any unusual toy behavior</li>
                    <li>• Never wander alone after hours</li>
                    <li>• Trust your game host completely</li>
                    <li>• The games are for your own good</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
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
