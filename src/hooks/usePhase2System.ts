
import { useState, useEffect } from "react";

export const usePhase2System = () => {
  const [memoryFragments, setMemoryFragments] = useState<string[]>([]);
  const [currentMemory, setCurrentMemory] = useState("");
  const [memoryLevel, setMemoryLevel] = useState(0);
  const [isInsiderRevealed, setIsInsiderRevealed] = useState(false);
  const [glitchedMemories, setGlitchedMemories] = useState<string[]>([]);
  
  // Memory fragments that unlock progressively
  const memorySequence = [
    "You remember walking through familiar hallways...",
    "A keycard in your pocket... Level 5 clearance...",
    "Meeting rooms... whispered conversations about 'volunteers'...",
    "Dr. Sawyer's voice: 'The procedure is tomorrow. You won't remember.'",
    "Lying on a cold table... the needle... everything fading...",
    "You were Employee #1006... the first successful conversion...",
    "You helped plan the Hour of Joy... from the inside...",
    "Two days before the chaos... you became something else...",
    "The Prototype speaks to you... 'Welcome back, old friend.'"
  ];

  const insiderClues = [
    "Your hands move to keycards you shouldn't know exist",
    "Security cameras don't seem to notice you",
    "The toys... they recognize you somehow",
    "Passwords come to mind before you think them",
    "The facility layout feels like muscle memory",
    "Employee records show your face... but a different name",
    "Your reflection sometimes glitches in security monitors",
    "The Prototype's messages feel... familiar"
  ];

  const phase2Puzzles = [
    'memory-trigger-1', 'memory-trigger-2', 'memory-trigger-3',
    'identity-crisis', 'insider-revelation', 'keycard-memory',
    'procedure-flashback', 'prototype-recognition', 'employee-1006'
  ];

  const addMemoryFragment = (fragmentId: string) => {
    const memories = JSON.parse(localStorage.getItem('memoryFragments') || '[]');
    if (!memories.includes(fragmentId)) {
      memories.push(fragmentId);
      localStorage.setItem('memoryFragments', JSON.stringify(memories));
      setMemoryFragments(memories);
      
      // Trigger memory level progression
      const newLevel = Math.floor(memories.length / 2);
      if (newLevel > memoryLevel) {
        setMemoryLevel(newLevel);
        triggerMemoryFlashback(newLevel);
      }
    }
  };

  const triggerMemoryFlashback = (level: number) => {
    if (level < memorySequence.length) {
      setCurrentMemory(memorySequence[level]);
      setTimeout(() => setCurrentMemory(""), 8000);
    }
    
    // Reveal insider identity at memory level 6
    if (level >= 6 && !isInsiderRevealed) {
      setIsInsiderRevealed(true);
      localStorage.setItem('insiderRevealed', 'true');
    }
  };

  const addGlitchedMemory = (memory: string) => {
    setGlitchedMemories(prev => [...prev, memory]);
    setTimeout(() => {
      setGlitchedMemories(prev => prev.filter(m => m !== memory));
    }, 3000);
  };

  const getSubtleInsiderHint = () => {
    const hints = [
      "You know this place better than you should...",
      "Your footsteps echo with familiarity...",
      "Something about these halls feels... wrong... right?",
      "The security systems seem to... welcome you?",
      "Why do you know where everything is?",
      "The toys watch you differently...",
      "Your reflection looks... distorted today..."
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  };

  useEffect(() => {
    // Load phase 2 state
    const savedMemories = JSON.parse(localStorage.getItem('memoryFragments') || '[]');
    const savedRevealed = localStorage.getItem('insiderRevealed') === 'true';
    
    setMemoryFragments(savedMemories);
    setMemoryLevel(Math.floor(savedMemories.length / 2));
    setIsInsiderRevealed(savedRevealed);
  }, []);

  return {
    memoryFragments,
    currentMemory,
    memoryLevel,
    isInsiderRevealed,
    glitchedMemories,
    phase2Puzzles,
    insiderClues,
    addMemoryFragment,
    triggerMemoryFlashback,
    addGlitchedMemory,
    getSubtileInsiderHint: getSubtleInsiderHint
  };
};
