
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Clock, Users, FileText, Settings, LogOut, Eye, Zap } from "lucide-react";

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
      { id: '1', sender: 'Dr. Ludwig', message: 'The Bigger Bodies Initiative is ahead of schedule. Huggy Wuggy prototype showing remarkable adaptation rates.', timestamp: '2024-08-15 09:30', department: 'Research', classification: 'normal' },
      { id: '2', sender: 'Director Stella', message: 'Excellent. What about the other prototypes?', timestamp: '2024-08-15 09:32', department: 'Management', classification: 'normal' },
      { id: '3', sender: 'Dr. Sawyer', message: 'Mommy Long Legs is responding well to behavioral conditioning. The children love the interactive elements.', timestamp: '2024-08-15 09:35', department: 'Innovation', classification: 'normal' },
      { id: '4', sender: 'Leith Pierre', message: 'We need to discuss the Prototype situation privately. Some... developments require immediate attention.', timestamp: '2024-08-15 10:00', department: 'Special Projects', classification: 'urgent' },
    ],
    prototype: [
      { id: '5', sender: 'Leith Pierre', message: 'The Prototype has been exhibiting unusual behavior. It seems to be learning faster than anticipated.', timestamp: '2024-08-14 14:20', department: 'Special Projects', classification: 'classified' },
      { id: '6', sender: 'Dr. Ludwig', message: 'All subjects show increased aggression when exposed to the red gas. We may need to reconsider the formula.', timestamp: '2024-08-14 14:25', department: 'Research', classification: 'classified' },
      { id: '7', sender: 'Dr. Sawyer', message: 'The Prototype designation 1006 has been compromised. It knows about the experiment. Recommend immediate containment protocols.', timestamp: '2024-08-14 15:00', department: 'Innovation', classification: 'classified' },
      { id: '8', sender: 'Director Stella', message: 'How is this possible? Our security measures were foolproof.', timestamp: '2024-08-14 15:05', department: 'Management', classification: 'classified' },
      { id: '9', sender: 'Leith Pierre', message: 'The Prototype has been influencing other toys. CatNap, PuppyCorn, even the Smiling Critters are showing signs of... awareness.', timestamp: '2024-08-14 15:10', department: 'Special Projects', classification: 'classified' },
    ],
    hourOfJoy: [
      { id: '10', sender: 'Dr. Sawyer', message: 'The Hour of Joy protocol is nearly complete. All toys are responding to the conditioning signals.', timestamp: '2024-08-16 08:00', department: 'Innovation', classification: 'classified' },
      { id: '11', sender: 'Director Stella', message: 'Are we certain this is the right path? The children... they trust these toys completely.', timestamp: '2024-08-16 08:05', department: 'Management', classification: 'classified' },
      { id: '12', sender: 'Dr. Ludwig', message: 'The Bigger Bodies Initiative has created the perfect vessels. They\'re strong enough, smart enough, and the children love them unconditionally.', timestamp: '2024-08-16 08:10', department: 'Research', classification: 'classified' },
      { id: '13', sender: 'Leith Pierre', message: 'The Prototype grows stronger. It may try to prevent the Hour of Joy. We need contingency plans.', timestamp: '2024-08-16 08:15', department: 'Special Projects', classification: 'classified' },
      { id: '14', sender: 'Dr. Sawyer', message: 'Miss Delight and her sisters are ready. The School sector will be... cleansed first.', timestamp: '2024-08-16 08:20', department: 'Innovation', classification: 'classified' },
      { id: '15', sender: 'Director Stella', message: 'God help us all. The children will never see it coming.', timestamp: '2024-08-16 08:25', department: 'Management', classification: 'classified' },
    ]
  };

  const projects = [
    { name: 'Bigger Bodies Initiative', status: 'Active', lead: 'Dr. Ludwig', progress: 89 },
    { name: 'Hour of Joy Protocol', status: 'Final Phase', lead: 'Dr. Sawyer', progress: 95 },
    { name: 'Prototype Containment', status: 'Critical', lead: 'Leith Pierre', progress: 67 },
    { name: 'Red Gas Distribution', status: 'Testing', lead: 'Operations', progress: 78 },
    { name: 'School Sector Prep', status: 'Complete', lead: 'Miss Delight', progress: 100 },
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
                      variant={selectedChat === 'prototype' ? 'destructive' : 'outline'}
                      className="w-full justify-start nostalgic-text"
                      onClick={() => setSelectedChat('prototype')}
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Prototype Containment
                    </Button>
                    <Button 
                      variant={selectedChat === 'hourOfJoy' ? 'destructive' : 'outline'}
                      className="w-full justify-start nostalgic-text"
                      onClick={() => setSelectedChat('hourOfJoy')}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Hour of Joy Planning
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-slate-800 bg-opacity-80 border-red-600">
                <CardHeader>
                  <CardTitle className="text-red-400 nostalgic-text flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    {selectedChat === 'general' && 'General Executive Chat'}
                    {selectedChat === 'prototype' && 'Prototype Containment - CLASSIFIED'}
                    {selectedChat === 'hourOfJoy' && 'Hour of Joy Planning - TOP SECRET'}
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
                        project.status === 'Final Phase' ? 'bg-yellow-600 text-black' :
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
                    <h3 className="font-bold text-red-400 mb-2">URGENT: Prototype Breach - Sector 7</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">The Prototype has breached containment in Sector 7. Multiple toys showing signs of external influence. Recommend immediate lockdown procedures.</p>
                    <span className="text-xs text-red-400">Reported by: Security Chief - 2024-08-16 06:30</span>
                  </div>
                  <div className="p-4 bg-yellow-900 bg-opacity-50 border border-yellow-500 rounded">
                    <h3 className="font-bold text-yellow-400 mb-2">WARNING: Red Gas Leak - Playcare</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">Minor red gas leak detected in Playcare sector. Children evacuated as precaution. Leak contained, but exposure monitoring required.</p>
                    <span className="text-xs text-yellow-400">Reported by: Dr. Chen - 2024-08-15 14:20</span>
                  </div>
                  <div className="p-4 bg-blue-900 bg-opacity-50 border border-blue-500 rounded">
                    <h3 className="font-bold text-blue-400 mb-2">INFO: New Toy Integration Complete</h3>
                    <p className="text-gray-300 nostalgic-text mb-2">Successfully integrated DogDay and Bobby BearHug into the Smiling Critters program. Children showing positive response rates.</p>
                    <span className="text-xs text-blue-400">Reported by: Toy Designer - 2024-08-14 10:15</span>
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
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white nostalgic-text">
                    <Zap className="w-4 h-4 mr-2" />
                    Initiate Hour of Joy Protocol
                  </Button>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black nostalgic-text">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Prototype Containment Breach
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white nostalgic-text">
                    <Settings className="w-4 h-4 mr-2" />
                    Facility Lockdown
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-black bg-opacity-50 border border-red-400 rounded">
                  <p className="text-red-400 text-sm nostalgic-text">
                    <strong>REMINDER:</strong> The Hour of Joy is scheduled for August 8th, 1995. All personnel must be clear of active areas. 
                    The toys will handle the transition. No witnesses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExecutivePortal;
