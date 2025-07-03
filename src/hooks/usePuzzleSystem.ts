import { useState, useEffect } from "react";

export const usePuzzleSystem = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [colorSequence, setColorSequence] = useState<string[]>([]);
  const [timeClicks, setTimeClicks] = useState<number[]>([]);
  const [warningLevel, setWarningLevel] = useState(0);
  const [sawyerTransformed, setSawyerTransformed] = useState(false);
  const [hourOfJoyActivated, setHourOfJoyActivated] = useState(false);
  const [phase2Activated, setPhase2Activated] = useState(false);
  const [puzzlesCompleted, setPuzzlesCompleted] = useState<string[]>([]);
  const [morseInput, setMorseInput] = useState<string>("");
  const [morseTimeout, setMorseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [visitedPages, setVisitedPages] = useState<string[]>([]);
  const [binaryInput, setBinaryInput] = useState<string>("");
  const [huggySequence, setHuggySequence] = useState<string[]>([]);
  const [catnipClicks, setCatnipClicks] = useState(0);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const requiredColorPattern = ["red", "blue", "red", "yellow", "red"];
  const sawyerPuzzle = ['KeyS', 'KeyA', 'KeyW', 'KeyY', 'KeyE', 'KeyR'];
  const prototypeMorse = ".--. .-. --- - --- - -.-- .--. .";
  const huggyWuggySequence = ['KeyH', 'KeyU', 'KeyG', 'KeyG', 'KeyY'];
  const binaryPoppy = "01010000 01101111 01110000 01110000 01111001"; // "Poppy" in binary
  const elliotSequence = ['KeyE', 'KeyL', 'KeyL', 'KeyI', 'KeyO', 'KeyT'];

  // All required pages including new ones
  const requiredPages = [
    'home', 'about', 'products', 'factory', 'orphanage', 'prison', 
    'contact', 'game-station', 'playcare', 'departments', 'make-a-friend',
    'elliot-ludwig', 'the-doctor', 'prototype-conversations', 'school-sector',
    'vhs-tapes', 'research-lab'
  ];

  // All mandatory puzzles - expanded list with new ones
  const mandatoryPuzzles = [
    'konami', 'sawyer', 'logo-clicks', 'color-sequence', 'morse-prototype', 
    'time-anomaly', 'orphanage-investigation', 'factory-production', 
    'prison-breach', 'staff-directory', 'page-explorer', 'huggy-wuggy',
    'binary-poppy', 'elliot-code', 'catnap-shrine', 'make-a-friend-puzzle',
    'prototype-communication', 'school-nightmare', 'doctor-experiments',
    'school-spelling', 'miss-delight-encounter', 'dna-sequence', 'chemical-formula',
    'temperature-control', 'pressure-chamber', 'microscope-analysis',
    'tape-experiment-1006', 'tape-hour-of-joy-log', 'tape-bigger-bodies-meeting',
    'tape-catnap-worship', 'tape-poppy-awakening', 'tape-huggy-wuggy-creation',
    'tape-school-incident', 'archive-access-prototype', 'archive-access-sawyer',
    'archive-access-ludwig', 'archive-access-bigbody',
    // New puzzles from updated pages
    'founder-devotion', 'timeline-sequence', 'prisoner-sequence', 'prison-lockdown',
    'musical-sequence', 'speed-challenge', 'game-master-sequence', 'game-station-master',
    'prison-file-0', 'prison-file-1', 'prison-file-2', 'prison-file-6'
  ];

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
      setPuzzlesCompleted(completed);
    }
  };

  const trackPageVisit = (pageName: string) => {
    const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visited.includes(pageName)) {
      visited.push(pageName);
      localStorage.setItem('visitedPages', JSON.stringify(visited));
      setVisitedPages(visited);
      
      // Check if all pages visited
      const allPagesVisited = requiredPages.every(page => visited.includes(page));
      if (allPagesVisited && !puzzlesCompleted.includes('page-explorer')) {
        addCompletedPuzzle('page-explorer');
        showMessageWithJump("🗺️ FACILITY EXPLORATION COMPLETE 🗺️ You have discovered all major areas. The facility layout is now clear. Hidden passages await...", 12000);
      }
    }
  };

  const unlockTape = (tapeId: string) => {
    const unlocked = JSON.parse(localStorage.getItem('unlockedTapes') || '[]');
    if (!unlocked.includes(tapeId)) {
      unlocked.push(tapeId);
      localStorage.setItem('unlockedTapes', JSON.stringify(unlocked));
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

  const handleLogoClick = () => {
    const now = Date.now();
    const newTimeClicks = [...timeClicks, now].slice(-5);
    setTimeClicks(newTimeClicks);
    setClickCount(prev => prev + 1);
    
    if (newTimeClicks.length === 5) {
      const timeDiff = newTimeClicks[4] - newTimeClicks[0];
      if (timeDiff < 3000) {
        addCompletedPuzzle('time-anomaly');
        unlockTape('hour-of-joy-log');
        showMessageWithJump("⚠ TEMPORAL SEQUENCE DETECTED ⚠ August 8th approaches. All toys positioned. Final preparations underway.", 8000);
      }
    }
    
    if (clickCount >= 12) {
      setSecretFound(true);
      addCompletedPuzzle('logo-clicks');
      showMessageWithJump("◈ STAFF ACCESS UNLOCKED ◈ Hidden pathways revealed. The facility remembers all who enter...", 10000);
    }
  };

  const handleProductHover = (color: string) => {
    const newSequence = [...colorSequence, color].slice(-5);
    setColorSequence(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(requiredColorPattern)) {
      addCompletedPuzzle('color-sequence');
      unlockTape('bigger-bodies-meeting');
      showMessageWithJump("☾ BIGGER BODIES INITIATIVE CONFIRMED ☽ All subjects ready for integration. The prototype commands from the depths.", 10000);
    }
  };

  const handleCatnipClick = () => {
    setCatnipClicks(prev => prev + 1);
    if (catnipClicks >= 9) {
      addCompletedPuzzle('catnap-shrine');
      unlockTape('catnap-worship');
      showMessageWithJump("😴 CATNAP'S BLESSING RECEIVED 😴 The red smoke embraces you. Sleep is eternal. Dreams become reality.", 10000);
    }
  };

  // Check Phase 2 activation - ALL puzzles must be completed
  useEffect(() => {
    const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    const savedPhase2 = localStorage.getItem('phase2Activated') === 'true';
    
    setPuzzlesCompleted(completedPuzzles);
    setVisitedPages(visited);
    setPhase2Activated(savedPhase2);
    
    // ALL mandatory puzzles must be completed for Phase 2
    const allComplete = mandatoryPuzzles.every(puzzle => completedPuzzles.includes(puzzle));
    
    if (allComplete && !savedPhase2) {
      setPhase2Activated(true);
      localStorage.setItem('phase2Activated', 'true');
      showMessageWithJump("🚨 MEMORY RESTORATION PROTOCOL INITIATED 🚨 Subject #1006 consciousness integration complete. Welcome back... Employee.", 20000);
      
      // Trigger first memory fragment
      setTimeout(() => {
        showMessageWithJump("💭 Something feels... familiar about this place... 💭", 10000);
      }, 5000);
    }
    
    // Hour of Joy for Phase 1 completion
    if (allComplete && !hourOfJoyActivated && !savedPhase2) {
      setHourOfJoyActivated(true);
      localStorage.setItem('hourOfJoyActivated', 'true');
    }
  }, [puzzlesCompleted]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.03) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
      
      if (Math.random() < 0.001) {
        setWarningLevel(prev => Math.min(prev + 1, 5));
      }
    }, 12000);

    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);
      
      // Konami Code
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        addCompletedPuzzle('konami');
        showMessageWithJump("◈ SYSTEM ACCESS GRANTED ◈ Employee credentials discovered. The prototype network awaits those who know the codes...", 15000);
      }

      // Sawyer puzzle
      const sawyerSeq = [...konamiSequence, event.code].slice(-6);
      if (JSON.stringify(sawyerSeq) === JSON.stringify(sawyerPuzzle)) {
        setSawyerTransformed(true);
        addCompletedPuzzle('sawyer');
        unlockTape('experiment-1006');
        showMessageWithJump("⚠ DR. SAWYER TRANSFORMATION COMPLETE ⚠ Security protocols now under new management. The Doctor watches all.", 12000);
      }

      // Huggy Wuggy puzzle
      const huggySeq = [...huggySequence, event.code].slice(-5);
      setHuggySequence(huggySeq);
      if (JSON.stringify(huggySeq) === JSON.stringify(huggyWuggySequence)) {
        addCompletedPuzzle('huggy-wuggy');
        unlockTape('huggy-wuggy-creation');
        showMessageWithJump("🫂 HUGGY WUGGY AWAKENED 🫂 The blue beast stirs. Endless hugs await in the factory shadows...", 10000);
      }

      // Elliot Ludwig puzzle
      const elliotSeq = [...konamiSequence, event.code].slice(-6);
      if (JSON.stringify(elliotSeq) === JSON.stringify(elliotSequence)) {
        addCompletedPuzzle('elliot-code');
        unlockTape('bigger-bodies-meeting');
        showMessageWithJump("👨‍💼 ELLIOT LUDWIG MEMORIAL ACCESSED 👨‍💼 The founder's legacy lives on. Innovation through any means necessary.", 12000);
      }

      // Morse code input
      if (event.key === '.' || event.key === '-' || event.key === ' ') {
        if (event.key === ' ') {
          event.preventDefault();
        }
        
        const newMorse = morseInput + event.key;
        setMorseInput(newMorse);
        
        if (morseTimeout) clearTimeout(morseTimeout);
        
        const timeout = setTimeout(() => {
          if (newMorse.trim() === prototypeMorse) {
            addCompletedPuzzle('morse-prototype');
            showMessageWithJump("--- PROTOTYPE SURVEILLANCE ACTIVE --- Deep facility monitoring confirmed. Experiment 1006 grows stronger each day...", 12000);
          }
          setMorseInput("");
        }, 3000);
        setMorseTimeout(timeout);
      }

      // Binary input for Poppy
      if (event.key === '0' || event.key === '1' || event.key === ' ') {
        const newBinary = binaryInput + event.key;
        setBinaryInput(newBinary);
        
        if (newBinary.trim() === binaryPoppy) {
          addCompletedPuzzle('binary-poppy');
          unlockTape('poppy-awakening');
          showMessageWithJump("🎀 POPPY'S DIGITAL SIGNATURE CONFIRMED 🎀 The doll speaks in ones and zeros. Her consciousness transcends flesh.", 12000);
        }
        
        if (newBinary.length > 50) {
          setBinaryInput("");
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      if (morseTimeout) clearTimeout(morseTimeout);
    };
  }, [konamiSequence, morseInput, morseTimeout, binaryInput, huggySequence, catnipClicks]);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true' || hourOfJoyActivated;
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true' || phase2Activated;

  return {
    glitchActive,
    secretFound,
    clickCount,
    hiddenMessage,
    warningLevel,
    sawyerTransformed,
    puzzlesCompleted,
    morseInput,
    binaryInput,
    isHourOfJoyActive,
    isPhase2Active,
    visitedPages,
    mandatoryPuzzles,
    handleLogoClick,
    handleProductHover,
    handleCatnipClick,
    showMessageWithJump,
    trackPageVisit,
    addCompletedPuzzle,
    unlockTape
  };
};
