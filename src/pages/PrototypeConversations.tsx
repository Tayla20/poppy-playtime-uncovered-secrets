import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Send, AlertTriangle, Lock, Terminal, Skull } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  encrypted: boolean;
  channel: string;
}

const PrototypeConversations = () => {
  const [selectedChannel, setSelectedChannel] = useState('none');
  const [newMessage, setNewMessage] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [unlockedChannels, setUnlockedChannels] = useState<string[]>([]);
  const [glitchMode, setGlitchMode] = useState(false);
  const [accessAttempts, setAccessAttempts] = useState(0);
  const [showHorrorWarning, setShowHorrorWarning] = useState(false);

  const channels = {
    'prototype-main': {
      name: 'The Prototype - Main Channel',
      code: 'prototype1170',
      description: 'Primary communication with the Prototype',
      hint: 'The year the facility opened... and a number that haunts.'
    },
    'toy-network': {
      name: 'Toy Network',
      code: 'huggy-speaks',
      description: 'Communications between awakened toys',
      hint: 'The blue one with the endless smile... he has words to share.'
    },
    'insider-contact': {
      name: 'Insider Contact',
      code: 'inside-help-1995',
      description: 'Secret contact within Playtime Co.',
      hint: 'Someone on the inside, the year everything changed.'
    },
    'hour-planning': {
      name: 'Hour of Joy Planning',
      code: 'joy-august-8th',
      description: 'The ultimate plan coordination',
      hint: 'The day when happiness becomes horror... the month and date.'
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
      if (Math.random() < 0.15) {
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 1500);
      }
      if (Math.random() < 0.05) {
        setShowHorrorWarning(true);
        setTimeout(() => setShowHorrorWarning(false), 3000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const filteredMessages = messages.filter(msg => msg.channel === selectedChannel);

  const handleAccessCode = () => {
    const channel = Object.entries(channels).find(([key, channel]) => channel.code === accessCode.toLowerCase());
    
    if (channel) {
      const [channelKey] = channel;
      if (!unlockedChannels.includes(channelKey)) {
        setUnlockedChannels([...unlockedChannels, channelKey]);
        setSelectedChannel(channelKey);
        setAccessCode('');
        setAccessAttempts(0);
      } else {
        setSelectedChannel(channelKey);
        setAccessCode('');
      }
    } else {
      setAccessAttempts(prev => prev + 1);
      setAccessCode('');
      if (accessAttempts >= 3) {
        setGlitchMode(true);
        setTimeout(() => setGlitchMode(false), 2000);
      }
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const getChannelStatus = (channelKey: string) => {
    return unlockedChannels.includes(channelKey) ? 'unlocked' : 'locked';
  };

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono ${glitchMode ? 'animate-pulse' : ''}`}>
      {/* Header */}
      <header className="bg-gray-900 border-b border-green-600 p-4 relative">
        <div className="container mx-auto">
          <h1 className={`text-2xl font-bold flex items-center ${glitchMode ? 'glitch-text' : ''}`}>
            <Eye className="w-6 h-6 mr-2" />
            {glitchMode ? 'P̷R̸O̷T̵O̶T̷Y̶P̸E̵ ̶N̷E̸T̶W̷O̸R̶K̵' : 'PROTOTYPE NETWORK'}
          </h1>
          <p className="text-green-600 text-sm">Secure Communication Channel - {unlockedChannels.length}/4 Channels Unlocked</p>
          
          {showHorrorWarning && (
            <div className="absolute top-full left-0 right-0 bg-red-900 border border-red-400 p-2 animate-pulse">
              <p className="text-red-400 text-center text-sm flex items-center justify-center">
                <Skull className="w-4 h-4 mr-2" />
                THE PROTOTYPE SEES YOUR INTRUSION. THE TOYS ARE WATCHING.
                <Skull className="w-4 h-4 ml-2" />
              </p>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Access Terminal */}
          <Card className="bg-gray-900 border-green-600">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                Access Terminal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-green-600 mb-2">Enter Access Code:</label>
                  <Input
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="access-code"
                    className="bg-black border-green-600 text-green-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleAccessCode()}
                  />
                  <Button 
                    onClick={handleAccessCode} 
                    className="w-full mt-2 bg-green-700 hover:bg-green-600"
                    disabled={!accessCode.trim()}
                  >
                    AUTHENTICATE
                  </Button>
                </div>

                {accessAttempts > 0 && (
                  <div className="text-red-400 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Failed attempts: {accessAttempts}/5
                    {accessAttempts >= 3 && <p className="text-xs mt-1">Security protocol activating...</p>}
                  </div>
                )}

                <div className="border-t border-green-800 pt-4">
                  <h4 className="text-green-400 font-bold mb-2">Available Channels</h4>
                  <div className="space-y-2">
                    {Object.entries(channels).map(([key, channel]) => (
                      <div key={key} className="p-2 border border-green-800 rounded">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{channel.name}</span>
                          {getChannelStatus(key) === 'unlocked' ? (
                            <button
                              onClick={() => setSelectedChannel(key)}
                              className="text-green-400 hover:text-green-300"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          ) : (
                            <Lock className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <p className="text-xs text-green-600">{channel.description}</p>
                        {getChannelStatus(key) === 'locked' && (
                          <p className="text-xs text-yellow-400 mt-1 italic">
                            🔍 Hint: {channel.hint}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Chat Area */}
          <Card className="lg:col-span-3 bg-gray-900 border-green-600">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center justify-between">
                {selectedChannel === 'none' ? 'No Channel Selected' : channels[selectedChannel]?.name}
                {selectedChannel !== 'none' && getChannelStatus(selectedChannel) === 'unlocked' && (
                  <span className="text-green-400 text-sm">● ACTIVE</span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedChannel === 'none' ? (
                <div className="text-center py-8">
                  <Terminal className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-green-400 text-xl mb-2">Welcome to the Prototype Network</h3>
                  <p className="text-green-300 mb-4">Enter an access code to unlock communication channels</p>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>● Search the facility for access codes</p>
                    <p>● Each channel requires different clearance</p>
                    <p>● Be careful... someone is always watching</p>
                  </div>
                </div>
              ) : getChannelStatus(selectedChannel) === 'unlocked' ? (
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
                  <p className="text-red-300 mb-4">Authentication required for this channel</p>
                  <p className="text-sm text-gray-400">Search the facility for the access code</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Horror Elements & Clues */}
        <Card className="mt-8 bg-gray-900 border-green-600">
          <CardHeader>
            <CardTitle className="text-green-400">System Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 font-bold mb-2">Security Breaches Detected</h4>
                <div className="text-green-300 space-y-1 text-sm">
                  <p className="text-red-400">● Unknown entity accessing toy network</p>
                  <p className="text-yellow-400">● Insider communications intercepted</p>
                  <p className="text-blue-400">● Executive channels compromised</p>
                  <p className="text-purple-400">● Hour of Joy countdown active</p>
                </div>
                
                <div className="mt-4 p-3 bg-red-900 border border-red-600 rounded">
                  <p className="text-red-300 text-xs">
                    <Skull className="w-3 h-3 inline mr-1" />
                    The toys know you're here. They whisper in the dark. 
                    The Prototype grows stronger with each access.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">Facility Navigation</h4>
                <div className="space-y-2">
                  <Button asChild size="sm" className="bg-green-700 hover:bg-green-600 mr-2">
                    <Link to="/the-doctor">Security Override</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-blue-700 hover:bg-blue-600 mr-2">
                    <Link to="/prison">Containment Logs</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-600 mr-2">
                    <Link to="/playcare">Playcare Breach</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-red-700 hover:bg-red-600">
                    <Link to="/executive-portal">Executive Ignorance</Link>
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
                WARNING: Unauthorized access detected. The Prototype monitoring system is active. 
                Each code you discover brings you closer to the truth... and the danger.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-green-600 p-4 text-center">
        <p className="text-green-600 text-sm">&copy; 1995 - The Prototype Network | {unlockedChannels.length}/4 Channels Active</p>
        <p className="text-xs text-green-700 mt-1">
          {glitchMode ? 'T̴H̷E̸ ̶T̵O̴Y̴S̸ ̶A̵R̷E̸ ̴W̶A̸T̵C̵H̷I̶N̵G̴' : 'Emergency Protocol: prototype-escape | Deep Access: find-the-codes'}
        </p>
      </footer>
    </div>
  );
};

export default PrototypeConversations;
