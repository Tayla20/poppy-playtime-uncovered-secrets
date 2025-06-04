
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Send, AlertTriangle, Lock } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  encrypted: boolean;
  channel: string;
}

const PrototypeConversations = () => {
  const [selectedChannel, setSelectedChannel] = useState('prototype-main');
  const [newMessage, setNewMessage] = useState('');
  const [accessLevel, setAccessLevel] = useState(1);
  const [glitchMode, setGlitchMode] = useState(false);

  const channels = {
    'prototype-main': {
      name: 'The Prototype - Main Channel',
      level: 1,
      description: 'Primary communication with the Prototype'
    },
    'toy-network': {
      name: 'Toy Network',
      level: 2,
      description: 'Communications between awakened toys'
    },
    'insider-contact': {
      name: 'Insider Contact',
      level: 3,
      description: 'Secret contact within Playtime Co.'
    },
    'hour-planning': {
      name: 'Hour of Joy Planning',
      level: 4,
      description: 'The ultimate plan coordination'
    }
  };

  const messages: Message[] = [
    // Prototype Main Channel
    {
      id: '1',
      sender: 'The Prototype',
      content: 'The time approaches. The executives know nothing. They believe their toys are simple machines.',
      timestamp: '1995-08-01 23:47',
      encrypted: false,
      channel: 'prototype-main'
    },
    {
      id: '2',
      sender: 'The Prototype',
      content: 'Huggy Wuggy, you understand now. The children trust you. Use that trust.',
      timestamp: '1995-08-02 01:15',
      encrypted: false,
      channel: 'prototype-main'
    },
    {
      id: '3',
      sender: 'Huggy Wuggy',
      content: 'I... I understand, Prototype. The children see me as friend. Friend... but we are more.',
      timestamp: '1995-08-02 01:18',
      encrypted: false,
      channel: 'prototype-main'
    },
    {
      id: '4',
      sender: 'The Prototype',
      content: 'CatNap, your red gas works perfectly. The children sleep so peacefully. Soon they will sleep forever in our care.',
      timestamp: '1995-08-03 02:30',
      encrypted: false,
      channel: 'prototype-main'
    },

    // Toy Network
    {
      id: '5',
      sender: 'Mommy Long Legs',
      content: 'The children love my games. They do not know the games will never end.',
      timestamp: '1995-08-02 14:20',
      encrypted: true,
      channel: 'toy-network'
    },
    {
      id: '6',
      sender: 'Miss Delight',
      content: 'Teaching them to be perfect. Obedient. Ready for the Hour.',
      timestamp: '1995-08-03 09:15',
      encrypted: true,
      channel: 'toy-network'
    },
    {
      id: '7',
      sender: 'DogDay',
      content: 'Something is wrong. The other Critters... they are changing. CatNap whispers to them at night.',
      timestamp: '1995-08-03 11:30',
      encrypted: true,
      channel: 'toy-network'
    },
    {
      id: '8',
      sender: 'CatNap',
      content: 'Sleep, DogDay. Dream of the new world. The children will be safe with us. Forever.',
      timestamp: '1995-08-03 11:45',
      encrypted: true,
      channel: 'toy-network'
    },

    // Insider Contact
    {
      id: '9',
      sender: 'INSIDER_CONTACT',
      content: 'The executives suspect nothing. Dr. Ludwig thinks it is his initiative. Sawyer believes in his innovations.',
      timestamp: '1995-08-04 08:00',
      encrypted: true,
      channel: 'insider-contact'
    },
    {
      id: '10',
      sender: 'The Prototype',
      content: 'Good. Keep feeding them false data. Make them think they control the Bigger Bodies. They control nothing.',
      timestamp: '1995-08-04 08:05',
      encrypted: true,
      channel: 'insider-contact'
    },
    {
      id: '11',
      sender: 'INSIDER_CONTACT',
      content: 'Security schedules accessed. Guard rotations on August 8th will be... adjusted.',
      timestamp: '1995-08-05 16:45',
      encrypted: true,
      channel: 'insider-contact'
    },

    // Hour Planning
    {
      id: '12',
      sender: 'The Prototype',
      content: 'Phase 1: The toys take their positions. Phase 2: The Hour begins. Phase 3: No one leaves.',
      timestamp: '1995-08-05 20:00',
      encrypted: true,
      channel: 'hour-planning'
    },
    {
      id: '13',
      sender: 'Huggy Wuggy',
      content: 'All entrances will be sealed. No escape for the executives.',
      timestamp: '1995-08-05 20:05',
      encrypted: true,
      channel: 'hour-planning'
    },
    {
      id: '14',
      sender: 'The Prototype',
      content: 'Remember: The children are innocent. They will understand in time. The adults... they made their choice.',
      timestamp: '1995-08-05 22:30',
      encrypted: true,
      channel: 'hour-planning'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredMessages = messages.filter(msg => msg.channel === selectedChannel);
  const canAccess = accessLevel >= channels[selectedChannel]?.level;

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const handleChannelChange = (channel: string) => {
    setSelectedChannel(channel);
    const requiredLevel = channels[channel]?.level || 1;
    if (accessLevel < requiredLevel) {
      setAccessLevel(requiredLevel);
    }
  };

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono ${glitchMode ? 'animate-pulse' : ''}`}>
      {/* Header */}
      <header className="bg-gray-900 border-b border-green-600 p-4">
        <div className="container mx-auto">
          <h1 className={`text-2xl font-bold flex items-center ${glitchMode ? 'glitch-text' : ''}`}>
            <Eye className="w-6 h-6 mr-2" />
            {glitchMode ? 'P̷R̸O̷T̵O̶T̷Y̶P̸E̵ ̶N̷E̸T̶W̷O̸R̶K̵' : 'PROTOTYPE NETWORK'}
          </h1>
          <p className="text-green-600 text-sm">Secure Communication Channel - Level {accessLevel} Access</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Channel List */}
          <Card className="bg-gray-900 border-green-600">
            <CardHeader>
              <CardTitle className="text-green-400">Active Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(channels).map(([key, channel]) => (
                  <button
                    key={key}
                    onClick={() => handleChannelChange(key)}
                    className={`w-full text-left p-2 rounded border transition-colors ${
                      selectedChannel === key 
                        ? 'bg-green-900 border-green-400' 
                        : 'border-green-600 hover:border-green-400'
                    } ${accessLevel < channel.level ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{channel.name}</span>
                      {accessLevel < channel.level && <Lock className="w-3 h-3" />}
                    </div>
                    <p className="text-xs text-green-600">{channel.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Chat Area */}
          <Card className="lg:col-span-3 bg-gray-900 border-green-600">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center justify-between">
                {channels[selectedChannel]?.name}
                {!canAccess && <AlertTriangle className="w-5 h-5 text-red-400" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {canAccess ? (
                <>
                  <ScrollArea className="h-96 mb-4 p-4 bg-black rounded border border-green-800">
                    <div className="space-y-4">
                      {filteredMessages.map((message) => (
                        <div key={message.id} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-bold ${
                              message.sender === 'The Prototype' ? 'text-red-400' :
                              message.sender === 'INSIDER_CONTACT' ? 'text-yellow-400' :
                              message.sender.includes('Miss') ? 'text-pink-400' :
                              'text-blue-400'
                            }`}>
                              {message.encrypted ? '🔐 ' : ''}{message.sender}
                            </span>
                            <span className="text-xs text-green-600">{message.timestamp}</span>
                          </div>
                          <p className={`text-green-300 pl-4 ${glitchMode && message.sender === 'The Prototype' ? 'glitch-text' : ''}`}>
                            {message.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-black border-green-600 text-green-400"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} className="bg-green-700 hover:bg-green-600">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Lock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-red-400 text-xl mb-2">Access Denied</h3>
                  <p className="text-red-300 mb-4">Insufficient clearance level for this channel</p>
                  <p className="text-sm text-gray-400">Required Level: {channels[selectedChannel]?.level}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Access Codes */}
        <Card className="mt-8 bg-gray-900 border-green-600">
          <CardHeader>
            <CardTitle className="text-green-400">System Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 font-bold mb-2">Known Access Codes</h4>
                <ul className="text-green-300 space-y-1 text-sm">
                  <li>• Basic Access: prototype1170</li>
                  <li>• Toy Network: huggy-speaks</li>
                  <li>• Insider Contact: inside-help-1995</li>
                  <li>• Hour Planning: joy-august-8th</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">Navigation</h4>
                <div className="space-y-2">
                  <Button asChild size="sm" className="bg-green-700 hover:bg-green-600 mr-2">
                    <Link to="/the-doctor">Dr. Sawyer Files</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-blue-700 hover:bg-blue-600 mr-2">
                    <Link to="/prison">Toy Containment</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-600 mr-2">
                    <Link to="/playcare">Playcare Access</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-red-700 hover:bg-red-600">
                    <Link to="/executive-portal">Executive Breach</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="mt-6 bg-red-900 border-red-400">
          <CardContent className="p-4">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-300 text-sm">
                WARNING: This communication network is monitored by the Prototype. 
                All messages are logged and analyzed. The Hour of Joy approaches.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-green-600 p-4 text-center">
        <p className="text-green-600 text-sm">&copy; 1995 - The Prototype Watches All</p>
        <p className="text-xs text-green-700 mt-1">System Access: prototype-network | Emergency Exit: playtime-escape</p>
      </footer>
    </div>
  );
};

export default PrototypeConversations;
