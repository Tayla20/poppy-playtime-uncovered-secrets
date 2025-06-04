
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Eye, Star } from "lucide-react";

const Index = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [mousePositions, setMousePositions] = useState<{x: number, y: number}[]>([]);
  const [morseProgress, setMorseProgress] = useState<string>("");
  const [colorSequence, setColorSequence] = useState<string[]>([]);
  const [timeClicks, setTimeClicks] = useState<number[]>([]);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const morseCodeSequence = ".--.  ---  .--.  .--.  -.--"; // POPPY in morse
  const requiredColorPattern = ["red", "blue", "red", "yellow", "red"]; // Product hover order
  const timingPattern = [1, 2, 1, 2, 3]; // Seconds between clicks

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 12000);

    const handleKeyDown = (event: KeyboardEvent) => {
      // Konami code detection
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setHiddenMessage("◈ SYSTEM ACCESS GRANTED ◈ Employee Database: security123, research789, medical456, factory456, experiment1006, catnap-protocol, biggerbodies. Archive Portal: /documents. Remember: We see everything you do.");
        setTimeout(() => setHiddenMessage(""), 15000);
      }

      // Morse code detection (dots and dashes using . and -)
      if (event.key === '.' || event.key === '-' || event.key === ' ') {
        const newMorse = morseProgress + event.key;
        setMorseProgress(newMorse);
        
        if (newMorse.includes(morseCodeSequence)) {
          setHiddenMessage("--- POPPY PROTOCOL ACTIVATED --- Deep access unlocked. Subject files: /prison. Orphan records: /orphanage. Management oversight: /departments");
          setMorseProgress("");
          setTimeout(() => setHiddenMessage(""), 12000);
        }
        
        if (newMorse.length > 50) setMorseProgress("");
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const newPos = { x: event.clientX, y: event.clientY };
      setMousePositions(prev => [...prev.slice(-100), newPos]);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [konamiSequence, morseProgress]);

  const handleLogoClick = () => {
    const now = Date.now();
    setTimeClicks(prev => [...prev, now]);
    setClickCount(prev => prev + 1);
    
    // Check timing pattern
    if (timeClicks.length >= 4) {
      const intervals = timeClicks.slice(-4).map((time, index, arr) => 
        index > 0 ? Math.round((time - arr[index - 1]) / 1000) : 0
      ).slice(1);
      
      if (JSON.stringify(intervals) === JSON.stringify(timingPattern.slice(0, 3))) {
        setSecretFound(true);
        setHiddenMessage("⚠ TEMPORAL PATTERN RECOGNIZED ⚠ Advanced access protocols enabled. Staff portal is now visible.");
        setTimeout(() => setHiddenMessage(""), 8000);
      }
    }
    
    if (clickCount >= 12) {
      setSecretFound(true);
    }
  };

  const handleProductHover = (color: string) => {
    const newSequence = [...colorSequence, color].slice(-5);
    setColorSequence(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredColorPattern)) {
      setHiddenMessage("☾ COLOR SEQUENCE COMPLETE ☽ The children remember. Hidden pathways revealed. Check the shadows between the lines...");
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

      {/* Header with hidden elements */}
      <header className="bg-slate-900 bg-opacity-60 text-white p-6 shadow-lg border-b border-red-900 static-noise">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg nostalgic-text">
            Welcome to our <span className="invisible-text" title="Something feels wrong here...">wonderful</span> world of toys!
          </div>
          <div className="text-sm opacity-75 hidden-morse" title="Try typing morse code: . - . . - - -">
            <span className="backwards-text">0591 ecniS sdneirf gnikaM</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <h1 className={`text-6xl font-bold mb-6 typing-effect ${glitchActive ? 'text-yellow-400' : 'subtle-glow'}`}>
          Welcome to Playtime Co!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto nostalgic-text">
          Where imagination comes to life! Creating <span className="mystery-reveal text-red-400" title="Or do they create us?">magical toys</span> and unforgettable experiences for children everywhere since 1950.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white card-hover">
            <Link to="/products">Explore Our Toys</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white card-hover">
            <Link to="/factory">Take a Tour</Link>
          </Button>
        </div>
        
        {/* Hidden puzzle element */}
        <div className="mt-8 opacity-10 hover:opacity-30 transition-opacity duration-2000 text-xs">
          <p className="hidden-morse">--- .-. .--. .... .- -. .- --. .</p>
        </div>
      </section>

      {/* Featured Products with color sequence puzzle */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Beloved Characters</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
                <span className="invisible-text">She knows your name</span> • Model: P-001 • Est. 1950
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
                Model: HW-1006 • <span className="backwards-text">llacsid fo tseT</span> • Special Edition
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
                Series: CN-1188 • <span className="invisible-text">The Prototype watches</span> • Dream Collection
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values with hidden department codes */}
      <section className="bg-slate-900 bg-opacity-50 py-16 border-y border-red-700 static-noise">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 nostalgic-text">
              At Playtime Co., we believe every child deserves a <span className="mystery-reveal text-red-400">special</span> friend. 
              Our innovative toy manufacturing has revolutionized the industry, creating companions that are 
              <span className="invisible-text">too</span> lifelike <span className="invisible-text">to be toys</span>.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer card-hover" title="Research & Development">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="font-bold mb-2 nostalgic-text">Innovation</h3>
                <p className="text-gray-300">Cutting-edge research and development</p>
                <div className="text-xs text-gray-600 mt-2 mystery-reveal transition-opacity duration-2000">
                  <span className="hidden-morse">.-. ---.</span> Dept. Code: <span className="invisible-text">research789</span>
                </div>
              </div>
              <div className="text-center group cursor-pointer card-hover" title="Quality Assurance">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2 nostalgic-text">Love</h3>
                <p className="text-gray-300">Every toy is made with <span className="mystery-reveal text-red-400">care</span></p>
                <div className="text-xs text-gray-600 mt-2 mystery-reveal transition-opacity duration-2000">
                  Quality Control: <span className="backwards-text">654yrotcaf</span>
                </div>
              </div>
              <div className="text-center group cursor-pointer card-hover" title="Security Division">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2 nostalgic-text">Excellence</h3>
                <p className="text-gray-300">Quality that lasts <span className="invisible-text">until the end</span></p>
                <div className="text-xs text-gray-600 mt-2 mystery-reveal transition-opacity duration-2000">
                  Security Level: <span className="invisible-text">security123</span> • <span className="hidden-morse">... . -.-. ..- .-. .. - -.--</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with route hints */}
      <section className="bg-slate-800 bg-opacity-30 py-16 border-y border-red-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Playcare Center</h3>
                <p className="text-gray-300">Educational programs for <span className="mystery-reveal text-yellow-400">special</span> children</p>
                <div className="text-xs text-gray-600 mt-2 mystery-reveal transition-opacity duration-2000">
                  <span className="invisible-text">They never leave</span> • Access: <span className="backwards-text">eganahpro/</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Research Facility</h3>
                <p className="text-gray-300">Advanced development <span className="mystery-reveal text-red-500">laboratories</span></p>
                <div className="text-xs text-gray-600 mt-2 mystery-reveal transition-opacity duration-2000">
                  <span className="hidden-morse">-.-. . .-.. .-.. ...</span> • Portal: <span className="invisible-text">/prison</span>
                </div>
              </CardContent>
            </Card>
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

      {/* Multi-layered puzzle hints */}
      <div className="bg-slate-900 bg-opacity-20 border-l-4 border-yellow-600 p-4 mb-8 mx-4 opacity-75 static-noise">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-300 nostalgic-text">
              <strong>Visitor Notice:</strong> All facility tours require advance booking. 
              Contact our <span className="cursor-pointer hover:text-green-400 mystery-reveal" title="Click logo with specific timing">guest services</span> department for scheduling.
              <span className="text-xs opacity-50 ml-2 text-green-400 invisible-text">Sequences unlock secrets</span>
            </p>
            <p className="text-xs mt-2 opacity-30 hidden-morse">
              <span className="backwards-text">ecneuqes roloc :ddeH</span> • <span className="invisible-text">Morse reveals paths</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with additional hidden elements */}
      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="System access points">System Status</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> Portal Access</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> seliF tnemtrapeD</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Star className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">We are always watching</span>
            <Star className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
