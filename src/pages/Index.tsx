
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
      if (Math.random() < 0.05) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 8000);

    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setHiddenMessage("System Access Granted... Personnel Database: security123, research789, medical456, factory456, experiment1006, catnap-protocol. Documentation Portal: /documents");
        setTimeout(() => setHiddenMessage(""), 10000);
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
    if (clickCount >= 9) {
      setSecretFound(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-red-950 shadow-lg sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div 
              className={`text-2xl font-bold cursor-pointer transition-all duration-200 ${glitchActive ? 'animate-pulse text-yellow-400 glitch' : 'text-red-400'}`}
              onClick={handleLogoClick}
              style={{ textShadow: '0 0 10px #dc2626' }}
            >
              {glitchActive ? 'P̴L̷A̸Y̴T̵I̶M̵E̸ ̶C̷O̵.' : 'PLAYTIME CO.'}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
              {secretFound && (
                <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold">
                  [ACCESS]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
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
        <h1 className={`text-6xl font-bold mb-6 ${glitchActive ? 'text-yellow-400' : 'text-red-400'}`} style={{ textShadow: '0 0 20px #dc2626' }}>
          Welcome to Playtime Co!
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Where imagination comes to life! Creating magical toys and unforgettable experiences for children everywhere since 1950.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link to="/products">Explore Our Toys</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
            <Link to="/factory">Take a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-400" style={{ textShadow: '0 0 15px #dc2626' }}>Our Beloved Characters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                  alt="Poppy Playtime Doll"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400">Poppy</h3>
              <p className="text-gray-300">The first truly amazing doll!</p>
              <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                Est. 1950 - ID: P001
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                  alt="Huggy Wuggy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400">Huggy Wuggy</h3>
              <p className="text-gray-300">Your best friend for life!</p>
              <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                Model: HW-1006 - Special Edition
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png" 
                  alt="CatNap"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-400">CatNap</h3>
              <p className="text-gray-300">Sweet dreams guaranteed!</p>
              <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                Series: SC-1188 - Dream Collection
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-red-950 bg-opacity-50 py-16 border-y border-red-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-400">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              At Playtime Co., we believe every child deserves a friend. Our innovative toy manufacturing 
              has revolutionized the industry, creating companions that are more lifelike than ever before.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer" title="Innovation">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge research and development</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Est. Department Code: R&D-789
                </div>
              </div>
              <div className="text-center group cursor-pointer" title="Quality">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Love</h3>
                <p className="text-gray-300">Every toy is made with care</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Quality Control: FC-456
                </div>
              </div>
              <div className="text-center group cursor-pointer" title="Excellence">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">Quality that lasts forever</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Security Level: S-123
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-red-950 bg-opacity-30 py-16 border-y border-red-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-400">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold mb-2 text-red-400">Playcare Center</h3>
                <p className="text-gray-300">Educational programs for young minds</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Access Portal: /orphanage
                </div>
              </CardContent>
            </Card>
            <Card className="bg-red-900 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-bold mb-2 text-red-400">Research Facility</h3>
                <p className="text-gray-300">Advanced development laboratories</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Facility Code: /prison
                </div>
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

      {/* Hidden Staff Access */}
      {secretFound && (
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Link to="/login">
            <Button variant="destructive" size="sm" className="bg-green-600 hover:bg-green-700">
              <LogIn className="w-4 h-4 mr-2" />
              Staff Portal
            </Button>
          </Link>
        </div>
      )}

      {/* Subtle Employee Notice */}
      <div className="bg-red-950 bg-opacity-20 border-l-4 border-yellow-600 p-4 mb-8 mx-4 opacity-75">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-300">
              <strong>Visitor Notice:</strong> All facility tours require advance booking. 
              Contact our <span className="cursor-pointer hover:text-green-400" title="Hidden: Try clicking logo 10 times">guest services</span> department for scheduling.
              <span className="text-xs opacity-50 ml-2 text-green-400">Advanced access: Arrow navigation sequence</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default" title="Admin Routes">
            <span className="hover:text-green-400 transition-colors">System Status</span> | 
            <span className="hover:text-green-400 transition-colors"> Portal Access</span> | 
            <span className="hover:text-green-400 transition-colors"> Department Files</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
