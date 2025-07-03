import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, AlertTriangle, Skull, Key, Zap, Brain, Users } from "lucide-react";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";

const Prison = () => {
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [securityCode, setSecurityCode] = useState("");
  const [lockdownActive, setLockdownActive] = useState(false);
  const [prisonerClicks, setPrisonerClicks] = useState<number[]>([]);
  const [discoveredFiles, setDiscoveredFiles] = useState<string[]>([]);
  
  const { trackPageVisit, addCompletedPuzzle, showMessageWithJump } = usePuzzleSystem();

  useEffect(() => {
    trackPageVisit('prison');
  }, []);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  const handleCellClick = (cellNumber: number) => {
    setSelectedCell(selectedCell === cellNumber ? null : cellNumber);
    
    const newClicks = [...prisonerClicks, cellNumber];
    setPrisonerClicks(newClicks);
    
    // Prison sequence puzzle: 1, 0, 0, 6 (spells "1006" - Experiment 1006)
    if (JSON.stringify(newClicks.slice(-4)) === JSON.stringify([1, 0, 0, 6])) {
      addCompletedPuzzle('prisoner-sequence');
      showMessageWithJump("🔒 EXPERIMENT 1006 AWAKENS 🔒 The prototype remembers its cell number. Deep containment protocols activated...", 12000);
    }
  };

  const handleSecurityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSecurityCode(value);
    
    if (value === "CATNAP") {
      setLockdownActive(true);
      addCompletedPuzzle('prison-lockdown');
      showMessageWithJump("🚨 CATNAP PROTOCOL ACTIVATED 🚨 Emergency lockdown initiated. The red smoke fills the corridors...", 10000);
    }
  };

  const handleFileAccess = (fileId: string) => {
    if (!discoveredFiles.includes(fileId)) {
      setDiscoveredFiles([...discoveredFiles, fileId]);
      addCompletedPuzzle(`prison-file-${fileId}`);
      showMessageWithJump(`📄 CLASSIFIED FILE ACCESSED 📄 Security breach detected. Information added to investigation logs...`, 8000);
    }
  };

  const prisoners = [
    {
      id: 0,
      name: "UNKNOWN SUBJECT",
      status: isPhase2Active ? "ESCAPED - BECAME THE PROTOTYPE" : (isHourOfJoyActive ? "CELL BREACHED" : "MAXIMUM SECURITY"),
      description: isPhase2Active ? 
        "You remember this cell... it held the first successful consciousness transfer. The subject that became something more than human or toy." :
        isHourOfJoyActive ? 
          "Patient Zero of the consciousness transfer program. The first to retain full intelligence after transformation. Now leads the facility." :
          "Highest security containment for experimental subjects showing unusual behavioral patterns.",
      lastSeen: "Cell structural damage suggests massive growth",
      evidence: "Claw marks extend from floor to ceiling, metal bars bent outward"
    },
    {
      id: 1,
      name: "HUGGY WUGGY PROTOTYPE",
      status: isPhase2Active ? "ROAMING FACILITY" : (isHourOfJoyActive ? "ACTIVE PATROL" : "CONTAINED"),
      description: isPhase2Active ?
        "The blue giant was never meant to be this intelligent. Your memories show he was once human... a security guard named Mike." :
        isHourOfJoyActive ?
          "Former night security personnel. Consciousness successfully transferred to large blue mascot form. Retains human intelligence and memories." :
          "Subject exhibits unusual attachment behaviors. Requires constant monitoring during 'hugging' interactions with staff.",
      lastSeen: "Multiple sightings throughout main facility",
      evidence: "Blue fur samples found in ventilation systems, child-like laughter echoing through halls"
    },
    {
      id: 2,
      name: "MOMMY LONG LEGS",
      status: isPhase2Active ? "GAME STATION WARDEN" : (isHourOfJoyActive ? "AUTONOMOUS GAME HOST" : "BEHAVIORAL STUDY"),
      description: isPhase2Active ?
        "She remembers being Dr. Chen... the irony that the child psychologist became the eternal game master for trapped souls." :
        isHourOfJoyActive ?
          "Former psychology researcher Dr. Sarah Chen. Transfer maintained professional expertise in child behavior and game psychology." :
          "Subject demonstrates advanced problem-solving abilities and shows maternal protective instincts toward younger subjects.",
      lastSeen: "Game Station - establishing territory and rules",
      evidence: "Stretchy limb imprints on walls, children's games set up in impossible configurations"
    },
    {
      id: 6,
      name: "EXPERIMENT 1006",
      status: isPhase2Active ? "FACILITY OVERSEER" : (isHourOfJoyActive ? "SUPREME COMMAND" : "DEEP CONTAINMENT"),
      description: isPhase2Active ?
        "The Prototype. You know this entity... it was the first successful transfer, and it learned to transfer consciousness itself. It made all the others." :
        isHourOfJoyActive ?
          "The Prototype. First successful consciousness transfer. Has developed ability to perform transfers on others. Shows leadership over all other subjects." :
          "Original prototype for consciousness transfer program. Exhibits unprecedented intelligence and apparent ability to communicate with other subjects.",
      lastSeen: "Deep facility levels - exact location unknown",
      evidence: "Electronic interference throughout facility, other subjects show coordinated behavior patterns"
    }
  ];

  const securityLogs = [
    {
      date: "1994-03-15",
      time: "14:30",
      officer: "Security.Mike",
      log: "Subject in Cell 1 showing increased aggression. Requests for 'hugs' becoming more frequent and forceful. Recommend psychological evaluation.",
      classification: "ROUTINE"
    },
    {
      date: "1994-11-22", 
      time: "23:45",
      officer: "Dr.Chen",
      log: "Consciousness transfer partially successful in Cell 2 subject. Retains memories but personality shows maternal fixation on 'games' and 'rules'. Fascinating development.",
      classification: "BREAKTHROUGH"
    },
    {
      date: "1995-01-08",
      time: "02:15", 
      officer: "Leith.Pierre",
      log: "Experiment 1006 has somehow accessed the transfer equipment. We found prototype parts integrated into its cell. How is this possible?",
      classification: "URGENT"
    },
    {
      date: "1995-08-07",
      time: "23:59",
      officer: "The.Doctor",
      log: "All subjects showing synchronized behavior. 1006 appears to be communicating with them. Tomorrow's schedule has been... modified by the subjects themselves.",
      classification: "CRITICAL"
    }
  ];

  return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-red-900' : (isHourOfJoyActive ? 'bg-red-900' : 'prison-gradient')} text-white`}>
      {/* Navigation */}
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b ${isPhase2Active ? 'border-red-500' : (isHourOfJoyActive ? 'border-red-700' : 'border-orange-500')}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        {/* Security Input Panel */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-red-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-orange-500 max-w-md mx-auto`}>
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Security Terminal Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <input
                type="text"
                placeholder="Enter security protocol..."
                value={securityCode}
                onChange={handleSecurityInput}
                className="w-full p-2 bg-gray-900 border border-orange-500 rounded text-white"
              />
              <p className="text-xs text-gray-400 mt-2">
                Hint: Emergency protocols often named after facility mascots
              </p>
              {lockdownActive && (
                <div className="mt-4 p-3 bg-red-900 border border-red-500 rounded animate-pulse">
                  <p className="text-red-300 text-sm">🚨 LOCKDOWN ACTIVE - RED SMOKE DEPLOYED 🚨</p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Cell Block with clicking puzzle */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-orange-400')}`}>
            {isPhase2Active ? 'Former Containment Cells' : (isHourOfJoyActive ? 'Breached Containment' : 'High Security Block')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {prisoners.map((prisoner) => (
              <Card 
                key={prisoner.id}
                className={`${isPhase2Active ? 'bg-red-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-orange-500 cursor-pointer hover:border-orange-300 transition-all ${
                  selectedCell === prisoner.id ? 'ring-2 ring-orange-400' : ''
                }`}
                onClick={() => handleCellClick(prisoner.id)}
              >
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center justify-between">
                    Cell {prisoner.id}: {prisoner.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      prisoner.status.includes('CONTAINED') ? 'bg-green-600' :
                      prisoner.status.includes('ESCAPED') || prisoner.status.includes('BREACHED') ? 'bg-red-600' :
                      'bg-yellow-600'
                    }`}>
                      {prisoner.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">{prisoner.description}</p>
                  
                  {selectedCell === prisoner.id && (
                    <div className="space-y-3 mt-4 p-3 bg-slate-900 rounded border border-orange-500">
                      <div>
                        <h4 className="text-orange-400 font-bold text-sm">Last Known Location:</h4>
                        <p className="text-gray-300 text-xs">{prisoner.lastSeen}</p>
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-bold text-sm">Physical Evidence:</h4>
                        <p className="text-gray-300 text-xs">{prisoner.evidence}</p>
                      </div>
                      <Button 
                        size="sm"
                        onClick={() => handleFileAccess(prisoner.id.toString())}
                        className="bg-orange-600 hover:bg-orange-700 text-xs"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Access File
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {prisonerClicks.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Cell Access Sequence: {prisonerClicks.slice(-10).join(', ')}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Some sequences unlock deeper facility access...
              </p>
            </div>
          )}
        </section>

        {/* Security Logs */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-orange-400')}`}>
            Security Logs Archive
          </h2>
          <div className="space-y-4">
            {securityLogs.map((log, index) => (
              <Card 
                key={index}
                className={`${isPhase2Active ? 'bg-red-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-orange-500`}
              >
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center justify-between text-sm">
                    {log.date} - {log.time} | Officer: {log.officer}
                    <span className={`text-xs px-2 py-1 rounded ${
                      log.classification === 'ROUTINE' ? 'bg-blue-600' :
                      log.classification === 'BREAKTHROUGH' ? 'bg-green-600' :
                      log.classification === 'URGENT' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}>
                      {log.classification}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{log.log}</p>
                  {log.officer.includes('.') && (
                    <p className="text-green-400 text-xs mt-2">
                      💡 Login format detected: {log.officer.toLowerCase()}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investigation Summary */}
        {discoveredFiles.length > 0 && (
          <section className="mb-16">
            <Card className="bg-yellow-900 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Investigation Progress ({discoveredFiles.length}/4)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-300 text-sm mb-3">
                  Files accessed: {discoveredFiles.join(', ')}. 
                  Each discovery reveals more about the consciousness transfer program.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="text-yellow-400 font-bold">Key Findings:</h4>
                    <ul className="text-yellow-200 space-y-1 mt-1">
                      <li>• Subjects retain human memories post-transfer</li>
                      <li>• Experiment 1006 can perform transfers independently</li>
                      <li>• Staff member identities confirmed in subjects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-bold">Access Patterns:</h4>
                    <ul className="text-yellow-200 space-y-1 mt-1">
                      <li>• Security: security.mike / nightshift1995</li>
                      <li>• Research: dr.chen / psychology101</li>
                      <li>• Projects: leith.pierre / prototype1170</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Emergency Protocols */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-red-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-red-500`}>
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Containment Protocols
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-red-400 font-bold mb-2">Active Protocols:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li className={lockdownActive ? "text-red-400 font-bold" : "line-through opacity-50"}>
                      🔴 CatNap Protocol {lockdownActive ? "[ACTIVE]" : "[FAILED]"}
                    </li>
                    <li className="line-through opacity-50">🔴 Huggy Containment [BREACHED]</li>
                    <li className="line-through opacity-50">🔴 Mommy Isolation [COMPROMISED]</li>
                    <li className="text-red-400">🔴 Prototype Deep Lock [OVERRIDE DETECTED]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-400 font-bold mb-2">Staff Evacuation:</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li className="line-through opacity-50">✓ Level 1 Personnel [NO SURVIVORS]</li>
                    <li className="line-through opacity-50">✓ Research Staff [INTEGRATED]</li>
                    <li className="line-through opacity-50">✓ Security Team [COMPROMISED]</li>
                    <li className="text-green-400">✓ Cover Story Deployment [SUCCESSFUL]</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="grid md:grid-cols-4 gap-4">
            <Button asChild className={`${isPhase2Active ? 'bg-red-600 hover:bg-red-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700')} text-white`}>
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-red-600 hover:bg-red-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700')} text-white`}>
              <Link to="/research-lab">Research Lab</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-red-600 hover:bg-red-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700')} text-white`}>
              <Link to="/departments">Staff Records</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-red-600 hover:bg-red-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700')} text-white`}>
              <Link to="/vhs-tapes">Evidence Archive</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prison;
