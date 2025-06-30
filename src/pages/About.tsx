
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, Award, Calendar, Eye, Search, Clock } from "lucide-react";

const About = () => {
  const [secretClicked, setSecretClicked] = useState(0);
  const [showHiddenInfo, setShowHiddenInfo] = useState(false);
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('about');
  }, []);

  const handleSecretClick = () => {
    setSecretClicked(prev => prev + 1);
    if (secretClicked >= 4) {
      setShowHiddenInfo(true);
    }
  };

  return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'welcome-gradient')} text-white`}>
      {/* Navigation */}
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b border-red-900`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-medium border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'}`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`${isPhase2Active ? 'bg-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900')} text-white p-6 shadow-lg`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Neural Recovery Archives' : 
             isHourOfJoyActive ? 'The Truth About Playtime Co.' : 
             'About Playtime Co.'}
          </h1>
          <p className={`${isPhase2Active ? 'text-blue-200' : (isHourOfJoyActive ? 'text-red-200' : 'text-purple-200')} mt-2`}>
            {isPhase2Active ? 'Reconstructing memories of what really happened...' :
             isHourOfJoyActive ? 'The children will be safe with us... forever.' :
             'Creating magical experiences since 1950'}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Company History */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                  <Building className="w-5 h-5 mr-2" />
                  Company Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ? 
                    'You worked here... Employee #1006. The memories are fragmenting back. The facility was more than it seemed.' :
                    isHourOfJoyActive ? 
                      'Founded by Elliot Ludwig in 1950, Playtime Co. began with a noble vision: to create toys that would bring joy to every child. But the vision became twisted...' :
                      'Founded by visionary Elliot Ludwig in 1950, Playtime Co. revolutionized the toy industry with innovative designs and breakthrough manufacturing techniques.'
                  }
                </p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">📅 <strong>Founded:</strong> 1950</p>
                  <p className="mb-2">👨‍💼 <strong>Founder:</strong> Elliot Ludwig</p>
                  <p className="mb-2">🏭 <strong>Headquarters:</strong> {isHourOfJoyActive ? 'Abandoned Facility' : 'Industrial District'}</p>
                  <p>🎯 <strong>Mission:</strong> {isPhase2Active ? 'Preserve consciousness forever' : (isHourOfJoyActive ? 'Eternal protection for children' : 'Innovation in Play')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                  <Award className="w-5 h-5 mr-2" />
                  Breakthrough Innovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${isPhase2Active ? 'bg-blue-500' : (isHourOfJoyActive ? 'bg-red-500' : 'bg-purple-500')} rounded-full mr-3`}></div>
                    <span className="text-gray-300">
                      {isPhase2Active ? 'Consciousness Transfer Technology' : (isHourOfJoyActive ? 'Bigger Bodies Initiative (Classified)' : 'Make-A-Friend Technology')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${isPhase2Active ? 'bg-blue-500' : (isHourOfJoyActive ? 'bg-red-500' : 'bg-purple-500')} rounded-full mr-3`}></div>
                    <span className="text-gray-300">
                      {isPhase2Active ? 'Memory Preservation Systems' : (isHourOfJoyActive ? 'Synthetic Life Integration' : 'Interactive Toy Experiences')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${isPhase2Active ? 'bg-blue-500' : (isHourOfJoyActive ? 'bg-red-500' : 'bg-purple-500')} rounded-full mr-3`}></div>
                    <span className="text-gray-300">
                      {isPhase2Active ? 'Neural Interface Development' : (isHourOfJoyActive ? 'Living Toy Manufacturing' : 'Advanced Manufacturing Processes')}
                    </span>
                  </div>
                </div>
                {showHiddenInfo && (
                  <div className="mt-4 p-3 border border-yellow-500 bg-yellow-900 bg-opacity-20 rounded">
                    <p className="text-yellow-300 text-sm">
                      🔍 <strong>Staff Access Hint:</strong> Night security worked since 1995, research focused on psychology case 101, 
                      executive vision was about bigger bodies, special projects involved prototype 1170, 
                      and the weak security chief was replaced.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Recovered Personnel Files' : (isHourOfJoyActive ? 'Former Leadership' : 'Leadership Team')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500 cursor-pointer`} onClick={handleSecretClick}>
              <CardHeader>
                <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                  {isPhase2Active ? 'Dr. Ludwig (Deceased)' : (isHourOfJoyActive ? 'Elliot Ludwig †' : 'Elliot Ludwig')}
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  {isPhase2Active ? 'Former CEO - Consciousness Archived' : (isHourOfJoyActive ? 'Visionary & Victim' : 'CEO & Founder')}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isPhase2Active ? 
                    'His dream of preserving consciousness led to your transformation. The bigger bodies project was his obsession after losing his wife.' :
                    isHourOfJoyActive ? 
                      'His vision of "bigger bodies" led to the facility\'s downfall. Username: dr.ludwig, Password: biggerbodies' :
                      'Revolutionary leader in toy innovation and child psychology applications in manufacturing.'
                  }
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  <p>🔑 Access Level: Executive</p>
                  <p>📧 Username pattern: dr.lastname</p>
                  {!isPhase2Active && <p className="text-yellow-400">💡 His vision was about "bigger bodies"</p>}
                </div>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                  {isPhase2Active ? 'Dr. Sawyer → The Doctor' : (isHourOfJoyActive ? 'The Doctor (Entity)' : 'Dr. Harley Sawyer')}
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  {isPhase2Active ? 'Consciousness Merged - No Longer Human' : (isHourOfJoyActive ? 'Security Override' : 'Chief Medical Officer')}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isPhase2Active ? 
                    'Sawyer was weak. The Doctor sees what he could not. They know the truth about your transformation.' :
                    isHourOfJoyActive ? 
                      'Dr. Sawyer was weak, but The Doctor is strong. Username: the.doctor, Password: sawyer-was-weak' :
                      'Leading researcher in consciousness studies and experimental psychology applications.'
                  }
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  <p>🔑 Access Level: Security Director</p>
                  <p>⚠️ Entity Classification: Non-Human</p>
                  {!isPhase2Active && <p className="text-red-400">💡 Knows that "sawyer-was-weak"</p>}
                </div>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                  {isPhase2Active ? 'Leith Pierre (Missing)' : (isHourOfJoyActive ? 'Leith Pierre †' : 'Leith Pierre')}
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  {isPhase2Active ? 'Special Projects - Last Seen Aug 8th' : (isHourOfJoyActive ? 'Special Projects Coordinator' : 'Innovation Director')}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isPhase2Active ? 
                    'Worked on prototype 1170... the number rings familiar. You may have worked with them on classified projects.' :
                    isHourOfJoyActive ? 
                      'Coordinated the prototype series including 1170. Username: leith.pierre, Password: prototype1170' :
                      'Spearheads breakthrough projects and coordinates advanced manufacturing initiatives.'
                  }
                </p>
                <div className="mt-3 text-xs text-gray-400">
                  <p>🔑 Access Level: Executive</p>
                  <p>🔬 Project Focus: Prototype Series</p>
                  {!isPhase2Active && <p className="text-purple-400">💡 Worked on "prototype1170"</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Staff Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Personnel Database Recovery' : 'Department Staff'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500`}>
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Security & Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mike Schmidt - Night Security</span>
                    <span className="text-green-400">Active since 1995</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bob Matthews - Maintenance</span>
                    <span className="text-blue-400">Engineering Team</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sarah Johnson - Tour Guide</span>
                    <span className="text-purple-400">Public Relations</span>
                  </div>
                  {showHiddenInfo && (
                    <div className="mt-4 p-2 border border-green-500 bg-green-900 bg-opacity-20 rounded">
                      <p className="text-green-300 text-xs">
                        🔍 Username: security.mike | Password hint: nightshift1995
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-blue-500`}>
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Research Division
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dr. Sarah Chen - Psychology</span>
                    <span className="text-blue-400">Case Studies 101+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Marcus Davis - Engineering</span>
                    <span className="text-yellow-400">Blueprint Design</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Amy Rodriguez - Lab Tech</span>
                    <span className="text-red-400">Specimen Analysis</span>
                  </div>
                  {showHiddenInfo && (
                    <div className="mt-4 p-2 border border-blue-500 bg-blue-900 bg-opacity-20 rounded">
                      <p className="text-blue-300 text-xs">
                        🔍 Username: dr.chen | Password hint: psychology101
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Access Hints */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-yellow-500`}>
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                {isPhase2Active ? 'Memory Access Protocols' : 'Staff Access Information'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-yellow-300 font-bold mb-3">Access Methods:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>🖱️ Click company logo 13+ times for staff access</li>
                    <li>⌨️ Type "SAWYER" to access The Doctor's terminal</li>
                    <li>🎮 Use Konami code for system access</li>
                    <li>📡 Morse code reveals prototype secrets</li>
                    <li>🔢 Binary code unlocks Poppy's messages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-300 font-bold mb-3">Username Patterns:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>👮 Security: department.firstname</li>
                    <li>🔬 Research: dr.lastname</li>
                    <li>💼 Executive: dr.lastname / firstname.lastname</li>
                    <li>🎯 Special: the.title</li>
                    <li>🔒 Hidden: insider / prototype</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 border border-yellow-500 bg-yellow-900 bg-opacity-20 rounded">
                <p className="text-yellow-200 text-sm text-center">
                  💡 <strong>Hint:</strong> Click on leadership cards above 5 times to reveal more specific access details
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation Links */}
        <section className="text-center">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/factory">Factory Tour</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/products">View Products</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/departments">Staff Directory</Link>
            </Button>
          </div>
          
          {(secretClicked >= 3 || showHiddenInfo) && (
            <div className="mt-8">
              <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                <Link to="/login">
                  <Eye className="w-4 h-4 mr-2" />
                  Staff Login Portal
                </Link>
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
