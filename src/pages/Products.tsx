
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Shield, Zap } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-red-950 shadow-lg sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400" style={{ textShadow: '0 0 10px #dc2626' }}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-red-400 flex items-center" style={{ textShadow: '0 0 15px #dc2626' }}>
            <Star className="w-8 h-8 mr-3" />
            Our Amazing Toys
          </h1>
          <p className="text-red-200 mt-2">Bringing imagination to life since 1950</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Featured Collection</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Huggy Wuggy */}
            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                    alt="Huggy Wuggy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-red-400">Huggy Wuggy</h3>
                <p className="text-gray-300 mb-4">Your loyal blue companion! Standing tall at an impressive size, Huggy Wuggy is designed to give the biggest, warmest hugs.</p>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Safety Certified</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Height: 17 feet</p>
                  <p>Material: Advanced synthetic fibers</p>
                  <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                    Model: HW-1006 | Security Rating: Level-3
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Poppy */}
            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                    alt="Poppy Playtime Doll"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-red-400">Poppy</h3>
                <p className="text-gray-300 mb-4">The original wonder! Our first creation that started it all. Poppy is intelligent, caring, and truly amazing.</p>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-400 text-sm">Original Design</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Height: 3 feet</p>
                  <p>Material: Porcelain and fabric</p>
                  <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                    Series: P-001 | Archive Code: playcare2024
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kissy Missy */}
            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/9/9e/Kissy_Missy_Render.png" 
                    alt="Kissy Missy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-red-400">Kissy Missy</h3>
                <p className="text-gray-300 mb-4">The pink companion with a heart of gold! Kissy Missy spreads love and kindness wherever she goes.</p>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-400 text-sm">Emotional Support</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Height: 15 feet</p>
                  <p>Material: Advanced synthetic fibers</p>
                  <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                    Model: KM-1170 | Behavioral Code: medical456
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Smiling Critters Collection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Smiling Critters Collection</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 transition-all group">
              <CardContent className="p-4">
                <div className="w-full h-32 mb-3 overflow-hidden rounded">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png" 
                    alt="CatNap"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-red-400 mb-1">CatNap</h4>
                <p className="text-xs text-gray-300">The sleepy purple cat who ensures sweet dreams</p>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Protocol: CN-1188
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 transition-all group">
              <CardContent className="p-4">
                <div className="w-full h-32 mb-3 overflow-hidden rounded">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a7/DogDay_Render.png" 
                    alt="DogDay"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-red-400 mb-1">DogDay</h4>
                <p className="text-xs text-gray-300">The sunny leader who brightens every day</p>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Leader Unit: DD-Sol
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 transition-all group">
              <CardContent className="p-4">
                <div className="w-full h-32 mb-3 overflow-hidden rounded bg-red-800 flex items-center justify-center">
                  <span className="text-red-400 text-lg">🐘</span>
                </div>
                <h4 className="font-bold text-red-400 mb-1">Bobby Bearhug</h4>
                <p className="text-xs text-gray-300">The caring bear with the biggest heart</p>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Care Unit: BB-Care
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 hover:border-yellow-500 transition-all group">
              <CardContent className="p-4">
                <div className="w-full h-32 mb-3 overflow-hidden rounded bg-red-800 flex items-center justify-center">
                  <span className="text-red-400 text-lg">🦄</span>
                </div>
                <h4 className="font-bold text-red-400 mb-1">Hoppy Hopscotch</h4>
                <p className="text-xs text-gray-300">The energetic bunny who loves to play</p>
                <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Energy Unit: HH-Jump
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">What Makes Our Toys Special</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Advanced Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Our proprietary "Bigger Bodies" technology creates toys with unprecedented realism and interaction capabilities.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Tech Code: experiment1006
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Emotional Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Each toy is designed with advanced behavioral programming to create genuine emotional connections.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Behavior Matrix: Classified
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Safety First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Every toy undergoes rigorous testing to ensure the highest safety standards for children of all ages.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Safety Protocol: factory456
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Information */}
        <div className="mt-8 p-4 bg-red-950 bg-opacity-30 border border-red-700 rounded text-xs opacity-75">
          <p className="text-red-300">
            <strong>Product Notice:</strong> All Playtime Co. toys are manufactured in our state-of-the-art facility with the highest quality standards. 
            For detailed specifications and availability, please contact our customer service team or visit our facility tour.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500">
            Product Catalog: PC-2024 | Quality Assured
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
