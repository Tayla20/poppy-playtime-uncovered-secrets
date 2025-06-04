
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Settings, Eye, Wrench } from "lucide-react";

const Factory = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [sectionClicks, setSectionClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [tourBookings, setTourBookings] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.025) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 180);
      }
    }, 12000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = () => {
    setSectionClicks(prev => prev + 1);
    if (sectionClicks >= 4) {
      setSecretFound(true);
      setHiddenMessage("⬡ FACILITY EXPLORATION COMPLETE ⬡ Restricted area access detected. Hidden facility maps now accessible.");
      setTimeout(() => setHiddenMessage(""), 9000);
    }
  };

  const handleScheduleClick = () => {
    setTourBookings(prev => prev + 1);
    if (tourBookings >= 2) {
      setHiddenMessage("◈ PERSISTENT BOOKING ATTEMPTS ◈ Special access protocols initiated. Check for alternative facility entrances...");
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
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
              <Link to="/factory" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
              {secretFound && (
                <Link to="/prison" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                  [⬡ FACILITY ⬡]
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
            <Settings className="w-8 h-8 mr-3" />
            Factory Tour
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">Discover where the <span className="invisible-text">magic</span> happens</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Tour Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Welcome to Our Factory</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg mb-6 text-center nostalgic-text">
                  Step into the heart of Playtime Co. and witness where imagination becomes <span className="mystery-reveal text-yellow-400">reality</span>. 
                  Our state-of-the-art manufacturing facility has been creating <span className="invisible-text">friends</span> for over 70 years.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">Tour Highlights</h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• Advanced manufacturing floors</li>
                      <li>• Quality control departments</li>
                      <li>• Research and <span className="mystery-reveal text-blue-400">development</span> labs</li>
                      <li>• <span className="invisible-text">Safety testing</span> facilities</li>
                      <li>• Interactive displays</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">Tour Information</h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• Duration: 90 minutes</li>
                      <li>• Ages: All welcome</li>
                      <li>• Group size: Max 15 people</li>
                      <li>• <span className="mystery-reveal text-yellow-400">Advance booking</span> required</li>
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
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Tour Sections</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Settings className="w-6 h-6 mr-2" />
                  Production Floor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Watch our skilled craftspeople bring toys to <span className="mystery-reveal text-yellow-400">life</span> using cutting-edge manufacturing techniques 
                  and traditional toy-making artistry.
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• Automated assembly lines</p>
                  <p>• Hand-finishing stations</p>
                  <p>• <span className="invisible-text">Quality</span> inspection points</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">sseccA cilbuP</span> • <span className="hidden-morse">. .- ... -.--</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Users className="w-6 h-6 mr-2" />
                  Design Studios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Meet our creative team and see how new toy concepts are developed from initial sketches 
                  to working <span className="mystery-reveal text-purple-400">prototypes</span>.
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• Concept development</p>
                  <p>• 3D modeling stations</p>
                  <p>• <span className="invisible-text">Prototype</span> testing</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">-.. . ... .. --. -.</span> • Creative Access
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <MapPin className="w-6 h-6 mr-2" />
                  Research Laboratories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Our comprehensive <span className="mystery-reveal text-red-400">safety</span> and durability testing ensures every toy meets the highest standards 
                  before reaching children.
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• <span className="invisible-text">Safety compliance</span> testing</p>
                  <p>• Durability assessments</p>
                  <p>• Age-appropriate evaluations</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">hcraeseR</span> • <span className="hidden-morse">.-.. .- -...</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Clock className="w-6 h-6 mr-2" />
                  Heritage Exhibits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Explore our historical timeline showcasing 70+ years of innovation and see exclusive 
                  <span className="mystery-reveal text-green-400">behind-the-scenes</span> content.
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• Company history display</p>
                  <p>• <span className="invisible-text">Vintage</span> toy collection</p>
                  <p>• Interactive experiences</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">.... .. ... - --- .-. -.--</span> • Since 1950
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Book Your Tour</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
              <CardHeader>
                <CardTitle className="text-red-400 text-center nostalgic-text">Tour Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-all"
                    onClick={handleScheduleClick}
                  >
                    <span className="text-gray-300 nostalgic-text">Monday - Friday</span>
                    <span className="text-red-400">10:00 AM, 2:00 PM</span>
                  </div>
                  <div 
                    className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-all"
                    onClick={handleScheduleClick}
                  >
                    <span className="text-gray-300 nostalgic-text">Saturday</span>
                    <span className="text-red-400">11:00 AM, 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded">
                    <span className="text-gray-300 nostalgic-text">Sunday</span>
                    <span className="text-gray-500">Closed for <span className="mystery-reveal text-yellow-400">maintenance</span></span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded">
                  <p className="text-yellow-300 text-sm nostalgic-text">
                    <strong>Important:</strong> All tours require advance booking. Please contact our visitor services 
                    at least 48 hours before your desired tour date. Special group rates available for schools and organizations.
                    <span className="invisible-text"> Restricted areas require clearance.</span>
                  </p>
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

        {/* Safety Information */}
        <div className="mt-8 p-4 bg-slate-900 bg-opacity-20 border-l-4 border-yellow-600 opacity-75 static-noise">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-300 nostalgic-text">
                <strong>Safety Notice:</strong> For the safety of all visitors, certain areas of the facility require 
                special authorization and are not included in public tours. Our standard tour provides comprehensive 
                access to all publicly available manufacturing areas. Staff members with appropriate 
                <span className="cursor-pointer hover:text-green-400 mystery-reveal" title="Hidden access"> clearance levels</span> may access 
                additional facility areas through proper channels.
              </p>
              <p className="text-xs mt-2 opacity-30 hidden-morse">
                <span className="backwards-text">ytilicaF</span> • <span className="invisible-text">Multiple clicks reveal deeper access</span>
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
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="Factory systems">Factory Tours</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> /prison</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> yteifeS rotsisiV</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Wrench className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">The machines never stop</span>
            <Wrench className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
