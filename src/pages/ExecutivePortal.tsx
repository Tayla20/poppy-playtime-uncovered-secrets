
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Clock, Users, FileText, Camera, LogOut, Eye, Zap } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  department: string;
  classification: 'normal' | 'urgent' | 'classified';
}

const ExecutivePortal = () => {
  const [user, setUser] = useState<any>(null);
  const [selectedChat, setSelectedChat] = useState('general');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('playtime_user');
    if (!userData) {
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'executive') {
      navigate('/documents');
      return;
    }
    
    setUser(parsedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('playtime_user');
    navigate('/');
  };

  const chatRooms = {
    general: [
      { id: '1', sender: 'Dr. Ludwig', message: 'The Bigger Bodies Initiative is showing excellent progress. Huggy Wuggy prototype exceeding expectations.', timestamp: '2024-08-15 09:30', department: 'Research', classification: 'normal' },
      { id: '2', sender: 'Director Stella', message: 'Has anyone noticed the toys acting unusual lately? Security reported some movement after hours.', timestamp: '2024-08-15 09:32', department: 'Management', classification: 'normal' },
      { id: '3', sender: 'Dr. Ludwig', message: 'Completely normal. We\'ve designed them with limited nocturnal movement programming to prevent joint stiffness.', timestamp: '2024-08-15 09:35', department: 'Research', classification: 'normal' },
      { id: '4', sender: 'Leith Pierre', message: 'I\'m getting unusual readings from the Prototype containment area. Might need to investigate.', timestamp: '2024-08-15 10:00', department: 'Special Projects', classification: 'urgent' },
      { id: '5', sender: 'The Doctor', message: 'All security systems operating within normal parameters. No cause for concern.', timestamp: '2024-08-15 10:05', department: 'Security', classification: 'normal' },
    ],
    research: [
      { id: '6', sender: 'Leith Pierre', message: 'Has anyone else noticed the power fluctuations in Sector 7? They\'re increasing in frequency.', timestamp: '2024-08-14 14:20', department: 'Special Projects', classification: 'classified' },
      { id: '7', sender: 'Dr. Ludwig', message: 'The red gas formula is stabilized. All test subjects are responding positively.', timestamp: '2024-08-14 14:25', department: 'Research', classification: 'classified' },
      { id: '8', sender: 'Dr. Chen', message: 'Some children reported hearing the toys talking when no one\'s around. Recommending psychological evaluation.', timestamp: '2024-08-14 15:00', department: 'Medical', classification: 'classified' },
      { id: '9', sender: 'Director Stella', message: 'Keep this quiet. We don\'t need rumors jeopardizing the new product launch.', timestamp: '2024-08-14 15:05', department: 'Management', classification: 'classified' },
      { id: '10', sender: 'The Doctor', message: 'Security footage review shows nothing unusual. Children\'s imaginations are active.', timestamp: '2024-08-14 15:10', department: 'Security', classification: 'classified' },
    ],
    prototype: [
      { id: '11', sender: 'Leith Pierre', message: 'I need clearance to increase Prototype containment field strength. It\'s showing unusual brain activity patterns.', timestamp: '2024-08-16 08:00', department: 'Special Projects', classification: 'classified' },
      { id: '12', sender: 'Director Stella', message: 'Granted. What kind of activity are we talking about?', timestamp: '2024-08-16 08:05', department: 'Management', classification: 'classified' },
      { id: '13', sender: 'Leith Pierre', message: 'It\'s... communicating somehow. With the other toys. I\'ve seen it happen.', timestamp: '2024-08-16 08:10', department: 'Special Projects', classification: 'classified' },
      { id: '14', sender: 'Dr. Ludwig', message: 'Impossible. The toys operate on isolated systems. There's no network connecting them.', timestamp: '2024-08-16 08:15', department: 'Research', classification: 'classified' },
      { id: '15', sender: 'The Doctor', message: 'All systems showing normal operation. Perhaps we need to evaluate researcher stress levels.', timestamp: '2024-08-16 08:20', department: 'Security', classification: 'classified' },
      { id: '16', sender: 'Director Stella', message: 'I want 24/7 observation on the Prototype. Something doesn\'t feel right.', timestamp: '2024-08-16 08:25', department: 'Management', classification: 'classified' },
    ]
  };

  const projects = [
    { name: 'Bigger Bodies Initiative', status: 'Active', lead: 'Dr. Ludwig', progress: 89 },
    { name: 'Toy Material Research', status: 'Testing', lead: 'Dr. Chen', progress: 76 },
    { name: 'Prototype Containment', status: 'Critical', lead: 'Leith Pierre', progress: 62 },
    { name: 'Red Gas Formulation', status: 'Testing', lead: 'Research Team', progress: 78 },
    { name: 'Security System Upgrades', status: 'In Progress', lead: 'The Doctor', progress: 85 },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Header */}
      <header className="bg-slate-900 bg-opacity-80 border-b border-red-600 p-4 static-noise">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-400 flex items-center">
            <Eye className="w-6 h-6 mr-2" />
            Executive Portal - Level {user.clearanceLevel}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-green-400">Welcome, {user.name}</span>
            <Button onClick={handleLogout} variant="destructive" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="communications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-red-600">
            <TabsTrigger value="communications" className="nostalgic-text">Communications</TabsTrigger>
            <TabsTrigger value="projects" className="nostalgic-text">Projects</TabsTrigger>
            <TabsTrigger value="reports" className="nostalgic-text">Reports</TabsTrigger>
            <TabsTrigger value="emergency" className="nostalgic-text text-red-400">Emergency</TabsTrigger>
          </TabsList>

          <TabsContent value="communications">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800 bg-opacity-80 border-red-600">
                <CardHeader>
                  <CardTitle className="text-red-400 nostalgic-text">Executive Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button 
                      variant={selectedChat === 'general' ? 'destructive' : 'outline'}
                      className="w-full justify-start nostalgic-text"
                      onClick={() => setSelectedChat('general')}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      General Executive
                    </Button>
                    <Button 
                      variant={selectedChat === 'research' ? 'destructive' : 'outline'}
                      className="w-full justify-start nostalgic-text"
                      onClick={() => setSelectedChat('research')}
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Research Development
                    </Button>
                    <Button 
                      variant={selectedChat === 'prototype' ? 'destructive' : 'outline'}
                      className="w-full justify-start nostalgic-text"
                      onClick={() => setSelectedChat('prototype')}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Prototype Monitoring
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-slate-800 bg-opacity-80 border-red-600">
                <CardHeader>
                  <CardTitle className="text-red-400 nostalgic-text flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    {selectedChat === 'general' && 'General Executive Chat'}
                    {selectedChat === 'research' && 'Research Development - CLASSIFIED'}
                    {selectedChat === 'prototype' && 'Prototype Monitoring - TOP SECRET'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {chatRooms[selectedChat].map((message) => (
                        <div key={message.id} className="p-3 bg-slate-700 bg-opacity-50 rounded border-l-4 border-red-500">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-yellow-400">{message.sender}</span>
                            <div className="text-xs text-gray-400 flex items-center">
                              <span className="mr-2">{message.timestamp}</span>
                              {message.classification === 'classified' && (
                                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">CLASSIFIED</span>
                              )}
                              {message.classification === 'urgent' && (
                                <span className="bg-yellow-600 text-black px-2 py-1 rounded text-xs">URGENT</span>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-300 nostalgic-text">{message.message}</p>
                          <span className="text-xs text-blue-400">{message.department}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="mt-4">
                    <Button 
                      asChild 
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Link to="/prototype-conversations">Investigate Communications</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-slate-800 bg-opacity-80 border-red-600">
                  <CardHeader>
                    <CardTitle className="text-red-400 nostalgic-text flex items-center justify-between">
                      {project.name}
                      <span className={`text-sm px-2 py-1 rounded ${
                        project.status === 'Critical' ? 'bg-red-600' :
                        project.status === 'Testing' ? 'bg-yellow-600 text-black' :
                        project.status === 'Complete' ? 'bg-green-600' :
                        'bg-blue-600'
                      }`}>
                        {project.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300 nostalgic-text">Lead: {project.lead}</span>
                        <span className="text-yellow-400">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            project.progress >= 90 ? 'bg-green-500' :
                            project.progress >= 70 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <Button asChild size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                        <Link to={project.name === 'Prototype Containment' ? '/prototype-conversations' : 
                               project.name === 'Security System Upgrades' ? '/the-doctor' :
                               project.name === 'Bigger Bodies Initiative' ? '/make-a-friend' : '/departments'}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="bg-slate-800 bg-opacity-80 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">Incident Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded">
                    <h3 className="font-bold text-red-400 mb-2">URGENT: Security Anomalies in Sector 7</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">Security cameras in Sector 7 experienced unexpected outages last night. The Doctor reports technical issues, but no evidence of unauthorized access.</p>
                    <span className="text-xs text-red-400">Reported by: Security Chief - 2024-08-16 06:30</span>
                    <div className="mt-3">
                      <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                        <Link to="/the-doctor">Security Investigation</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-900 bg-opacity-50 border border-yellow-500 rounded">
                    <h3 className="font-bold text-yellow-400 mb-2">WARNING: Red Gas Leak - Playcare</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">Minor red gas leak detected in Playcare sector. Children evacuated as precaution. Leak contained, but exposure monitoring required.</p>
                    <span className="text-xs text-yellow-400">Reported by: Dr. Chen - 2024-08-15 14:20</span>
                    <div className="mt-3">
                      <Button asChild size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-black">
                        <Link to="/playcare">Visit Playcare</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900 bg-opacity-50 border border-blue-500 rounded">
                    <h3 className="font-bold text-blue-400 mb-2">STAFF CHANGE: Dr. Sawyer Reassignment</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">Dr. Harley Sawyer has been reassigned to a classified special project. "The Doctor" has assumed security oversight responsibilities.</p>
                    <span className="text-xs text-blue-400">Reported by: HR Department - 2024-08-03 09:15</span>
                    <div className="mt-3">
                      <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/the-doctor">Security Personnel</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card className="bg-red-900 bg-opacity-80 border-red-400">
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Emergency Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white nostalgic-text">
                    <Link to="/prison">
                      <Zap className="w-4 h-4 mr-2" />
                      Prototype Breach Protocol
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700 text-black nostalgic-text">
                    <Link to="/prison">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Containment Breach Response
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white nostalgic-text">
                    <Link to="/the-doctor">
                      <Camera className="w-4 h-4 mr-2" />
                      Facility Lockdown
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-black bg-opacity-50 border border-red-400 rounded">
                  <p className="text-red-400 text-sm nostalgic-text">
                    <strong>SAFETY REMINDER:</strong> In case of facility emergency, executives should proceed to the secure bunker 
                    on sublevel B4. Security team will provide escort. All containment procedures must be initiated before evacuation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Hidden Portal Link */}
      <div className="fixed bottom-4 right-4 opacity-30 hover:opacity-100 transition-opacity">
        <Link to="/prototype-conversations">
          <Button variant="outline" size="sm" className="border-red-400 text-red-400">
            <Eye className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExecutivePortal;
