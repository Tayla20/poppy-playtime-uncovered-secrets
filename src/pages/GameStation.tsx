import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Crown, Star, AlertTriangle } from "lucide-react";

const GameStation = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [hiddenAccess, setHiddenAccess] = useState(false);
  const [clickSequence, setClickSequence] = useState<number[]>([]);

  const games = [
    {
      id: "musical-memory",
      name: "Musical Memory",
      host: "Mommy Long Legs",
      difficulty: "Medium",
      description: "Follow the musical patterns and win amazing prizes!",
      status: "Popular",
      secret: "The music plays even when no one is watching..."
    },
    {
      id: "whack-a-wuggy",
      name: "Whack-a-Wuggy",
      host: "Huggy Wuggy",
      difficulty: "Easy",
      description: "Test your reflexes with our friendly blue giant!",
      status: "New",
      secret: "Sometimes Huggy doesn't go back down..."
    },
    {
      id: "bunzo-bonanza",
      name: "Bunzo's Cymbal Bonanza",
      host: "Bunzo Bunny",
      difficulty: "Hard",
      description: "Keep up with Bunzo's musical rhythm!",
      status: "Challenge",
      secret: "The cymbals echo through empty halls at night"
    },
    {
      id: "statue-game",
      name: "Statue Game",
      host: "PJ Pug-a-Pillar",
      difficulty: "Extreme",
      description: "Don't move when PJ is watching!",
      status: "Expert Only",
      secret: "PJ never stops watching, even during 'breaks'"
    }
  ];

  const handleGameClick = (gameId: string, index: number) => {
    setSelectedGame(selectedGame === gameId ? null : gameId);
    const newSequence = [...clickSequence, index];
    setClickSequence(newSequence);
    
    // Hidden sequence: 0,2,1,3 (musical-memory, bunzo, whack-a-wuggy, statue)
    if (JSON.stringify(newSequence.slice(-4)) === JSON.stringify([0,2,1,3])) {
      setHiddenAccess(true);
    }
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
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
      <header className="bg-gradient-to-r from-pink-900 to-purple-900 text-white p-8 shadow-lg border-b border-pink-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-pink-400 flex items-center subtle-glow">
            <Gamepad2 className="w-10 h-10 mr-4" />
            Game Station
          </h1>
          <p className="text-pink-200 mt-3 text-lg">Where fun never ends and games come alive!</p>
          <p className="text-sm text-gray-300 mt-2">Hosted by Mommy Long Legs and friends</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Host */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-pink-500 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-pink-400 text-center flex items-center justify-center">
                <Crown className="w-8 h-8 mr-3" />
                Meet Your Game Host: Mommy Long Legs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">🕷️</div>
              <p className="text-lg text-gray-300 mb-4">
                The most stretchy, most fun, most <span className="text-pink-400">caring</span> game host you'll ever meet! 
                Mommy Long Legs ensures every game is played by the rules and everyone has a <span className="invisible-text">permanent</span> good time.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                "A good player follows the rules. A great player never leaves the game." - Mommy Long Legs
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild className="bg-pink-600 hover:bg-pink-700">
                  <Link to="/prototype-conversations">Game Rules</Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-400 text-pink-400">
                  <Link to="/playcare">Visit Playcare</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-400 text-purple-400">
                  <Link to="/school-sector">School Games</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Games Grid */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400 subtle-glow">Available Games</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <Card 
                key={game.id}
                className={`bg-slate-800 border-pink-500 cursor-pointer transition-all duration-300 hover:border-pink-300 card-hover ${
                  selectedGame === game.id ? 'ring-2 ring-pink-400' : ''
                }`}
                onClick={() => handleGameClick(game.id, index)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-pink-400">
                    {game.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      game.status === 'New' ? 'bg-green-600' :
                      game.status === 'Popular' ? 'bg-blue-600' :
                      game.status === 'Challenge' ? 'bg-yellow-600' :
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
                        <h4 className="text-pink-400 font-bold mb-2">Game Details</h4>
                        <p className="text-gray-300 text-sm">{game.secret}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-pink-600 hover:bg-pink-700">Play Now</Button>
                        <Button size="sm" variant="outline" className="border-pink-400 text-pink-400">
                          High Scores
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
            <Card className="bg-red-900 bg-opacity-80 border-red-400 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Secret Game Unlocked
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-300 mb-4">
                  You've discovered the secret sequence! The toys have been watching your gameplay...
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Access Code: mommy-knows-best
                </div>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/prototype-conversations">Enter Secret Area</Link>
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
      <footer className="bg-slate-950 text-white py-8 border-t border-pink-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Game Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Where every game is a learning experience</p>
          <div className="text-xs text-pink-400 mt-1 opacity-50">
            <span className="invisible-text">The games choose their players</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameStation;
