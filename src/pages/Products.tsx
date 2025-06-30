import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";
import { Search, Eye, Key } from "lucide-react";

const Products = () => {
  const { 
    secretFound,
    puzzlesCompleted,
    handleProductHover
  } = usePuzzleSystem();

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('products');
  }, []);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  const products = [
    {
      id: 'huggy-wuggy',
      name: 'Huggy Wuggy',
      description: isPhase2Active ? 
        'Blue guardian of the facility. You remember his creation... the screams during synthesis...' :
        isHourOfJoyActive ? 
          'The blue beast that guards the factory. Endless hugs in the darkness. Created by Mike during the nightshift of 1995.' :
          'Our most popular blue friend! Huggy Wuggy loves to give the biggest hugs!',
      price: isHourOfJoyActive ? 'PRICE: YOUR SOUL' : '$29.99',
      color: 'blue',
      clue: isHourOfJoyActive ? 'Security personnel worked nightshifts since 1995...' : '',
      staff: 'Night Security: security.mike'
    },
    {
      id: 'mommy-long-legs',
      name: 'Mommy Long Legs',
      description: isPhase2Active ?
        'The games never end. She remembers every child who played in Game Station...' :
        isHourOfJoyActive ? 
          'The eternal game master. She knows the psychology behind every game - Dr. Chen studied case 101.' :
          'Stretchy and playful! Mommy Long Legs makes playtime last forever!',
      price: isHourOfJoyActive ? 'PRICE: ENDLESS GAMES' : '$39.99',
      color: 'red',
      clue: isHourOfJoyActive ? 'Psychology research focused on case studies starting with 101...' : '',
      staff: 'Research: dr.chen'
    },
    {
      id: 'poppy-playtime',
      name: 'Poppy Playtime Doll',
      description: isPhase2Active ?
        'The doll speaks in binary. You remember her awakening... the digital consciousness...' :
        isHourOfJoyActive ?
          'The doll that started it all. Her digital signature is the key. The binary code unlocks her secrets.' :
          'Our classic doll! Poppy Playtime is always ready for an adventure!',
      price: isHourOfJoyActive ? 'PRICE: DIGITAL SOUL' : '$49.99',
      color: 'pink',
      clue: isHourOfJoyActive ? 'The doll speaks in binary. Her digital signature is the key...' : '',
      staff: 'Digital Signature: binary-poppy'
    },
    {
      id: 'catnap',
      name: 'CatNap',
      description: isPhase2Active ?
        'The red smoke embraces you. You remember the eternal sleep... the children\'s dreams...' :
        isHourOfJoyActive ?
          'The red gas is his blessing. Sleep is eternal. The children\'s dreams never end.' :
          'Our sleepy friend! CatNap loves to cuddle and take long naps!',
      price: isHourOfJoyActive ? 'PRICE: ETERNAL SLEEP' : '$59.99',
      color: 'purple',
      clue: isHourOfJoyActive ? 'The red gas is his blessing. Sleep is eternal...' : '',
      staff: 'Chemical Division: red-gas'
    },
    {
      id: 'prototype-1170',
      name: 'Prototype Series 1170',
      description: isPhase2Active ?
        'You remember this prototype... Pierre worked on the special projects. The number haunts your memories.' :
        isHourOfJoyActive ?
          'Special project coordinated by Leith Pierre. Prototype 1170 was the breakthrough that changed everything.' :
          'Limited edition prototype series! Advanced features for special collectors.',
      price: isHourOfJoyActive ? 'PRICE: CLASSIFIED' : '$199.99',
      color: 'yellow',
      clue: isHourOfJoyActive ? 'Special projects coordinator: leith.pierre, worked on prototype1170' : '',
      staff: 'Special Projects: leith.pierre'
    }
  ];

  return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'poppy-gradient')} text-white`}>
      {/* Navigation */}
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b ${isPhase2Active ? 'border-blue-500' : (isHourOfJoyActive ? 'border-red-500' : 'border-purple-500')}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-medium border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'}`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        
        {/* Add Staff Access Hints Section */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-yellow-500 mb-8`}>
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Product Development Team Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-yellow-300 font-bold mb-2">Development Staff:</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">🧸 Huggy Wuggy - Night security oversight (1995 protocols)</p>
                    <p className="text-gray-300">🎮 Game Station toys - Psychology case studies (101 series)</p>
                    <p className="text-gray-300">🔬 Advanced prototypes - Executive bigger vision</p>
                    <p className="text-gray-300">⚡ Special series - Prototype 1170 coordination</p>
                    <p className="text-gray-300">🏥 Medical supervision - Doctor knows weakness</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-yellow-300 font-bold mb-2">Access Patterns:</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>🔑 security.{'{name}'} / {'{shift + year}'}</p>
                    <p>🔑 dr.{'{lastname}'} / {'{specialty + number}'}</p>
                    <p>🔑 {'{name.lastname}'} / {'{project + number}'}</p>
                    <p>🔑 the.{'{title}'} / {'{predecessor-weakness}'}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-yellow-200 text-sm">
                  💡 Look for login access by completing puzzles or finding hidden portals
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Products Grid with enhanced clues */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Consciousness Vessels' : (isHourOfJoyActive ? 'Living Nightmares' : 'Our Product Line')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500 hover:border-purple-400`}
                onMouseEnter={() => handleProductHover(product.color)}
              >
                <CardHeader>
                  <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  {product.clue && (
                    <div className="mb-4 p-3 border border-yellow-500 bg-yellow-900 bg-opacity-20 rounded">
                      <p className="text-yellow-300 text-sm">
                        🔍 <strong>Staff Clue:</strong> {product.clue}
                      </p>
                      <p className="text-yellow-200 text-xs mt-1">
                        Access: {product.staff}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-lg font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}
                    >
                      {isPhase2Active ? 'Remember' : (isHourOfJoyActive ? 'Accept Fate' : 'Learn More')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Staff Portal Access */}
        
        {(secretFound || puzzlesCompleted.length > 5) && (
          <section className="text-center mb-16">
            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500 max-w-md mx-auto`}>
              <CardHeader>
                <CardTitle className="text-green-400">🔓 Staff Access Unlocked</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  Advanced puzzle completion detected. Staff portal access granted.
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white w-full">
                  <Link to="/login">
                    <Eye className="w-4 h-4 mr-2" />
                    Access Staff Portal
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Navigation Links */}
        <section className="text-center">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/factory">Factory Tour</Link>
            </Button>
             <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/about">About Us</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/departments">Staff Directory</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
