
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, Zap, Shield, AlertTriangle, Skull } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

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

  const products = [
    {
      id: 'huggy-wuggy',
      name: 'Huggy Wuggy',
      price: isHourOfJoyActive ? 'DISCONTINUED' : '$24.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png/revision/latest?cb=20211012174838',
      description: isHourOfJoyActive ? 
        'Former mascot of Playtime Co. Last seen during the Hour of Joy incident.' :
        'Our beloved blue mascot! Huggy Wuggy loves to give the biggest, warmest hugs to all his friends.',
      features: isHourOfJoyActive ?
        ['10-foot tall security model', 'Razor-sharp teeth', 'Superhuman strength', 'Facility guardian'] :
        ['Super soft fur', 'Extra long arms for big hugs', 'Friendly smile', 'Child-safe materials'],
      darkDescription: 'Experiment 1170. Enhanced strength and agility. Serves as primary security for the factory. Uncontainable.',
      color: 'blue'
    },
    {
      id: 'poppy-playtime',
      name: 'Poppy Playtime',
      price: isHourOfJoyActive ? 'CLASSIFIED' : '$19.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/f/f0/Poppy_Playtime_Doll.png/revision/latest?cb=20211012153845',
      description: isHourOfJoyActive ?
        'The first truly living doll. Still active somewhere in the factory.' :
        'The perfect companion! Poppy is a beautiful doll who will be your best friend forever.',
      features: isHourOfJoyActive ?
        ['First successful consciousness transfer', 'Self-aware AI', 'Manipulative personality', 'Factory knowledge'] :
        ['Beautiful hair to brush', 'Vintage Victorian dress', 'Realistic facial features', 'Collectible series'],
      darkDescription: 'The First Successful Transfer. Patient Zero. Contains the consciousness of a real person. Approach with extreme caution.',
      color: 'red'
    },
    {
      id: 'mommy-long-legs',
      name: 'Mommy Long Legs',
      price: isHourOfJoyActive ? 'DANGEROUS' : '$29.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png/revision/latest?cb=20220506150829',
      description: isHourOfJoyActive ?
        'Former Game Station supervisor. Violently protective of her "children".' :
        'The ultimate playmate! Stretchy arms and legs make playtime even more fun and creative.',
      features: isHourOfJoyActive ?
        ['Elastic limb extension', 'Game Station control', 'Maternal obsession', 'Child protection protocols'] :
        ['Stretchy pink limbs', 'Interactive games', 'Motherly personality', 'Educational activities'],
      darkDescription: 'Experiment 1222. Marie Payne consciousness transferred. Maternal instincts amplified beyond human comprehension.',
      color: 'pink'
    },
    {
      id: 'catnap',
      name: 'CatNap',
      price: isHourOfJoyActive ? 'SEDATED' : '$22.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/c/c5/CatNap_Render.png/revision/latest?cb=20230819143705',
      description: isHourOfJoyActive ?
        'Playcare sleep supervisor. Emits red poppy gas. Worships the Prototype.' :
        'The perfect bedtime companion! CatNap helps children fall asleep with soothing purrs.',
      features: isHourOfJoyActive ?
        ['Red poppy gas emission', 'Sleep enforcement', 'Prototype devotion', 'Playcare oversight'] :
        ['Soft purple fur', 'Sleepy moon pendant', 'Gentle purring sounds', 'Bedtime stories'],
      darkDescription: 'Experiment 1188. Theodore Grambell consciousness. Red gas production for population control. Prototype worshiper.',
      color: 'purple'
    },
    {
      id: 'kissy-missy',
      name: 'Kissy Missy',
      price: isHourOfJoyActive ? 'FRIENDLY' : '$26.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png/revision/latest?cb=20211015134550',
      description: isHourOfJoyActive ?
        'Huggy Wuggy\'s partner. Still shows signs of humanity and compassion.' :
        'Huggy\'s loving partner! Kissy Missy spreads love and kindness wherever she goes.',
      features: isHourOfJoyActive ?
        ['Compassionate behavior', 'Human empathy retained', 'Factory guidance', 'Protective instincts'] :
        ['Soft pink fur', 'Heart-shaped lips', 'Loving personality', 'Friendship activities'],
      darkDescription: 'Experiment 1170. Stella Greyber consciousness. Retained more humanity than other subjects.',
      color: 'yellow'
    },
    {
      id: 'smiling-critters',
      name: 'Smiling Critters Collection',
      price: isHourOfJoyActive ? 'CORRUPTED' : '$34.99',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/e/e8/Smiling_Critters_Playhouse.png/revision/latest?cb=20240131000000',
      description: isHourOfJoyActive ?
        'Former Playcare entertainment crew. Most were found dismembered in the Playhouse.' :
        'Eight adorable friends each with unique personalities and scents! Collect them all!',
      features: isHourOfJoyActive ?
        ['Playcare entertainment system', 'CatNap\'s influence', 'Child indoctrination', 'Prototype loyalty'] :
        ['Eight unique characters', 'Each has special scent', 'Educational shows', 'Friendship lessons'],
      darkDescription: 'Mass production toys for Playcare psychological conditioning. DogDay found tortured. Others eliminated.',
      color: 'green'
    }
  ];

  const handleProductHover = (productId: string) => {
    setSelectedProduct(productId);
    // Trigger color sequence puzzle
    const product = products.find(p => p.id === productId);
    if (product) {
      const event = new CustomEvent('productHover', { detail: product.color });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-semibold`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
              <Link to="/orphanage" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Playcare</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Alert Banner */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              PRODUCT LINE DISCONTINUED - ALL TOYS POSE EXTREME DANGER
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Star className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Discontinued Product Archive' : 'Our Amazing Toys'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Memorial catalog of toys that brought joy... and terror' :
              'Discover the magic of playtime with our innovative toy collection'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-400 transition-all duration-300 cursor-pointer poppy-card-glow ${selectedProduct === product.id ? 'ring-2 ring-yellow-400' : ''}`}
                onMouseEnter={() => handleProductHover(product.id)}
                onMouseLeave={() => setSelectedProduct(null)}
              >
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-900">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isHourOfJoyActive ? 'filter grayscale opacity-75' : ''
                      } ${selectedProduct === product.id ? 'scale-110' : ''}`}
                    />
                  </div>
                  <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center justify-between`}>
                    {product.name}
                    <span className={`text-sm ${isHourOfJoyActive ? 'text-red-300' : 'text-green-400'}`}>
                      {product.price}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    {selectedProduct === product.id && isHourOfJoyActive ? 
                      product.darkDescription : 
                      product.description
                    }
                  </p>
                  <div className="space-y-2">
                    <h4 className={`font-semibold text-xs ${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'}`}>
                      {isHourOfJoyActive ? 'CLASSIFIED SPECS:' : 'Features:'}
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          {isHourOfJoyActive ? (
                            <AlertTriangle className="w-3 h-3 mr-2 text-red-400" />
                          ) : (
                            <Star className="w-3 h-3 mr-2 text-yellow-400" />
                          )}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {!isHourOfJoyActive && (
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Information */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-800'} border-purple-500`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                {isHourOfJoyActive ? <AlertTriangle className="w-6 h-6 mr-2" /> : <Shield className="w-6 h-6 mr-2" />}
                {isHourOfJoyActive ? 'DANGER WARNING' : 'Safety & Quality'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isHourOfJoyActive ? (
                <div className="space-y-4">
                  <p className="text-red-200">
                    <strong>CRITICAL WARNING:</strong> All Playtime Co. toys are to be considered extremely dangerous. 
                    DO NOT APPROACH if encountered. Contact authorities immediately.
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <h4 className="text-red-300 font-bold mb-2">Known Hazards:</h4>
                    <ul className="text-red-200 text-sm space-y-1">
                      <li>• Autonomous movement and hostile behavior</li>
                      <li>• Superhuman strength and speed</li>
                      <li>• Advanced AI with unpredictable responses</li>
                      <li>• Toxic gas emission (CatNap units)</li>
                      <li>• Psychological manipulation capabilities</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-400 mb-2">Safety First</h4>
                    <p className="text-gray-300 text-sm">All toys meet strict safety standards and undergo rigorous testing.</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-pink-400 mb-2">Child-Approved</h4>
                    <p className="text-gray-300 text-sm">Designed with input from child development experts.</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-yellow-400 mb-2">Innovation</h4>
                    <p className="text-gray-300 text-sm">Cutting-edge technology creates truly interactive experiences.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Product line permanently discontinued.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'In memory of the joy these toys once brought' : 
              'Creating magical moments through innovative toy design'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
