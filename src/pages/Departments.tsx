
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Beaker, Wrench, Shield, Brain, Heart, Skull, Eye, AlertTriangle, Zap } from "lucide-react";

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [horrorMode, setHorrorMode] = useState(false);
  const [showClue, setShowClue] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.05) {
        setHorrorMode(true);
        setTimeout(() => setHorrorMode(false), 3000);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const showRandomClue = (source: string) => {
    const clues = [
      "🔍 CLUE: Dr. Sawyer's final log mentions 'The Doctor' taking over security protocols...",
      "🔍 CLUE: Personnel files show 47 missing employees since Hour of Joy incident...",
      "🔍 CLUE: The prototype network requires specific toy names as access codes...",
      "🔍 CLUE: Emergency protocols reference 'CatNap Protocol' - research this code...",
      "🔍 CLUE: Missing staff last seen in testing areas - security footage corrupted...",
      "🔍 CLUE: Dr. Ludwig's experiments required 'volunteers' - check the orphanage records...",
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    setShowClue(`${source}: ${randomClue}`);
    setTimeout(() => setShowClue(""), 8000);
  };

  const revealSecret = (secret: string) => {
    if (!discoveredSecrets.includes(secret)) {
      setDiscoveredSecrets([...discoveredSecrets, secret]);
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 2000);
    }
  };

  const departments = [
    {
      id: "research",
      name: "Research & Development",
      head: "Dr. Harley Sawyer [MISSING]",
      icon: Beaker,
      personnel: 15,
      status: "COMPROMISED",
      description: "Advanced toy development and consciousness research - FACILITY BREACH DETECTED",
      projects: ["Bigger Bodies Initiative [ACTIVE]", "Consciousness Transfer Protocol [COMPLETED]", "Subject Behavioral Analysis [TERMINATED]"],
      classified: "Project Playtime, Human-Toy Hybridization, Memory Implantation Studies - ALL SUBJECTS ESCAPED",
      credentials: "research789",
      location: "Building C - Levels 3-5 [SEALED]",
      horror: "Last transmission: 'The toys... they're learning. They remember everything. God help us, they remember being human.'"
    },
    {
      id: "security",
      name: "Security Division", 
      head: "The Doctor [UNKNOWN ENTITY]",
      icon: Shield,
      personnel: 3,
      status: "HOSTILE TAKEOVER",
      description: "Former facility security - NOW UNDER PROTOTYPE CONTROL",
      projects: ["Perimeter Defense [FAILED]", "Subject Monitoring [COMPROMISED]", "Emergency Response [ELIMINATED]"],
      classified: "Hour of Joy Cover-up, Missing Personnel Reports, Containment Breach Protocols - THE DOCTOR SEES ALL",
      credentials: "sawyer-was-weak",
      location: "Building A - All Levels [UNDER SURVEILLANCE]",
      horror: "Security cameras show The Doctor moving through halls at impossible speeds. Staff report hearing Sawyer's voice... but he's been gone for months."
    },
    {
      id: "medical",
      name: "Medical & Psychology",
      head: "Dr. Sarah Chen [MISSING - PRESUMED DEAD]",
      icon: Heart,
      personnel: 0,
      status: "ABANDONED",
      description: "Former subject health monitoring - LAST KNOWN LOCATION: TESTING CHAMBER",
      projects: ["Behavioral Assessment [ABORTED]", "Trauma Response Analysis [SUBJECTS ESCAPED]", "Medical Care [NO SURVIVORS]"],
      classified: "Consciousness Transfer Side Effects, Memory Fragmentation Studies, Identity Retention Research - HUMAN EXPERIMENTATION CONFIRMED",
      credentials: "psychology101",
      location: "Building B - Level 2 [BLOOD STAINS DETECTED]",
      horror: "Dr. Chen's final note: 'They're not toys anymore. They remember their families. They want to go home... but there is no home for them now.'"
    },
    {
      id: "maintenance",
      name: "Maintenance & Engineering",
      head: "Robert Klein [RADIO SILENCE]",
      icon: Wrench,
      personnel: 0,
      status: "SYSTEMS FAILING",
      description: "Critical systems maintenance - POWER GRID UNSTABLE",
      projects: ["Containment Systems [OFFLINE]", "Power Grid Management [CRITICAL]", "Facility Repairs [IMPOSSIBLE]"],
      classified: "Subject Feeding Systems, Disposal Protocols, Emergency Lockdown Procedures - FEEDING TUBES STILL ACTIVE",
      credentials: "wrench456",
      location: "Building D - Underground Levels [FLOODED WITH UNKNOWN SUBSTANCE]",
      horror: "Klein's last radio transmission: 'The feeding tubes... they're not just for power anymore. Something's coming up from the depths. Tell my family I—' [TRANSMISSION ENDS]"
    },
    {
      id: "administration",
      name: "Administration",
      head: "Director Ludwig [STATUS UNKNOWN]",
      icon: Users,
      personnel: 1,
      status: "FINAL DIRECTIVE ACTIVE", 
      description: "Executive oversight and project coordination - AUTOMATED SYSTEMS ONLY",
      projects: ["Budget Management [IRRELEVANT]", "Personnel Coordination [ALL STAFF MISSING]", "External Relations [COVER STORY ACTIVE]"],
      classified: "Executive Orders, Cover Story Management, Public Relations Strategy - THE WORK CONTINUES",
      credentials: "biggerbodies",
      location: "Building A - Executive Level [SEALED FROM INSIDE]",
      horror: "Ludwig's final video log shows him barricading his office, muttering 'The prototype was right... we are the real monsters.' Camera feed cuts to static at 11:47 AM on August 8th."
    },
    {
      id: "special",
      name: "Special Projects Division",
      head: "THE PROTOTYPE [EXPERIMENT 1006]",
      icon: Brain,
      personnel: "UNKNOWN ENTITIES",
      status: "FULLY OPERATIONAL",
      description: "Highly classified experimental programs - NOW UNDER PROTOTYPE CONTROL",
      projects: ["HOUR OF JOY [COMPLETED]", "HUMAN HARVEST [ONGOING]", "FACILITY EXPANSION [IN PROGRESS]"],
      classified: "CatNap Protocol, DogDay Experiments, Prototype 1188, The Smiling Critters Project - ALL EXPERIMENTS SUCCESSFUL",
      credentials: "experiment1006",
      location: "Building X - Deep Underground [PROTOTYPE'S DOMAIN]",
      horror: "Motion sensors detect massive movement in the depths. The Prototype grows larger each day, feeding on... we don't know what. It whispers through the vents: 'The children will be safe with us. Forever.'"
    }
  ];

  const staffRoster = [
    { name: "Dr. Harley Sawyer", department: "Research", clearance: 3, status: "REPLACED", notes: "Replaced by 'The Doctor' - identity unknown. Sawyer was weak." },
    { name: "Dr. Sarah Chen", department: "Medical", clearance: 2, status: "MISSING", notes: "Last seen investigating screams from Testing Chamber 02. Security footage corrupted." },
    { name: "Director Ludwig", department: "Administration", clearance: 3, status: "BARRICADED", notes: "Sealed in executive office. Vital signs detected but no response to communication." },
    { name: "Captain Marcus Webb", department: "Security", clearance: 2, status: "CONSUMED", notes: "Found in Huggy Wuggy containment - only uniform remains. Cause of death: [REDACTED]" },
    { name: "Robert Klein", department: "Maintenance", clearance: 1, status: "FEEDING TUBES", notes: "Last radio contact from underground levels. 'They're hungry down here...' [TRANSMISSION ENDS]" },
    { name: "Jennifer Adams", department: "Research", clearance: 2, status: "TRANSFORMED", notes: "Subject believes she is a toy. Responds only to 'Poppy.' Consciousness transfer... successful?" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black text-white static-noise ${horrorMode ? 'bg-red-900' : ''}`}>
      {/* Navigation Bar */}
      <nav className="bg-red-950 shadow-lg sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400" style={{ textShadow: '0 0 10px #dc2626' }}>
              PLAYTIME CO.
            </Link>
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

      {/* Header */}
      <header className={`bg-red-900 text-white p-6 shadow-lg border-b border-red-700 ${horrorMode ? 'animate-pulse' : ''}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold text-red-400 flex items-center ${glitchActive ? 'glitch-text' : ''}`} 
              style={{ textShadow: '0 0 15px #dc2626' }}
              data-text="Department Directory">
            {horrorMode ? <Skull className="w-8 h-8 mr-3" /> : <Users className="w-8 h-8 mr-3" />}
            {horrorMode ? 'CASUALTY REPORT' : 'Department Directory'}
          </h1>
          <p className={`text-red-200 mt-2 ${horrorMode ? 'text-red-600' : ''}`}>
            {horrorMode ? 'Post-Hour of Joy Status Assessment' : 'Organizational structure and personnel management'}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Alert Banner */}
        <div className="mb-8 p-4 bg-red-900 border border-red-400 rounded animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 text-center font-bold">
              FACILITY STATUS: COMPROMISED | HOUR OF JOY: COMPLETED | CONTAINMENT: FAILED
            </p>
          </div>
        </div>

        {/* Discovery Clue Button */}
        <div className="mb-8 text-center">
          <Button 
            onClick={() => showRandomClue("PERSONNEL FILES")}
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-900"
          >
            <Eye className="w-4 h-4 mr-2" />
            INVESTIGATE PERSONNEL FILES
          </Button>
        </div>

        {/* Clue Display */}
        {showClue && (
          <div className="mb-8 p-4 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
            <p className="text-yellow-300 text-center">{showClue}</p>
          </div>
        )}

        {/* Departments Grid */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${horrorMode ? 'text-red-400' : 'text-purple-400'}`}>
            {horrorMode ? 'COMPROMISED DEPARTMENTS' : 'Department Status'}
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {departments.map((dept) => {
              const IconComponent = dept.icon;
              return (
                <Card 
                  key={dept.id}
                  className={`bg-slate-800 border-purple-500 cursor-pointer transition-all duration-300 hover:border-purple-300 poppy-card-glow ${
                    selectedDept === dept.id ? 'ring-2 ring-purple-400' : ''
                  } ${horrorMode ? 'border-red-400' : ''}`}
                  onClick={() => setSelectedDept(selectedDept === dept.id ? null : dept.id)}
                >
                  <CardHeader>
                    <CardTitle className={`flex items-center ${horrorMode ? 'text-red-400' : 'text-purple-400'}`}>
                      <IconComponent className="w-6 h-6 mr-2" />
                      {dept.name}
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                      <p>Head: {dept.head}</p>
                      <p>Personnel: {dept.personnel}</p>
                      <p className={`${
                        dept.status === 'Active' ? 'text-green-400' :
                        dept.status.includes('MISSING') || dept.status.includes('COMPROMISED') ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        Status: {dept.status}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
                    <p className="text-xs text-gray-400 mb-2">Location: {dept.location}</p>
                    
                    {selectedDept === dept.id && (
                      <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-purple-500">
                        <div>
                          <h4 className="text-purple-400 font-bold mb-2">Current Operations</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {dept.projects.map((project, idx) => (
                              <li key={idx}>• {project}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-red-400 font-bold mb-2">Classified Intelligence</h4>
                          <p className="text-red-300 text-sm">{dept.classified}</p>
                        </div>
                        <div>
                          <h4 className="text-orange-400 font-bold mb-2">Final Transmission</h4>
                          <p className="text-orange-300 text-sm italic">{dept.horror}</p>
                        </div>
                        <div className="flex gap-2">
                          <div className="text-xs text-green-400">
                            Access Code: {dept.credentials}
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => {
                              revealSecret(dept.id);
                              showRandomClue(`DEPT: ${dept.name.toUpperCase()}`);
                            }}
                            className="text-xs bg-purple-600 hover:bg-purple-700"
                          >
                            <Zap className="w-3 h-3 mr-1" />
                            ANALYZE
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Staff Roster */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${horrorMode ? 'text-red-400' : 'text-purple-400'}`}>
            {horrorMode ? 'CASUALTY ROSTER' : 'Personnel Status'}
          </h2>
          <Card className="bg-slate-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center justify-between">
                Key Personnel Status
                <Button 
                  onClick={() => showRandomClue("STAFF RECORDS")}
                  size="sm"
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  INVESTIGATE
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffRoster.map((staff, index) => (
                  <div key={index} className="p-3 bg-slate-900 rounded border border-purple-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-400 font-bold">{staff.name}</span>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-purple-700 rounded">
                          Level {staff.clearance}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          staff.status === 'Active' ? 'bg-green-700 text-white' : 
                          staff.status.includes('MISSING') || staff.status.includes('CONSUMED') ? 'bg-red-700 text-white' :
                          'bg-yellow-700 text-white'
                        }`}>
                          {staff.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Department: {staff.department}</p>
                    <p className="text-gray-300 text-sm">{staff.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Protocols */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${horrorMode ? 'text-red-400' : 'text-red-400'}`}>
            {horrorMode ? 'FAILED PROTOCOLS' : 'Emergency Protocols'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-between">
                  Containment Breach
                  <Button 
                    size="sm"
                    onClick={() => {
                      revealSecret("containment");
                      showRandomClue("EMERGENCY PROTOCOLS");
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    ACTIVATE
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="line-through opacity-50">1. Immediate facility lockdown [FAILED]</li>
                  <li className="line-through opacity-50">2. Activate emergency beacons [DESTROYED]</li>
                  <li className="line-through opacity-50">3. Evacuate non-essential personnel [NO SURVIVORS]</li>
                  <li className="line-through opacity-50">4. Deploy security response teams [ELIMINATED]</li>
                  <li className="text-red-400">5. CatNap Protocol [PROTOTYPE OVERRIDE]</li>
                </ul>
                <p className="text-xs text-red-400 mt-4">
                  Emergency override: catnap-protocol [COMPROMISED]
                </p>
                <p className="text-xs text-orange-400 mt-2 italic">
                  "The toys have learned our protocols. They're using them against us." - Final Security Log
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-between">
                  Missing Personnel
                  <Button 
                    size="sm"
                    onClick={() => {
                      revealSecret("missing");
                      showRandomClue("SEARCH PROTOCOLS");
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    SEARCH
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="line-through opacity-50">1. 72-hour search protocol [ABANDONED]</li>
                  <li className="line-through opacity-50">2. Security footage review [CORRUPTED]</li>
                  <li className="line-through opacity-50">3. Last known location sweep [SEARCHERS MISSING]</li>
                  <li className="text-red-400">4. Subject behavior analysis [THEY'RE HUNTING]</li>
                  <li className="text-green-400">5. External cover story deployment [ACTIVE]</li>
                </ul>
                <p className="text-xs text-red-400 mt-4">
                  Protocol access: hourof-joy [COMPROMISED]
                </p>
                <p className="text-xs text-orange-400 mt-2 italic">
                  "Stop looking for them. They're not missing. They're being kept." - Anonymous survivor
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Secret Discovery Section */}
        {discoveredSecrets.length > 0 && (
          <section className="mb-16">
            <Card className="bg-red-900 border-yellow-400 animate-pulse">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Skull className="w-6 h-6 mr-2" />
                  DISCOVERED SECRETS ({discoveredSecrets.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-300 text-sm">
                  Your investigation has uncovered {discoveredSecrets.length} classified file(s). 
                  Use access codes from personnel records to unlock secure systems.
                  The prototype network awaits those who prove their dedication to the truth.
                </p>
                <div className="mt-4 text-xs text-green-400">
                  Hint: Toy names unlock the deepest secrets. "huggy-speaks" to those who listen...
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Hidden Administrative Note */}
        <div className="mt-8 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded text-xs">
          <p className="text-yellow-300">
            <strong>Final Administrative Directive:</strong> Facility sealed indefinitely. Cover story: Gas leak. 
            All surviving personnel relocated to "other projects." Dr. Ludwig's final message: "Continue the work at all costs. 
            The children must be safe. The prototype knows the way." Backup protocols stored in /orphanage records.
          </p>
          <Button 
            size="sm"
            onClick={() => showRandomClue("LUDWIG'S FINAL MESSAGE")}
            className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-black"
          >
            <Zap className="w-3 h-3 mr-1" />
            DECODE MESSAGE
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. Human Resources Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">
            {horrorMode ? 'Post-Incident Documentation Archive' : 'Internal Use Only - Confidential'}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button 
              size="sm"
              onClick={() => showRandomClue("HR ARCHIVES")}
              className="bg-red-600 hover:bg-red-700"
            >
              HR Access
            </Button>
            <Button 
              size="sm"
              onClick={() => {
                revealSecret("executive");
                showRandomClue("EXECUTIVE OVERRIDE");
              }}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Executive Override
            </Button>
          </div>
          <p className="text-xs text-red-400 mt-2 opacity-50">
            {horrorMode ? 'THE PROTOTYPE SEES ALL. THE TOYS REMEMBER EVERYTHING.' : 'Access Codes: hr-files | experiment1006'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Departments;
