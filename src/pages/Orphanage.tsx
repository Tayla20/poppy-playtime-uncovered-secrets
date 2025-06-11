import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Home, Star, MapPin, Eye, AlertTriangle, Skull, Clock, Building, School } from "lucide-react";
import { OrphanageMap } from "@/components/OrphanageMap";

const Orphanage = () => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [investigationClicks, setInvestigationClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [playcareSecrets, setPlaycareSecrets] = useState(0);

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
    if (investigationClicks >= 2) {
      addCompletedPuzzle('orphanage-investigation');
      showMessageWithJump("👶 PLAYCARE INVESTIGATION COMPLETE 👶 Missing children files accessed. The Bigger Bodies Initiative consumed them all...", 10000);
    }
  };

  const handlePlaycareSecretDiscovery = () => {
    setPlaycareSecrets(prev => prev + 1);
    if (playcareSecrets >= 4) {
      addCompletedPuzzle('playcare-secrets');
      showMessageWithJump("🔍 PLAYCARE SECRETS UNLOCKED 🔍 You have discovered the truth about the underground facility. The children never left...", 12000);
    }
  };

  const handleLocationClick = (location: string) => {
    console.log(`Investigating ${location}`);
    handlePlaycareSecretDiscovery();
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
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png/revision/latest?cb=20220506150829"
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
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png/revision/latest?cb=20211012174838"
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
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png/revision/latest?cb=20211015134550"
    },
    {
      id: "theodore",
      name: "Theodore Grambell",
      age: 7,
      status: isHourOfJoyActive ? "Missing" : "Adopted", 
      traits: "Sleepy, Gentle, Dreamer",
      notes: isHourOfJoyActive ?
        "Always found napping in quiet corners. His favorite spot was the soft play area near CatNap's shrine." :
        "Requires extra rest periods. Shows strong attachment to CatNap plush toys and peaceful environments.",
      darkNotes: isHourOfJoyActive ?
        "His perpetual sleepiness made him the perfect vessel for CatNap. The gas production was modeled after his sleep patterns." :
        "Subject 1188 - 'CatNap'. Sleep study participant. Red gas experiments proved highly successful.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/c/c5/CatNap_Render.png/revision/latest?cb=20230819143705"
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
        {/* Enhanced Facility Overview with Playcare Images */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                {isHourOfJoyActive ? <AlertTriangle className="w-6 h-6 mr-2" /> : <Building className="w-6 h-6 mr-2" />}
                {isHourOfJoyActive ? 'The Lost Paradise of Playcare' : 'Playcare - Underground Sanctuary'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a0/Playcare_Overview.png/revision/latest?cb=20240131000000" 
                    alt="Playcare Overview"
                    className="w-full h-48 object-cover rounded-lg border border-purple-500"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">Playcare Central Hub - Home Sweet Home Visible</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">
                    {isHourOfJoyActive ?
                      'Playcare was Playtime Co.\'s underground orphanage, a massive facility housing over 200 children. Built beneath the main factory, it featured themed living areas, educational facilities, and recreational spaces. The Hour of Joy turned this sanctuary into a tomb.' :
                      'Playcare represents the future of childcare - a revolutionary underground complex providing comprehensive care, education, and development. Our innovative Bigger Bodies Initiative ensures every child reaches their maximum potential.'
                    }
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={handlePlaycareSecretDiscovery}>
                      <Building className="w-4 h-4 mr-2" />
                      <span>{isHourOfJoyActive ? 'Former capacity: 200+ children' : 'Current capacity: 200+ children'}</span>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={handlePlaycareSecretDiscovery}>
                      <Users className="w-4 h-4 mr-2" />
                      <span>{isHourOfJoyActive ? 'Staff lost: 50+ caregivers' : 'Dedicated staff: 50+ trained caregivers'}</span>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={handlePlaycareSecretDiscovery}>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{isHourOfJoyActive ? 'Operational: 1960-1995' : 'Established: 1960 - Still operating'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Facility Areas with Wiki Images */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            Playcare Facility Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Home Sweet Home */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-blue-400 transition-all cursor-pointer`} onClick={handlePlaycareSecretDiscovery}>
              <CardHeader>
                <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/b/b2/Home_Sweet_Home_Houses.png/revision/latest?cb=20240131000000"
                    alt="Home Sweet Home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                  <Home className="w-5 h-5 mr-2" />
                  Home Sweet Home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  Residential sector with 12 uniquely themed houses where children lived in family groups. Each house had its own personality, from the Treehouse to the Castle.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• 12 themed houses including Treehouse, Castle, and Playhouse</li>
                  <li>• Family-style living with 8-10 children per house</li>
                  <li>• {isHourOfJoyActive ? 'Personal belongings still scattered' : 'Personal living spaces and belongings'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* School Sector */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-400 transition-all cursor-pointer`} onClick={handlePlaycareSecretDiscovery}>
              <CardHeader>
                <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/d/d4/School_Classroom.png/revision/latest?cb=20240131000000"
                    alt="School Sector"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} flex items-center`}>
                  <School className="w-5 h-5 mr-2" />
                  School Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  Educational wing with classrooms, library, and Miss Delight's domain. Children received comprehensive education alongside psychological conditioning.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Multiple classrooms with Miss Delight teachers</li>
                  <li>• {isHourOfJoyActive ? 'Library books scattered and torn' : 'Extensive library and study areas'}</li>
                  <li>• {isHourOfJoyActive ? 'Art supplies left abandoned' : 'Art and creative expression studios'}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Playhouse */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-pink-400 transition-all cursor-pointer`} onClick={handlePlaycareSecretDiscovery}>
              <CardHeader>
                <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/e/e8/Smiling_Critters_Playhouse.png/revision/latest?cb=20240131000000"
                    alt="Playhouse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center`}>
                  <Star className="w-5 h-5 mr-2" />
                  The Playhouse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3 text-sm">
                  Central entertainment complex featuring the Smiling Critters. This was where children spent most of their recreational time before everything went wrong.
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Smiling Critters interactive experiences</li>
                  <li>• {isHourOfJoyActive ? 'DogDay\'s memorial shrine (destroyed)' : 'DogDay supervision and activities'}</li>
                  <li>• {isHourOfJoyActive ? 'CatNap\'s ominous presence' : 'CatNap nap-time coordination'}</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Enhanced Missing Children with Click Puzzle */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'The Lost Children of Playcare' : 'Our Special Residents'}
          </h2>
          <div className="mb-4 text-center">
            <p className="text-gray-400 text-sm">
              Investigation Progress: {investigationClicks}/3 clicks
              {investigationClicks > 0 && ' - Click on profiles to uncover the truth...'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {children.map((child) => (
              <Card 
                key={child.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-red-500 transition-all duration-300 cursor-pointer poppy-card-glow ${investigationClicks > 0 ? 'ring-2 ring-yellow-400' : ''}`}
                onMouseEnter={() => setSelectedChild(child.id)}
                onMouseLeave={() => setSelectedChild(null)}
                onClick={handleSecretClick}
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-900">
                    <img 
                      src={child.image}
                      alt={child.name}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isHourOfJoyActive ? 'filter grayscale opacity-75' : ''
                      }`}
                    />
                  </div>
                  <CardTitle className={`text-sm ${selectedChild === child.id ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    {child.name}
                  </CardTitle>
                  <p className="text-gray-400 text-xs">Age: {child.age} | Status: {child.status}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-300 mb-2">
                    <strong>Traits:</strong> {child.traits}
                  </p>
                  <p className={`text-xs transition-all duration-500 ${
                    selectedChild === child.id ? 'text-red-300' : 'text-gray-400'
                  }`}>
                    {selectedChild === child.id ? child.darkNotes : child.notes}
                  </p>
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
