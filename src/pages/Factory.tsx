import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory as FactoryIcon, Users, Cog, AlertTriangle, Eye, Skull } from "lucide-react";

const Factory = () => {
  const [productionClicks, setProductionClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  
  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
    }
  };

  const showMessageWithJump = (message: string, duration: number = 8000) => {
    setHiddenMessage(message);
    setTimeout(() => {
      const messageElement = document.querySelector('.hidden-message');
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    setTimeout(() => setHiddenMessage(""), duration);
  };

  const handleProductionClick = () => {
    setProductionClicks(prev => prev + 1);
    if (productionClicks >= 4) {
      addCompletedPuzzle('factory-production');
      showMessageWithJump("🏭 PRODUCTION SECRETS REVEALED 🏭 Hidden maintenance logs accessed. The machines know more than they let on...", 10000);
    }
  };

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'poppy-gradient'} text-white`}>
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'} font-medium`}>Factory Tour</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
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
              FACTORY STATUS: ABANDONED - PRODUCTION CEASED AUGUST 8TH, 1995
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-blue-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-blue-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <FactoryIcon className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Abandoned Production Facility' : 'Playtime Co. Factory Tour'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-blue-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where dreams were manufactured... and nightmares were born' :
              'Witness the magic behind the world\'s most innovative toys'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-blue-500`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                <FactoryIcon className="w-6 h-6 mr-2" />
                {isHourOfJoyActive ? 'Facility Overview (Former)' : 'Facility Overview'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {isHourOfJoyActive ?
                  'This factory was once the heart of Playtime Co., manufacturing thousands of toys daily. Now, it stands silent, a monument to our ambition and our failure.' :
                  'Welcome to the Playtime Co. Factory, where innovation meets imagination! Our state-of-the-art facility produces thousands of toys daily, using cutting-edge technology and a dedicated workforce.'
                }
              </p>
              <p className="text-sm text-gray-400">
                {isHourOfJoyActive ?
                  'Production ceased on August 8th, 1995. The machines are still running, but no one is at the controls.' :
                  'Our facility operates 24/7 to ensure every child has access to the latest and greatest Playtime Co. toys.'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Production Statistics - CLICKABLE PUZZLE */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            {isHourOfJoyActive ? 'Final Production Records' : 'Production Statistics'}
          </h2>
          <Card 
            className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-blue-500 cursor-pointer hover:border-yellow-500 transition-all duration-300`}
            onClick={handleProductionClick}
          >
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                <Cog className="w-6 h-6 mr-2" />
                {isHourOfJoyActive ? 'Final Manufacturing Data (Click to investigate)' : 'Manufacturing Data (Click for details)'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`text-center p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-blue-900'} rounded`}>
                  <h3 className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    {isHourOfJoyActive ? '0' : '50,000+'}
                  </h3>
                  <p className="text-gray-300">
                    {isHourOfJoyActive ? 'Current Production' : 'Toys Produced Monthly'}
                  </p>
                </div>
                <div className={`text-center p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-blue-900'} rounded`}>
                  <h3 className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    {isHourOfJoyActive ? '100%' : '99.8%'}
                  </h3>
                  <p className="text-gray-300">
                    {isHourOfJoyActive ? 'Consciousness Success Rate' : 'Quality Assurance Rate'}
                  </p>
                </div>
                <div className={`text-center p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-blue-900'} rounded`}>
                  <h3 className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    {isHourOfJoyActive ? 'INFINITE' : '24/7'}
                  </h3>
                  <p className="text-gray-300">
                    {isHourOfJoyActive ? 'Toy Lifespan' : 'Operation Hours'}
                  </p>
                </div>
              </div>
              <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mt-4 text-center`}>
                {productionClicks > 0 && `Investigation clicks: ${productionClicks}/5 - `}
                {isHourOfJoyActive ?
                  'Production halted permanently. Toys now self-sustaining.' :
                  'Real-time data updated every hour. Click for maintenance logs.'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Workforce Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            {isHourOfJoyActive ? 'Former Workforce' : 'Our Dedicated Workforce'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Users className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Employee Statistics (Missing)' : 'Employee Statistics'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• {isHourOfJoyActive ? '500+ employees (all unaccounted for)' : '500+ dedicated employees'}</li>
                  <li>• {isHourOfJoyActive ? 'Average tenure: unknown (most vanished)' : 'Average employee tenure: 10+ years'}</li>
                  <li>• {isHourOfJoyActive ? 'Safety incidents: infinite (Hour of Joy)' : 'Comprehensive safety training programs'}</li>
                  <li>• {isHourOfJoyActive ? 'Morale: non-existent (facility abandoned)' : 'High employee satisfaction and morale'}</li>
                </ul>
                <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mt-4`}>
                  {isHourOfJoyActive ?
                    'All personnel files classified | Access denied: hour-of-joy-incident' :
                    'Employee access: workforce123 | HR data: Chapter2-personnel'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Cog className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Automated Systems (Out of Control)' : 'Automated Systems'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p>• {isHourOfJoyActive ? 'Robotics operating independently' : 'Advanced robotics for efficient production'}</p>
                  <p>• {isHourOfJoyActive ? 'AI-driven systems now self-aware' : 'AI-driven quality control systems'}</p>
                  <p>• {isHourOfJoyActive ? 'Maintenance protocols overridden' : 'Regular maintenance and safety checks'}</p>
                  <p>• {isHourOfJoyActive ? 'Production lines running without human intervention' : 'Streamlined production lines for maximum output'}</p>
                </div>
                <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-4`}>
                  {isHourOfJoyActive ?
                    'System override codes lost | Facility AI: rogue-prototype' :
                    'System access: factory789 | AI diagnostics: system-checks'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            {isHourOfJoyActive ? 'Former Safety Protocols' : 'Safety Protocols'}
          </h2>
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                {isHourOfJoyActive ? 'Incident Report (Hour of Joy)' : 'Safety Guidelines'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• {isHourOfJoyActive ? 'Emergency exits blocked (toys autonomous)' : 'Mandatory safety training for all employees'}</li>
                <li>• {isHourOfJoyActive ? 'Containment protocols failed (subjects escaped)' : 'Regular equipment maintenance and inspections'}</li>
                <li>• {isHourOfJoyActive ? 'Automated systems compromised (no human control)' : 'Automated shutdown systems in case of emergency'}</li>
                <li>• {isHourOfJoyActive ? 'Evacuation impossible (facility overrun)' : 'Clearly marked evacuation routes and assembly points'}</li>
              </ul>
              <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mt-4`}>
                {isHourOfJoyActive ?
                  'Final transmission: "The toys are free." | No survivors reported' :
                  'Safety hotline: 1-800-SAFE-CO | Emergency protocols: factory-safety-2024'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Hidden Messages */}
        {hiddenMessage && (
          <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
            <div className="glitch-text" data-text={hiddenMessage}>
              {hiddenMessage}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Manufacturing Division. {isHourOfJoyActive ? 'Operations terminated.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Facility abandoned, toys in control' : 
              'Leading the way in toy manufacturing innovation'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
