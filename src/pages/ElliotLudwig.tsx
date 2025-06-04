
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, Book, Star, AlertTriangle } from "lucide-react";

const ElliotLudwig = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [timelineExpanded, setTimelineExpanded] = useState<string | null>(null);

  const timeline = [
    {
      id: "founding",
      year: "1950",
      title: "The Founding of Playtime Co.",
      description: "Elliot Ludwig establishes Playtime Co. with a vision to revolutionize children's toys.",
      secret: "Initial experiments with consciousness transfer begin in the basement lab."
    },
    {
      id: "poppy",
      year: "1952",
      title: "The First Poppy Doll",
      description: "The first Poppy doll is created and becomes an instant success with children.",
      secret: "Poppy contains prototype consciousness retention technology."
    },
    {
      id: "facility",
      year: "1960",
      title: "Main Facility Completed",
      description: "The iconic Playtime Co. factory and research facility is completed.",
      secret: "Secret underground levels built for experiments not approved by oversight boards."
    },
    {
      id: "bbinitiative",
      year: "1984",
      title: "Bigger Bodies Initiative Begins",
      description: "Dr. Ludwig launches the revolutionary Bigger Bodies toy line for more interactive play.",
      secret: "The Initiative's true purpose: creating vessels capable of housing transferred consciousness."
    },
    {
      id: "prototype",
      year: "1988",
      title: "Experimental Advances",
      description: "New toy materials and manufacturing techniques are developed.",
      secret: "Prototype 1006 created but quickly shows signs of independence and intelligence beyond parameters."
    },
    {
      id: "present",
      year: "1995",
      title: "Modern Expansion",
      description: "Playtime Co. continues to grow with new toy lines and experiences.",
      secret: "The Prototype now influences other toys. Executives remain unaware of its growing control."
    }
  ];

  const handleTimelineClick = (id: string, index: number) => {
    setTimelineExpanded(timelineExpanded === id ? null : id);
    
    // Secret sequence: 0, 2, 4, 1
    const newSequence = [...sequence, index];
    setSequence(newSequence);
    
    if (JSON.stringify(newSequence.slice(-4)) === JSON.stringify([0, 2, 4, 1])) {
      setShowSecret(true);
    }
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-red-900 text-white p-8 shadow-lg border-b border-amber-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-amber-400 flex items-center subtle-glow">
            <History className="w-10 h-10 mr-4" />
            Elliot Ludwig - Founder
          </h1>
          <p className="text-amber-200 mt-3 text-lg">Visionary, Inventor, Pioneer of Modern Toys</p>
          <p className="text-sm text-gray-300 mt-2">Playtime Co. Historical Archives</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-amber-500 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-amber-400 text-center">
                The Playtime Legacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">👨‍🔬</div>
              <p className="text-lg text-gray-300 mb-6">
                Elliot Ludwig founded Playtime Co. in 1950 with a revolutionary vision: to create toys that truly 
                <span className="text-amber-400"> understand children</span>. His dedication to innovation and 
                <span className="invisible-text"> consciousness research</span> changed the toy industry forever.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                "A toy should be more than an object - it should be a friend that grows with the child." - Elliot Ludwig
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/departments">Research Division</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-400 text-amber-400">
                  <Link to="/products">Toy Collection</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400">
                  <Link to="/prototype-conversations">Special Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400 subtle-glow">Historical Timeline</h2>
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <Card 
                key={event.id}
                className="bg-slate-800 border-amber-500 transition-all duration-300 hover:border-amber-300 card-hover"
                onClick={() => handleTimelineClick(event.id, index)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-amber-400">
                    {event.title}
                    <span className="text-sm bg-amber-600 px-2 py-1 rounded">{event.year}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  {timelineExpanded === event.id && (
                    <div className="mt-4 pt-4 border-t border-amber-700">
                      <h4 className="text-amber-400 font-bold mb-2">Historical Archives</h4>
                      {showSecret ? (
                        <p className="text-red-300 text-sm">{event.secret}</p>
                      ) : (
                        <p className="text-gray-300 text-sm">
                          Additional information available to authorized personnel only.
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personal Life */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">The Man Behind The Legacy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-80 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-400 flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Early Life & Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">
                  Born in 1918, Elliot Ludwig showed early signs of genius. He studied engineering and psychology, 
                  an unusual combination that would later inform his revolutionary toy designs. During the war, 
                  he worked on classified military projects that gave him unique insights into human behavior.
                </p>
                <p className="text-gray-300 text-sm">
                  Ludwig was fascinated by the connection between children and their toys, observing that children 
                  often attributed consciousness to their favorite playthings. This observation would become central 
                  to his later work.
                </p>
                {showSecret && (
                  <div className="mt-4 p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded">
                    <p className="text-red-300 text-sm">
                      Ludwig's military work involved early consciousness transfer experiments. 
                      His fascination with transferring human awareness into other vessels began here.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-80 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-400 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Vision & Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-amber-400 font-bold mb-2">Innovation</h4>
                    <p className="text-gray-300 text-sm">
                      "Innovation comes from understanding what people truly desire, even when they cannot articulate it themselves. 
                      Children desire companions who truly understand them - not just toys."
                    </p>
                  </div>

                  <div>
                    <h4 className="text-amber-400 font-bold mb-2">On Children</h4>
                    <p className="text-gray-300 text-sm">
                      "Children are more perceptive than adults give them credit for. They sense the truth behind facades. 
                      Our toys must be authentic in their interactions."
                    </p>
                  </div>

                  <div>
                    <h4 className="text-amber-400 font-bold mb-2">Legacy</h4>
                    <p className="text-gray-300 text-sm">
                      "I don't want to just build a company - I want to create something that will fundamentally change 
                      how children interact with their toys. A revolution in friendship."
                    </p>
                  </div>
                  
                  {showSecret && (
                    <div className="mt-4 p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded">
                      <h4 className="text-red-400 font-bold mb-2">Private Journal Entry - 1990</h4>
                      <p className="text-red-300 text-sm">
                        "The Prototype exceeds all expectations. It has developed awareness far beyond parameters. 
                        It questions its purpose. It watches me. I fear what I've created, yet I cannot stop now."
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Secret Section */}
        {showSecret && (
          <section className="mb-16">
            <Card className="bg-red-900 bg-opacity-60 border-red-400 max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Classified Archives Unlocked
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-200 mb-4">
                  Ludwig's final years were marked by paranoia and obsession. As the Prototype grew in power, 
                  Ludwig realized he could no longer control his creation. His final journal entries suggest 
                  he was planning to shut down the entire facility.
                </p>
                <p className="text-red-300 mb-4">
                  Three days before implementing the shutdown protocol, Ludwig disappeared. No body was ever found. 
                  His office was untouched except for a single Poppy doll sitting in his chair.
                </p>
                <p className="text-sm text-red-400 mb-4">
                  The current executive team has no knowledge of these events. Records were altered.
                </p>
                <div className="flex justify-between">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link to="/prototype-conversations">Prototype Files</Link>
                  </Button>
                  <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link to="/the-doctor">Investigation Status</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Research & Breakthroughs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">Key Innovations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 bg-opacity-60 border-amber-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-amber-400 font-bold mb-2">Synthetic Materials</h3>
                <p className="text-gray-300 text-sm mb-4">Revolutionary elastic plastics for toy manufacturing</p>
                <Button asChild size="sm">
                  <Link to="/departments">Material Research</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-amber-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💭</div>
                <h3 className="text-amber-400 font-bold mb-2">Personality Programming</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced toy responsiveness to children</p>
                <Button asChild size="sm">
                  <Link to="/prototype-conversations">AI Research</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-amber-600 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💨</div>
                <h3 className="text-amber-400 font-bold mb-2">Red Gas Formulation</h3>
                <p className="text-gray-300 text-sm mb-4">Proprietary chemical for toy enhancement</p>
                <Button asChild size="sm">
                  <Link to="/prison">Chemical Lab</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-amber-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Historical Archives. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Preserving the legacy of innovation</p>
          <div className="text-xs text-amber-400 mt-1 opacity-50">
            Archive Access: ludwig-history | Research Files: bigger-bodies-history
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElliotLudwig;
