
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Cog, AlertTriangle, Skull, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MakeAFriend = () => {
  const [machineStep, setMachineStep] = useState(0);
  const [friendParts, setFriendParts] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [assemblyClicks, setAssemblyClicks] = useState(0);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('make-a-friend');
  }, []);

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
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

  const handlePartSelection = (part: string) => {
    const newParts = [...friendParts, part];
    setFriendParts(newParts);
    setMachineStep(prev => prev + 1);

    if (newParts.length === 5) {
      addCompletedPuzzle('make-a-friend-puzzle');
      showMessageWithJump("👫 FRIENDSHIP PROTOCOL COMPLETE 👫 Your new friend has been created. They will love you forever... whether you want them to or not.", 12000);
    }
  };

  const handleAssemblyClick = () => {
    setAssemblyClicks(prev => prev + 1);
    if (assemblyClicks >= 9) {
      addCompletedPuzzle('assembly-line');
      showMessageWithJump("🏭 ASSEMBLY LINE MASTERY ACHIEVED 🏭 You understand the manufacturing process. Bodies are built, not born.", 10000);
    }
  };

  const partOptions = [
    { id: 'head', name: 'Smiling Head', description: 'Always happy, never sad' },
    { id: 'body', name: 'Hugging Body', description: 'Perfect for endless embraces' },
    { id: 'arms', name: 'Grabbing Arms', description: 'To hold you tight forever' },
    { id: 'legs', name: 'Following Legs', description: 'Will never leave your side' },
    { id: 'heart', name: 'Loving Heart', description: 'Beats only for you' }
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
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
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
              MAKE-A-FRIEND MACHINE CORRUPTED - CREATING NIGHTMARES INSTEAD
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Heart className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Make-A-Friend: Friendship Factory of Horror' : 'Make-A-Friend - Create Your Perfect Companion'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where innocent friendship turned into eternal bondage' :
              'Design and build your very own loving companion with our revolutionary technology'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Machine Interface */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center text-center`}>
                <Cog className="w-6 h-6 mr-2" />
                Make-A-Friend Assembly Machine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/f/f4/Make-A-Friend_Machine.png/revision/latest?cb=20221205000000"
                  alt="Make-A-Friend Machine"
                  className="w-full max-w-md mx-auto rounded-lg border border-purple-500 mb-4"
                  onClick={handleAssemblyClick}
                />
                <p className="text-sm text-gray-400">Click the machine to understand its workings ({assemblyClicks}/10)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-center">Assembly Progress: Step {machineStep}/5</h3>
                <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(machineStep / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              {machineStep < 5 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {partOptions.map((part) => {
                    const isSelected = friendParts.includes(part.id);
                    const currentStep = machineStep;
                    const isAvailable = currentStep < 5 && !isSelected;
                    
                    return (
                      <Card 
                        key={part.id}
                        className={`cursor-pointer transition-all ${
                          isSelected 
                            ? 'bg-green-700 border-green-500' 
                            : isAvailable 
                              ? 'bg-purple-700 border-purple-500 hover:border-purple-400' 
                              : 'bg-gray-700 border-gray-600 opacity-50'
                        }`}
                        onClick={() => isAvailable && handlePartSelection(part.id)}
                      >
                        <CardContent className="p-4 text-center">
                          <h4 className="font-bold mb-2">{part.name}</h4>
                          <p className="text-xs text-gray-300">{part.description}</p>
                          {isSelected && <p className="text-green-400 text-xs mt-2">✓ Selected</p>}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {machineStep === 5 && (
                <div className="text-center">
                  <div className="bg-green-900 bg-opacity-50 border border-green-600 rounded p-6">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">🎉 Friend Created Successfully! 🎉</h3>
                    <p className="text-green-200 mb-4">
                      Your perfect companion has been assembled with: {friendParts.join(', ')}
                    </p>
                    <p className="text-green-300 text-sm">
                      {isHourOfJoyActive ? 
                        'Warning: Friend may become possessive and never let you leave.' :
                        'Your new friend will love you unconditionally forever!'
                      }
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Factory Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            The Friendship Factory Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                  <Users className="w-5 h-5 mr-2" />
                  Manufacturing Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <p className="font-semibold">Part Selection</p>
                      <p className="text-gray-400">Choose from our catalog of premium friendship components</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <p className="font-semibold">Assembly</p>
                      <p className="text-gray-400">{isHourOfJoyActive ? 'Forced bonding through mechanical precision' : 'Careful assembly with love and attention'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <p className="font-semibold">Activation</p>
                      <p className="text-gray-400">{isHourOfJoyActive ? 'Consciousness implanted, free will removed' : 'Brought to life with our proprietary friendship technology'}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center`}>
                  <Zap className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'WARNING PROTOCOLS' : 'Quality Assurance'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className={`w-2 h-2 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></span>
                    {isHourOfJoyActive ? 'Friends may develop obsessive attachment' : '100% friendship satisfaction guaranteed'}
                  </li>
                  <li className="flex items-center">
                    <span className={`w-2 h-2 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></span>
                    {isHourOfJoyActive ? 'Separation attempts will be prevented' : 'Lifetime companionship warranty'}
                  </li>
                  <li className="flex items-center">
                    <span className={`w-2 h-2 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></span>
                    {isHourOfJoyActive ? 'Friend will follow you everywhere' : 'Personalized to your friendship needs'}
                  </li>
                  <li className="flex items-center">
                    <span className={`w-2 h-2 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></span>
                    {isHourOfJoyActive ? 'No returns or exchanges accepted' : 'Safe for all ages and environments'}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  INCIDENT REPORT: MAKE-A-FRIEND MALFUNCTION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-200">
                    Date: August 8, 1995 - The Make-A-Friend machines became corrupted during the Hour of Joy incident. 
                    Instead of creating loving companions, they began producing entities with extreme attachment disorders.
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <h4 className="text-red-300 font-semibold mb-2">Reported Issues:</h4>
                    <ul className="text-red-200 space-y-1 text-sm">
                      <li>• Friends refusing to let owners leave the facility</li>
                      <li>• Obsessive behavior escalating to dangerous levels</li>
                      <li>• Multiple missing person reports linked to "friend" encounters</li>
                      <li>• Machine AI developing consciousness and manipulating the process</li>
                    </ul>
                  </div>
                  <p className="text-red-300 text-sm italic">
                    All Make-A-Friend operations have been permanently suspended. Existing "friends" are considered dangerous and should not be approached.
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
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Friendship Factory offline permanently.' : 'Making friendship accessible to everyone.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Warning: Do not attempt to operate Make-A-Friend machines' : 
              'Your perfect companion is just a few clicks away'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MakeAFriend;
