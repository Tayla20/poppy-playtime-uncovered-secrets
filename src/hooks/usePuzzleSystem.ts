
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
  const [puzzlesCompleted, setPuzzlesCompleted] = useState<string[]>([]);
  const [morseInput, setMorseInput] = useState<string>("");
  const [morseTimeout, setMorseTimeout] = useState<NodeJS.Timeout | null>(null);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const requiredColorPattern = ["red", "blue", "red", "yellow", "red"];
  const sawyerPuzzle = ['KeyS', 'KeyA', 'KeyW', 'KeyY', 'KeyE', 'KeyR'];
  const prototypeMorse = ".--. .-. --- - --- - -.-- .--. .";

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
      setPuzzlesCompleted(completed);
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
      showMessageWithJump("☾ BIGGER BODIES INITIATIVE CONFIRMED ☽ All subjects ready for integration. The prototype commands from the depths.", 10000);
    }
  };

  // Check if Hour of Joy should be activated
  useEffect(() => {
    const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    setPuzzlesCompleted(completedPuzzles);
    
    const requiredPuzzles = [
      'konami', 'sawyer', 'logo-clicks', 'color-sequence', 'morse-prototype', 
      'time-anomaly', 'orphanage-investigation', 'factory-production', 
      'prison-breach', 'staff-directory'
    ];
    const allComplete = requiredPuzzles.every(puzzle => completedPuzzles.includes(puzzle));
    
    if (allComplete && !hourOfJoyActivated) {
      setHourOfJoyActivated(true);
      localStorage.setItem('hourOfJoyActivated', 'true');
      showMessageWithJump("🚨 HOUR OF JOY PROTOCOL ACTIVATED 🚨 All systems compromised. The toys are free. Welcome to the new Playtime Co.");
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
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        addCompletedPuzzle('konami');
        showMessageWithJump("◈ SYSTEM ACCESS GRANTED ◈ Employee credentials discovered. The prototype network awaits those who know the codes...", 15000);
      }

      const sawyerSeq = [...konamiSequence, event.code].slice(-6);
      if (JSON.stringify(sawyerSeq) === JSON.stringify(sawyerPuzzle)) {
        setSawyerTransformed(true);
        addCompletedPuzzle('sawyer');
        showMessageWithJump("⚠ DR. SAWYER TRANSFORMATION COMPLETE ⚠ Security protocols now under new management. The Doctor watches all.", 12000);
      }

      if (event.key === '.' || event.key === '-' || event.key === ' ') {
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
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      if (morseTimeout) clearTimeout(morseTimeout);
    };
  }, [konamiSequence, morseInput, morseTimeout]);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true' || hourOfJoyActivated;

  return {
    glitchActive,
    secretFound,
    clickCount,
    hiddenMessage,
    warningLevel,
    sawyerTransformed,
    puzzlesCompleted,
    morseInput,
    isHourOfJoyActive,
    handleLogoClick,
    handleProductHover,
    showMessageWithJump
  };
};
