
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Shield, Zap } from "lucide-react";

const Products = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [productSequence, setProductSequence] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [interactionCount, setInteractionCount] = useState(0);

  const requiredSequence = ["poppy", "huggy", "catnap", "poppy", "huggy"]; // Product hover sequence

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleProductHover = (product: string) => {
    const newSequence = [...productSequence, product].slice(-5);
    setProductSequence(newSequence);
    setInteractionCount(prev => prev + 1);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredSequence)) {
      setSecretFound(true);
      setHiddenMessage("⬢ PRODUCT SEQUENCE RECOGNIZED ⬢ Advanced catalog access unlocked. The toys remember their creation order.");
      setTimeout(() => setHiddenMessage(""), 10000);
    }

    if (interactionCount >= 8) {
      setHiddenMessage("◈ EXTENSIVE BROWSING DETECTED ◈ Hidden model specifications now visible. Each creation has its purpose...");
      setTimeout(() => setHiddenMessage(""), 8000);
    }
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : 'subtle-glow'}`} data-text="PLAYTIME CO.">
              {glitchActive ? 'P̴L̸A̷Y̶T̵I̴M̸E̵ ̶C̷O̸.' : 'PLAYTIME CO.'}
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">About Us</Link>
              <Link to="/products" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
              {secretFound && (
                <Link to="/documents" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                  [⬢ FILES ⬢]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-slate-900 bg-opacity-60 text-white p-6 shadow-lg border-b border-red-900 static-noise">
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold flex items-center ${glitchActive ? 'text-yellow-400' : 'subtle-glow'}`}>
            <Star className="w-8 h-8 mr-3" />
            Our Beloved Collection
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">Discover the <span className="invisible-text">magic</span> of friendship</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Our Stars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
              onMouseEnter={() => handleProductHover("poppy")}
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
                <p className="text-gray-300 nostalgic-text">The first truly <span className="mystery-reveal text-yellow-400">perfect</span> doll!</p>
                <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                  <span className="invisible-text">She remembers everything</span> • Model: <span className="backwards-text">100-P</span> • Est. 1950
                </div>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">.- .-.. .. ...- .</span> • Series One
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
              onMouseEnter={() => handleProductHover("huggy")}
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
                <p className="text-gray-300 nostalgic-text">Your best friend <span className="mystery-reveal text-blue-400">forever and ever</span>!</p>
                <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                  Model: <span className="backwards-text">6001-WH</span> • <span className="invisible-text">Enhanced size protocol</span> • Special Edition
                </div>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">..-. .-. .. . -. -..</span> • Bigger Bodies Initiative
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
              onMouseEnter={() => handleProductHover("catnap")}
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
                <p className="text-gray-300 nostalgic-text">Sweet dreams <span className="mystery-reveal text-purple-400">are guaranteed</span>!</p>
                <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
                  Series: <span className="backwards-text">8811-NC</span> • <span className="invisible-text">Sleep protocol active</span> • Dream Collection
                </div>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">... .-.. . . .--.</span> • Prototype Guardian
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Classic Friends</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Timeless companions for <span className="mystery-reveal text-yellow-400">every</span> child</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Original line since 1950</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Bigger Bodies</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Revolutionary <span className="mystery-reveal text-blue-400">life-size</span> experiences</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">ygolonhceT</span> • <span className="hidden-morse">-... .. --.</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Smiling Critters</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Joyful friends for <span className="mystery-reveal text-green-400">playtime</span> adventures</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Educational program line</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Special Editions</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Limited releases with <span className="mystery-reveal text-purple-400">unique</span> features</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">stcejorP laicepS</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">What Makes Us Special</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">Innovation in Every Detail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">Advanced Features</h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• <span className="mystery-reveal text-yellow-400">Lifelike</span> movements and responses</li>
                      <li>• Interactive <span className="invisible-text">consciousness</span> technology</li>
                      <li>• Emotional bonding capabilities</li>
                      <li>• Educational program integration</li>
                      <li>• <span className="backwards-text">ytilanostreP</span> development features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">Safety & Quality</h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• Rigorous testing protocols</li>
                      <li>• <span className="mystery-reveal text-green-400">Premium</span> materials only</li>
                      <li>• Child psychology consultation</li>
                      <li>• Continuous improvement program</li>
                      <li>• <span className="invisible-text">Containment</span> safety measures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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

        {/* Customer Notice */}
        <div className="bg-slate-900 bg-opacity-20 border-l-4 border-yellow-600 p-4 mb-8 opacity-75 static-noise">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-300 nostalgic-text">
                <strong>Product Notice:</strong> All Playtime Co. toys undergo extensive testing and quality assurance. 
                For detailed product specifications and <span className="cursor-pointer hover:text-green-400 mystery-reveal" title="Special access">advanced features</span>, 
                authorized retailers may access our comprehensive catalog.
              </p>
              <p className="text-xs mt-2 opacity-30 hidden-morse">
                <span className="backwards-text">ecneuqes tcudorP</span> • <span className="invisible-text">Sequence reveals catalog</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="Product catalog">Toy Catalog</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> /documents</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> snoitacificepS</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Star className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">Every toy has a story</span>
            <Star className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
