
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Search, LogIn } from "lucide-react";

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
        setHiddenMessage("Staff access codes hidden in plain sight... Look for security personnel ID: staff001, maintenance worker credentials, and Dr. Chen's research notes...");
        setTimeout(() => setHiddenMessage(""), 5000);
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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className={`text-2xl font-bold cursor-pointer transition-all duration-200 ${glitchActive ? 'animate-pulse text-red-400' : 'text-pink-600'}`}
              onClick={handleLogoClick}
            >
              {glitchActive ? 'P̴L̷A̸Y̴T̵I̶M̵E̸ ̶C̷O̵.' : 'PLAYTIME CO.'}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-pink-600 hover:text-pink-800 transition-colors font-medium border-b-2 border-pink-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-700 hover:text-pink-600 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-700 hover:text-pink-600 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
              {secretFound && (
                <Link to="/login" className="text-green-600 hover:text-green-800 transition-colors animate-pulse font-bold">
                  [STAFF LOGIN]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
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
        <h1 className={`text-6xl font-bold mb-6 ${glitchActive ? 'text-red-600' : 'text-pink-600'}`}>
          Welcome to Playtime Co!
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Where imagination comes to life! Creating magical toys and unforgettable experiences for children everywhere since 1950.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
            <Link to="/products">Explore Our Toys</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/factory">Take a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Beloved Characters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                  alt="Poppy Playtime Doll"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Poppy</h3>
              <p className="text-gray-600">The first truly amazing doll!</p>
              <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Subject designation: Original prototype. Dr. Ludwig's first success..."
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                  alt="Huggy Wuggy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Huggy Wuggy</h3>
              <p className="text-gray-600">Your best friend for life!</p>
              <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Experiment 1006. Security clearance required for full documentation..."
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png" 
                  alt="Kissy Missy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Kissy Missy</h3>
              <p className="text-gray-600">Spreading love everywhere!</p>
              <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Subject 1170. Enhanced empathy protocols. Research by dr.chen ongoing..."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values with Hidden Clues */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              At Playtime Co., we believe every child deserves a friend. Our innovative toy manufacturing 
              has revolutionized the industry, creating companions that are more lifelike than ever before.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer" title="Click for employee access info">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge research and development</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Security personnel use playtime123 for basic access..."
                </p>
              </div>
              <div className="text-center group cursor-pointer" title="Maintenance department info">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Love</h3>
                <p className="text-gray-600">Every toy is made with care</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Factory456 - maintenance department access code"
                </p>
              </div>
              <div className="text-center group cursor-pointer" title="Research credentials">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Quality that lasts forever</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Dr. Chen's research notes secured with research789"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Messages */}
      {hiddenMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 text-green-400 p-6 rounded-lg font-mono text-sm max-w-md text-center z-50">
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
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 mx-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Employee Notice:</strong> All staff must use their designated login credentials. 
              Contact Dr. Sawyer (experiment1006) for executive access or Dr. Ludwig (biggerbodies) for special projects.
              <span className="text-xs opacity-50 ml-2">Security ID: staff001</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <p className="text-xs mt-1 opacity-25">
            Employee portal access: /documents (requires authentication)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
