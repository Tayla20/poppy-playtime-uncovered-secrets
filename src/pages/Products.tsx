
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
      darkDescription: "17 feet of pure nightmare. Extended arms can reach up to 25 feet. Teeth count: 142.",
      image: "🤗",
      status: "BESTSELLER"
    },
    {
      id: "kissy",
      name: "Kissy Missy",
      price: "$24.99",
      description: "Spread love everywhere with Kissy! She's always ready for a sweet kiss!",
      darkDescription: "More docile than 1006. Programmed with enhanced empathy protocols. Still dangerous.",
      image: "😘",
      status: "NEW"
    },
    {
      id: "poppy",
      name: "Poppy Playtime Doll",
      price: "$199.99",
      description: "The first truly amazing doll! Poppy is perfect in every way!",
      darkDescription: "The original. First successful subject. Intelligence level: Unknown. Motives: Classified.",
      image: "🌺",
      status: "CLASSIC"
    },
    {
      id: "mommy",
      name: "Mommy Long Legs",
      price: "$34.99",
      description: "The most caring mother figure! She loves to play games with children!",
      darkDescription: "Subject 1222. Elasticated limbs. Obsessed with 'games'. 47 casualties recorded.",
      image: "🕷️",
      status: "LIMITED"
    },
    {
      id: "boxy",
      name: "Boxy Boo",
      price: "$19.99",
      description: "Jack-in-the-box fun! Boxy loves surprises and making friends!",
      darkDescription: "Containment unit. Spring-loaded mechanism can launch at 60 mph. Approach with caution.",
      image: "📦",
      status: "NEW"
    },
    {
      id: "catbee",
      name: "CatBee",
      price: "$16.99",
      description: "Part cat, part bee, all cute! CatBee loves to buzz around and play!",
      darkDescription: "Genetic hybrid experiment. Flight capable. Stinger contains paralytic venom.",
      image: "🐱",
      status: "SOLD OUT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PLAYTIME CO.</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-pink-200 transition-colors">About Us</Link>
            <Link to="/products" className="text-pink-200">Our Toys</Link>
            <Link to="/factory" className="hover:text-pink-200 transition-colors">Factory Tour</Link>
            <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
          </nav>
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
                <div className="text-8xl mb-4 transition-all duration-300">
                  {product.image}
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
                <p className={`text-gray-600 transition-all duration-500 ${
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
                   hoveredProduct === product.id ? 'EXPERIMENT SUBJECT' : 'Add to Cart'}
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
              <p className="text-sm text-gray-500">
                *Side effects may include: attachment anxiety, protective behavior, and enhanced emotional bonding. 
                Not suitable for children under 6 or adults over 65. Please supervise playtime.
              </p>
            </CardContent>
          </Card>
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
