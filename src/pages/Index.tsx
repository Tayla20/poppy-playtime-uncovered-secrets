
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Eye, Star, Clock, AlertTriangle } from "lucide-react";

const Index = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [colorSequence, setColorSequence] = useState<string[]>([]);
  const [timeClicks, setTimeClicks] = useState<number[]>([]);
  const [warningLevel, setWarningLevel] = useState(0);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const requiredColorPattern = ["red", "blue", "red", "yellow", "red"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
      
      // Subtle warnings that increase over time
      if (Math.random() < 0.001) {
        setWarningLevel(prev => Math.min(prev + 1, 5));
      }
    }, 12000);

    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setHiddenMessage("◈ SYSTEM ACCESS GRANTED ◈ The Hour of Joy approaches. August 8th, 1995. Employee Access: security.mike/nightshift1995, dr.chen/psychology101, dr.sawyer/experiment1006, leith.pierre/prototype1170. The Prototype knows. The toys are ready. Are you?");
        setTimeout(() => setHiddenMessage(""), 15000);
      }

      if (event.key === '.' || event.key === '-' || event.key === ' ') {
        if (event.key === '.') {
          setHiddenMessage("--- THE PROTOTYPE WATCHES --- Deep in the facility, 1006 grows stronger. It influences the others. CatNap sleeps, but does not dream. The children trust, but should they?");
          setTimeout(() => setHiddenMessage(""), 12000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiSequence]);

  const handleLogoClick = () => {
    const now = Date.now();
    setTimeClicks(prev => [...prev, now]);
    setClickCount(prev => prev + 1);
    
    if (clickCount >= 12) {
      setSecretFound(true);
    }

    if (clickCount === 8) {
      setHiddenMessage("⚠ TEMPORAL ANOMALY DETECTED ⚠ The Hour of Joy countdown has begun. T-minus 72 hours. All toys are in position. The children suspect nothing.");
      setTimeout(() => setHiddenMessage(""), 8000);
    }
  };

  const handleProductHover = (color: string) => {
    const newSequence = [...colorSequence, color].slice(-5);
    setColorSequence(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredColorPattern)) {
      setHiddenMessage("☾ TOY SEQUENCE COMPLETE ☽ The Bigger Bodies Initiative nears completion. Huggy Wuggy, Mommy Long Legs, CatNap - all vessels for something greater. The Prototype sees through their eyes.");
      setTimeout(() => setHiddenMessage(""), 10000);
    }
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : 'subtle-glow'} ${clickCount > 5 ? 'creepy-hover' : ''}`}
              onClick={handleLogoClick}
              data-text="PLAYTIME CO."
            >
              {glitchActive ? 'P̴L̸A̷Y̶T̵I̴M̸E̵ ̶C̷O̸.' : 'PLAYTIME CO.'}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
              {secretFound && (
                <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                  [◈ STAFF ◈]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Warning Header - appears based on warning level */}
      {warningLevel > 2 && (
        <div className="bg-red-900 bg-opacity-60 text-yellow-400 p-2 text-center border-b border-red-600 animate-pulse">
          <AlertTriangle className="w-4 h-4 inline mr-2" />
          <span className="text-xs nostalgic-text">
            {warningLevel > 4 ? 'CRITICAL: Unusual toy behavior reported. Remain calm.' :
             warningLevel > 3 ? 'WARNING: Increased security protocols in effect.' :
             'NOTICE: Facility maintenance scheduled. Normal operations continue.'}
          </span>
          <Clock className="w-4 h-4 inline ml-2" />
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <h1 className={`text-6xl font-bold mb-6 typing-effect ${glitchActive ? 'text-yellow-400' : 'subtle-glow'}`}>
          Welcome to Playtime Co!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto nostalgic-text">
          Where innovation meets imagination! Creating <span className="mystery-reveal text-red-400" title="They're almost ready...">revolutionary toys</span> and unforgettable experiences for children since 1950. 
          The future of play is <span className="invisible-text">closer than you think</span>.
        </p>
        
        {/* Date counter - subtle hint */}
        <div className="text-sm text-gray-500 mb-6 opacity-50">
          Current Date: August 5th, 1995
          <span className="invisible-text ml-4">T-minus 3 days</span>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white card-hover">
            <Link to="/products">Explore Our Toys</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white card-hover">
            <Link to="/factory">Take a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products - All Poppy Playtime Toys */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Revolutionary Collection</h2>
        
        {/* Main Characters */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card 
            className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
            onMouseEnter={() => handleProductHover("red")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                  alt="Poppy Playtime Doll"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">Poppy</h3>
              <p className="text-gray-300">The first truly <span className="mystery-reveal text-yellow-400">perfect</span> doll!</p>
              <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                <span className="invisible-text">She remembers the beginning</span> • Model: P-001 • Since 1950
              </div>
            </CardContent>
          </Card>

          <Card 
            className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
            onMouseEnter={() => handleProductHover("blue")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                  alt="Huggy Wuggy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">Huggy Wuggy</h3>
              <p className="text-gray-300">Your best friend <span className="mystery-reveal text-red-500">forever and ever</span>!</p>
              <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                Model: HW-1170 • <span className="backwards-text">seidoB reggiB</span> • <span className="invisible-text">Soon to be unleashed</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
            onMouseEnter={() => handleProductHover("yellow")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png" 
                  alt="CatNap"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">CatNap</h3>
              <p className="text-gray-300">Sweet dreams <span className="mystery-reveal text-purple-400">are guaranteed</span>!</p>
              <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                Series: CN-1188 • <span className="invisible-text">The Prototype's chosen</span> • <span className="backwards-text">peelS</span> Protocol
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Toys Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🕷️</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Mommy Long Legs</h4>
              <p className="text-xs text-gray-400">Stretchy and <span className="invisible-text">deadly</span> fun</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐕</div>
              <h4 className="font-bold text-red-400 nostalgic-text">DogDay</h4>
              <p className="text-xs text-gray-400">Leader of the <span className="mystery-reveal text-yellow-400">Smiling Critters</span></p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐻</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Bobby BearHug</h4>
              <p className="text-xs text-gray-400"><span className="invisible-text">Suffocating</span> hugs await</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐰</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Bunzo Bunny</h4>
              <p className="text-xs text-gray-400">Musical <span className="backwards-text">rorret</span> friend</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">👩‍🏫</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Miss Delight</h4>
              <p className="text-xs text-gray-400">Educational <span className="invisible-text">nightmare</span></p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🦄</div>
              <h4 className="font-bold text-red-400 nostalgic-text">PuppyCorn</h4>
              <p className="text-xs text-gray-400">Magical and <span className="mystery-reveal text-purple-400">corrupted</span></p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐷</div>
              <h4 className="font-bold text-red-400 nostalgic-text">PickyPiggy</h4>
              <p className="text-xs text-gray-400">Always <span className="invisible-text">hungry</span> for more</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐘</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Bubba Bubbaphant</h4>
              <p className="text-xs text-gray-400">Never <span className="backwards-text">stegof</span></p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Mission with warnings */}
      <section className="bg-slate-900 bg-opacity-50 py-16 border-y border-red-700 static-noise">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Revolutionary Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 nostalgic-text">
              At Playtime Co., we're on the verge of a <span className="mystery-reveal text-red-400">revolutionary breakthrough</span>. 
              Our Bigger Bodies Initiative has created companions that are more than toys - they're 
              <span className="invisible-text">vessels for something greater</span>. Soon, every child will have a friend that understands them completely.
            </p>
            
            {/* Countdown timer */}
            <div className="text-center mb-8 p-4 bg-red-900 bg-opacity-30 rounded border border-red-600">
              <p className="text-yellow-400 font-bold nostalgic-text">
                ⚠ MAJOR ANNOUNCEMENT COMING AUGUST 8TH ⚠
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Prepare for the most <span className="invisible-text">joyful</span> day in Playtime Co. history
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Messages */}
      {hiddenMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise">
          <div className="glitch-text" data-text={hiddenMessage}>
            {hiddenMessage}
          </div>
        </div>
      )}

      {/* Hidden Staff Access */}
      {secretFound && (
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Link to="/login">
            <Button variant="destructive" size="sm" className="bg-green-600 hover:bg-green-700 card-hover vintage-border">
              <LogIn className="w-4 h-4 mr-2" />
              <Eye className="w-4 h-4 mr-2" />
              Staff Portal
            </Button>
          </Link>
        </div>
      )}

      {/* Footer with ominous warnings */}
      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950 • <span className="invisible-text">Ending August 8th, 1995</span></p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="The toys are watching">System Status</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> The Prototype Knows</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> yoJ fo ruoH ehT</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Star className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">We are always watching. The children will understand soon.</span>
            <Star className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
