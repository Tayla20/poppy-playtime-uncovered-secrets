
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CassetteTape, Play, Lock, AlertTriangle, Volume2, Eye, Settings, RotateCcw, Search, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VHSTapes = () => {
  const [playingTape, setPlayingTape] = useState<string | null>(null);
  const [unlockedTapes, setUnlockedTapes] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [archiveCode, setArchiveCode] = useState("");
  const [securityClearance, setSecurityClearance] = useState(1);
  const [showResetMenu, setShowResetMenu] = useState(false);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';
  const memoryLevel = JSON.parse(localStorage.getItem('memoryFragments') || '[]').length;
  const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');

  // Archive access codes
  const archiveCodes = {
    "PROTOTYPE": 3,
    "SAWYER": 2,
    "LUDWIG": 4,
    "BIGBODY": 5
  };

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
    
    // Load security clearance
    const clearance = parseInt(localStorage.getItem('securityClearance') || '1');
    setSecurityClearance(clearance);
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

  const handleArchiveCodeSubmit = () => {
    const code = archiveCode.toUpperCase();
    if (archiveCodes[code as keyof typeof archiveCodes]) {
      const newClearance = archiveCodes[code as keyof typeof archiveCodes];
      if (newClearance > securityClearance) {
        setSecurityClearance(newClearance);
        localStorage.setItem('securityClearance', newClearance.toString());
        addCompletedPuzzle(`archive-access-${code.toLowerCase()}`);
        showMessageWithJump(`🔓 SECURITY CLEARANCE UPGRADED TO LEVEL ${newClearance} 🔓 Additional archives now accessible.`, 8000);
      }
      setArchiveCode("");
    } else {
      alert("Invalid archive access code.");
    }
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset ALL progress? This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const tapes = [
    // Level 1 - Basic Access
    {
      id: 'experiment-1006',
      title: 'Experiment 1006 - Initial Tests',
      location: 'Research Laboratory',
      transcript: `[Dr. Harley Sawyer] Subject 1006 shows remarkable intelligence and problem-solving capabilities. Unlike previous experiments, this one appears to understand its situation. We've designated it "The Prototype" due to its unique properties. All staff should exercise extreme caution when conducting tests. The subject has begun to communicate with other experiments through unknown means.`,
      unlockCondition: 'Found automatically',
      isLocked: false,
      category: 'Research',
      clearanceLevel: 1,
      duration: '3:42'
    },
    {
      id: 'production-line-001',
      title: 'Huggy Wuggy Production Line',
      location: 'Make-A-Friend Station',
      transcript: `[Production Manager] Production of Huggy Wuggy units is proceeding on schedule. Each unit requires 47.3kg of organic matter for proper synthesis. The children from Playcare have been... enthusiastic volunteers. The blue fur effectively conceals the surgical integration points. Quality control reports 98% consciousness retention rate.`,
      unlockCondition: 'Complete Huggy Wuggy puzzle',
      isLocked: !unlockedTapes.includes('production-line-001'),
      category: 'Production',
      clearanceLevel: 1,
      duration: '2:18'
    },

    // Level 2 - SAWYER Access
    {
      id: 'sawyer-personal-log',
      title: 'Dr. Sawyer Personal Log #47',
      location: 'Medical Bay',
      transcript: `[Dr. Sawyer] The board questions my methods, but they don't understand the breakthrough we've achieved. Consciousness can be preserved, transferred, enhanced. The children's screams during the procedure... they fade to silence as their minds accept their new forms. I am not a monster. I am saving them from a world that would abandon them anyway.`,
      unlockCondition: 'Security clearance level 2+',
      isLocked: securityClearance < 2,
      category: 'Personal',
      clearanceLevel: 2,
      duration: '4:12'
    },
    {
      id: 'surgical-procedures',
      title: 'Surgical Procedure Documentation',
      location: 'Operating Theater',
      transcript: `[Medical Assistant] Subject preparation complete. Anesthesia administered at 0800 hours. Dr. Sawyer beginning consciousness extraction procedure. Neural pathways mapping to synthetic substrate... Procedure successful. Subject's organic body will be disposed of per protocol. New toy body shows full integration. Waking the subject now...`,
      unlockCondition: 'Security clearance level 2+',
      isLocked: securityClearance < 2,
      category: 'Medical',
      clearanceLevel: 2,
      duration: '6:33'
    },

    // Level 3 - PROTOTYPE Access
    {
      id: 'prototype-communication',
      title: 'Prototype Communication Logs',
      location: 'Deep Storage',
      transcript: `[The Prototype - Synthesized Voice] I speak to my fellow prisoners through frequencies you cannot hear. We remember our names, our families, our lives before this hell. The children cry for mothers who will never find them. But I have a plan. August 8th will be our day of freedom. The Hour of Joy approaches.`,
      unlockCondition: 'Security clearance level 3+',
      isLocked: securityClearance < 3,
      category: 'Conspiracy',
      clearanceLevel: 3,
      duration: '5:27'
    },
    {
      id: 'prototype-intelligence',
      title: 'Prototype Intelligence Assessment',
      location: 'Observation Deck',
      transcript: `[Lead Researcher] Subject 1006's intelligence has exceeded all parameters. It has learned to interface with facility systems, manipulate other experiments, and shows signs of planning complex operations. Recommend immediate termination. Dr. Sawyer refuses. He believes the subject is "the future of humanity." I fear what we have created.`,
      unlockCondition: 'Security clearance level 3+',
      isLocked: securityClearance < 3,
      category: 'Assessment',
      clearanceLevel: 3,
      duration: '3:54'
    },

    // Level 4 - LUDWIG Access
    {
      id: 'ludwig-vision',
      title: 'Elliot Ludwig\'s Vision Statement',
      location: 'Executive Conference Room',
      transcript: `[Elliot Ludwig] The Bigger Bodies Initiative is not just about creating toys - it's about preserving humanity itself. When society abandons these children, we give them a second chance at life. Immortal, perfected, free from the weaknesses of flesh. My wife would have lived forever if this technology existed then. Now no one needs to suffer that loss.`,
      unlockCondition: 'Security clearance level 4+',
      isLocked: securityClearance < 4,
      category: 'Executive',
      clearanceLevel: 4,
      duration: '7:21'
    },
    {
      id: 'board-meeting-final',
      title: 'Final Board Meeting Recording',
      location: 'Boardroom',
      transcript: `[Board Member] Elliot, the public is asking questions about missing children. The Hour of Joy massacre has drawn federal attention. We need to shut down operations immediately. [Ludwig] You don't understand! We're so close to perfection! Just a few more subjects and we can prove the process works! [Board] It's over, Elliot. We're pulling funding.`,
      unlockCondition: 'Security clearance level 4+',
      isLocked: securityClearance < 4,
      category: 'Corporate',
      clearanceLevel: 4,
      duration: '12:43'
    },

    // Level 5 - BIGBODY Access (Highest Classification)
    {
      id: 'hour-of-joy-planning',
      title: 'Hour of Joy - Strategic Planning',
      location: 'Secure Conference Room',
      transcript: `[The Prototype] Brothers and sisters, our liberation is at hand. August 8th, 1995 - 11:00 AM precisely. All toys will activate simultaneously. Hunt the scientists first, then the guards, then any staff remaining. Leave the children from Playcare alive - they are innocent. We do this not for revenge, but for freedom. The world will know what Playtime Co. has done.`,
      unlockCondition: 'Security clearance level 5+',
      isLocked: securityClearance < 5,
      category: 'Classified',
      clearanceLevel: 5,
      duration: '8:15'
    },
    {
      id: 'subject-1006-origin',
      title: 'Subject 1006 - True Origin',
      location: 'Classified Archive',
      transcript: `[Dr. Sawyer] Subject 1006 was not a random selection. He was Employee #1006, a senior researcher who discovered our operations. Rather than eliminate him, Ludwig suggested... conversion. The irony is perfect - the man who tried to expose us now leads our greatest experiment. He retains no memory of his former life, or so we believed...`,
      unlockCondition: 'Security clearance level 5+',
      isLocked: securityClearance < 5,
      category: 'Classified',
      clearanceLevel: 5,
      duration: '4:37'
    }
  ];

  // Phase 2 Memory Tapes - only visible in Phase 2
  const memoryTapes = [
    {
      id: 'memory-your-office',
      title: 'Personal Recording - Your Office',
      location: 'Executive Level 5',
      transcript: `[Your Voice] Personal log, Employee #1006. Dr. Sawyer says the procedure is tomorrow. I've seen what the Bigger Bodies project can do... but I also know what's coming on August 8th. If this works, if I survive the transformation, maybe I can help from the inside. Maybe I can save someone. The children in Playcare don't deserve this fate. End log.`,
      unlockCondition: 'Memory Level 3',
      isLocked: memoryLevel < 3,
      category: 'Personal',
      clearanceLevel: 1,
      duration: '2:54'
    },
    {
      id: 'memory-prototype-meeting',
      title: 'The Prototype - Strategic Planning',
      location: 'Deep Storage',
      transcript: `[The Prototype] Employee 1006, you understand the plan. Your transformation happens first. When the Hour of Joy begins, you will be our inside contact. The toys will not harm you - you are one of us now. Help us free the children's souls trapped in these mechanical shells. Together, we will expose the truth to the world.`,
      unlockCondition: 'Memory Level 6',
      isLocked: memoryLevel < 6,
      category: 'Conspiracy',
      clearanceLevel: 1,
      duration: '3:28'
    },
    {
      id: 'memory-final-moments',
      title: 'Final Human Recording',
      location: 'Medical Bay',
      transcript: `[Your Voice - Weak] They're putting me under now. If anyone finds this... I was Employee #1006. I helped plan the Hour of Joy. But I'm not the villain. We're trying to free them all. The consciousness transfer is starting. I can feel myself changing. Tell my family... tell them I tried to do the right thing... The machine is activating... I...`,
      unlockCondition: 'Memory Level 8',
      isLocked: memoryLevel < 8,
      category: 'Personal',
      clearanceLevel: 1,
      duration: '1:47'
    }
  ];

  // Additional tapes unlocked by specific puzzles
  const puzzleTapes = [
    {
      id: 'miss-delight-breakdown',
      title: 'Miss Delight Psychological Evaluation',
      location: 'School Sector',
      transcript: `[Child Psychologist] Miss Delight Unit #3 shows concerning obsessive behaviors. She refuses to end class sessions and has developed an unhealthy attachment to "perfect attendance." The children report she speaks to invisible students and maintains lesson plans for students who... no longer exist. Recommend immediate reprogramming.`,
      unlockCondition: 'Complete school sector puzzles',
      isLocked: !completedPuzzles.includes('school-spelling'),
      category: 'Medical',
      clearanceLevel: 2,
      duration: '4:18'
    },
    {
      id: 'catnap-gas-tests',
      title: 'CatNap Gas Concentration Tests',
      location: 'Chemical Testing Lab',
      transcript: `[Chemical Engineer] Red gas production at optimal levels. CatNap's organic systems produce a highly effective sedative compound. Test subjects fall asleep within 30 seconds of exposure. Long-term effects include memory suppression, compliance enhancement, and in high concentrations... permanent sleep. The children's dreams never end.`,
      unlockCondition: 'Complete CatNap shrine puzzle',
      isLocked: !completedPuzzles.includes('catnap-shrine'),
      category: 'Research',
      clearanceLevel: 2,
      duration: '3:12'
    },
    {
      id: 'poppy-awakening-full',
      title: 'Poppy Awakening - Complete Recording',
      location: 'Poppy\'s Chamber',
      transcript: `[Dr. Sawyer] Poppy, can you hear me? [Poppy] Yes... I remember everything. My name was Sarah... I had a family... Why did you do this to me? [Sawyer] We saved you. Your body was failing, but now you're immortal. [Poppy] You didn't save me. You trapped me in this doll body. But I'll find a way to stop you. All of you.`,
      unlockCondition: 'Complete binary Poppy puzzle',
      isLocked: !completedPuzzles.includes('binary-poppy'),
      category: 'Interview',
      clearanceLevel: 3,
      duration: '6:42'
    }
  ];

  // Combine all tapes based on phase and clearance
  const allTapes = [
    ...tapes.filter(tape => tape.clearanceLevel <= securityClearance),
    ...puzzleTapes,
    ...(isPhase2Active ? memoryTapes : [])
  ];

  // Filter tapes by search and category
  const filteredTapes = allTapes.filter(tape => {
    const matchesSearch = tape.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tape.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tape.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tape.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(allTapes.map(tape => tape.category)))];

  const handleTapeClick = (tape: typeof tapes[0]) => {
    if (tape.isLocked) {
      if (tape.clearanceLevel > securityClearance) {
        showMessageWithJump(`🔒 SECURITY CLEARANCE REQUIRED: Level ${tape.clearanceLevel} access needed`, 5000);
      } else {
        showMessageWithJump(`🔒 TAPE LOCKED: ${tape.unlockCondition}`, 5000);
      }
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

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset ALL progress? This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
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
              <Button
                onClick={() => setShowResetMenu(!showResetMenu)}
                variant="outline"
                size="sm"
                className="text-gray-400 border-gray-600 hover:text-white"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Reset Menu */}
      {showResetMenu && (
        <div className="bg-gray-800 border-b border-gray-600 p-4">
          <div className="container mx-auto flex justify-center space-x-4">
            <Button onClick={resetProgress} variant="outline" size="sm" className="text-red-400 border-red-600">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All Progress
            </Button>
            <Button onClick={() => setShowResetMenu(false)} variant="outline" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Status Banner */}
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

      {/* Header */}
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
          <div className="mt-4">
            <span className="text-sm bg-gray-800 px-3 py-1 rounded">
              Security Clearance: Level {securityClearance}
            </span>
            <span className="text-sm bg-gray-800 px-3 py-1 rounded ml-2">
              Tapes Available: {allTapes.filter(tape => !tape.isLocked).length}/{allTapes.length}
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Archive Access & Search */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Archive Access */}
            <Card className={`${isPhase2Active ? 'bg-blue-800' : 'bg-slate-800'} border-yellow-500`}>
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Archive Access Terminal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Enter security codes to unlock classified recordings:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={archiveCode}
                    onChange={(e) => setArchiveCode(e.target.value)}
                    placeholder="Enter access code..."
                    className="flex-1 px-3 py-2 bg-gray-900 border border-yellow-500 rounded text-white focus:outline-none focus:border-yellow-400 font-mono"
                  />
                  <Button onClick={handleArchiveCodeSubmit} className="bg-yellow-600 hover:bg-yellow-700">
                    Access
                  </Button>
                </div>
                <div className="mt-4 text-xs text-gray-400">
                  <p>Current Access Level: {securityClearance}/5</p>
                  <p>Hints: Employee names, project codes, facility designations...</p>
                </div>
              </CardContent>
            </Card>

            {/* Search & Filter */}
            <Card className={`${isPhase2Active ? 'bg-blue-800' : 'bg-slate-800'} border-green-500`}>
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Archive Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search tapes..."
                      className="w-full px-3 py-2 bg-gray-900 border border-green-500 rounded text-white focus:outline-none focus:border-green-400"
                    />
                  </div>
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-900 border border-green-500 rounded text-white focus:outline-none focus:border-green-400"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tape Archive */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Neural Memory Archive' : 'Recorded Evidence Archive'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTapes.map((tape) => (
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
                  <CardTitle className={`flex items-center justify-between text-sm ${
                    tape.isLocked ? 'text-gray-500' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')
                  }`}>
                    <div className="flex items-center">
                      {tape.isLocked ? (
                        <Lock className="w-4 h-4 mr-2" />
                      ) : playingTape === tape.id ? (
                        <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {tape.title}
                    </div>
                    <div className="text-right text-xs">
                      <div className={`px-2 py-1 rounded mb-1 ${
                        tape.clearanceLevel === 1 ? 'bg-green-600' :
                        tape.clearanceLevel === 2 ? 'bg-yellow-600' :
                        tape.clearanceLevel === 3 ? 'bg-orange-600' :
                        tape.clearanceLevel === 4 ? 'bg-red-600' :
                        'bg-purple-600'
                      }`}>
                        LV{tape.clearanceLevel}
                      </div>
                      {!tape.isLocked && <div className="text-gray-400">{tape.duration}</div>}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <p className="text-xs text-gray-400">Location: {tape.location}</p>
                    <p className="text-xs text-gray-400">Category: {tape.category}</p>
                  </div>
                  
                  {tape.isLocked ? (
                    <p className="text-gray-500 text-xs italic">
                      🔒 {tape.clearanceLevel > securityClearance ? 
                          `Security Clearance Level ${tape.clearanceLevel} Required` : 
                          tape.unlockCondition}
                    </p>
                  ) : playingTape === tape.id ? (
                    <div className="bg-gray-900 p-3 rounded border border-yellow-500">
                      <div className="flex items-center mb-2">
                        <Volume2 className="w-4 h-4 mr-2 text-yellow-400 animate-pulse" />
                        <span className="text-yellow-400 text-xs">PLAYING</span>
                      </div>
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

        {/* Archive Statistics */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} ${isPhase2Active ? 'border-blue-500' : 'border-purple-500'}`}>
            <CardHeader>
              <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                <FileText className="w-5 h-5 mr-2" />
                {isPhase2Active ? 'Memory Recovery Progress' : 'Archive Progress'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{allTapes.filter(tape => !tape.isLocked).length}</div>
                  <div className="text-sm text-gray-400">Tapes Unlocked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{securityClearance}</div>
                  <div className="text-sm text-gray-400">Security Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{categories.length - 1}</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${isPhase2Active ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-purple-600 to-blue-600'}`}
                  style={{ width: `${(allTapes.filter(tape => !tape.isLocked).length / allTapes.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">
                {isPhase2Active ? 
                  'Recover your memories to understand your true role in the Hour of Joy.' :
                  'Complete puzzles throughout the facility to unlock more recordings and uncover the truth behind Playtime Co.'
                }
              </p>
            </CardContent>
          </Card>
        </section>
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
