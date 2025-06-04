
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Heart, Eye } from "lucide-react";

const About = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [sequenceProgress, setSequenceProgress] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [mouseTrail, setMouseTrail] = useState<{x: number, y: number, time: number}[]>([]);

  const requiredSequence = ["ludwig", "sawyer", "chen", "ludwig"]; // Hover leadership in order

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.04) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 8000);

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      setMouseTrail(prev => [...prev.slice(-50), { x: event.clientX, y: event.clientY, time: now }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLeadershipHover = (person: string) => {
    const newSequence = [...sequenceProgress, person].slice(-4);
    setSequenceProgress(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredSequence)) {
      setSecretFound(true);
      setHiddenMessage("⬡ LEADERSHIP SEQUENCE COMPLETE ⬡ Executive access protocols now visible. The founders know the way.");
      setTimeout(() => setHiddenMessage(""), 8000);
    }
  };

  const handleValueHover = () => {
    setHoverCount(prev => prev + 1);
    if (hoverCount >= 3) {
      setHiddenMessage("◆ CORPORATE VALUES ANALYZED ◆ Hidden departmental structure detected. Check the organizational pathways...");
      setTimeout(() => setHiddenMessage(""), 6000);
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
              <Link to="/about" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
              {secretFound && (
                <Link to="/departments" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                  [◆ STAFF ◆]
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
            <Users className="w-8 h-8 mr-3" />
            About Playtime Co.
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">Pioneering toy innovation since <span className="invisible-text" title="Something happened then...">1950</span></p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Our Legacy</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">Founded on Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Playtime Co. was founded in 1950 with a simple mission: to create toys that bring joy and wonder to children around the world. 
                  What started as a small workshop has grown into one of the most <span className="mystery-reveal text-yellow-400">innovative</span> toy companies in the industry.
                </p>
                <p className="text-gray-300 mb-4 nostalgic-text">
                  Our breakthrough came in the 1990s with the development of our revolutionary <span className="invisible-text">"Bigger Bodies"</span> technology, 
                  allowing us to create <span className="mystery-reveal text-red-400">larger-than-life companions</span> that children could truly bond with.
                </p>
                <p className="text-gray-300 nostalgic-text">
                  Today, we continue to push the boundaries of what's possible in toy design, always keeping the <span className="backwards-text">cigam fo</span> childhood at the heart of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleValueHover}
            >
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors creepy-hover" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Love</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Every toy is crafted with genuine <span className="mystery-reveal text-red-400">care</span> and affection</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">.-.. --- ...- .</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleValueHover}
            >
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors creepy-hover" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Excellence</h3>
                <p className="text-gray-300 text-sm nostalgic-text">We strive for <span className="invisible-text">perfection</span> in every detail</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">ecnellecxe</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleValueHover}
            >
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors creepy-hover" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Community</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Building connections that last <span className="mystery-reveal text-yellow-400">forever</span></p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Together always</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleValueHover}
            >
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-red-400 group-hover:text-yellow-400 transition-colors creepy-hover" />
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Innovation</h3>
                <p className="text-gray-300 text-sm nostalgic-text">Pioneering the <span className="mystery-reveal text-purple-400">future</span> of play</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">.. -. -. --- ...- .- - .. --- -.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={() => handleLeadershipHover("ludwig")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <Users className="w-12 h-12 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Elliot Ludwig</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">Founder & CEO</p>
                <p className="text-gray-400 text-xs nostalgic-text">Visionary leader with a passion for bringing <span className="mystery-reveal text-yellow-400">joy</span> to children everywhere.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">The beginning of everything</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={() => handleLeadershipHover("sawyer")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <Award className="w-12 h-12 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Dr. Harley Sawyer</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">Chief Research Officer</p>
                <p className="text-gray-400 text-xs nostalgic-text">Leading our innovation initiatives and <span className="mystery-reveal text-purple-400">breakthrough</span> technologies.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">hcraeser</span> • <span className="hidden-morse">.-. . ... . .- .-. -.-. ...</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={() => handleLeadershipHover("chen")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <Heart className="w-12 h-12 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Dr. Sarah Chen</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">Head of Child Psychology</p>
                <p className="text-gray-400 text-xs nostalgic-text">Ensuring our toys meet the <span className="mystery-reveal text-red-400">emotional needs</span> of every child.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Understanding minds</span> • <span className="hidden-morse">-- . -.. .. -.-. .- .-..</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">Industry Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 nostalgic-text">
                  <li>• 1995: Innovation Award for <span className="mystery-reveal text-yellow-400">Bigger Bodies</span> Technology</li>
                  <li>• 1993: Best Large-Scale Toy Design (Huggy Wuggy)</li>
                  <li>• 1991: Safety Excellence in Manufacturing</li>
                  <li>• 1990: Children's Choice Award (Poppy Doll)</li>
                  <li>• 1975: Toy Industry Lifetime Achievement Award</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">Special Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 nostalgic-text">
                  <li>• <span className="mystery-reveal text-blue-400">Playcare</span> Educational Initiative</li>
                  <li>• Community Outreach Programs</li>
                  <li>• Advanced Research Partnerships</li>
                  <li>• Child Development Studies</li>
                  <li>• Special Needs Toy Development</li>
                </ul>
                <div className="text-xs text-gray-600 mt-4 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Specialized facilities</span> • <span className="backwards-text">eganahpro</span>
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

        {/* Subtle notice */}
        <div className="mt-8 p-4 bg-slate-900 bg-opacity-20 border-l-4 border-yellow-600 opacity-75 static-noise">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-300 nostalgic-text">
                <strong>Corporate Notice:</strong> Playtime Co. is committed to transparency and ethical business practices. 
                For detailed operational information, authorized personnel may access our organizational 
                <span className="cursor-pointer hover:text-green-400 mystery-reveal" title="Hidden pathway">structure</span> through appropriate channels.
              </p>
              <p className="text-xs mt-2 opacity-30 hidden-morse">
                <span className="backwards-text">stnemtrapeD</span> • <span className="invisible-text">Leadership sequence required</span>
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
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="System access points">Corporate Registry</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> /departments</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> lennosreP deziohtuA</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Eye className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">The founders watch over all</span>
            <Eye className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
