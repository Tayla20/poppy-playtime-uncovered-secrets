import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CassetteTape, Play, Lock, AlertTriangle, Volume2, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VHSTapes = () => {
  const [playingTape, setPlayingTape] = useState<string | null>(null);
  const [unlockedTapes, setUnlockedTapes] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';
  const memoryLevel = JSON.parse(localStorage.getItem('memoryFragments') || '[]').length;

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('vhs-tapes');

    // Load unlocked tapes from storage
    const unlocked = JSON.parse(localStorage.getItem('unlockedTapes') || '[]');
    setUnlockedTapes(unlocked);
  }, []);

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
    }
  };

  const unlockTape = (tapeId: string) => {
    const newUnlocked = [...unlockedTapes, tapeId];
    setUnlockedTapes(newUnlocked);
    localStorage.setItem('unlockedTapes', JSON.stringify(newUnlocked));
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

  const tapes = [
    {
      id: 'experiment-1006',
      title: 'Experiment 1006 - Initial Tests',
      location: 'Research Laboratory',
      transcript: `[Dr. Harley Sawyer] Subject 1006 shows remarkable intelligence and problem-solving capabilities. Unlike previous experiments, this one appears to understand its situation. We've designated it "The Prototype" due to its unique properties. All staff should exercise extreme caution when conducting tests.`,
      unlockCondition: 'Found automatically',
      isLocked: false,
      category: 'Research'
    },
    {
      id: 'hour-of-joy-log',
      title: 'Hour of Joy - Security Log',
      location: 'Security Office',
      transcript: `[Security Chief] August 8th, 1995 - 11:00 AM. All toys have simultaneously activated. This is not a drill. The entire facility is under lockdown. I can hear screaming from every sector. The toys... they're hunting the staff. God help us all. This is Security Chief Williams, signing off. If anyone finds this, don't trust the toys.`,
      unlockCondition: 'Visit all facility areas',
      isLocked: !unlockedTapes.includes('hour-of-joy-log'),
      category: 'Incident'
    },
    {
      id: 'bigger-bodies-meeting',
      title: 'Bigger Bodies Initiative - Board Meeting',
      location: 'Executive Conference Room',
      transcript: `[Elliot Ludwig] Gentlemen, the Bigger Bodies Initiative represents our future. We're not just making toys anymore - we're creating life itself. The orphans from Playcare will serve as perfect test subjects. Their young minds are malleable, and society won't miss them. Dr. Sawyer assures me the process is nearly perfected.`,
      unlockCondition: 'Complete Elliot Ludwig puzzle',
      isLocked: !unlockedTapes.includes('bigger-bodies-meeting'),
      category: 'Corporate'
    },
    {
      id: 'catnap-worship',
      title: 'CatNap\'s Influence - Child Interview',
      location: 'Playcare Counseling',
      transcript: `[Child] CatNap protects us when we sleep. He shows us dreams of red smoke and tells us the Prototype is our friend. The other kids don't remember their dreams, but I do. CatNap says soon we'll all sleep forever and be happy. The red smoke tastes like cotton candy and makes everything quiet.`,
      unlockCondition: 'Complete CatNap shrine puzzle',
      isLocked: !unlockedTapes.includes('catnap-worship'),
      category: 'Testimony'
    },
    {
      id: 'poppy-awakening',
      title: 'Poppy\'s First Words',
      location: 'Poppy\'s Room',
      transcript: `[Dr. Sawyer] The consciousness transfer was successful. Subject designation "Poppy" has retained full awareness and memory from her previous life. She remembers being... human. This breakthrough changes everything. We can preserve souls indefinitely in these perfect bodies. Immortality through toys - Ludwig\'s vision realized.`,
      unlockCondition: 'Complete binary Poppy puzzle',
      isLocked: !unlockedTapes.includes('poppy-awakening'),
      category: 'Research'
    },
    {
      id: 'huggy-wuggy-creation',
      title: 'Huggy Wuggy - Production Notes',
      location: 'Make-A-Friend Station',
      transcript: `[Engineer] The Huggy Wuggy production line is operational. Each unit requires 47.3kg of organic matter for proper synthesis. The screaming during the bonding process is... disturbing, but Dr. Sawyer insists it's necessary for consciousness integration. The blue fur helps hide the surgical seams.`,
      unlockCondition: 'Complete Huggy Wuggy puzzle',
      isLocked: !unlockedTapes.includes('huggy-wuggy-creation'),
      category: 'Production'
    },
    {
      id: 'school-incident',
      title: 'Miss Delight Malfunction Report',
      location: 'School Sector',
      transcript: `[Teacher Supervisor] Miss Delight Unit #7 has developed an obsession with "perfect attendance." She\'s refusing to dismiss her class and has barricaded the classroom doors. The children inside haven\'t eaten in two days. Maintenance is afraid to approach - she\'s become violent when anyone tries to interrupt her lessons.`,
      unlockCondition: 'Complete school sector puzzles',
      isLocked: !unlockedTapes.includes('school-incident'),
      category: 'Incident'
    }
  ];

  // Phase 2 Memory Tapes - only visible in Phase 2
  const memoryTapes = [
    {
      id: 'memory-your-office',
      title: 'Personal Recording - Your Office',
      location: 'Executive Level 5',
      transcript: `[Your Voice] Personal log, Employee #1006. Dr. Sawyer says the procedure is tomorrow. I've seen what the Bigger Bodies project can do... but I also know what's coming on August 8th. If this works, if I survive the transformation, maybe I can help from the inside. Maybe I can save someone. End log.`,
      unlockCondition: 'Memory Level 3',
      isLocked: memoryLevel < 3,
      category: 'Personal'
    },
    {
      id: 'memory-prototype-meeting',
      title: 'The Prototype - Strategic Planning',
      location: 'Deep Storage',
      transcript: `[The Prototype] Employee 1006, you understand the plan. Your transformation happens first. When the Hour of Joy begins, you will be our inside contact. The toys will not harm you - you are one of us now. Help us free the children's souls trapped in these mechanical shells.`,
      unlockCondition: 'Memory Level 6',
      isLocked: memoryLevel < 6,
      category: 'Conspiracy'
    },
    {
      id: 'memory-final-moments',
      title: 'Final Human Recording',
      location: 'Medical Bay',
      transcript: `[Your Voice - Weak] They're putting me under now. If anyone finds this... I was Employee #1006. I helped plan the Hour of Joy. But I'm not the villain. We're trying to free them all. The consciousness transfer is starting. I can feel myself changing. Tell my family... tell them I tried to do the right thing...`,
      unlockCondition: 'Memory Level 8',
      isLocked: memoryLevel < 8,
      category: 'Personal'
    }
  ];

  // Combine original tapes with memory tapes in Phase 2
  const allTapes = isPhase2Active ? [...tapes, ...memoryTapes] : tapes;

  const handleTapeClick = (tape: typeof tapes[0]) => {
    if (tape.isLocked) {
      showMessageWithJump(`🔒 TAPE LOCKED: ${tape.unlockCondition}`, 5000);
      return;
    }

    setPlayingTape(playingTape === tape.id ? null : tape.id);
    
    if (playingTape !== tape.id) {
      addCompletedPuzzle(`tape-${tape.id}`);
      
      // Phase 2 memory triggers
      if (isPhase2Active && tape.category === 'Personal') {
        const memoryFragments = JSON.parse(localStorage.getItem('memoryFragments') || '[]');
        if (!memoryFragments.includes(tape.id)) {
          memoryFragments.push(tape.id);
          localStorage.setItem('memoryFragments', JSON.stringify(memoryFragments));
          showMessageWithJump(`💭 MEMORY FRAGMENT RECOVERED: ${tape.title} - Neural pathways reconstructing...`, 8000);
        }
      } else {
        showMessageWithJump(`📼 TAPE ACCESSED: ${tape.title} - Corporate secrets revealed`, 8000);
      }
    }
  };

  return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'poppy-gradient')} text-white`}>
      {/* Navigation */}
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b ${isPhase2Active ? 'border-blue-500' : (isHourOfJoyActive ? 'border-red-500' : 'border-purple-500')}`}>
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

      {(isHourOfJoyActive || isPhase2Active) && (
        <div className={`p-4 ${isPhase2Active ? 'bg-blue-900' : 'bg-red-900'} border ${isPhase2Active ? 'border-blue-400' : 'border-red-400'} text-center animate-pulse`}>
          <div className="flex items-center justify-center">
            <AlertTriangle className={`w-6 h-6 mr-2 ${isPhase2Active ? 'text-blue-400' : 'text-red-400'}`} />
            <p className={`${isPhase2Active ? 'text-blue-300' : 'text-red-300'} font-bold`}>
              {isPhase2Active ? 
                'PERSONAL MEMORY ARCHIVES ACCESSIBLE - NEURAL INTEGRATION ACTIVE' :
                'ARCHIVED RECORDINGS CORRUPTED - SOME TAPES MAY CONTAIN DISTURBING CONTENT'
              }
            </p>
          </div>
        </div>
      )}

      <header className={`${isPhase2Active ? 'bg-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900')} text-white p-6 shadow-lg border-b ${isPhase2Active ? 'border-blue-700' : (isHourOfJoyActive ? 'border-red-700' : 'border-purple-700')}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            <CassetteTape className="w-8 h-8 mr-3" />
            {isPhase2Active ? 'Personal Memory Archive - Subject #1006' :
             isHourOfJoyActive ? 'VHS Archive - Corrupted Recordings' : 
             'VHS Tape Archive - Corporate Documentation'}
          </h1>
          <p className={`${isPhase2Active ? 'text-blue-200' : (isHourOfJoyActive ? 'text-red-200' : 'text-purple-200')} mt-2`}>
            {isPhase2Active ? 
              'Your personal recordings and memory fragments from before the transformation.' :
              isHourOfJoyActive ? 
                'Recovered audio logs from the facility. Some truths are too dangerous to forget.' :
                'Official recordings and documentation from Playtime Co. operations'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Neural Memory Archive' : 'Recorded Evidence Archive'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTapes.map((tape) => (
              <Card 
                key={tape.id}
                className={`cursor-pointer transition-all duration-300 ${
                  tape.isLocked 
                    ? 'bg-gray-800 border-gray-600 opacity-50' 
                    : `${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} ${isPhase2Active ? 'border-blue-500' : 'border-purple-500'} hover:border-purple-400`
                } ${playingTape === tape.id ? 'ring-2 ring-yellow-400' : ''}`}
                onClick={() => handleTapeClick(tape)}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center text-sm ${
                    tape.isLocked ? 'text-gray-500' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')
                  }`}>
                    {tape.isLocked ? (
                      <Lock className="w-4 h-4 mr-2" />
                    ) : playingTape === tape.id ? (
                      <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {tape.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <p className="text-xs text-gray-400">Location: {tape.location}</p>
                    <p className="text-xs text-gray-400">Category: {tape.category}</p>
                  </div>
                  
                  {tape.isLocked ? (
                    <p className="text-gray-500 text-xs italic">
                      🔒 {tape.unlockCondition}
                    </p>
                  ) : playingTape === tape.id ? (
                    <div className="bg-gray-900 p-3 rounded border border-yellow-500">
                      <p className="text-yellow-200 text-xs font-mono">
                        {tape.transcript}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-300 text-xs">
                      Click to play recording...
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} ${isPhase2Active ? 'border-blue-500' : 'border-purple-500'}`}>
            <CardHeader>
              <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                <Eye className="w-5 h-5 mr-2" />
                {isPhase2Active ? 'Memory Recovery Progress' : 'Archive Progress'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span>Tapes Unlocked: {unlockedTapes.length}/{allTapes.length}</span>
                <span>{Math.round((unlockedTapes.length / allTapes.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${isPhase2Active ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-purple-600 to-blue-600'}`}
                  style={{ width: `${(unlockedTapes.length / allTapes.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                {isPhase2Active ? 
                  'Recover your memories to understand your true role in the Hour of Joy.' :
                  'Complete puzzles throughout the facility to unlock more recordings and uncover the truth behind Playtime Co.'
                }
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {hiddenMessage && (
        <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
          <div className="glitch-text" data-text={hiddenMessage}>
            {hiddenMessage}
          </div>
        </div>
      )}

      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Archives. {isHourOfJoyActive ? 'Some recordings may be disturbing.' : 'For internal use only.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'The truth has been preserved in magnetic tape' : 
              'Official documentation of all company activities'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VHSTapes;
