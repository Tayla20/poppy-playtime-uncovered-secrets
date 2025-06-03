
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, AlertTriangle, FileText, Camera } from "lucide-react";

const Prison = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: "1006",
      name: "Huggy Wuggy",
      status: "CONTAINED",
      threatLevel: "EXTREME",
      lastIncident: "2024-01-15",
      behavior: "Hostile when separated from Subject 1170. Shows signs of intelligence beyond parameters.",
      conditioning: "Restraint protocols failed. Subject broke through reinforced barriers 3 times this month.",
      observations: "17 feet tall, blue synthetic fur, extendable arms up to 25 feet. Displays protective behavior toward other subjects. Recent behavioral changes suggest growing awareness of containment.",
      location: "Maximum Security Wing - Cell Block A"
    },
    {
      id: "1170", 
      name: "Kissy Missy",
      status: "COOPERATIVE",
      threatLevel: "MODERATE",
      lastIncident: "2023-12-03",
      behavior: "Docile, empathetic responses to staff. Shows distress when 1006 is agitated.",
      conditioning: "Responds well to positive reinforcement. Music therapy shows promising results.",
      observations: "15 feet tall, pink synthetic fur. Enhanced empathy protocols successful. Attempts to comfort other subjects during testing. May be key to controlling more aggressive subjects.",
      location: "Secure Wing - Cell Block B"
    },
    {
      id: "1222",
      name: "Mommy Long Legs",
      status: "UNSTABLE",
      threatLevel: "HIGH",
      lastIncident: "2024-02-01",
      behavior: "Obsessed with 'games'. Becomes violent when games are interrupted or rules are broken.",
      conditioning: "Game-based therapy attempted. Subject manipulates games to her advantage. Shows cunning intelligence.",
      observations: "Pink elastic limbs, stretches up to 50 feet. Former identity: Marie Payne. Consciousness transfer 94% successful. Maternal instincts corrupted into possessive behavior.",
      location: "Isolation Wing - Maximum Security"
    },
    {
      id: "experimental",
      name: "CatBee",
      status: "ESCAPED",
      threatLevel: "UNKNOWN",
      lastIncident: "2024-02-20",
      behavior: "Flight capable, shows pack behavior with other small subjects.",
      conditioning: "Insufficient data - subject escaped during initial testing phase.",
      observations: "Hybrid genetic experiment. Cat-bee DNA combination successful. Last seen in ventilation system. May be organizing other small subjects.",
      location: "UNKNOWN - Facility-wide search ongoing"
    }
  ];

  const securityLogs = [
    {
      date: "2024-03-01",
      time: "03:47",
      incident: "Subject 1006 breach attempt in Cell Block A",
      response: "Sedation protocols activated. 4 guards injured."
    },
    {
      date: "2024-02-28", 
      time: "14:23",
      incident: "Subject 1170 refused feeding",
      response: "No action required. Subject resumed eating when 1006 was brought to viewing area."
    },
    {
      date: "2024-02-25",
      time: "09:15", 
      incident: "Mommy Long Legs destroyed testing equipment",
      response: "Game was modified to subject's preferences. No further incidents."
    }
  ];

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-purple-400 poppy-text-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-purple-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-purple-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold poppy-text-glow flex items-center">
            <Lock className="w-8 h-8 mr-3" />
            Secure Research Facility
          </h1>
          <p className="text-red-200 mt-2">High-Security Subject Containment & Behavioral Research</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Warning Notice */}
        <div className="mb-8 p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            <h3 className="text-red-400 font-bold">RESTRICTED ACCESS</h3>
          </div>
          <p className="text-red-200 text-sm">
            This facility contains dangerous experimental subjects. All personnel must maintain Level 3 clearance or higher. 
            Unauthorized access is strictly prohibited.
          </p>
        </div>

        {/* Subject Profiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Subject Containment Status</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {subjects.map((subject) => (
              <Card 
                key={subject.id}
                className={`bg-slate-800 border-2 cursor-pointer transition-all duration-300 ${
                  subject.status === 'CONTAINED' ? 'border-yellow-500' :
                  subject.status === 'COOPERATIVE' ? 'border-green-500' :
                  subject.status === 'UNSTABLE' ? 'border-red-500' :
                  'border-red-700'
                } ${selectedSubject === subject.id ? 'ring-2 ring-purple-400' : ''}`}
                onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-purple-400">Subject {subject.id}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      subject.threatLevel === 'EXTREME' ? 'bg-red-600 text-white' :
                      subject.threatLevel === 'HIGH' ? 'bg-orange-600 text-white' :
                      subject.threatLevel === 'MODERATE' ? 'bg-yellow-600 text-black' :
                      'bg-gray-600 text-white'
                    }`}>
                      {subject.threatLevel}
                    </span>
                  </CardTitle>
                  <p className="text-gray-300">{subject.name}</p>
                  <p className={`text-sm ${
                    subject.status === 'CONTAINED' ? 'text-yellow-400' :
                    subject.status === 'COOPERATIVE' ? 'text-green-400' :
                    subject.status === 'UNSTABLE' ? 'text-red-400' :
                    'text-red-500'
                  }`}>
                    Status: {subject.status}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>Location:</strong> {subject.location}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Last Incident:</strong> {subject.lastIncident}
                  </p>
                  
                  {selectedSubject === subject.id && (
                    <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-purple-500">
                      <div>
                        <h4 className="text-purple-400 font-bold mb-2">Behavioral Analysis</h4>
                        <p className="text-gray-300 text-sm">{subject.behavior}</p>
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-bold mb-2">Conditioning Results</h4>
                        <p className="text-gray-300 text-sm">{subject.conditioning}</p>
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-bold mb-2">Detailed Observations</h4>
                        <p className="text-gray-300 text-sm">{subject.observations}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Logs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Recent Security Incidents</h2>
          <Card className="bg-slate-800 border-red-500">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Security Log Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityLogs.map((log, index) => (
                  <div key={index} className="p-3 bg-slate-900 rounded border border-red-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-red-400 font-mono text-sm">{log.date} {log.time}</span>
                      <span className="text-orange-400 text-xs">INCIDENT REPORT</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{log.incident}</p>
                    <p className="text-gray-400 text-xs">
                      <strong>Response:</strong> {log.response}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Facility Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Facility Operations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Testing Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Daily behavioral assessments</li>
                  <li>• Stress response testing</li>
                  <li>• Cognitive ability evaluations</li>
                  <li>• Social interaction experiments</li>
                  <li>• Memory retention studies</li>
                  <li>• Consciousness stability monitoring</li>
                </ul>
                <p className="text-xs text-green-400 mt-4">
                  Staff access: secure123 | Research data: Chapter3-findings
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Observation Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p>• Subjects show increased intelligence over time</p>
                  <p>• Pack behavior emerging among smaller subjects</p>
                  <p>• Communication attempts between containment cells</p>
                  <p>• Memory fragments from previous lives surfacing</p>
                  <p>• Coordinated escape attempts becoming more frequent</p>
                </div>
                <p className="text-xs text-red-400 mt-4">
                  Dr. Ludwig's personal notes access: catnap-protocol
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Information */}
        <div className="mt-8 p-4 bg-purple-900 bg-opacity-30 border border-purple-700 rounded text-xs">
          <p className="text-purple-300">
            <strong>Internal Memo:</strong> Hour of Joy anniversary approaching. All subjects showing increased agitation. 
            Recommend enhanced security protocols. Dr. Sawyer's contingency plan may need implementation.
            Emergency access: /departments for evacuation procedures.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. Secure Research Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Maximum Security Clearance Required</p>
          <p className="text-xs text-red-400 mt-1 opacity-50">
            Emergency protocols: prison456 | Override codes available to Dr. Harley Sawyer only
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Prison;
