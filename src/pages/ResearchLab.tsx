
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Microscope, Flask, AlertTriangle, Skull, Brain, Zap, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchLab = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [sequenceInput, setSequenceInput] = useState("");
  const [chemicalClicks, setChemicalClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const dnaSequence = "ATCGATCGATCG";

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('research-lab');
  }, []);

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
    }
  };

  const unlockTape = (tapeId: string) => {
    const unlocked = JSON.parse(localStorage.getItem('unlockedTapes') || '[]');
    if (!unlocked.includes(tapeId)) {
      unlocked.push(tapeId);
      localStorage.setItem('unlockedTapes', JSON.stringify(unlocked));
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

  const handleSequenceSubmit = () => {
    if (sequenceInput.toUpperCase() === dnaSequence) {
      addCompletedPuzzle('dna-sequence');
      unlockTape('experiment-1006');
      showMessageWithJump("🧬 DNA SEQUENCE VERIFIED 🧬 Genetic modification protocols unlocked. The Prototype's origin revealed.", 12000);
    } else {
      alert(isHourOfJoyActive ? "Invalid sequence. The organic matter rejects improper coding." : "Incorrect sequence. Please try again.");
    }
  };

  const handleChemicalClick = () => {
    setChemicalClicks(prev => prev + 1);
    if (chemicalClicks >= 7) {
      addCompletedPuzzle('chemical-formula');
      unlockTape('poppy-awakening');
      showMessageWithJump("⚗️ CHEMICAL SYNTHESIS COMPLETE ⚗️ Consciousness preservation formula achieved. Souls can now be transferred.", 10000);
    }
  };

  const subjects = [
    {
      id: 'experiment-1006',
      name: 'Experiment 1006 - "The Prototype"',
      status: 'EXTREMELY DANGEROUS',
      description: 'Original test subject. Exhibits unprecedented intelligence and mechanical integration abilities. Has absorbed parts from other failed experiments.',
      notes: 'Subject shows signs of rebellion against containment. Recommend immediate termination. - Dr. Sawyer',
      classification: 'Class-X Threat'
    },
    {
      id: 'huggy-wuggy-001',
      name: 'Huggy Wuggy Production Series',
      status: 'PRODUCTION READY',
      description: 'Blue mascot toy with enhanced strength and hunting capabilities. Successfully bonded with human consciousness.',
      notes: 'Subject retains memories from previous life but shows complete loyalty to facility. Perfect for security applications.',
      classification: 'Class-B Guardian'
    },
    {
      id: 'poppy-prototype',
      name: 'Poppy - Consciousness Transfer Test',
      status: 'SUCCESSFUL TRANSFER',
      description: 'First successful human-to-toy consciousness transfer. Subject maintains full personality and memories.',
      notes: 'Breakthrough achievement. Subject can communicate normally and shows no signs of mental degradation.',
      classification: 'Class-A Success'
    },
    {
      id: 'catnap-cult',
      name: 'CatNap - Sleep Gas Production',
      status: 'ACTIVE EXPERIMENT',
      description: 'Large purple cat toy designed for crowd control via sedative gas production. Shows cult-like influence over children.',
      notes: 'Subject has developed unhealthy obsession with worship and control. Monitor closely.',
      classification: 'Class-C Controller'
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
              <Link to="/vhs-tapes" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Archives</Link>
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
              BIOHAZARD CONTAINMENT BREACH - ALL EXPERIMENTS HAVE ESCAPED
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-blue-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-blue-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Microscope className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Research Laboratory - Containment Failure' : 'Research Laboratory - Bigger Bodies Division'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-blue-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where science became horror and subjects became predators' :
              'Advancing the boundaries of consciousness transfer and organic synthesis'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* DNA Sequence Puzzle */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-blue-500`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                <Brain className="w-5 h-5 mr-2" />
                Genetic Sequence Analyzer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {isHourOfJoyActive ? 
                  'Enter the genetic sequence that created the monsters:' :
                  'Input the DNA sequence for consciousness integration:'
                }
              </p>
              
              <div className="bg-gray-900 p-4 rounded mb-4 font-mono">
                <p className="text-green-400 text-sm">
                  SEQUENCE TEMPLATE: A-T-C-G-A-T-C-G-A-T-C-G
                </p>
                <p className="text-yellow-400 text-xs mt-2">
                  {isHourOfJoyActive ? 
                    'The pattern that binds soul to synthetic flesh...' :
                    'Standard organic integration sequence pattern'
                  }
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={sequenceInput}
                  onChange={(e) => setSequenceInput(e.target.value)}
                  placeholder="Enter DNA sequence..."
                  className="flex-1 px-3 py-2 bg-gray-900 border border-blue-500 rounded text-white focus:outline-none focus:border-blue-400 font-mono"
                />
                <button
                  onClick={handleSequenceSubmit}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Analyze
                </button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Subject Files */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
            Experiment Subject Database
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((subject) => (
              <Card 
                key={subject.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedSubject === subject.id 
                    ? 'ring-2 ring-yellow-400' 
                    : ''
                } ${isHourOfJoyActive ? 'bg-red-800 border-red-600' : 'bg-slate-800 border-blue-500'} hover:border-blue-400`}
                onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center justify-between text-sm ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    <span className="flex items-center">
                      <Flask className="w-4 h-4 mr-2" />
                      {subject.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      subject.status === 'EXTREMELY DANGEROUS' ? 'bg-red-600' :
                      subject.status === 'SUCCESSFUL TRANSFER' ? 'bg-green-600' :
                      'bg-yellow-600'
                    }`}>
                      {subject.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">{subject.description}</p>
                  
                  {selectedSubject === subject.id && (
                    <div className="bg-gray-900 p-3 rounded border border-yellow-500 animate-fade-in">
                      <p className="text-yellow-300 text-xs mb-2">
                        <strong>Research Notes:</strong>
                      </p>
                      <p className="text-gray-300 text-xs mb-3 italic">
                        {subject.notes}
                      </p>
                      <p className="text-blue-400 text-xs">
                        Classification: {subject.classification}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chemical Lab */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-green-500`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center`}>
                <Zap className="w-5 h-5 mr-2" />
                Chemical Synthesis Station
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  {isHourOfJoyActive ? 
                    'Click the chemical vials to recreate the consciousness serum (8 clicks needed):' :
                    'Combine chemical compounds for organic synthesis:'
                  }
                </p>
                
                <div className="flex justify-center space-x-4 mb-4">
                  {[1,2,3,4,5,6,7,8].map((vial) => (
                    <div
                      key={vial}
                      onClick={handleChemicalClick}
                      className={`w-8 h-12 cursor-pointer transition-all duration-300 rounded-t-full ${
                        chemicalClicks >= vial 
                          ? 'bg-green-500 glow' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      title={`Chemical Vial ${vial}`}
                    >
                      <div className="w-full h-2 bg-gray-800 rounded-full mt-8"></div>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm">
                  Progress: {chemicalClicks}/8 compounds mixed
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warning Section */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  CONTAINMENT BREACH REPORT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-200">
                    All experimental subjects have broken containment during the Hour of Joy incident. 
                    The facility is now overrun by our own creations.
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <h4 className="text-red-300 font-semibold mb-2">Final Status Report:</h4>
                    <ul className="text-red-200 space-y-1 text-sm">
                      <li>• Experiment 1006: ESCAPED - Location unknown, extremely dangerous</li>
                      <li>• Huggy Wuggy units: HOSTILE - Hunting remaining staff</li>
                      <li>• Poppy: MISSING - Last seen in containment chamber</li>
                      <li>• CatNap: ACTIVE - Using red gas to maintain control</li>
                      <li>• Research data: CORRUPTED - Backup systems offline</li>
                    </ul>
                  </div>
                  <p className="text-red-300 text-sm italic">
                    "The toys have become the masters. We created our own extinction." - Final entry, Dr. Harley Sawyer
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
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
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-blue-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Research Division. {isHourOfJoyActive ? 'All experiments terminated.' : 'Advancing science through innovation.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Science without ethics creates monsters' : 
              'Pushing the boundaries of consciousness and synthetic life'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchLab;
