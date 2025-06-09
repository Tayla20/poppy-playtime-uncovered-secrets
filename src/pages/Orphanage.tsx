
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Star, Eye, FileText, AlertTriangle, Skull } from "lucide-react";

const Orphanage = () => {
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);
  const [puzzleClicks, setPuzzleClicks] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    if (puzzleClicks >= 3) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('orphanage-investigation')) {
        currentProgress.push('orphanage-investigation');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
      }
    }
  }, [puzzleClicks]);

  const children = [
    {
      id: "marie",
      name: "Marie Payne",
      age: 8,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Creative, Artistic, Shy",
      notes: isHourOfJoyActive ? 
        "Last seen playing with a pink doll. The doll was found, but Marie wasn't." :
        "Shows exceptional creativity in art class. Responds well to Poppy doll.",
      darkNotes: isHourOfJoyActive ?
        "The transformation was successful. She became something greater than human." :
        "Selected for Project 1222. Consciousness transfer successful. Now known as 'Mommy Long Legs'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png"
    },
    {
      id: "thomas",
      name: "Thomas Clarke", 
      age: 10,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Energetic, Protective, Leader",
      notes: isHourOfJoyActive ?
        "Tried to protect the younger children. Security footage shows him being dragged away." :
        "Natural leader among children. Very protective of younger kids.",
      darkNotes: isHourOfJoyActive ?
        "His protective instincts made him perfect for the transformation." :
        "Consciousness transferred to Subject 1006. Protective instincts amplified beyond control.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png"
    },
    {
      id: "stella",
      name: "Stella Greyber",
      age: 9,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Caring, Nurturing, Gentle",
      notes: isHourOfJoyActive ?
        "Found her favorite pink bow in the playroom. She never went anywhere without it." :
        "Excellent with younger children. Shows maternal instincts.",
      darkNotes: isHourOfJoyActive ?
        "Her caring nature was preserved in her new form." :
        "Perfect candidate for empathy protocols. Now Subject 1170 - 'Kissy Missy'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png"
    }
  ];

  const handleSecretClick = () => {
    setPuzzleClicks(prev => prev + 1);
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
              ORPHANAGE STATUS: ABANDONED - ALL CHILDREN MISSING SINCE AUGUST 8TH, 1995
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Heart className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Playcare Memorial - Missing Children' : 'Playcare Orphanage'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where innocent children vanished and became something else' :
              'Providing loving homes for children since 1950'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                {isHourOfJoyActive ? <AlertTriangle className="w-6 h-6 mr-2" /> : <Heart className="w-6 h-6 mr-2" />}
                {isHourOfJoyActive ? 'What Happened Here' : 'Our Mission'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {isHourOfJoyActive ?
                  'On August 8th, 1995, every child in our care vanished without a trace. Security footage shows the toys moving on their own, but the children... they just disappeared. Some say they became one with their favorite toys.' :
                  'Playcare Orphanage is dedicated to finding loving families for children in need. Our state-of-the-art facility provides comprehensive care, education, and enrichment programs.'
                }
              </p>
              <p className="text-sm text-gray-400">
                {isHourOfJoyActive ?
                  'The investigation is ongoing, but hope fades with each passing day.' :
                  'We work closely with Playtime Co. to ensure every child has access to the finest toys and educational materials.'
                }
              </p>
              <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-2 opacity-75`}>
                {isHourOfJoyActive ?
                  '"The toys were too real. They cared too much." - Final staff report' :
                  '"Special adoption program participants receive priority placement. Contact Dr. Sawyer for program details."'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Adoption Success Stories / Missing Children */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Missing Children Files' : 'Adoption Success Stories'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {children.map((child) => (
              <Card 
                key={child.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-red-500 transition-all duration-300 cursor-pointer poppy-card-glow`}
                onMouseEnter={() => setHoveredChild(child.id)}
                onMouseLeave={() => setHoveredChild(null)}
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
                  <CardTitle className={`${hoveredChild === child.id ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    {child.name}
                  </CardTitle>
                  <p className="text-gray-400">Age: {child.age} | Status: {child.status}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Traits:</strong> {child.traits}
                  </p>
                  <p className={`text-sm transition-all duration-500 ${
                    hoveredChild === child.id ? 'text-red-300' : 'text-gray-400'
                  }`}>
                    {hoveredChild === child.id ? child.darkNotes : child.notes}
                  </p>
                  {isHourOfJoyActive && (
                    <div className="mt-3 p-2 bg-red-900 bg-opacity-30 border border-red-700 rounded">
                      <p className="text-red-300 text-xs">
                        <strong>Investigation Status:</strong> Case remains open. No leads.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Former Programs' : 'Our Programs'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Star className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Educational Program (Discontinued)' : 'Educational Excellence'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isHourOfJoyActive ?
                    'Our educational programs were suspended after the incident. The toys were too involved in the learning process.' :
                    'Comprehensive education programs focusing on creativity, problem-solving, and social development.'
                  }
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Art therapy sessions (last session: August 7th)' : 'Art therapy sessions'}</li>
                  <li>• {isHourOfJoyActive ? 'STEM programs (equipment found destroyed)' : 'Advanced STEM programs'}</li>
                  <li>• {isHourOfJoyActive ? 'Behavioral studies (files corrupted)' : 'Behavioral conditioning workshops'}</li>
                  <li>• {isHourOfJoyActive ? 'Psychological evaluations (subjects missing)' : 'Psychological evaluation protocols'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Users className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Special Partnership (Terminated)' : 'Special Partnership Program'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isHourOfJoyActive ?
                    'Our partnership with Playtime Co. ended in tragedy. The experiments went too far.' :
                    'Exclusive collaboration with Playtime Co. for advanced child development research.'
                  }
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• {isHourOfJoyActive ? 'Toy interaction studies (inconclusive)' : 'Toy interaction studies'}</li>
                  <li>• {isHourOfJoyActive ? 'Emotional bonding research (too successful)' : 'Emotional bonding research'}</li>
                  <li>• {isHourOfJoyActive ? 'Consciousness mapping (subjects lost)' : 'Consciousness mapping projects'}</li>
                  <li>• {isHourOfJoyActive ? 'Bigger Bodies Initiative (terminated)' : 'Bigger Bodies Initiative candidates'}</li>
                </ul>
                <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-2`}>
                  {isHourOfJoyActive ?
                    'All access codes have been revoked following the incident.' :
                    'Access code for program files: playcare2024'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investigation Notes */}
        <div className={`mt-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-30 border ${isHourOfJoyActive ? 'border-red-700' : 'border-red-700'} rounded text-xs`}>
          <p className="text-red-300">
            <strong>{isHourOfJoyActive ? 'Police Report:' : 'Investigation Note:'}</strong> 
            {isHourOfJoyActive ?
              ' 12 children reported missing. No signs of forced entry. Security footage shows toys moving independently before cameras went dark. Case classified as unexplained phenomena.' :
              ' Missing children reports match adoption dates. No follow-up documentation found. Dr. Sawyer\'s files mention "perfect specimens" - access via /prison facility records.'
            }
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playcare Orphanage. {isHourOfJoyActive ? 'Operations suspended.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'In memory of the lost children' : 
              'A Playtime Co. subsidiary facility'
            }
          </p>
          <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-1 opacity-50`}>
            {isHourOfJoyActive ?
              'Memorial hotline: 1-800-MISSING | Case files: cold-cases-1995' :
              'Staff credentials: orphanage789 | Facility oversight: Dr. Harley Sawyer'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Orphanage;
