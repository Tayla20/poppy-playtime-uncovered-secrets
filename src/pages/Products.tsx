
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
      darkDescription: "17 feet of pure nightmare. Extended arms can reach up to 25 feet. Teeth count: 142. Password hint: experiment followed by his designation number...",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png",
      status: "BESTSELLER"
    },
    {
      id: "kissy",
      name: "Kissy Missy",
      price: "$24.99",
      description: "Spread love everywhere with Kissy! She's always ready for a sweet kiss!",
      darkDescription: "More docile than 1006. Programmed with enhanced empathy protocols. Still dangerous. Research access: research789",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png",
      status: "NEW"
    },
    {
      id: "poppy",
      name: "Poppy Playtime Doll",
      price: "$199.99",
      description: "The first truly amazing doll! Poppy is perfect in every way!",
      darkDescription: "The original. First successful subject. Intelligence level: Unknown. Executive clearance required. Dr. Ludwig's project: biggerbodies",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png",
      status: "CLASSIC"
    },
    {
      id: "mommy",
      name: "Mommy Long Legs",
      price: "$34.99",
      description: "The most caring mother figure! She loves to play games with children!",
      darkDescription: "Subject 1222. Elasticated limbs. Obsessed with 'games'. 47 casualties recorded. Access via /documents",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png",
      status: "LIMITED"
    },
    {
      id: "boxy",
      name: "Boxy Boo",
      price: "$19.99",
      description: "Jack-in-the-box fun! Boxy loves surprises and making friends!",
      darkDescription: "Containment unit. Spring-loaded mechanism can launch at 60 mph. Facility director password: hourofkjoy",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/1/1c/Boxy_Boo_Render.png",
      status: "NEW"
    },
    {
      id: "catbee",
      name: "CatBee",
      price: "$16.99",
      description: "Part cat, part bee, all cute! CatBee loves to buzz around and play!",
      darkDescription: "Genetic hybrid experiment. Flight capable. Stinger contains paralytic venom. Maintenance access: factory456",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/5/5c/CatBee_Render.png",
      status: "SOLD OUT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-pink-600">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About Us</Link>
              <Link to="/products" className="text-pink-600 hover:text-pink-800 transition-colors font-medium border-b-2 border-pink-600">Our Toys</Link>
              <Link to="/factory" className="text-gray-700 hover:text-pink-600 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Our Amazing Toy Collection</h1>
          <p className="text-pink-100">Discover the magic that brings joy to children worldwide</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-purple-700">Our Amazing Toys</h1>
        <p className="text-center text-gray-600 mb-12 text-xl">
          Discover the magic of Playtime Co.'s revolutionary toy collection!
        </p>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.status === 'BESTSELLER' ? 'bg-yellow-200 text-yellow-800' :
                    product.status === 'NEW' ? 'bg-green-200 text-green-800' :
                    product.status === 'LIMITED' ? 'bg-red-200 text-red-800' :
                    product.status === 'SOLD OUT' ? 'bg-gray-200 text-gray-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-2xl font-bold text-purple-600">{product.price}</p>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 transition-all duration-500 text-sm ${
                  hoveredProduct === product.id ? 'text-red-600 font-bold' : ''
                }`}>
                  {hoveredProduct === product.id ? product.darkDescription : product.description}
                </p>
                
                <button 
                  className={`w-full mt-4 py-2 px-4 rounded transition-all duration-300 ${
                    product.status === 'SOLD OUT' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : hoveredProduct === product.id
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-pink-500 hover:bg-pink-600 text-white'
                  }`}
                  disabled={product.status === 'SOLD OUT'}
                >
                  {product.status === 'SOLD OUT' ? 'Out of Stock' : 
                   hoveredProduct === product.id ? 'CLASSIFIED DATA' : 'Add to Cart'}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-yellow-50 border-yellow-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-800">Special Notice</h3>
              <p className="text-gray-700 mb-4">
                All Playtime Co. toys are manufactured using our proprietary <strong>Bigger Bodies</strong> 
                technology, ensuring your child's toy will be a companion for life!
              </p>
              <p className="text-sm text-gray-500 mb-2">
                *Side effects may include: attachment anxiety, protective behavior, and enhanced emotional bonding. 
                Not suitable for children under 6 or adults over 65. Please supervise playtime.
              </p>
              <p className="text-xs text-gray-400">
                For staff access to detailed specifications, visit our secure portal with proper credentials.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hidden Research Note */}
        <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-400 text-xs text-gray-600">
          <p><strong>Internal Note:</strong> Dr. Sawyer's experiment logs require executive password. Lab technicians use standard research protocols. Maintenance staff use facility access codes.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
