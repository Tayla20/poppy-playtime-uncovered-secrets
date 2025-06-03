
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Settings } from "lucide-react";

const Factory = () => {
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
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-red-400 flex items-center" style={{ textShadow: '0 0 15px #dc2626' }}>
            <Settings className="w-8 h-8 mr-3" />
            Factory Tour
          </h1>
          <p className="text-red-200 mt-2">Discover where the magic happens</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Tour Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Welcome to Our Factory</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-red-900 bg-opacity-50 border-red-600">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg mb-6 text-center">
                  Step into the heart of Playtime Co. and witness where imagination becomes reality. 
                  Our state-of-the-art manufacturing facility has been creating joy for over 70 years.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-400 font-bold mb-3">Tour Highlights</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Advanced manufacturing floors</li>
                      <li>• Quality control departments</li>
                      <li>• Research and development labs</li>
                      <li>• Safety testing facilities</li>
                      <li>• Interactive displays</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-bold mb-3">Tour Information</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Duration: 90 minutes</li>
                      <li>• Ages: All welcome</li>
                      <li>• Group size: Max 15 people</li>
                      <li>• Advance booking required</li>
                      <li>• Photo opportunities available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tour Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Tour Sections</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Settings className="w-6 h-6 mr-2" />
                  Production Floor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Watch our skilled craftspeople bring toys to life using cutting-edge manufacturing techniques 
                  and traditional toy-making artistry.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Automated assembly lines</p>
                  <p>• Hand-finishing stations</p>
                  <p>• Quality inspection points</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Access Level: Public Tour
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Design Studios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Meet our creative team and see how new toy concepts are developed from initial sketches 
                  to working prototypes.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Concept development</p>
                  <p>• 3D modeling stations</p>
                  <p>• Prototype testing</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Designer Code: research789
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Testing Laboratories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Our comprehensive safety and durability testing ensures every toy meets the highest standards 
                  before reaching children.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Safety compliance testing</p>
                  <p>• Durability assessments</p>
                  <p>• Age-appropriate evaluations</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Lab Access: security123
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Special Exhibits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Explore our historical timeline showcasing 70+ years of innovation and see exclusive 
                  behind-the-scenes content.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Company history display</p>
                  <p>• Vintage toy collection</p>
                  <p>• Interactive experiences</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Archive: Since 1950
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Book Your Tour</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-red-900 bg-opacity-50 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-400 text-center">Tour Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-red-400">10:00 AM, 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-red-400">11:00 AM, 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed for maintenance</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded">
                  <p className="text-yellow-300 text-sm">
                    <strong>Important:</strong> All tours require advance booking. Please contact our visitor services 
                    at least 48 hours before your desired tour date. Special group rates available for schools and organizations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Information */}
        <div className="mt-8 p-4 bg-red-950 bg-opacity-30 border border-red-700 rounded text-xs opacity-75">
          <p className="text-red-300">
            <strong>Safety Notice:</strong> For the safety of all visitors, certain areas of the facility require 
            special authorization and are not included in public tours. Our standard tour provides comprehensive 
            access to all publicly available manufacturing areas. Staff members with appropriate 
            <span className="cursor-pointer hover:text-green-400" title="Hidden clue"> clearance levels</span> may access 
            additional facility areas through proper channels.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500">
            Factory Tours: FT-2024 | Visitor Safety First
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
