
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Building, Users, Award, Clock, Skull, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

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

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-semibold`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
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
              COMPANY STATUS: OPERATIONS SUSPENDED - ALL FACILITIES ABANDONED SINCE 1995
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Building className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Playtime Co. - Corporate Memorial' : 'About Playtime Co.'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'The rise and fall of the world\'s largest toy manufacturer' :
              'The world\'s most innovative toy manufacturer since 1930'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Company History */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                <Clock className="w-6 h-6 mr-2" />
                {isHourOfJoyActive ? 'Corporate Timeline - 1930 to 1995' : 'Our Legacy - Since 1930'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a1/Playtime_Co._Logo.png/revision/latest?cb=20211012153845"
                    alt="Playtime Co. Logo"
                    className="w-full h-48 object-contain rounded-lg border border-purple-500 bg-gray-900"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">Original Playtime Co. Corporate Logo</p>
                </div>
                <div className="space-y-4">
                  <div className={`p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} bg-opacity-30 rounded border ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
                    <h3 className={`font-bold ${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'} mb-2`}>Founded 1930</h3>
                    <p className="text-gray-300 text-sm">
                      Elliot Ludwig established Playtime Co. with a vision to create toys that would bring joy to children worldwide. 
                      The company quickly became known for its innovative designs and high-quality manufacturing.
                    </p>
                  </div>
                  <div className={`p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} bg-opacity-30 rounded border ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
                    <h3 className={`font-bold ${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'} mb-2`}>{isHourOfJoyActive ? 'Closure 1995' : 'Innovation Era'}</h3>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ?
                        'Following the Hour of Joy incident on August 8th, 1995, all Playtime Co. operations were permanently suspended. The factory remains sealed to this day.' :
                        'Pioneering the Bigger Bodies Initiative and advanced AI integration, we continue to push the boundaries of what toys can achieve.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Figures */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Memorial - Key Personnel' : 'Leadership Team'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Elliot Ludwig */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-blue-400 transition-all`}>
              <CardHeader>
                <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-900">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/7/7c/Elliot_Ludwig_Portrait.png/revision/latest?cb=20220506150829"
                    alt="Elliot Ludwig"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                  Elliot Ludwig
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  {isHourOfJoyActive ? 'Founder & Former CEO (Deceased)' : 'Founder & CEO'}
                </p>
                <p className="text-gray-400 text-xs">
                  {isHourOfJoyActive ?
                    'Visionary founder who disappeared under mysterious circumstances. His legacy lives on in every toy we created.' :
                    'Visionary leader dedicated to bringing joy and innovation to children worldwide through revolutionary toy design.'
                  }
                </p>
              </CardContent>
            </Card>

            {/* Dr. Harley Sawyer */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-400 transition-all`}>
              <CardHeader>
                <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-900">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/3/3e/Dr._Harley_Sawyer.png/revision/latest?cb=20220506150829"
                    alt="Dr. Harley Sawyer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`}>
                  Dr. Harley Sawyer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  {isHourOfJoyActive ? 'Former Head of Innovation (Missing)' : 'Head of Innovation'}
                </p>
                <p className="text-gray-400 text-xs">
                  {isHourOfJoyActive ?
                    'Lead scientist behind the Bigger Bodies Initiative. Last seen during the Hour of Joy incident.' :
                    'Brilliant scientist leading our breakthrough research in advanced toy development and child psychology.'
                  }
                </p>
              </CardContent>
            </Card>

            {/* Leith Pierre */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-green-400 transition-all`}>
              <CardHeader>
                <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-900">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/1/1b/Leith_Pierre.png/revision/latest?cb=20220506150829"
                    alt="Leith Pierre"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
                  Leith Pierre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">
                  {isHourOfJoyActive ? 'Former Head of Security (Deceased)' : 'Head of Security'}
                </p>
                <p className="text-gray-400 text-xs">
                  {isHourOfJoyActive ?
                    'Security chief who tried to contain the Hour of Joy outbreak. His efforts were ultimately unsuccessful.' :
                    'Experienced security professional ensuring the safety and protection of all Playtime Co. facilities and personnel.'
                  }
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'What We Stood For' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center`}>
              <CardContent className="pt-6">
                <Heart className={`w-12 h-12 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>Love</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ? 
                    'Every toy was created with love, though that love became twisted.' :
                    'Every toy is crafted with genuine care and affection for the children who will cherish them.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center`}>
              <CardContent className="pt-6">
                <Users className={`w-12 h-12 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>Community</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'We built a community that ultimately turned against itself.' :
                    'Building stronger communities through shared play experiences and lasting friendships.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center`}>
              <CardContent className="pt-6">
                <Award className={`w-12 h-12 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`}>Excellence</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'Our pursuit of excellence led us too far down a dark path.' :
                    'Maintaining the highest standards in toy design, safety, and manufacturing quality.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center`}>
              <CardContent className="pt-6">
                <Building className={`w-12 h-12 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Innovation</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'Innovation without restraint brought our downfall.' :
                    'Pioneering new technologies and methods to create toys that inspire and educate.'
                  }
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Memorial Section for Hour of Joy */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Skull className="w-6 h-6 mr-2" />
                  In Memory of All Who Were Lost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-200 mb-4">
                  Playtime Co. officially acknowledges the tragic events of August 8th, 1995. We remember all employees, 
                  children, and visitors who were lost during the Hour of Joy incident.
                </p>
                <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                  <p className="text-red-300 text-sm text-center italic">
                    "We made toys to bring joy. In the end, they brought only darkness. May those we lost find the peace we could not give them."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1930-1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Corporate operations permanently ceased.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Memorial site maintained by surviving stakeholders' : 
              'Creating joyful experiences through innovative toy design'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
