
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      id: "huggy",
      name: "Huggy Wuggy",
      price: "$29.99",
      description: "Your best friend forever! Huggy loves to play and give the biggest hugs!",
      darkDescription: "Subject 1006. 17 feet of synthetic terror. Extended arms reach 25 feet. Consciousness of Thomas Clarke. Password hint: experiment1006...",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png",
      status: "BESTSELLER",
      chapter: "Chapter 1"
    },
    {
      id: "kissy",
      name: "Kissy Missy",
      price: "$24.99",
      description: "Spread love everywhere with Kissy! She's always ready for a sweet kiss!",
      darkDescription: "Subject 1170. Enhanced empathy protocols. Stella Greyber's consciousness. Research access: research789",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png",
      status: "NEW",
      chapter: "Chapter 1"
    },
    {
      id: "poppy",
      name: "Poppy Playtime Doll",
      price: "$199.99",
      description: "The first truly amazing doll! Poppy is perfect in every way!",
      darkDescription: "The original prototype. First successful consciousness transfer. Intelligence level: Unknown. Executive access required.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png",
      status: "CLASSIC",
      chapter: "Chapter 1"
    },
    {
      id: "mommy",
      name: "Mommy Long Legs",
      price: "$34.99",
      description: "The most caring mother figure! She loves to play games with children!",
      darkDescription: "Subject 1222. Marie Payne's corrupted consciousness. Obsessed with deadly games. 47 casualties recorded.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png",
      status: "LIMITED",
      chapter: "Chapter 2"
    },
    {
      id: "boxy",
      name: "Boxy Boo",
      price: "$19.99",
      description: "Jack-in-the-box fun! Boxy loves surprises and making friends!",
      darkDescription: "Containment unit. Spring mechanism launches at 60 mph. Game Station security system. Access: /prison",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/1/1c/Boxy_Boo_Render.png",
      status: "NEW",
      chapter: "Chapter 2"
    },
    {
      id: "catbee",
      name: "CatBee",
      price: "$16.99",
      description: "Part cat, part bee, all cute! CatBee loves to buzz around and play!",
      darkDescription: "Genetic hybrid experiment. Flight capable. Escaped containment. Organizing smaller subjects in vents.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/5/5c/CatBee_Render.png",
      status: "SOLD OUT",
      chapter: "Chapter 2"
    },
    {
      id: "catnap",
      name: "CatNap",
      price: "$44.99",
      description: "The sleepiest cat around! CatNap helps children have the sweetest dreams!",
      darkDescription: "Prototype 1188. The Smiling Critters' leader. Red smoke sedative. Theodore Grambell's consciousness. Protocol: catnap-protocol",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png",
      status: "DISCONTINUED",
      chapter: "Chapter 3"
    },
    {
      id: "dogday",
      name: "DogDay",
      price: "$39.99",
      description: "The sunniest pup! DogDay brings joy and sunshine to every playdate!",
      darkDescription: "Leader of Smiling Critters. Subject to extreme conditioning. Found dismembered in Playcare. Failed to comply with CatNap.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/3/3c/DogDay_Render.png",
      status: "MEMORIAL",
      chapter: "Chapter 3"
    },
    {
      id: "picky",
      name: "PickyPiggy",
      price: "$21.99",
      description: "The pickiest eater! PickyPiggy teaches healthy eating habits!",
      darkDescription: "Smiling Critters member. Enhanced aggression during feeding experiments. Cannibalistic tendencies developed post-transformation.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/9/99/PickyPiggy_Render.png",
      status: "DISCONTINUED",
      chapter: "Chapter 3"
    }
  ];

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-purple-400 poppy-text-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-purple-400 hover:text-purple-300 transition-colors font-medium border-b-2 border-purple-400">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-purple-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-purple-900 text-white p-6 shadow-lg border-b border-purple-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold poppy-text-glow">Our Amazing Toy Collection</h1>
          <p className="text-purple-200 mt-2">Discover the magic that brings joy to children worldwide</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-purple-400 poppy-text-glow">Our Amazing Toys</h1>
        <p className="text-center text-gray-300 mb-12 text-xl">
          Discover the magic of Playtime Co.'s revolutionary toy collection!
        </p>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="bg-slate-800 border-purple-500 hover:border-red-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer poppy-card-glow"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardHeader className="text-center">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className={`text-xl ${hoveredProduct === product.id ? 'text-red-400' : 'text-purple-400'}`}>
                    {product.name}
                  </CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.status === 'BESTSELLER' ? 'bg-yellow-600 text-yellow-100' :
                    product.status === 'NEW' ? 'bg-green-600 text-green-100' :
                    product.status === 'LIMITED' ? 'bg-red-600 text-red-100' :
                    product.status === 'SOLD OUT' ? 'bg-gray-600 text-gray-100' :
                    product.status === 'DISCONTINUED' ? 'bg-orange-600 text-orange-100' :
                    product.status === 'MEMORIAL' ? 'bg-purple-600 text-purple-100' :
                    'bg-blue-600 text-blue-100'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-2xl font-bold text-purple-300">{product.price}</p>
                <p className="text-sm text-gray-400">{product.chapter}</p>
              </CardHeader>
              <CardContent>
                <p className={`text-sm transition-all duration-500 ${
                  hoveredProduct === product.id ? 'text-red-300 font-bold' : 'text-gray-300'
                }`}>
                  {hoveredProduct === product.id ? product.darkDescription : product.description}
                </p>
                
                <button 
                  className={`w-full mt-4 py-2 px-4 rounded transition-all duration-300 ${
                    product.status === 'SOLD OUT' || product.status === 'DISCONTINUED' || product.status === 'MEMORIAL'
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : hoveredProduct === product.id
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                  disabled={product.status === 'SOLD OUT' || product.status === 'DISCONTINUED' || product.status === 'MEMORIAL'}
                >
                  {product.status === 'SOLD OUT' ? 'Out of Stock' :
                   product.status === 'DISCONTINUED' ? 'Discontinued' :
                   product.status === 'MEMORIAL' ? 'Memorial Item' :
                   hoveredProduct === product.id ? 'CLASSIFIED DATA' : 'Add to Cart'}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-slate-800 border-purple-500 poppy-card-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Special Notice</h3>
              <p className="text-gray-300 mb-4">
                All Playtime Co. toys are manufactured using our proprietary <strong>Bigger Bodies</strong> 
                technology, ensuring your child's toy will be a companion for life!
              </p>
              <p className="text-sm text-gray-400 mb-2">
                *Side effects may include: attachment anxiety, protective behavior, and enhanced emotional bonding. 
                Not suitable for children under 6 or adults over 65. Please supervise playtime.
              </p>
              <p className="text-xs text-gray-500">
                For staff access to detailed specifications, visit our secure portal with proper credentials.
                Orphanage partnership programs available - contact /orphanage for details.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hidden Research Note */}
        <div className="mt-8 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded text-xs">
          <p className="text-red-300">
            <strong>Internal Note:</strong> Chapter 4 prototypes in development. The Smiling Critters expansion showing 
            promising results. Dr. Sawyer's experiment logs require executive password. 
            Maintenance staff use facility access codes. New /departments structure implemented for better security.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <p className="text-xs text-purple-400 mt-1 opacity-50">
            Employee access: /departments | Research data: catnap-protocol
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
