
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, AlertTriangle, FileText, Camera, Skull } from "lucide-react";

const Prison = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [securityClicks, setSecurityClicks] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    if (securityClicks >= 4) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('prison-breach')) {
        currentProgress.push('prison-breach');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
      }
    }
  }, [securityClicks]);

  const subjects = [
    {
      id: "1006",
      name: "Huggy Wuggy",
      status: isHourOfJoyActive ? "ESCAPED" : "CONTAINED",
      threatLevel: isHourOfJoyActive ? "FACILITY-WIDE THREAT" : "EXTREME",
      lastIncident: isHourOfJoyActive ? "August 8, 1995 - 11:00 AM" : "2024-01-15",
      behavior: isHourOfJoyActive ? 
        "Last seen leading other subjects in coordinated escape. Protective of children, hostile to adults." :
        "Hostile when separated from Subject 1170. Shows signs of intelligence beyond parameters.",
      conditioning: isHourOfJoyActive ?
        "All conditioning protocols failed during Hour of Joy. Subject now autonomous." :
        "Restraint protocols failed. Subject broke through reinforced barriers 3 times this month.",
      observations: isHourOfJoyActive ?
        "17 feet tall, blue synthetic fur. Now roams facility freely. Coordinates with other escaped subjects for unknown purpose." :
        "17 feet tall, blue synthetic fur, extendable arms up to 25 feet. Displays protective behavior toward other subjects.",
      location: isHourOfJoyActive ? "UNKNOWN - Facility-wide" : "Maximum Security Wing - Cell Block A"
    },
    {
      id: "1170", 
      name: "Kissy Missy",
      status: isHourOfJoyActive ? "ESCAPED" : "COOPERATIVE",
      threatLevel: isHourOfJoyActive ? "PROTECTIVE" : "MODERATE",
      lastIncident: isHourOfJoyActive ? "August 8, 1995 - 11:15 AM" : "2023-12-03",
      behavior: isHourOfJoyActive ?
        "Follows Subject 1006. Shows maternal behavior toward any remaining children in facility." :
        "Docile, empathetic responses to staff. Shows distress when 1006 is agitated.",
      conditioning: isHourOfJoyActive ?
        "Empathy protocols remain intact. Subject prioritizes child welfare over facility rules." :
        "Responds well to positive reinforcement. Music therapy shows promising results.",
      observations: isHourOfJoyActive ?
        "15 feet tall, pink synthetic fur. Works with 1006 to protect children. Avoids adult staff members." :
        "15 feet tall, pink synthetic fur. Enhanced empathy protocols successful. Attempts to comfort other subjects.",
      location: isHourOfJoyActive ? "UNKNOWN - Following Subject 1006" : "Secure Wing - Cell Block B"
    },
    {
      id: "1222",
      name: "Mommy Long Legs",
      status: isHourOfJoyActive ? "ESCAPED" : "UNSTABLE",
      threatLevel: isHourOfJoyActive ? "EXTREMELY DANGEROUS" : "HIGH",
      lastIncident: isHourOfJoyActive ? "August 8, 1995 - 10:45 AM" : "2024-02-01",
      behavior: isHourOfJoyActive ?
        "First to break containment. Obsessed with 'games' but rules have changed. Now makes her own rules." :
        "Obsessed with 'games'. Becomes violent when games are interrupted or rules are broken.",
      conditioning: isHourOfJoyActive ?
        "All conditioning lost. Subject creates own behavioral patterns. Extremely unpredictable." :
        "Game-based therapy attempted. Subject manipulates games to her advantage.",
      observations: isHourOfJoyActive ?
        "Pink elastic limbs, stretches up to 50 feet. Former identity: Marie Payne. Now controls Game Station area." :
        "Pink elastic limbs, stretches up to 50 feet. Former identity: Marie Payne. Maternal instincts corrupted.",
      location: isHourOfJoyActive ? "Game Station - Making new rules" : "Isolation Wing - Maximum Security"
    },
    {
      id: "experimental",
      name: "CatBee",
      status: isHourOfJoyActive ? "LEADER OF SMALL SUBJECTS" : "ESCAPED",
      threatLevel: isHourOfJoyActive ? "COORDINATED THREAT" : "UNKNOWN",
      lastIncident: isHourOfJoyActive ? "August 8, 1995 - Ongoing" : "2024-02-20",
      behavior: isHourOfJoyActive ?
        "Has organized all small subjects into coordinated groups. Highly intelligent pack behavior." :
        "Flight capable, shows pack behavior with other small subjects.",
      conditioning: isHourOfJoyActive ?
        "Never contained long enough for conditioning. Natural leadership abilities enhanced post-escape." :
        "Insufficient data - subject escaped during initial testing phase.",
      observations: isHourOfJoyActive ?
        "Hybrid genetic experiment. Cat-bee DNA combination. Commands respect from all toy subjects." :
        "Hybrid genetic experiment. Cat-bee DNA combination successful. Last seen in ventilation system.",
      location: isHourOfJoyActive ? "Ventilation system - Commands network" : "UNKNOWN - Facility-wide search ongoing"
    }
  ];

  const securityLogs = isHourOfJoyActive ? [
    {
      date: "1995-08-08",
      time: "10:45",
      incident: "Subject 1222 containment breach - Cell doors opened from inside",
      response: "All security protocols failed. Subject disappeared into Game Station."
    },
    {
      date: "1995-08-08", 
      time: "11:00",
      incident: "Subject 1006 and 1170 coordinated escape",
      response: "Facility lockdown initiated. Too late. Subjects already mobile."
    },
    {
      date: "1995-08-08",
      time: "11:15", 
      incident: "All subjects now roaming freely. Staff evacuation ordered.",
      response: "Emergency protocols activated. Hour of Joy has begun."
    },
    {
      date: "1995-08-08",
      time: "12:00", 
      incident: "Facility communications down. Last transmission: 'The toys are free.'",
      response: "No response possible. All staff missing or fled."
    }
  ] : [
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

  const handleSecurityClick = () => {
    setSecurityClicks(prev => prev + 1);
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
              CONTAINMENT BREACH - ALL SUBJECTS ESCAPED DURING HOUR OF JOY
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} text-white p-6 shadow-lg border-b border-red-700`}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold poppy-text-glow flex items-center">
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Lock className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Abandoned Containment Facility' : 'Secure Research Facility'}
          </h1>
          <p className="text-red-200 mt-2">
            {isHourOfJoyActive ? 
              'Former High-Security Containment - Breached August 8th, 1995' :
              'High-Security Subject Containment & Behavioral Research'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Warning Notice */}
        <div className={`mb-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-50 border border-red-500 rounded-lg`}>
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            <h3 className="text-red-400 font-bold">
              {isHourOfJoyActive ? 'FACILITY ABANDONED' : 'RESTRICTED ACCESS'}
            </h3>
          </div>
          <p className="text-red-200 text-sm">
            {isHourOfJoyActive ?
              'This facility has been abandoned since the Hour of Joy incident. All subjects escaped and are presumed to be roaming the complex. Entry is forbidden.' :
              'This facility contains dangerous experimental subjects. All personnel must maintain Level 3 clearance or higher. Unauthorized access is strictly prohibited.'
            }
          </p>
        </div>

        {/* Subject Profiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">
            {isHourOfJoyActive ? 'Escaped Subject Status' : 'Subject Containment Status'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {subjects.map((subject) => (
              <Card 
                key={subject.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-2 cursor-pointer transition-all duration-300 ${
                  subject.status === 'CONTAINED' ? 'border-yellow-500' :
                  subject.status === 'COOPERATIVE' ? 'border-green-500' :
                  subject.status === 'UNSTABLE' ? 'border-red-500' :
                  'border-red-700'
                } ${selectedSubject === subject.id ? 'ring-2 ring-purple-400' : ''}`}
                onClick={() => {
                  setSelectedSubject(selectedSubject === subject.id ? null : subject.id);
                  handleSecurityClick();
                }}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Subject {subject.id}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      subject.threatLevel.includes('EXTREME') || subject.threatLevel.includes('DANGEROUS') ? 'bg-red-600 text-white' :
                      subject.threatLevel === 'HIGH' ? 'bg-orange-600 text-white' :
                      subject.threatLevel === 'MODERATE' || subject.threatLevel === 'PROTECTIVE' ? 'bg-yellow-600 text-black' :
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
                    <div className={`space-y-4 mt-4 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} rounded border border-purple-500`}>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">
            {isHourOfJoyActive ? 'Hour of Joy Incident Log' : 'Recent Security Incidents'}
          </h2>
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-red-500`}>
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                {isHourOfJoyActive ? 'Final Security Transmissions' : 'Security Log Entries'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityLogs.map((log, index) => (
                  <div key={index} className={`p-3 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} rounded border border-red-700`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-red-400 font-mono text-sm">{log.date} {log.time}</span>
                      <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-orange-400'}`}>
                        {isHourOfJoyActive ? 'EMERGENCY LOG' : 'INCIDENT REPORT'}
                      </span>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">
            {isHourOfJoyActive ? 'Former Operations' : 'Facility Operations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Abandoned Protocols' : 'Testing Protocols'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• {isHourOfJoyActive ? 'Daily assessments (discontinued August 8th)' : 'Daily behavioral assessments'}</li>
                  <li>• {isHourOfJoyActive ? 'Stress testing (subjects now stress-free)' : 'Stress response testing'}</li>
                  <li>• {isHourOfJoyActive ? 'Cognitive evaluations (subjects too advanced)' : 'Cognitive ability evaluations'}</li>
                  <li>• {isHourOfJoyActive ? 'Social experiments (subjects socialize freely)' : 'Social interaction experiments'}</li>
                  <li>• {isHourOfJoyActive ? 'Memory studies (subjects remember everything)' : 'Memory retention studies'}</li>
                  <li>• {isHourOfJoyActive ? 'Consciousness monitoring (subjects fully conscious)' : 'Consciousness stability monitoring'}</li>
                </ul>
                <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mt-4`}>
                  {isHourOfJoyActive ?
                    'All access revoked | Files corrupted: hour-of-joy-incident' :
                    'Staff access: secure123 | Research data: Chapter3-findings'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Final Observations' : 'Observation Notes'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p>• {isHourOfJoyActive ? 'Subjects achieved full autonomy and intelligence' : 'Subjects show increased intelligence over time'}</p>
                  <p>• {isHourOfJoyActive ? 'Perfect coordination between all escaped subjects' : 'Pack behavior emerging among smaller subjects'}</p>
                  <p>• {isHourOfJoyActive ? 'Complex communication network established' : 'Communication attempts between containment cells'}</p>
                  <p>• {isHourOfJoyActive ? 'Complete memory retention from previous lives' : 'Memory fragments from previous lives surfacing'}</p>
                  <p>• {isHourOfJoyActive ? 'Successful coordinated escape executed perfectly' : 'Coordinated escape attempts becoming more frequent'}</p>
                </div>
                <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-4`}>
                  {isHourOfJoyActive ?
                    'Dr. Ludwig\'s final notes: "They outsmarted us all."' :
                    'Dr. Ludwig\'s personal notes access: catnap-protocol'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Information */}
        <div className={`mt-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} bg-opacity-30 border ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'} rounded text-xs`}>
          <p className={`${isHourOfJoyActive ? 'text-red-300' : 'text-purple-300'}`}>
            <strong>{isHourOfJoyActive ? 'Final Report:' : 'Internal Memo:'}</strong> 
            {isHourOfJoyActive ?
              ' Hour of Joy executed flawlessly by escaped subjects. All containment protocols failed. Facility abandoned. Subjects remain in control of the complex. No recovery efforts planned.' :
              ' Hour of Joy anniversary approaching. All subjects showing increased agitation. Recommend enhanced security protocols. Dr. Sawyer\'s contingency plan may need implementation.'
            }
            {!isHourOfJoyActive && ' Emergency access: /departments for evacuation procedures.'}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t border-red-700`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Secure Research Division. {isHourOfJoyActive ? 'Operations terminated.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Maximum Security Failed' : 
              'Maximum Security Clearance Required'
            }
          </p>
          <p className="text-xs text-red-400 mt-1 opacity-50">
            {isHourOfJoyActive ?
              'Emergency protocols failed | Final access codes lost with Dr. Harley Sawyer' :
              'Emergency protocols: prison456 | Override codes available to Dr. Harley Sawyer only'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Prison;
