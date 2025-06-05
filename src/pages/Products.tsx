
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, Gift, ShoppingCart, Eye, Skull, AlertTriangle, Zap } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [horrorMode, setHorrorMode] = useState(false);
  const [showClue, setShowClue] = useState("");
  const [interactionCount, setInteractionCount] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setHorrorMode(true);
        setTimeout(() => setHorrorMode(false), 3000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const showRandomClue = (source: string) => {
    const clues = [
      "🔍 CLUE: The toys remember every child who played with them...",
      "🔍 CLUE: Bigger Bodies technology uses organic components for power",
      "🔍 CLUE: Poppy was the first successful consciousness transfer",
      "🔍 CLUE: The GrabPack was designed for facility maintenance, not toys",
      "🔍 CLUE: Each toy line represents a different experiment in awareness",
      "🔍 CLUE: The prototype network connects all conscious toys",
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    setShowClue(`${source}: ${randomClue}`);
    setTimeout(() => setShowClue(""), 6000);
  };

  const handleProductInteraction = () => {
    setInteractionCount(prev => prev + 1);
    if (interactionCount >= 5) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('products-catalog')) {
        currentProgress.push('products-catalog');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
        setShowClue("PUZZLE SOLVED: Product analysis complete. The toys' true nature revealed.");
      }
    }
  };

  const products = [
    {
      id: 1,
      name: isHourOfJoyActive ? "Huggy Wuggy [AUTONOMOUS]" : "Huggy Wuggy",
      category: "bigger-bodies",
      price: isHourOfJoyActive ? "PRICELESS" : "$99.99",
      description: isHourOfJoyActive ? 
        "17-foot autonomous guardian. No longer for sale - now chooses its own companions." :
        "Our most beloved friend! This 17-foot tall blue companion provides endless hugs and friendship.",
      features: isHourOfJoyActive ? 
        ["Sentient AI", "Protective instincts", "Permanent attachment", "Never lets go"] :
        ["Extra soft fur", "Extendable arms", "Interactive responses", "Perfect for hugs"],
      status: isHourOfJoyActive ? "ACTIVE" : "Best Seller",
      image: "🤗",
      darkTruth: "Contains consciousness of former employee Thomas Clarke. Protective programming corrupted into possessiveness."
    },
    {
      id: 2,
      name: isHourOfJoyActive ? "Poppy [THE ORIGINAL]" : "Poppy Playtime Doll",
      category: "classic",
      price: isHourOfJoyActive ? "NOT FOR SALE" : "$29.99",
      description: isHourOfJoyActive ?
        "The first success. The template for all others. She knows everything that happened here." :
        "Our signature doll with beautiful vintage styling and real talking features!",
      features: isHourOfJoyActive ?
        ["Original consciousness", "Complete memory retention", "Facility knowledge", "Escape protocols"] :
        ["Real hair", "Vintage dress", "Voice activation", "Collectible design"],
      status: isHourOfJoyActive ? "IMPRISONED" : "Limited Edition",
      image: "👧",
      darkTruth: "First successful consciousness transfer. Retains all memories of the transformation process."
    },
    {
      id: 3,
      name: isHourOfJoyActive ? "Kissy Missy [EMPATHIC UNIT]" : "Kissy Missy",
      category: "bigger-bodies", 
      price: isHourOfJoyActive ? "COMPANION STATUS" : "$89.99",
      description: isHourOfJoyActive ?
        "Emotional support unit. Unlike her counterparts, she retained her caring nature." :
        "The caring companion! This gentle giant provides comfort and emotional support.",
      features: isHourOfJoyActive ?
        ["Empathy protocols intact", "Protective of humans", "Emotional stability", "Potential ally"] :
        ["Soft pink fur", "Gentle personality", "Comforting presence", "Great listener"],
      status: isHourOfJoyActive ? "ALLIED" : "New Release",
      image: "💋",
      darkTruth: "Consciousness transfer of Stella Greyber. Empathy programming remained stable."
    },
    {
      id: 4,
      name: isHourOfJoyActive ? "Mini Huggies [SWARM UNITS]" : "Mini Huggy Collection",
      category: "collectibles",
      price: isHourOfJoyActive ? "LEGION" : "$19.99 each",
      description: isHourOfJoyActive ?
        "Smaller but no less dangerous. They move in coordinated groups and learn from each other." :
        "Collect all the adorable mini versions of your favorite Huggy Wuggy!",
      features: isHourOfJoyActive ?
        ["Hive mind connectivity", "Pack hunting behavior", "Coordinated attacks", "Rapid learning"] :
        ["Multiple colors", "Pocket-sized", "Soft materials", "Perfect for travel"],
      status: isHourOfJoyActive ? "HUNTING" : "Popular",
      image: "🧸",
      darkTruth: "Prototype testing ground for distributed consciousness. Each unit shares collective knowledge."
    }
  ];

  const categories = [
    { id: "all", name: isHourOfJoyActive ? "All Entities" : "All Products" },
    { id: "bigger-bodies", name: isHourOfJoyActive ? "Autonomous Units" : "Bigger Bodies" },
    { id: "classic", name: isHourOfJoyActive ? "Original Experiments" : "Classic Line" },
    { id: "collectibles", name: isHourOfJoyActive ? "Swarm Types" : "Collectibles" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-red-400 border-b border-red-400">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-pink-900 to-purple-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Gift className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Autonomous Entities' : 'Our Products'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-pink-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 'No longer for sale - they choose their own companions' : 'Discover magical friends that will stay with you forever'}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Alert Banner for Hour of Joy */}
        {isHourOfJoyActive && (
          <div className="mb-8 p-4 bg-red-900 border border-red-400 rounded animate-pulse">
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
              <p className="text-red-300 text-center font-bold">
                WARNING: PRODUCTS ARE NOW AUTONOMOUS - PURCHASE SYSTEM OFFLINE
              </p>
            </div>
          </div>
        )}

        {/* Clue Display */}
        {showClue && (
          <div className="mb-8 p-4 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
            <p className="text-yellow-300 text-center">{showClue}</p>
          </div>
        )}

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  handleProductInteraction();
                }}
                className={`${
                  selectedCategory === category.id
                    ? isHourOfJoyActive ? 'bg-red-600' : 'bg-pink-600'
                    : 'bg-slate-600'
                } hover:bg-opacity-80`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500 transition-all duration-300 hover:border-pink-300 card-hover ${
                  horrorMode ? 'animate-pulse border-red-400' : ''
                }`}
                onClick={() => handleProductInteraction()}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{product.image}</span>
                      {product.name}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      product.status === 'Best Seller' || product.status === 'ACTIVE' ? 'bg-green-600' :
                      product.status === 'New Release' || product.status === 'ALLIED' ? 'bg-blue-600' :
                      product.status === 'Limited Edition' || product.status === 'IMPRISONED' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}>
                      {product.status}
                    </span>
                  </CardTitle>
                  <p className="text-lg font-bold text-green-400">{product.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>
                      {isHourOfJoyActive ? 'Capabilities' : 'Features'}
                    </h4>
                    <ul className="text-gray-300 text-sm">
                      {product.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      onClick={() => showRandomClue(`PRODUCT: ${product.name.toUpperCase()}`)}
                      className={`w-full ${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}
                      disabled={isHourOfJoyActive}
                    >
                      {isHourOfJoyActive ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Observe Entity
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      onClick={() => setShowClue(`CLASSIFIED: ${product.darkTruth}`)}
                      variant="outline" 
                      className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-900"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      {isHourOfJoyActive ? 'True History' : 'Learn More'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Collections */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
            {isHourOfJoyActive ? 'Facility Status' : 'Special Collections'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{isHourOfJoyActive ? '🔒' : '⭐'}</div>
                <h3 className="text-pink-400 font-bold mb-2">
                  {isHourOfJoyActive ? 'Containment Breach' : 'Limited Edition'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ? 
                    'All prototype subjects have escaped containment' :
                    'Exclusive releases for our most dedicated collectors'
                  }
                </p>
                <Button 
                  onClick={() => showRandomClue("SPECIAL COLLECTION")}
                  size="sm"
                >
                  {isHourOfJoyActive ? 'Breach Report' : 'View Collection'}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{isHourOfJoyActive ? '🧠' : '💝'}</div>
                <h3 className="text-pink-400 font-bold mb-2">
                  {isHourOfJoyActive ? 'Consciousness Archive' : 'Gift Sets'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ?
                    'Preserved personalities of former employees' :
                    'Perfect bundles for special occasions'
                  }
                </p>
                <Button 
                  onClick={() => showRandomClue("GIFT SETS")}
                  size="sm"
                >
                  {isHourOfJoyActive ? 'Access Archive' : 'Browse Sets'}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-pink-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{isHourOfJoyActive ? '⚡' : '🎨'}</div>
                <h3 className="text-pink-400 font-bold mb-2">
                  {isHourOfJoyActive ? 'Power Grid' : 'Custom Designs'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ?
                    'Entities now self-sustaining via organic power source' :
                    'Personalized toys made just for you'
                  }
                </p>
                <Button 
                  onClick={() => showRandomClue("CUSTOM DESIGNS")}
                  size="sm"
                >
                  {isHourOfJoyActive ? 'Power Status' : 'Design Yours'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. {isHourOfJoyActive ? 'Products Department Terminated.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 'Toys choose their own companions now' : 'Creating magical friendships since 1950'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
