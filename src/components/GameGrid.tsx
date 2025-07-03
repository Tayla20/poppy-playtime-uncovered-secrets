import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Skull, AlertTriangle, Eye } from "lucide-react";

interface GameGridProps {
  isHourOfJoyActive: boolean;
  addCompletedPuzzle: (puzzle: string) => void;
}

export const GameGrid = ({ isHourOfJoyActive, addCompletedPuzzle }: GameGridProps) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [hiddenAccess, setHiddenAccess] = useState(false);
  const [clickSequence, setClickSequence] = useState<number[]>([]);
  const [showClue, setShowClue] = useState("");
  const [horrorMode, setHorrorMode] = useState(false);

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
    <>
      {/* Clue Display */}
      {showClue && (
        <div className="mb-8 p-4 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
          <p className="text-yellow-300 text-center">{showClue}</p>
        </div>
      )}

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
    </>
  );
};
