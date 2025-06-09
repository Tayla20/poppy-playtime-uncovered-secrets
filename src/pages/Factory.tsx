
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Settings, Eye, Wrench, AlertTriangle, Skull } from "lucide-react";

const Factory = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [sectionClicks, setSectionClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [tourBookings, setTourBookings] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < (isHourOfJoyActive ? 0.1 : 0.025)) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), isHourOfJoyActive ? 500 : 180);
      }
    }, isHourOfJoyActive ? 8000 : 12000);
    
    return () => clearInterval(interval);
  }, [isHourOfJoyActive]);

  const handleSectionClick = () => {
    setSectionClicks(prev => prev + 1);
    if (sectionClicks >= 4) {
      setSecretFound(true);
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('factory-exploration')) {
        currentProgress.push('factory-exploration');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
        setHiddenMessage("⬡ FACILITY EXPLORATION COMPLETE ⬡ Restricted area access detected. Hidden facility maps now accessible.");
      }
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
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`} data-text="PLAYTIME CO.">
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

      {/* Alert Banner for Hour of Joy */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              FACTORY STATUS: UNDER TOY CONTROL - PRODUCTION CEASED
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} bg-opacity-60 text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold flex items-center ${glitchActive ? 'text-yellow-400' : isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Settings className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Abandoned Factory' : 'Factory Tour'}
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">
            {isHourOfJoyActive ? 
              'Where production stopped and toys took control' : 
              'Discover where the magic happens'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Tour Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'What Remains' : 'Welcome to Our Factory'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 card-hover static-noise`}>
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg mb-6 text-center nostalgic-text">
                  {isHourOfJoyActive ? 
                    'The factory stands silent now, its machines stopped forever. The toys have claimed every floor, every room. What was once a place of creation has become their domain.' :
                    'Step into the heart of Playtime Co. and witness where imagination becomes reality. Our state-of-the-art manufacturing facility has been creating friends for over 70 years.'
                  }
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">
                      {isHourOfJoyActive ? 'What Was Lost' : 'Tour Highlights'}
                    </h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• {isHourOfJoyActive ? 'Silent manufacturing floors' : 'Advanced manufacturing floors'}</li>
                      <li>• {isHourOfJoyActive ? 'Abandoned quality control' : 'Quality control departments'}</li>
                      <li>• {isHourOfJoyActive ? 'Sealed research labs' : 'Research and development labs'}</li>
                      <li>• {isHourOfJoyActive ? 'Broken safety systems' : 'Safety testing facilities'}</li>
                      <li>• {isHourOfJoyActive ? 'Toy surveillance stations' : 'Interactive displays'}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-bold mb-3 nostalgic-text">
                      {isHourOfJoyActive ? 'Current Status' : 'Tour Information'}
                    </h3>
                    <ul className="text-gray-300 space-y-2 nostalgic-text">
                      <li>• {isHourOfJoyActive ? 'Duration: Indefinite containment' : 'Duration: 90 minutes'}</li>
                      <li>• {isHourOfJoyActive ? 'Ages: Entry forbidden' : 'Ages: All welcome'}</li>
                      <li>• {isHourOfJoyActive ? 'Group size: None permitted' : 'Group size: Max 15 people'}</li>
                      <li>• {isHourOfJoyActive ? 'Advance warning required' : 'Advance booking required'}</li>
                      <li>• {isHourOfJoyActive ? 'No survivors documented' : 'Photo opportunities available'}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tour Sections */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'Facility Sectors' : 'Tour Sections'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise`}
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Settings className="w-6 h-6 mr-2" />
                  {isHourOfJoyActive ? 'Abandoned Production Floor' : 'Production Floor'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  {isHourOfJoyActive ?
                    'Assembly lines frozen mid-production. Unfinished toys litter the floor. The machinery waits for operators who will never return.' :
                    'Watch our skilled craftspeople bring toys to life using cutting-edge manufacturing techniques and traditional toy-making artistry.'
                  }
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• {isHourOfJoyActive ? 'Stopped assembly lines' : 'Automated assembly lines'}</p>
                  <p>• {isHourOfJoyActive ? 'Abandoned workstations' : 'Hand-finishing stations'}</p>
                  <p>• {isHourOfJoyActive ? 'Failed inspections' : 'Quality inspection points'}</p>
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">
                    {isHourOfJoyActive ? 'dengisA' : 'sseccA cilbuP'}
                  </span> • <span className="hidden-morse">. .- ... -.--</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise`}
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Users className="w-6 h-6 mr-2" />
                  {isHourOfJoyActive ? 'Empty Design Studios' : 'Design Studios'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  {isHourOfJoyActive ?
                    'Concept boards covered in dust. The last designs were never finished. Creative spirits silenced forever by their own creations.' :
                    'Meet our creative team and see how new toy concepts are developed from initial sketches to working prototypes.'
                  }
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• {isHourOfJoyActive ? 'Abandoned concepts' : 'Concept development'}</p>
                  <p>• {isHourOfJoyActive ? 'Silent modeling stations' : '3D modeling stations'}</p>
                  <p>• {isHourOfJoyActive ? 'Lost prototypes' : 'Prototype testing'}</p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise`}
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <MapPin className="w-6 h-6 mr-2" />
                  {isHourOfJoyActive ? 'Sealed Research Labs' : 'Research Laboratories'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  {isHourOfJoyActive ?
                    'Emergency lockdown protocols failed. Research data corrupted. The experiments that created consciousness now monitor their creators.' :
                    'Our comprehensive safety and durability testing ensures every toy meets the highest standards before reaching children.'
                  }
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• {isHourOfJoyActive ? 'Compromised safety' : 'Safety compliance testing'}</p>
                  <p>• {isHourOfJoyActive ? 'Failed assessments' : 'Durability assessments'}</p>
                  <p>• {isHourOfJoyActive ? 'Warning protocols' : 'Age-appropriate evaluations'}</p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise`}
              onClick={handleSectionClick}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <Clock className="w-6 h-6 mr-2" />
                  {isHourOfJoyActive ? 'Memorial Exhibits' : 'Heritage Exhibits'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  {isHourOfJoyActive ?
                    'Displays frozen in time showing better days. Tourist photos from before the incident serve as memorials to the lost.' :
                    'Explore our historical timeline showcasing 70+ years of innovation and see exclusive behind-the-scenes content.'
                  }
                </p>
                <div className="text-sm text-gray-400 nostalgic-text">
                  <p>• {isHourOfJoyActive ? 'Final company records' : 'Company history display'}</p>
                  <p>• {isHourOfJoyActive ? 'Preserved toy specimens' : 'Vintage toy collection'}</p>
                  <p>• {isHourOfJoyActive ? 'Warning experiences' : 'Interactive experiences'}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'Access Restricted' : 'Book Your Tour'}
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 card-hover static-noise`}>
              <CardHeader>
                <CardTitle className="text-red-400 text-center nostalgic-text">
                  {isHourOfJoyActive ? 'Containment Schedule' : 'Tour Schedule'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-all"
                    onClick={handleScheduleClick}
                  >
                    <span className="text-gray-300 nostalgic-text">Monday - Friday</span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'FACILITY SEALED' : '10:00 AM, 2:00 PM'}
                    </span>
                  </div>
                  <div 
                    className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded cursor-pointer hover:bg-opacity-70 transition-all"
                    onClick={handleScheduleClick}
                  >
                    <span className="text-gray-300 nostalgic-text">Saturday</span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'NO SURVIVORS' : '11:00 AM, 3:00 PM'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-950 bg-opacity-50 rounded">
                    <span className="text-gray-300 nostalgic-text">Sunday</span>
                    <span className="text-gray-500">
                      {isHourOfJoyActive ? 'TOYS ACTIVE' : 'Closed for maintenance'}
                    </span>
                  </div>
                </div>
                <div className={`mt-6 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-yellow-900'} bg-opacity-30 border ${isHourOfJoyActive ? 'border-red-700' : 'border-yellow-700'} rounded`}>
                  <p className={`${isHourOfJoyActive ? 'text-red-300' : 'text-yellow-300'} text-sm nostalgic-text`}>
                    <strong>{isHourOfJoyActive ? 'Warning:' : 'Important:'}</strong> 
                    {isHourOfJoyActive ?
                      ' Factory access is permanently restricted. All personnel are presumed lost. The facility remains under toy control indefinitely.' :
                      ' All tours require advance booking. Please contact our visitor services at least 48 hours before your desired tour date. Special group rates available for schools and organizations.'
                    }
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
        <div className={`mt-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} bg-opacity-20 border-l-4 ${isHourOfJoyActive ? 'border-red-600' : 'border-yellow-600'} opacity-75 static-noise`}>
          <div className="flex">
            <div className="ml-3">
              <p className={`text-sm ${isHourOfJoyActive ? 'text-red-300' : 'text-yellow-300'} nostalgic-text`}>
                <strong>{isHourOfJoyActive ? 'Containment Notice:' : 'Safety Notice:'}</strong> 
                {isHourOfJoyActive ?
                  ' The factory remains under complete toy control. All human authority has been terminated. Entry by unauthorized personnel will result in immediate assimilation or worse.' :
                  ' For the safety of all visitors, certain areas of the facility require special authorization and are not included in public tours. Our standard tour provides comprehensive access to all publicly available manufacturing areas.'
                } Staff members with appropriate
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
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-red-700'} static-noise`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Production ceased.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">
            {isHourOfJoyActive ? 'Where toys rule and humans served' : 'Making friends since 1950'}
          </p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="Factory systems">Factory Tours</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> /prison</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> yteifeS rotsisiV</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Wrench className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">
              {isHourOfJoyActive ? 'The machines have stopped forever' : 'The machines never stop'}
            </span>
            <Wrench className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
