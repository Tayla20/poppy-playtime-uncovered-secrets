import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn } from "lucide-react";

const Index = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 5000);

    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setHiddenMessage("Staff credentials found... Security: security123, Research: research789, Medical: medical456, Maintenance: factory456, Executive: experiment1006, Special Projects: catnap-protocol. Access portal: /documents");
        setTimeout(() => setHiddenMessage(""), 8000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiSequence]);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 6) {
      setSecretFound(true);
    }
  };

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className={`text-2xl font-bold cursor-pointer transition-all duration-200 ${glitchActive ? 'animate-pulse text-red-400 glitch' : 'text-purple-400 poppy-text-glow'}`}
              onClick={handleLogoClick}
            >
              {glitchActive ? 'P̴L̷A̸Y̴T̵I̶M̵E̸ ̶C̷O̵.' : 'PLAYTIME CO.'}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors font-medium border-b-2 border-purple-400">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-purple-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-purple-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
              {secretFound && (
                <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold">
                  [STAFF LOGIN]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-purple-900 text-white p-6 shadow-lg border-b border-purple-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg">
            Welcome to our magical world of toys!
          </div>
          <div className="text-sm opacity-75">
            Making friends since 1950
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className={`text-6xl font-bold mb-6 ${glitchActive ? 'text-red-400' : 'text-purple-400 poppy-text-glow'}`}>
          Welcome to Playtime Co!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Where imagination comes to life! Creating magical toys and unforgettable experiences for children everywhere since 1950.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link to="/products">Explore Our Toys</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            <Link to="/factory">Take a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 poppy-text-glow">Our Beloved Characters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-purple-500 hover:border-red-500 hover:shadow-xl transition-all duration-300 group poppy-card-glow">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                  alt="Poppy Playtime Doll"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Poppy</h3>
              <p className="text-gray-300">The first truly amazing doll!</p>
              <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Original prototype. Dr. Ludwig's first success. Access /orphanage for selection records..."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-purple-500 hover:border-red-500 hover:shadow-xl transition-all duration-300 group poppy-card-glow">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                  alt="Huggy Wuggy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Huggy Wuggy</h3>
              <p className="text-gray-300">Your best friend for life!</p>
              <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Subject 1006. Containment status: Check /prison for current behavioral analysis..."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-purple-500 hover:border-red-500 hover:shadow-xl transition-all duration-300 group poppy-card-glow">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png" 
                  alt="CatNap"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">CatNap</h3>
              <p className="text-gray-300">Sweet dreams guaranteed!</p>
              <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Prototype 1188. Red smoke sedative. Theodore Grambell. Visit /departments for protocol access..."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values with Hidden Clues */}
      <section className="bg-slate-800 py-16 border-y border-purple-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              At Playtime Co., we believe every child deserves a friend. Our innovative toy manufacturing 
              has revolutionized the industry, creating companions that are more lifelike than ever before.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer" title="Click for employee access info">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge research and development</p>
                <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Security personnel use playtime123 for basic access..."
                </p>
              </div>
              <div className="text-center group cursor-pointer" title="Maintenance department info">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Love</h3>
                <p className="text-gray-300">Every toy is made with care</p>
                <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Factory456 - maintenance department access code"
                </p>
              </div>
              <div className="text-center group cursor-pointer" title="Research credentials">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">Quality that lasts forever</p>
                <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Dr. Chen's research notes secured with research789"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Facilities Section */}
      <section className="bg-slate-800 py-16 border-y border-purple-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900 border-purple-500 group cursor-pointer hover:border-red-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold mb-2 text-purple-400">Playcare Orphanage</h3>
                <p className="text-gray-300">Loving homes for children in need</p>
                <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Special adoption program. Missing children reports. Access: playcare2024"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-purple-500 group cursor-pointer hover:border-red-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold mb-2 text-purple-400">Research Facility</h3>
                <p className="text-gray-300">Advanced behavioral studies</p>
                <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Subject containment protocols. Staff missing. Check /prison status"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hidden Messages */}
      {hiddenMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400">
          {hiddenMessage}
        </div>
      )}

      {/* Hidden Elements */}
      {secretFound && (
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Link to="/login">
            <Button variant="destructive" size="sm" className="bg-green-600 hover:bg-green-700">
              <LogIn className="w-4 h-4 mr-2" />
              Staff Access
            </Button>
          </Link>
        </div>
      )}

      {/* Employee Notice (Hidden Clue) */}
      <div className="bg-slate-800 border-l-4 border-yellow-500 p-4 mb-8 mx-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-300">
              <strong>Employee Notice:</strong> All staff must use designated login credentials. 
              Contact Dr. Sawyer (experiment1006) for executive access, Dr. Ludwig (biggerbodies) for special projects,
              or visit /departments for organizational structure.
              <span className="text-xs opacity-50 ml-2 text-green-400">Quick access: Konami code reveals all credentials</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <p className="text-xs mt-1 opacity-50 text-purple-400">
            Employee portal: /documents | Facility tours: /orphanage /prison /departments
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
