
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Search } from "lucide-react";

const Index = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 6) {
      setSecretFound(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div 
            className={`text-2xl font-bold cursor-pointer transition-all duration-200 ${glitchActive ? 'animate-pulse text-red-400' : ''}`}
            onClick={handleLogoClick}
          >
            {glitchActive ? 'P̴L̷A̸Y̴T̵I̶M̵E̸ ̶C̷O̵.' : 'PLAYTIME CO.'}
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="hover:text-pink-200 transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-pink-200 transition-colors">Our Toys</Link>
            <Link to="/factory" className="hover:text-pink-200 transition-colors">Factory Tour</Link>
            <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
            {secretFound && (
              <Link to="/documents" className="text-red-200 hover:text-red-100 transition-colors animate-pulse">
                [CLASSIFIED]
              </Link>
            )}
          </nav>
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
              <div className="w-32 h-32 bg-red-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:bg-red-600 transition-colors">
                🌺
              </div>
              <h3 className="text-xl font-bold mb-2">Poppy</h3>
              <p className="text-gray-600">The first truly amazing doll!</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-32 h-32 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:bg-blue-600 transition-colors">
                🤗
              </div>
              <h3 className="text-xl font-bold mb-2">Huggy Wuggy</h3>
              <p className="text-gray-600">Your best friend for life!</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:bg-yellow-600 transition-colors">
                😊
              </div>
              <h3 className="text-xl font-bold mb-2">Kissy Missy</h3>
              <p className="text-gray-600">Spreading love everywhere!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              At Playtime Co., we believe every child deserves a friend. Our innovative toy manufacturing 
              has revolutionized the industry, creating companions that are more lifelike than ever before.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge research and development</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Love</h3>
                <p className="text-gray-600">Every toy is made with care</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Quality that lasts forever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Element */}
      {secretFound && (
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Link to="/documents">
            <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
              <Eye className="w-4 h-4 mr-2" />
              View Files
            </Button>
          </Link>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
