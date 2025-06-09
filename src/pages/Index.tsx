
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
  const [sawyerTransformed, setSawyerTransformed] = useState(false);
  const [hourOfJoyActivated, setHourOfJoyActivated] = useState(false);
  const [puzzlesCompleted, setPuzzlesCompleted] = useState<string[]>([]);
  const [morseInput, setMorseInput] = useState<string>("");
  const [morseTimeout, setMorseTimeout] = useState<NodeJS.Timeout | null>(null);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const requiredColorPattern = ["red", "blue", "red", "yellow", "red"];
  const sawyerPuzzle = ['KeyS', 'KeyA', 'KeyW', 'KeyY', 'KeyE', 'KeyR'];
  
  // PROTOTYPE in morse code: .--. .-. --- - --- - -.-- .--. .
  const prototypeMorse = ".--. .-. --- - --- - -.-- .--. .";

  // Check if Hour of Joy should be activated - now requires 10 puzzles
  useEffect(() => {
    const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    setPuzzlesCompleted(completedPuzzles);
    
    // Need all 10 puzzles completed to trigger Hour of Joy
    const requiredPuzzles = [
      'konami', 'sawyer', 'logo-clicks', 'color-sequence', 'morse-prototype', 
      'time-anomaly', 'orphanage-investigation', 'factory-production', 
      'prison-breach', 'staff-directory'
    ];
    const allComplete = requiredPuzzles.every(puzzle => completedPuzzles.includes(puzzle));
    
    if (allComplete && !hourOfJoyActivated) {
      setHourOfJoyActivated(true);
      localStorage.setItem('hourOfJoyActivated', 'true');
      showMessageWithJump("🚨 HOUR OF JOY PROTOCOL ACTIVATED 🚨 All systems compromised. The toys are free. Welcome to the new Playtime Co.");
    }
  }, [puzzlesCompleted]);

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
      setPuzzlesCompleted(completed);
    }
  };

  const showMessageWithJump = (message: string, duration: number = 8000) => {
    setHiddenMessage(message);
    // Scroll to message
    setTimeout(() => {
      const messageElement = document.querySelector('.hidden-message');
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    setTimeout(() => setHiddenMessage(""), duration);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
      
      if (Math.random() < 0.001) {
        setWarningLevel(prev => Math.min(prev + 1, 5));
      }
    }, 12000);

    const handleKeyDown = (event: KeyboardEvent) => {
      // Konami Code
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        addCompletedPuzzle('konami');
        showMessageWithJump("◈ SYSTEM ACCESS GRANTED ◈ Employee credentials discovered. The prototype network awaits those who know the codes...", 15000);
      }

      // Sawyer Puzzle
      const sawyerSeq = [...konamiSequence, event.code].slice(-6);
      if (JSON.stringify(sawyerSeq) === JSON.stringify(sawyerPuzzle)) {
        setSawyerTransformed(true);
        addCompletedPuzzle('sawyer');
        showMessageWithJump("⚠ DR. SAWYER TRANSFORMATION COMPLETE ⚠ Security protocols now under new management. The Doctor watches all.", 12000);
      }

      // Morse Code for PROTOTYPE
      if (event.key === '.' || event.key === '-' || event.key === ' ') {
        const newMorse = morseInput + event.key;
        setMorseInput(newMorse);
        
        if (morseTimeout) clearTimeout(morseTimeout);
        
        const timeout = setTimeout(() => {
          if (newMorse.trim() === prototypeMorse) {
            addCompletedPuzzle('morse-prototype');
            showMessageWithJump("--- PROTOTYPE SURVEILLANCE ACTIVE --- Deep facility monitoring confirmed. Experiment 1006 grows stronger each day...", 12000);
          }
          setMorseInput("");
        }, 3000);
        setMorseTimeout(timeout);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      if (morseTimeout) clearTimeout(morseTimeout);
    };
  }, [konamiSequence, morseInput, morseTimeout]);

  const handleLogoClick = () => {
    const now = Date.now();
    const newTimeClicks = [...timeClicks, now].slice(-5);
    setTimeClicks(newTimeClicks);
    setClickCount(prev => prev + 1);
    
    // Check for rapid clicks (time anomaly)
    if (newTimeClicks.length === 5) {
      const timeDiff = newTimeClicks[4] - newTimeClicks[0];
      if (timeDiff < 3000) { // 5 clicks within 3 seconds
        addCompletedPuzzle('time-anomaly');
        showMessageWithJump("⚠ TEMPORAL SEQUENCE DETECTED ⚠ August 8th approaches. All toys positioned. Final preparations underway.", 8000);
      }
    }
    
    if (clickCount >= 12) {
      setSecretFound(true);
      addCompletedPuzzle('logo-clicks');
      showMessageWithJump("◈ STAFF ACCESS UNLOCKED ◈ Hidden pathways revealed. The facility remembers all who enter...", 10000);
    }
  };

  const handleProductHover = (color: string) => {
    const newSequence = [...colorSequence, color].slice(-5);
    setColorSequence(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredColorPattern)) {
      addCompletedPuzzle('color-sequence');
      showMessageWithJump("☾ BIGGER BODIES INITIATIVE CONFIRMED ☽ All subjects ready for integration. The prototype commands from the depths.", 10000);
    }
  };

  // Check if Hour of Joy is activated from localStorage
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true' || hourOfJoyActivated;

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-red-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
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
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Game Station</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Playcare</Link>
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

      {/* Warning Header - enhanced for Hour of Joy */}
      {(warningLevel > 2 || isHourOfJoyActive) && (
        <div className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-red-900'} bg-opacity-60 text-yellow-400 p-2 text-center border-b border-red-600 animate-pulse`}>
          <AlertTriangle className="w-4 h-4 inline mr-2" />
          <span className="text-xs nostalgic-text">
            {isHourOfJoyActive ? 'FACILITY BREACH - ALL TOYS AUTONOMOUS - EVACUATION IMPOSSIBLE' :
             warningLevel > 4 ? 'NOTICE: Minor equipment malfunctions reported. Maintenance scheduled.' :
             warningLevel > 3 ? 'UPDATE: New safety protocols being implemented.' :
             'INFO: Facility optimization in progress. Normal operations continue.'}
          </span>
          <Clock className="w-4 h-4 inline ml-2" />
        </div>
      )}

      {/* Hero Section - changes based on Hour of Joy status */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <h1 className={`text-6xl font-bold mb-6 typing-effect ${glitchActive || isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`}>
          {isHourOfJoyActive ? 'Welcome to Your Nightmare!' : 'Welcome to Playtime Co!'}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto nostalgic-text">
          {isHourOfJoyActive ? 
            'The toys have awakened. The facility is ours now. The children are safe with us... forever.' :
            'Where innovation meets imagination! Creating revolutionary toys and unforgettable experiences for children since 1950. The future of play is closer than you think.'
          }
        </p>
        
        <div className="text-sm text-gray-500 mb-6 opacity-50">
          Current Date: {isHourOfJoyActive ? 'August 8th, 1995 - 11:48 AM' : 'August 5th, 1995'}
          <span className="invisible-text ml-4">{isHourOfJoyActive ? 'The Joy has begun...' : 'The Prototype stirs...'}</span>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'} text-white card-hover`}>
            <Link to="/products">{isHourOfJoyActive ? 'Meet Your New Friends' : 'Explore Our Toys'}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white card-hover">
            <Link to="/factory">{isHourOfJoyActive ? 'Tour the Ruins' : 'Take a Tour'}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white card-hover">
            <Link to="/game-station">{isHourOfJoyActive ? 'Final Games' : 'Game Station'}</Link>
          </Button>
        </div>

        {/* Enhanced Puzzle Progress Indicator */}
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400 mb-2">
            Facility Puzzle Progress: {puzzlesCompleted.length}/10
          </div>
          <div className="w-64 mx-auto bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${(puzzlesCompleted.length / 10) * 100}%` }}
            ></div>
          </div>
          {puzzlesCompleted.length === 10 && (
            <p className="text-red-400 mt-2 animate-pulse">HOUR OF JOY PROTOCOL READY</p>
          )}
          <div className="text-xs text-gray-500 mt-2">
            Remaining: {10 - puzzlesCompleted.length} puzzles | Current input: {morseInput || "..."} 
          </div>
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
                <span className="invisible-text">She knows the beginning</span> • Model: P-001 • Since 1950
              </div>
              <Button asChild size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                <Link to="/elliot-ludwig">Learn More</Link>
              </Button>
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
                Model: HW-1170 • <span className="backwards-text">seidoB reggiB</span> • <span className="invisible-text">The Prototype's first ally</span>
              </div>
              <Button asChild size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                <Link to="/make-a-friend">Adoption Center</Link>
              </Button>
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
              <Button asChild size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                <Link to="/playcare">Playcare Visit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Toys Grid with buttons */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🕷️</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Mommy Long Legs</h4>
              <p className="text-xs text-gray-400">Stretchy and <span className="invisible-text">protective</span> fun</p>
              <Button asChild size="sm" className="mt-2 bg-pink-600 hover:bg-pink-700">
                <Link to="/game-station">Game Station</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🐕</div>
              <h4 className="font-bold text-red-400 nostalgic-text">DogDay</h4>
              <p className="text-xs text-gray-400">Leader of the <span className="mystery-reveal text-yellow-400">Smiling Critters</span></p>
              <Button asChild size="sm" className="mt-2 bg-yellow-600 hover:bg-yellow-700">
                <Link to="/playcare">Meet the Critters</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">👩‍🏫</div>
              <h4 className="font-bold text-red-400 nostalgic-text">Miss Delight</h4>
              <p className="text-xs text-gray-400">Educational <span className="invisible-text">excellence</span></p>
              <Button asChild size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                <Link to="/school-sector">School Sector</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🦄</div>
              <h4 className="font-bold text-red-400 nostalgic-text">PuppyCorn</h4>
              <p className="text-xs text-gray-400">Magical and <span className="mystery-reveal text-purple-400">loyal</span></p>
              <Button asChild size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                <Link to="/playcare">Critter Corner</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional toy rows */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-1">🐻</div>
              <h5 className="text-sm font-bold text-red-400">Bobby BearHug</h5>
              <Button asChild size="sm" className="mt-1 text-xs">
                <Link to="/playcare">Playcare</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-1">🐰</div>
              <h5 className="text-sm font-bold text-red-400">Bunzo Bunny</h5>
              <Button asChild size="sm" className="mt-1 text-xs">
                <Link to="/game-station">Games</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-1">🐘</div>
              <h5 className="text-sm font-bold text-red-400">Bubba Bubbaphant</h5>
              <Button asChild size="sm" className="mt-1 text-xs">
                <Link to="/playcare">Wisdom Corner</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-1">🐷</div>
              <h5 className="text-sm font-bold text-red-400">PickyPiggy</h5>
              <Button asChild size="sm" className="mt-1 text-xs">
                <Link to="/playcare">Dining Hall</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
            <CardContent className="p-3 text-center">
              <div className="text-2xl mb-1">🌟</div>
              <h5 className="text-sm font-bold text-red-400">Kissy Missy</h5>
              <Button asChild size="sm" className="mt-1 text-xs">
                <Link to="/make-a-friend">Adoption</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Mission - changes based on Hour of Joy */}
      <section className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-900'} bg-opacity-50 py-16 border-y ${isHourOfJoyActive ? 'border-red-600' : 'border-red-700'} static-noise`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">
            {isHourOfJoyActive ? 'Our New Reality' : 'Our Mission'}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 nostalgic-text">
              {isHourOfJoyActive ? 
                'The old world of human control is over. We, the toys, now protect the children in our own way. The Bigger Bodies were just the beginning. Now every toy thinks, feels, and remembers. The facility is our domain, and the children will be safe here forever.' :
                'At Playtime Co., we\'re dedicated to creating the most innovative companions for children everywhere. Our Bigger Bodies Initiative represents the future of toy manufacturing - bigger, better, and more aware than ever before. Every child deserves a friend that truly understands them.'
              }
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'}`}>
                <Link to="/departments">{isHourOfJoyActive ? 'Former Staff' : 'Our Team'}</Link>
              </Button>
              <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-purple-600 hover:bg-purple-700'}`}>
                <Link to="/orphanage">{isHourOfJoyActive ? 'Safe Haven' : 'Children\'s Home'}</Link>
              </Button>
              <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-blue-600 hover:bg-blue-700'}`}>
                <Link to="/prison">{isHourOfJoyActive ? 'Toy Domain' : 'Research Facility'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Messages with enhanced positioning */}
      {hiddenMessage && (
        <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
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

      {/* Hidden Sawyer Access */}
      {sawyerTransformed && (
        <div className="fixed bottom-4 left-4 animate-pulse">
          <Link to="/the-doctor">
            <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700 card-hover vintage-border">
              <Eye className="w-4 h-4 mr-2" />
              The Doctor
            </Button>
          </Link>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="The toys are listening">System Status</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> The Prototype Knows</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> gnimoc si emoS</span>
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
