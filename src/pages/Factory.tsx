
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Factory as FactoryIcon, Cog, AlertTriangle, Eye, Users, Skull, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Factory = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('factory');

    const addCompletedPuzzle = (puzzleName: string) => {
      const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
      if (!completed.includes(puzzleName)) {
        completed.push(puzzleName);
        localStorage.setItem('completedPuzzles', JSON.stringify(completed));
      }
    };
    
    addCompletedPuzzle('factory-production');
  }, []);

  const factoryAreas = [
    {
      id: 'main-lobby',
      name: 'Main Lobby',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/3/3c/Main_Lobby.png/revision/latest?cb=20211012153845',
      description: isHourOfJoyActive ?
        'Abandoned entrance hall where Huggy Wuggy once greeted visitors. Now silent and empty.' :
        'Welcome center featuring our beloved mascot Huggy Wuggy and an introduction to Playtime Co.',
      status: isHourOfJoyActive ? 'ABANDONED' : 'ACTIVE',
      dangers: isHourOfJoyActive ? ['Huggy Wuggy presence', 'Structural damage', 'Power failures'] : [],
      color: 'blue'
    },
    {
      id: 'game-station',
      name: 'Game Station',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/a/a2/Game_Station_Overview.png/revision/latest?cb=20220506150829',
      description: isHourOfJoyActive ?
        'Mommy Long Legs\' domain. Site of deadly games and the Musical Memory puzzle. Extremely dangerous.' :
        'Interactive entertainment area where children and families can play games with our toy characters.',
      status: isHourOfJoyActive ? 'HOSTILE TERRITORY' : 'ACTIVE',
      dangers: isHourOfJoyActive ? ['Mommy Long Legs', 'Deadly games', 'Maze traps', 'Musical Memory'] : [],
      color: 'pink'
    },
    {
      id: 'production-line',
      name: 'Production Line A',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/5/51/Production_Line.png/revision/latest?cb=20211012153845',
      description: isHourOfJoyActive ?
        'Where the Bigger Bodies Initiative took place. Machinery still runs autonomously.' :
        'State-of-the-art manufacturing facility where our beloved toys are brought to life.',
      status: isHourOfJoyActive ? 'AUTONOMOUS' : 'ACTIVE',
      dangers: isHourOfJoyActive ? ['Automated machinery', 'Grab Pack required', 'Mini Huggies'] : [],
      color: 'yellow'
    },
    {
      id: 'power-room',
      name: 'Power Room',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/7/7c/Power_Room.png/revision/latest?cb=20211012153845',
      description: isHourOfJoyActive ?
        'Critical facility systems. Contains the make-a-friend machine and power restoration puzzles.' :
        'Central power distribution center ensuring all factory operations run smoothly.',
      status: isHourOfJoyActive ? 'CRITICAL SYSTEMS' : 'ACTIVE',
      dangers: isHourOfJoyActive ? ['Electrical hazards', 'System malfunctions', 'Security protocols'] : [],
      color: 'red'
    },
    {
      id: 'playcare-access',
      name: 'Playcare Access',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/b/b8/Playcare_Entrance.png/revision/latest?cb=20240131000000',
      description: isHourOfJoyActive ?
        'Sealed entrance to the underground Playcare facility. CatNap\'s territory below.' :
        'Restricted access point to our underground childcare facility - Playcare.',
      status: isHourOfJoyActive ? 'SEALED - EXTREME DANGER' : 'RESTRICTED ACCESS',
      dangers: isHourOfJoyActive ? ['CatNap presence', 'Red poppy gas', 'Prototype activity'] : [],
      color: 'purple'
    },
    {
      id: 'prototype-lab',
      name: 'Research Laboratory',
      image: 'https://static.wikia.nocookie.net/poppyplaytime/images/d/d2/Research_Lab.png/revision/latest?cb=20220506150829',
      description: isHourOfJoyActive ?
        'Dr. Harley Sawyer\'s laboratory. Site of the Bigger Bodies Initiative experiments.' :
        'Advanced research facility developing the next generation of interactive toys.',
      status: isHourOfJoyActive ? 'CLASSIFIED' : 'RESTRICTED',
      dangers: isHourOfJoyActive ? ['Prototype 1006', 'Failed experiments', 'Classified materials'] : [],
      color: 'green'
    }
  ];

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
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-semibold`}>Factory Tour</Link>
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
              FACTORY STATUS: ABANDONED - EXTREME DANGER - DO NOT ENTER
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <FactoryIcon className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Abandoned Factory Complex' : 'Playtime Co. Factory Tour'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Site of the Hour of Joy incident - All areas compromised' :
              'Discover where the magic happens - From concept to beloved toy'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">

        {/* Factory Overview */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                <FactoryIcon className="w-6 h-6 mr-2" />
                {isHourOfJoyActive ? 'Factory Status Report' : 'Manufacturing Excellence'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a8/Factory_Overview.png/revision/latest?cb=20211012153845"
                    alt="Factory Overview"
                    className="w-full h-48 object-cover rounded-lg border border-purple-500"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">Playtime Co. Manufacturing Complex</p>
                </div>
                <div className="space-y-4">
                  {isHourOfJoyActive ? (
                    <>
                      <div className="bg-red-900 bg-opacity-30 p-4 rounded border border-red-700">
                        <h4 className="font-bold text-red-300 mb-2">Incident Report - August 8, 1995</h4>
                        <p className="text-red-200 text-sm">
                          At 11:00 AM, all toys in the facility gained autonomous control. Factory systems remain 
                          operational but unstaffed. Extreme caution advised for any entry attempts.
                        </p>
                      </div>
                      <div className="bg-red-800 bg-opacity-50 p-3 rounded border border-red-600">
                        <h5 className="text-red-300 font-semibold text-sm mb-1">Current Threats:</h5>
                        <ul className="text-red-200 text-xs space-y-1">
                          <li>• Autonomous toy entities</li>
                          <li>• Unstable electrical systems</li>
                          <li>• Prototype 1006 activity</li>
                          <li>• Structural deterioration</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-700">
                        <h4 className="font-bold text-purple-300 mb-2">State-of-the-Art Facility</h4>
                        <p className="text-purple-200 text-sm">
                          Our 200,000 square foot facility houses the most advanced toy manufacturing 
                          equipment in the world, including our revolutionary Bigger Bodies Initiative.
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <Users className="w-8 h-8 text-blue-400 mx-auto mb-1" />
                          <p className="text-blue-400 text-sm font-semibold">500+</p>
                          <p className="text-gray-400 text-xs">Employees</p>
                        </div>
                        <div>
                          <Cog className="w-8 h-8 text-green-400 mx-auto mb-1" />
                          <p className="text-green-400 text-sm font-semibold">24/7</p>
                          <p className="text-gray-400 text-xs">Production</p>
                        </div>
                        <div>
                          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
                          <p className="text-yellow-400 text-sm font-semibold">Advanced</p>
                          <p className="text-gray-400 text-xs">AI Systems</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Factory Areas */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Compromised Areas' : 'Factory Areas'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factoryAreas.map((area) => (
              <Card 
                key={area.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-400 transition-all duration-300 cursor-pointer poppy-card-glow ${selectedArea === area.id ? 'ring-2 ring-yellow-400' : ''}`}
                onMouseEnter={() => setSelectedArea(area.id)}
                onMouseLeave={() => setSelectedArea(null)}
              >
                <CardHeader>
                  <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
                    <img 
                      src={area.image}
                      alt={area.name}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isHourOfJoyActive ? 'filter grayscale opacity-75' : ''
                      } ${selectedArea === area.id ? 'scale-110' : ''}`}
                    />
                  </div>
                  <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center justify-between text-sm`}>
                    {area.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      area.status.includes('DANGER') || area.status.includes('HOSTILE') ? 
                        'bg-red-900 text-red-300' : 
                        area.status === 'RESTRICTED' || area.status === 'CLASSIFIED' ?
                          'bg-yellow-900 text-yellow-300' :
                          'bg-green-900 text-green-300'
                    }`}>
                      {area.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">
                    {area.description}
                  </p>
                  
                  {isHourOfJoyActive && area.dangers.length > 0 && (
                    <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded p-2">
                      <h5 className="text-red-300 font-semibold text-xs mb-1">Known Hazards:</h5>
                      <ul className="text-red-200 text-xs space-y-1">
                        {area.dangers.map((danger, index) => (
                          <li key={index} className="flex items-center">
                            <AlertTriangle className="w-3 h-3 mr-1 text-red-400" />
                            {danger}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {!isHourOfJoyActive && (
                    <div className="mt-3">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm transition-colors">
                        Schedule Tour
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Grab Pack Information */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  GrabPack Technology - Survival Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="https://static.wikia.nocookie.net/poppyplaytime/images/5/52/GrabPack.png/revision/latest?cb=20211012153845"
                      alt="GrabPack"
                      className="w-full h-40 object-contain rounded-lg border border-red-500 bg-gray-900"
                    />
                    <p className="text-xs text-gray-400 mt-2 text-center">GrabPack Mark II - Employee Safety Equipment</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-red-200 text-sm">
                      Originally designed for factory maintenance, the GrabPack has become essential survival equipment 
                      for navigating the compromised facility.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-red-300 font-semibold text-sm">Capabilities:</h4>
                      <ul className="text-red-200 text-xs space-y-1">
                        <li>• Extendable mechanical hands</li>
                        <li>• Electrical circuit completion</li>
                        <li>• Remote object manipulation</li>
                        <li>• Puzzle-solving assistance</li>
                        <li>• Emergency escape mechanisms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Factory operations permanently suspended.' : 'Manufacturing excellence since 1930.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Site remains under indefinite lockdown by corporate order' : 
              'Where innovation meets imagination in toy manufacturing'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
