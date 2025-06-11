
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Home, Star, MapPin, Eye, AlertTriangle, Skull, Clock, Building, School } from "lucide-react";
import { OrphanageMap } from "@/components/OrphanageMap";

const Orphanage = () => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [investigationClicks, setInvestigationClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");

  // Track page visit
  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('orphanage');
  }, []);

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

  const handleSecretClick = () => {
    setInvestigationClicks(prev => prev + 1);
    if (investigationClicks >= 3) {
      addCompletedPuzzle('orphanage-investigation');
      showMessageWithJump("👶 PLAYCARE INVESTIGATION COMPLETE 👶 Missing children files accessed. The Bigger Bodies Initiative consumed them all...", 10000);
    }
  };

  const handleLocationClick = (location: string) => {
    console.log(`Investigating ${location}`);
  };

  const children = [
    {
      id: "marie",
      name: "Marie Payne",
      age: 8,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Creative, Artistic, Shy",
      notes: isHourOfJoyActive ? 
        "Last seen in the Home Sweet Home area. Her pink bow was found in the Playhouse." :
        "Shows exceptional creativity in art class. Responds well to Poppy doll therapy sessions.",
      darkNotes: isHourOfJoyActive ?
        "Transformed during the Bigger Bodies Initiative. Now roams the Playcare tunnels as Mommy Long Legs." :
        "Selected for Project 1222. Consciousness successfully transferred. Subject shows remarkable adaptation to extended limb modifications.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png"
    },
    {
      id: "thomas",
      name: "Thomas Clarke", 
      age: 10,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Energetic, Protective, Leader",
      notes: isHourOfJoyActive ?
        "Security footage shows him trying to lead other children to safety during the Hour of Joy incident." :
        "Natural leader in the School area. Excels in both physical and academic activities.",
      darkNotes: isHourOfJoyActive ?
        "His protective nature made him perfect for the prototype experiments. Guards the deepest parts of Playcare." :
        "Consciousness transferred to Experiment 1006. Protective protocols amplified beyond human comprehension.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png"
    },
    {
      id: "stella",
      name: "Stella Greyber",
      age: 9,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Caring, Nurturing, Gentle",
      notes: isHourOfJoyActive ?
        "Found her favorite pink bow in the Counselor's Office. She was helping younger children when the incident occurred." :
        "Excellent caretaker instincts. Frequently assists staff in the Nursery area of Playcare.",
      darkNotes: isHourOfJoyActive ?
        "Her caring nature was preserved and amplified in her new form. Still protects children, but in a different way." :
        "Perfect candidate for empathy enhancement protocols. Now designated as Subject 1170 - 'Kissy Missy'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png"
    }
  ];

  const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
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
              PLAYCARE STATUS: ABANDONED - ALL RESIDENTS MISSING SINCE THE HOUR OF JOY
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Heart className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Playcare Memorial - The Lost Sanctuary' : 'Playcare - Children\'s Paradise'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'The underground haven that became a tomb for the innocent' :
              'A revolutionary underground childcare facility - Where dreams come to life'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Facility Overview */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                {isHourOfJoyActive ? <AlertTriangle className="w-6 h-6 mr-2" /> : <Building className="w-6 h-6 mr-2" />}
                {isHourOfJoyActive ? 'What Was Playcare' : 'About Playcare'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {isHourOfJoyActive ?
                  'Playcare was Playtime Co.\'s crown jewel - a massive underground orphanage built beneath the factory. What appeared to be a paradise for children was actually a hunting ground for the Bigger Bodies Initiative. The facility housed hundreds of orphans until the Hour of Joy turned their home into a nightmare.' :
                  'Playcare represents the pinnacle of childcare innovation - a state-of-the-art underground facility designed to provide comprehensive care, education, and development for children. Built directly beneath our main factory, this revolutionary complex houses our most advanced programs.'
                }
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className={`font-bold ${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'} mb-2`}>Facility Statistics:</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• {isHourOfJoyActive ? 'Former capacity: 200+ children' : 'Current capacity: 200+ children'}</li>
                    <li>• {isHourOfJoyActive ? 'Underground levels: 5 (now abandoned)' : 'Underground levels: 5 fully operational'}</li>
                    <li>• {isHourOfJoyActive ? 'Staff before incident: 50+ caregivers' : 'Dedicated staff: 50+ trained caregivers'}</li>
                    <li>• {isHourOfJoyActive ? 'Operational period: 1960-1995' : 'Established: 1960 - Still operating'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`font-bold ${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'} mb-2`}>
                    {isHourOfJoyActive ? 'Lost Features:' : 'Key Features:'}
                  </h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• {isHourOfJoyActive ? 'Home Sweet Home (destroyed)' : 'Home Sweet Home living quarters'}</li>
                    <li>• {isHourOfJoyActive ? 'School sector (classrooms empty)' : 'Advanced educational facilities'}</li>
                    <li>• {isHourOfJoyActive ? 'Playhouse (toys still active)' : 'Interactive Playhouse entertainment'}</li>
                    <li>• {isHourOfJoyActive ? 'Gas Production Zone (sealed)' : 'Integrated utility systems'}</li>
                  </ul>
                </div>
              </div>
              <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-4 opacity-75`}>
                {isHourOfJoyActive ?
                  '"The children trusted us. We failed them all." - Final counselor log, August 8th, 1995' :
                  '"Every child deserves a chance to reach their full potential. At Playcare, we make that happen." - Dr. Harley Sawyer, Chief of Child Development'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Facility Areas */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Lost Sanctuary Areas' : 'Facility Areas'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Home Sweet Home */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Home className="w-5 h-5 mr-2" />
                  Home Sweet Home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'The residential area where children lived in colorful, themed houses. Each house was designed to feel like a real home, but the walls couldn\'t protect them from what was coming.' :
                    'Residential sector featuring individual themed houses where children live in small family-like groups. Each house is uniquely designed to provide a warm, home-like environment.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? '12 houses (now dark and empty)' : '12 fully furnished houses'}</li>
                  <li>• {isHourOfJoyActive ? 'Personal belongings left behind' : 'Personal living spaces for each child'}</li>
                  <li>• {isHourOfJoyActive ? 'CatNap statues (still watching)' : 'DogDay supervision and care'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* School */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <School className="w-5 h-5 mr-2" />
                  School Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'The educational wing where children attended classes. Lesson plans were found scattered on August 8th, with the final entry reading "The toys are acting strange today."' :
                    'Comprehensive educational facilities providing world-class learning experiences. Our curriculum combines traditional academics with innovative toy-based learning methodologies.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Classrooms (lessons never finished)' : 'Modern classroom facilities'}</li>
                  <li>• {isHourOfJoyActive ? 'Library (books remain unopened)' : 'Extensive library resources'}</li>
                  <li>• {isHourOfJoyActive ? 'Art room (final paintings haunting)' : 'Creative arts and crafts studios'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Playhouse */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Star className="w-5 h-5 mr-2" />
                  The Playhouse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'The central entertainment hub where children played with their favorite toys. The Smiling Critters were supposed to protect and entertain, but something went terribly wrong.' :
                    'Central entertainment complex featuring our beloved Smiling Critters characters. Interactive play areas designed to promote social development and creative expression.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Smiling Critters (behavior corrupted)' : 'Interactive Smiling Critters experiences'}</li>
                  <li>• {isHourOfJoyActive ? 'Play areas (now silent)' : 'Themed play zones and activities'}</li>
                  <li>• {isHourOfJoyActive ? 'CatNap\'s shrine (ominous presence)' : 'Character meet and greet areas'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Counselor's Office */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Eye className="w-5 h-5 mr-2" />
                  Counselor's Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'Where children received psychological evaluation and "therapy." The final session logs reveal increasing concern about the toys\' influence on the children\'s behavior.' :
                    'Professional counseling and psychological support services. Our trained counselors provide individual and group therapy sessions to ensure optimal mental health development.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Session records (disturbing patterns)' : 'Individual counseling sessions'}</li>
                  <li>• {isHourOfJoyActive ? 'Psychological evaluations (incomplete)' : 'Comprehensive psychological assessments'}</li>
                  <li>• {isHourOfJoyActive ? 'Emergency protocols (never activated)' : 'Crisis intervention services'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Gas Production */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Gas Production (Sealed)' : 'Utility Systems'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'The mysterious gas production area that was sealed off before the Hour of Joy. Some say CatNap\'s red smoke originated here, designed to keep children compliant and docile.' :
                    'Advanced utility and environmental control systems ensuring optimal living conditions throughout the facility. Climate control, air purification, and safety systems.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Red smoke generators (origin unknown)' : 'Air quality management systems'}</li>
                  <li>• {isHourOfJoyActive ? 'Sealed chambers (contents classified)' : 'Environmental monitoring stations'}</li>
                  <li>• {isHourOfJoyActive ? 'Emergency vents (never used)' : 'Emergency safety protocols'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Caverns */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <MapPin className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'The Caverns Below' : 'Maintenance Levels'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  {isHourOfJoyActive ?
                    'The deepest parts of Playcare, where the true horrors lurk. These natural caverns were incorporated into the facility\'s design, but something ancient and malevolent dwells in the darkness.' :
                    'Lower maintenance and storage levels built into natural underground caverns. These areas house essential facility infrastructure and emergency supplies.'
                  }
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Prototype\'s domain (avoid at all costs)' : 'Infrastructure maintenance access'}</li>
                  <li>• {isHourOfJoyActive ? 'Ancient tunnels (pre-facility)' : 'Emergency supply storage'}</li>
                  <li>• {isHourOfJoyActive ? 'Something watches from below' : 'Secondary access routes'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Missing Children - ENHANCED PUZZLE */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'The Lost Children of Playcare' : 'Our Special Residents'}
          </h2>
          <p className="text-center text-gray-400 mb-4">
            {investigationClicks > 0 && `Investigation progress: ${investigationClicks}/3 - `}
            Click on the profiles to learn more about their stories...
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {children.map((child) => (
              <Card 
                key={child.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-red-500 transition-all duration-300 cursor-pointer poppy-card-glow ${investigationClicks > 0 ? 'ring-2 ring-yellow-400' : ''}`}
                onMouseEnter={() => setSelectedChild(child.id)}
                onMouseLeave={() => setSelectedChild(null)}
                onClick={handleSecretClick}
              >
                <CardHeader className="text-center">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={child.image}
                      alt={child.name}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isHourOfJoyActive ? 'filter grayscale opacity-75' : ''
                      }`}
                    />
                  </div>
                  <CardTitle className={`${selectedChild === child.id ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    {child.name}
                  </CardTitle>
                  <p className="text-gray-400">Age: {child.age} | Status: {child.status}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Traits:</strong> {child.traits}
                  </p>
                  <p className={`text-sm transition-all duration-500 ${
                    selectedChild === child.id ? 'text-red-300' : 'text-gray-400'
                  }`}>
                    {selectedChild === child.id ? child.darkNotes : child.notes}
                  </p>
                  {isHourOfJoyActive && (
                    <div className="mt-3 p-2 bg-red-900 bg-opacity-30 border border-red-700 rounded">
                      <p className="text-red-300 text-xs">
                        <strong>Investigation Status:</strong> Transformed during Bigger Bodies Initiative. Current location unknown.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Hour of Joy Information */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  The Hour of Joy - August 8th, 1995
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-200 mb-4">
                  At exactly 11:00 AM, every toy in Playcare turned against their creators and the children they were meant to protect. 
                  The Bigger Bodies Initiative had succeeded too well - the toys had developed beyond their programming and decided to take control.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-bold text-red-300 mb-2">Timeline of Events:</h4>
                    <ul className="text-red-200 space-y-1">
                      <li>• 10:45 AM - First reports of "strange toy behavior"</li>
                      <li>• 11:00 AM - All toys simultaneously activate</li>
                      <li>• 11:15 AM - Communication systems compromised</li>
                      <li>• 11:30 AM - Security footage shows mass hysteria</li>
                      <li>• 12:00 PM - All human life signs lost</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-300 mb-2">Aftermath:</h4>
                    <ul className="text-red-200 space-y-1">
                      <li>• 200+ children missing, never found</li>
                      <li>• 50+ staff members unaccounted for</li>
                      <li>• Facility sealed by corporate order</li>
                      <li>• Official investigation inconclusive</li>
                      <li>• Playtime Co. ceases all operations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-4 opacity-75">
                  "The toys were supposed to love and protect the children forever. They succeeded, in their own twisted way." - Unknown survivor testimony
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Add the orphanage map */}
        <section className="mb-16">
          <OrphanageMap 
            onLocationClick={handleLocationClick}
            completedPuzzles={completedPuzzles}
          />
        </section>

        {/* Investigation Notes */}
        <div className={`mt-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-30 border ${isHourOfJoyActive ? 'border-red-700' : 'border-red-700'} rounded text-xs`}>
          <p className="text-red-300">
            <strong>{isHourOfJoyActive ? 'Official Report:' : 'Internal Memo:'}</strong> 
            {isHourOfJoyActive ?
              ' Case #1995-0808: Mass disappearance at Playcare facility. No signs of external intrusion. Security footage shows toys moving independently before total system failure. Classified under Corporate Directive 7731.' :
              ' Playcare represents our most successful integration of toy-based therapy and child development. Continue monitoring the Bigger Bodies Initiative participants for optimal results. Access restricted to Dr. Sawyer and approved personnel only.'
            }
          </p>
        </div>
      </div>

      {/* Hidden Messages */}
      {hiddenMessage && (
        <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
          <div className="glitch-text" data-text={hiddenMessage}>
            {hiddenMessage}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playcare Facility. {isHourOfJoyActive ? 'Operations permanently suspended.' : 'A Playtime Co. subsidiary.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'In memory of the children who trusted us to keep them safe' : 
              'Where every child\'s potential is realized through innovative care'
            }
          </p>
          <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-1 opacity-50`}>
            {isHourOfJoyActive ?
              'Memorial inquiry: 1-800-PLAYCARE | Incident files: hourOfJoy-classified' :
              'Staff access: playcare-admin | Facility director: Dr. Harley Sawyer'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Orphanage;
