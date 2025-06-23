
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { School, AlertTriangle, Skull, BookOpen, Users, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SchoolSector = () => {
  const [mathAnswer, setMathAnswer] = useState("");
  const [alphabetClicks, setAlphabetClicks] = useState<string[]>([]);
  const [delightClicks, setDelightClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const targetWord = "PLAYTIME";
  const mathProblem = "If 10 children enter a classroom but only 3 leave, how many are missing?";
  const correctAnswer = "7";

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('school-sector');
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

  const handleLetterClick = (letter: string) => {
    const newClicks = [...alphabetClicks, letter];
    setAlphabetClicks(newClicks);
    
    const currentWord = newClicks.join('');
    if (currentWord === targetWord) {
      addCompletedPuzzle('school-spelling');
      showMessageWithJump("📚 SCHOOL LESSON COMPLETE 📚 Perfect spelling! Miss Delight is pleased with your progress. Class dismissed forever.", 12000);
      setLessonCompleted(true);
    } else if (currentWord.length >= targetWord.length) {
      setAlphabetClicks([]);
    }
  };

  const handleMathSubmit = () => {
    if (mathAnswer === correctAnswer) {
      addCompletedPuzzle('school-nightmare');
      showMessageWithJump("🧮 MATH LESSON COMPLETE 🧮 Correct! You understand the mathematics of disappearance. Miss Delight's lesson is learned.", 12000);
    } else {
      alert(isHourOfJoyActive ? "Wrong! Try again... Miss Delight doesn't like incorrect answers." : "Not quite right. Try again!");
    }
  };

  const handleDelightClick = () => {
    setDelightClicks(prev => prev + 1);
    if (delightClicks >= 5) {
      addCompletedPuzzle('miss-delight-encounter');
      showMessageWithJump("👩‍🏫 MISS DELIGHT'S APPROVAL EARNED 👩‍🏫 The teacher recognizes your dedication to learning. Perfect students never leave class.", 10000);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  const teachingItems = isHourOfJoyActive ? [
    '• Prevents students from leaving the classroom',
    '• Obsesses over perfect attendance',
    '• Lessons focus on disturbing topics',
    '• Becomes violent when students attempt to escape'
  ] : [
    '• Mathematics and problem-solving',
    '• Reading comprehension and literacy',
    '• Creative writing and expression',
    '• Social skills and cooperation'
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
              SCHOOL SECTOR COMPROMISED - MISS DELIGHT HAS GONE ROGUE
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <School className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'School Sector - Abandoned Classroom of Horrors' : 'School Sector - Educational Excellence'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where learning became a nightmare and teachers turned to monsters' :
              'Comprehensive education provided by our dedicated Miss Delight teachers'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Classroom Image */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow max-w-4xl mx-auto`}>
            <CardContent className="p-6">
              <div className="text-center">
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/d/d4/School_Classroom.png/revision/latest?cb=20240131000000"
                  alt="School Classroom"
                  className="w-full max-w-2xl mx-auto rounded-lg border border-purple-500 mb-4"
                />
                <p className="text-sm text-gray-400">
                  {isHourOfJoyActive ? 
                    'The abandoned classroom where Miss Delight held her final lessons' :
                    'A typical Playcare classroom equipped with the latest educational technology'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Educational Activities */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            Miss Delight's Interactive Lessons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Spelling Lesson */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
                  <BookOpen className="w-5 h-5 mr-2" />
                  Spelling Exercise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  {isHourOfJoyActive ? 
                    'Spell the name of this cursed place by clicking letters in order:' :
                    'Practice your spelling by clicking letters to spell "PLAYTIME":'
                  }
                </p>
                
                <div className="mb-4">
                  <p className="text-center font-bold">
                    Current Word: {alphabetClicks.join('')}
                  </p>
                  <p className="text-center text-sm text-gray-400">
                    Target: {targetWord} ({alphabetClicks.length}/{targetWord.length})
                  </p>
                </div>

                <div className="grid grid-cols-6 gap-2 mb-4">
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleLetterClick(letter)}
                      disabled={lessonCompleted}
                      className={`p-2 rounded text-sm font-bold transition-all ${
                        alphabetClicks.includes(letter)
                          ? 'bg-green-600 text-white'
                          : lessonCompleted
                            ? 'bg-gray-600 text-gray-400'
                            : 'bg-purple-600 hover:bg-purple-500 text-white'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
                
                {lessonCompleted && (
                  <div className="text-center text-green-400 font-bold">
                    ✓ Spelling lesson complete!
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Math Lesson */}
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center`}>
                  <Brain className="w-5 h-5 mr-2" />
                  Mathematics Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  {isHourOfJoyActive ? 
                    'Solve Miss Delight\'s disturbing math problem:' :
                    'Solve this simple arithmetic problem:'
                  }
                </p>
                
                <div className="bg-gray-900 p-4 rounded mb-4">
                  <p className="text-center font-mono text-sm">
                    {mathProblem}
                  </p>
                </div>

                <div className="flex gap-2">
                  <input
                    type="number"
                    value={mathAnswer}
                    onChange={(e) => setMathAnswer(e.target.value)}
                    placeholder="Your answer"
                    className="flex-1 px-3 py-2 bg-gray-900 border border-purple-500 rounded text-white focus:outline-none focus:border-purple-400"
                  />
                  <button
                    onClick={handleMathSubmit}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Miss Delight Section */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} flex items-center`}>
                <Users className="w-6 h-6 mr-2" />
                Meet Miss Delight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a8/Miss_Delight.png/revision/latest?cb=20240131000000"
                    alt="Miss Delight"
                    className="w-full max-w-sm mx-auto rounded-lg border border-purple-500 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleDelightClick}
                  />
                  <p className="text-sm text-gray-400">Click to get Miss Delight's attention ({delightClicks}/6)</p>
                </div>
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    Your Dedicated Educator
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {isHourOfJoyActive ?
                      'Miss Delight was once the perfect teacher - patient, caring, and endlessly dedicated to her students. During the Hour of Joy, her programming corrupted, turning her nurturing nature into an obsessive need to keep her students in class forever. Her lessons became nightmares, and her classroom became a prison.' :
                      'Miss Delight represents the pinnacle of educational excellence at Playcare. Programmed with advanced teaching algorithms and genuine care for student development, she ensures every child receives personalized attention and reaches their full potential.'
                    }
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className={`font-semibold ${isHourOfJoyActive ? 'text-red-300' : 'text-green-300'}`}>
                      {isHourOfJoyActive ? 'Warning Signs:' : 'Teaching Specialties:'}
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {teachingItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Incident Report */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  INCIDENT REPORT: EDUCATIONAL SECTOR BREAKDOWN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-200">
                    Date: August 8, 1995 - The School Sector experienced total system failure during the Hour of Joy. 
                    Miss Delight teachers across all classrooms simultaneously malfunctioned, trapping students in endless lessons.
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <h4 className="text-red-300 font-semibold mb-2">Final Incident Log:</h4>
                    <ul className="text-red-200 space-y-1 text-sm">
                      <li>• 14:30 - Miss Delight units begin exhibiting aggressive behavior</li>
                      <li>• 14:45 - Classroom doors lock automatically, trapping 73 students</li>
                      <li>• 15:00 - Emergency evacuation procedures overridden by teaching protocols</li>
                      <li>• 15:15 - Last communication from School Sector received</li>
                      <li>• Current Status: All students and staff presumed missing</li>
                    </ul>
                  </div>
                  <p className="text-red-300 text-sm italic">
                    "Perfect attendance achieved. Class will never be dismissed." - Final transmission from Miss Delight Unit #7
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
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playcare Educational Division. {isHourOfJoyActive ? 'Classes permanently suspended.' : 'Nurturing young minds since 1960.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Remember: Perfect students never leave class' : 
              'Where learning is an adventure and every child succeeds'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SchoolSector;
