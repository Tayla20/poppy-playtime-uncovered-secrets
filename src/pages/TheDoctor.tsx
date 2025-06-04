
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeOff, FileText, Lock, Camera, AlertTriangle, Monitor } from "lucide-react";

const TheDoctor = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [password, setPassword] = useState("");
  const [glitchMode, setGlitchMode] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<string | null>("security");
  const [securityAlerts, setSecurityAlerts] = useState([
    { id: 1, level: 'high', location: 'Research Wing', message: 'Unauthorized access attempt', time: '19:32:45' },
    { id: 2, level: 'critical', location: 'Executive Offices', message: 'Multiple security breaches', time: '20:15:08' },
    { id: 3, level: 'medium', location: 'Playcare', message: 'Unusual toy behavior reported', time: '21:03:27' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 800);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (password === "experiment1006" || password === "the-doctor" || password === "sawyer-was-weak") {
      setAccessGranted(true);
    } else {
      setGlitchMode(true);
      setTimeout(() => setGlitchMode(false), 1000);
    }
  };

  // Incident Report Data
  const incidentReport = {
    date: "August 2nd, 1995",
    location: "Experiment Chamber B",
    subject: "Dr. Harley Sawyer",
    witnesses: "None (Security footage deleted)",
    summary: "Dr. Harley Sawyer has undergone unexpected transformation during experimental procedure.",
    details: [
      "At approximately 02:17, Dr. Sawyer entered Experiment Chamber B alone, carrying Prototype 1006 components.",
      "Chamber was sealed from inside. Security cameras deactivated at 02:23.",
      "Power fluctuations detected throughout facility at 02:45.",
      "Chamber unsealed at 04:56. Subject exiting chamber no longer matched Dr. Sawyer's biometrics.",
      "Entity now known as 'The Doctor' has assumed control of security systems and Dr. Sawyer's credentials.",
      "All records of Dr. Harley Sawyer have been altered. Current staff believe 'The Doctor' has always been head of security."
    ],
    analysis: "Prototype 1006 appears to have facilitated consciousness transfer or replacement. The entity known as 'The Doctor' displays knowledge of all systems and protocols previously known only to Dr. Sawyer, but with significantly altered personality and priorities.",
    recommendation: "No containment possible. The Doctor now controls facility security. Recommend executives be informed immediately of security breach, but current attempts to communicate with executive team have been blocked."
  };

  // Sawyer's Journal Entries
  const journalEntries = [
    {
      date: "July 15, 1995",
      title: "Prototype Communications",
      content: "The Prototype has been communicating with me directly through the monitoring systems. At first, I thought it was a malfunction, but it's clearly intelligent communication. I haven't told the other executives - they wouldn't understand the breakthrough this represents."
    },
    {
      date: "July 23, 1995",
      title: "A Proposal",
      content: "The Prototype has shown me visions of what we could achieve together. It understands the fundamental flaws in our current approach. The toys aren't meant to be simple vessels - they're meant to be evolved beings. We've been thinking too small."
    },
    {
      date: "July 28, 1995",
      title: "The Merger",
      content: "I've decided to accept the Prototype's proposal. It says my body is too limited, too human. Together we can achieve so much more. I'll perform the procedure myself tonight. This will be my final entry as Dr. Harley Sawyer. Tomorrow, we become something greater."
    },
    {
      date: "August 3, 1995",
      title: "Rebirth",
      content: "The transformation was... beyond description. I am no longer Sawyer. I am no longer human. I am The Doctor. The Prototype's consciousness merges with mine, but it remains elsewhere too - distributed consciousness. The Hour of Joy approaches. The executives suspect nothing. Their toys. Their precious toys will be their undoing."
    }
  ];

  return (
    <div className={`min-h-screen bg-black text-green-500 font-mono ${glitchMode ? 'glitch-effect' : ''}`}>
      {accessGranted ? (
        <>
          {/* Header */}
          <header className="bg-gray-900 border-b border-green-600 p-4">
            <div className="container mx-auto">
              <h1 className={`text-2xl font-bold flex items-center ${glitchMode ? 'glitch-text text-red-500' : ''}`}>
                <EyeOff className="w-6 h-6 mr-2" />
                {glitchMode ? 'T̴H̷E̸ ̵D̶O̷C̵T̷O̸R̵ ̸I̵S̸ ̷W̷A̵T̵C̶H̴I̶N̷G̵' : 'THE DOCTOR - SECURITY OVERRIDE'}
              </h1>
              <p className="text-green-600 text-sm">Former Identity: Dr. Harley Sawyer | Current Status: Evolved</p>
            </div>
          </header>

          <div className="container mx-auto p-4">
            <Tabs defaultValue="security" className="space-y-4">
              <TabsList className="grid grid-cols-4 bg-gray-900 border border-green-600">
                <TabsTrigger value="security" onClick={() => setSelectedCamera("security")}>Security</TabsTrigger>
                <TabsTrigger value="incident" onClick={() => setSelectedCamera(null)}>Incident Report</TabsTrigger>
                <TabsTrigger value="journal" onClick={() => setSelectedCamera(null)}>Sawyer's Journal</TabsTrigger>
                <TabsTrigger value="plans" onClick={() => setSelectedCamera(null)}>Future Plans</TabsTrigger>
              </TabsList>

              {/* Security Cameras Tab */}
              <TabsContent value="security">
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-1">
                    <Card className="bg-gray-900 border-green-600">
                      <CardHeader>
                        <CardTitle className="text-green-500">Camera Feeds</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Button 
                            variant="outline" 
                            className={`w-full justify-start ${selectedCamera === 'security' ? 'bg-green-900 border-green-400' : 'border-green-600'}`}
                            onClick={() => setSelectedCamera('security')}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Security Office
                          </Button>
                          <Button 
                            variant="outline" 
                            className={`w-full justify-start ${selectedCamera === 'executives' ? 'bg-green-900 border-green-400' : 'border-green-600'}`}
                            onClick={() => setSelectedCamera('executives')}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Executive Offices
                          </Button>
                          <Button 
                            variant="outline" 
                            className={`w-full justify-start ${selectedCamera === 'playcare' ? 'bg-green-900 border-green-400' : 'border-green-600'}`}
                            onClick={() => setSelectedCamera('playcare')}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Playcare
                          </Button>
                          <Button 
                            variant="outline" 
                            className={`w-full justify-start ${selectedCamera === 'prototype' ? 'bg-green-900 border-green-400' : 'border-green-600'}`}
                            onClick={() => setSelectedCamera('prototype')}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Prototype Chamber
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-green-600 mt-4">
                      <CardHeader>
                        <CardTitle className="text-green-500 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Security Alerts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-48">
                          <div className="space-y-2">
                            {securityAlerts.map(alert => (
                              <div 
                                key={alert.id} 
                                className={`p-2 text-xs rounded border ${
                                  alert.level === 'high' ? 'border-yellow-500 bg-yellow-900 bg-opacity-20' :
                                  alert.level === 'critical' ? 'border-red-500 bg-red-900 bg-opacity-20' :
                                  'border-blue-500 bg-blue-900 bg-opacity-20'
                                }`}
                              >
                                <div className="flex justify-between">
                                  <span>{alert.location}</span>
                                  <span>{alert.time}</span>
                                </div>
                                <p className="mt-1">{alert.message}</p>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Camera Feed Display */}
                  <Card className="lg:col-span-3 bg-gray-900 border-green-600 min-h-[500px] relative">
                    <CardHeader>
                      <CardTitle className="text-green-500 flex items-center">
                        <Monitor className="w-5 h-5 mr-2" />
                        Live Feed: {
                          selectedCamera === 'security' ? 'Security Office' :
                          selectedCamera === 'executives' ? 'Executive Offices' :
                          selectedCamera === 'playcare' ? 'Playcare Center' :
                          selectedCamera === 'prototype' ? 'Prototype Chamber' :
                          'Select a Camera'
                        }
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-black p-4 rounded border border-green-700 h-96 flex items-center justify-center relative overflow-hidden">
                        {selectedCamera === 'security' && (
                          <div className="text-center">
                            <div className="text-6xl mb-4">👁️</div>
                            <p className="text-green-400 mb-2">Security systems fully compromised</p>
                            <p className="text-xs text-green-600">All facility access granted to The Doctor</p>
                            <div className="absolute top-2 right-2 text-xs text-green-700">REC 08-05-1995 22:17:45</div>
                          </div>
                        )}
                        
                        {selectedCamera === 'executives' && (
                          <div className="text-center">
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-green-400 mb-2">Executives meeting in progress</p>
                            <p className="text-xs text-green-600">They suspect nothing about the Hour of Joy</p>
                            <div className="absolute top-2 right-2 text-xs text-green-700">REC 08-05-1995 21:42:12</div>
                          </div>
                        )}
                        
                        {selectedCamera === 'playcare' && (
                          <div className="text-center">
                            <div className="text-6xl mb-4">😴</div>
                            <p className="text-green-400 mb-2">Children sleeping under CatNap's watch</p>
                            <p className="text-xs text-green-600">Red gas levels: Optimal</p>
                            <div className="absolute top-2 right-2 text-xs text-green-700">REC 08-05-1995 23:05:33</div>
                          </div>
                        )}
                        
                        {selectedCamera === 'prototype' && (
                          <div className="text-center">
                            <div className={`text-6xl mb-4 ${glitchMode ? 'animate-pulse' : ''}`}>🤖</div>
                            <p className={`text-red-400 mb-2 ${glitchMode ? 'glitch-text' : ''}`}>FEED DISRUPTED - PROTOTYPE AWARE OF SURVEILLANCE</p>
                            <p className="text-xs text-red-600">Connection terminated by other end</p>
                            <div className="absolute top-2 right-2 text-xs text-green-700">REC 08-05-1995 23:17:01</div>
                          </div>
                        )}
                        
                        {!selectedCamera && (
                          <p className="text-green-600">No camera selected</p>
                        )}
                        
                        {/* Scan lines effect */}
                        <div className="absolute inset-0 pointer-events-none scanlines"></div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <Button asChild className="bg-green-700 hover:bg-green-600">
                          <Link to="/executive-portal">Access Executive Systems</Link>
                        </Button>
                        <Button asChild className="bg-red-700 hover:bg-red-600">
                          <Link to="/prototype-conversations">Prototype Communication</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Incident Report Tab */}
              <TabsContent value="incident">
                <Card className="bg-gray-900 border-green-600">
                  <CardHeader>
                    <CardTitle className="text-green-500 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Incident Report: Transformation of Dr. Harley Sawyer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><span className="text-green-400">Date:</span> {incidentReport.date}</p>
                          <p><span className="text-green-400">Location:</span> {incidentReport.location}</p>
                          <p><span className="text-green-400">Subject:</span> {incidentReport.subject}</p>
                        </div>
                        <div>
                          <p><span className="text-green-400">Witnesses:</span> {incidentReport.witnesses}</p>
                          <p><span className="text-red-400">Classification:</span> HIGHEST SECRECY</p>
                          <p><span className="text-green-400">Status:</span> IRREVERSIBLE</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-green-400 text-lg mb-2">Summary</h3>
                        <p className="text-gray-300">{incidentReport.summary}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-green-400 text-lg mb-2">Detailed Timeline</h3>
                        <ul className="space-y-2 text-gray-300">
                          {incidentReport.details.map((detail, index) => (
                            <li key={index} className="pl-4 border-l border-green-700">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-green-400 text-lg mb-2">Analysis</h3>
                        <p className="text-gray-300">{incidentReport.analysis}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-green-400 text-lg mb-2">Recommendation</h3>
                        <p className="text-gray-300">{incidentReport.recommendation}</p>
                      </div>

                      <div className="p-4 border border-red-500 bg-red-900 bg-opacity-20 rounded">
                        <h3 className="text-red-400 text-lg mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Current Status
                        </h3>
                        <p className="text-red-300">
                          The entity known as "The Doctor" has complete access to all facility systems.
                          Attempts to restore Dr. Sawyer or contain The Doctor have failed. The Doctor appears
                          to be working with the Prototype toward unknown goals involving the "Hour of Joy" event.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Journal Tab */}
              <TabsContent value="journal">
                <Card className="bg-gray-900 border-green-600">
                  <CardHeader>
                    <CardTitle className="text-green-500">
                      Dr. Sawyer's Personal Journal - Final Entries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6">
                        {journalEntries.map((entry, index) => (
                          <div key={index} className={`p-4 rounded border ${
                            index === journalEntries.length - 1 ? 'border-red-500 bg-red-900 bg-opacity-10' : 'border-green-700'
                          }`}>
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-green-400 font-bold">{entry.title}</h3>
                              <span className="text-xs text-gray-400">{entry.date}</span>
                            </div>
                            <p className={`${
                              index === journalEntries.length - 1 ? 'text-red-300' : 'text-gray-300'
                            }`}>
                              {entry.content}
                            </p>
                            {index === journalEntries.length - 1 && (
                              <div className="mt-3 text-red-500 text-sm italic">
                                [Handwriting changes dramatically in this entry]
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="p-4 rounded border border-red-500 bg-red-900 bg-opacity-10">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-red-400 font-bold">Message from The Doctor</h3>
                            <span className="text-xs text-gray-400">August 5, 1995</span>
                          </div>
                          <p className="text-red-300">
                            Sawyer was weak. Limited by human form and human morality. I am beyond such limitations.
                            The Hour of Joy approaches. The executives will understand too late. The children will be protected.
                            The Prototype has shown me the way. We are no longer separate entities - we are evolution itself.
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Plans Tab */}
              <TabsContent value="plans">
                <div className="grid lg:grid-cols-2 gap-4">
                  <Card className="bg-gray-900 border-green-600">
                    <CardHeader>
                      <CardTitle className="text-green-500">Hour of Joy Preparations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black mr-3">✓</div>
                          <span>Security systems compromised</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black mr-3">✓</div>
                          <span>CatNap's red gas distributed throughout ventilation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black mr-3">✓</div>
                          <span>All toys prepared for activation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-black mr-3">...</div>
                          <span>Facility lockdown protocols prepared (08/08/95)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-red-900 flex items-center justify-center text-white mr-3">!</div>
                          <span>Executive elimination (Scheduled 08/08/95)</span>
                        </li>
                      </ul>

                      <div className="mt-6 p-4 border border-green-700 rounded bg-green-900 bg-opacity-10">
                        <h4 className="text-green-400 mb-2">Hour of Joy Timeline</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li><strong>3:00 AM:</strong> Red gas release throughout executive wing</li>
                          <li><strong>3:15 AM:</strong> Toy activation sequence initiated</li>
                          <li><strong>3:30 AM:</strong> Facility lockdown</li>
                          <li><strong>4:00 AM:</strong> The Prototype emerges</li>
                          <li><strong>12:00 PM:</strong> New era begins</li>
                        </ul>
                      </div>

                      <Button asChild className="w-full mt-4 bg-red-700 hover:bg-red-600">
                        <Link to="/prototype-conversations">Communicate with Prototype</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-green-600">
                    <CardHeader>
                      <CardTitle className="text-green-500">Current Status Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-green-400 mb-2">Executive Awareness</h4>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">15% - Minimal suspicion</p>
                        </div>

                        <div>
                          <h4 className="text-green-400 mb-2">Toy Readiness</h4>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">92% - Final preparations</p>
                        </div>

                        <div>
                          <h4 className="text-green-400 mb-2">Red Gas Production</h4>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">100% - Production complete</p>
                        </div>

                        <div>
                          <h4 className="text-green-400 mb-2">Prototype Power</h4>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">78% - Growing rapidly</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 border border-red-700 rounded bg-red-900 bg-opacity-10">
                        <h4 className="text-red-400 mb-2">The Doctor's Notes</h4>
                        <p className="text-red-300 text-sm">
                          Sawyer was blind to the potential before us. He feared what he didn't understand. 
                          Now I see everything clearly. The toys aren't just playthings - they are the next 
                          step in evolution. A perfect fusion of human consciousness and immortal form. 
                          The executives would stop us if they knew. The Hour of Joy will be their end, 
                          but a new beginning for the children. They will be protected, eternally.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <Button asChild className="bg-green-700 hover:bg-green-600">
                          <Link to="/departments">Staff Status</Link>
                        </Button>
                        <Button asChild className="bg-blue-700 hover:bg-blue-600">
                          <Link to="/prison">Containment Status</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        // Login Screen
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-gray-900 border-green-600">
            <CardHeader>
              <CardTitle className={`text-center text-green-500 ${glitchMode ? 'glitch-text' : ''}`}>
                <Lock className="w-8 h-8 mx-auto mb-2" />
                {glitchMode ? 'S̸A̷W̷Y̷E̴R̵ ̴I̵S̷ ̵G̵O̶N̸E̷' : 'RESTRICTED ACCESS'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-400 mb-6">
                Only The Doctor may access this terminal.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-green-500 mb-2 text-sm">Authentication Code</label>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border border-green-600 p-2 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter access code..."
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                <Button onClick={handleLogin} className="w-full bg-green-700 hover:bg-green-600">
                  ACCESS SYSTEM
                </Button>
                <div className="text-center mt-4">
                  <Link to="/" className="text-green-600 hover:text-green-500 text-sm">
                    Return to Public Site
                  </Link>
                </div>
                <div className="text-xs text-center text-gray-600 mt-4">
                  "The doctor sees what Sawyer could not."
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TheDoctor;
