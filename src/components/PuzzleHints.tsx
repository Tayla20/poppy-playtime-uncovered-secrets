import { Eye, Map, Clock, Keyboard, Mouse, Navigation, Zap, Binary, Heart, Skull, School, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PuzzleHintsProps {
  puzzlesCompleted: string[];
  visitedPages: string[];
  isHourOfJoyActive: boolean;
  mandatoryPuzzles?: string[];
}

export const PuzzleHints = ({ puzzlesCompleted, visitedPages, isHourOfJoyActive, mandatoryPuzzles = [] }: PuzzleHintsProps) => {
  const totalPuzzles = mandatoryPuzzles.length || 29;
  const completedCount = puzzlesCompleted.length;
  const progressPercentage = (completedCount / totalPuzzles) * 100;

  const requiredPages = [
    { name: 'home', display: 'Home', visited: visitedPages.includes('home') },
    { name: 'about', display: 'About Us', visited: visitedPages.includes('about') },
    { name: 'products', display: 'Our Toys', visited: visitedPages.includes('products') },
    { name: 'factory', display: 'Factory Tour', visited: visitedPages.includes('factory') },
    { name: 'orphanage', display: 'Playcare', visited: visitedPages.includes('orphanage') },
    { name: 'prison', display: 'Research Facility', visited: visitedPages.includes('prison') },
    { name: 'contact', display: 'Contact', visited: visitedPages.includes('contact') },
    { name: 'game-station', display: 'Game Station', visited: visitedPages.includes('game-station') },
    { name: 'departments', display: 'Our Team', visited: visitedPages.includes('departments') },
    { name: 'make-a-friend', display: 'Make-A-Friend', visited: visitedPages.includes('make-a-friend') },
    { name: 'elliot-ludwig', display: 'Elliot Ludwig', visited: visitedPages.includes('elliot-ludwig') },
    { name: 'the-doctor', display: 'The Doctor', visited: visitedPages.includes('the-doctor') },
    { name: 'prototype-conversations', display: 'Prototype', visited: visitedPages.includes('prototype-conversations') },
    { name: 'school-sector', display: 'School Sector', visited: visitedPages.includes('school-sector') },
    { name: 'vhs-tapes', display: 'VHS Archives', visited: visitedPages.includes('vhs-tapes') },
    { name: 'research-lab', display: 'Research Lab', visited: visitedPages.includes('research-lab') }
  ];

  const hints = [
    {
      id: 'konami',
      title: 'The Classic Code',
      hint: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A - Some codes never change...',
      icon: <Keyboard className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('konami')
    },
    {
      id: 'logo-clicks',
      title: 'Company Loyalty',
      hint: 'Click the Playtime Co. logo repeatedly. How many times shows true dedication?',
      icon: <Mouse className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('logo-clicks')
    },
    {
      id: 'morse-prototype',
      title: 'Prototype Communication',
      hint: 'Type in Morse code: PROTOTYPE (. = dot, - = dash, space = separator)',
      icon: <Zap className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('morse-prototype')
    },
    {
      id: 'time-anomaly',
      title: 'Temporal Sequence',
      hint: 'Click the logo 5 times rapidly (within 3 seconds). Time is of the essence.',
      icon: <Clock className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('time-anomaly')
    },
    {
      id: 'color-sequence',
      title: 'Product Pattern',
      hint: 'Hover over toy products in this order: Red, Blue, Red, Yellow, Red',
      icon: <Eye className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('color-sequence')
    },
    {
      id: 'sawyer',
      title: 'The Doctor\'s Name',
      hint: 'Type S-A-W-Y-E-R on your keyboard. Some names hold power.',
      icon: <Keyboard className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('sawyer')
    },
    {
      id: 'huggy-wuggy',
      title: 'Blue Beast Awakening',
      hint: 'Type H-U-G-G-Y to awaken the mascot. Free hugs await.',
      icon: <Heart className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('huggy-wuggy')
    },
    {
      id: 'binary-poppy',
      title: 'Digital Doll',
      hint: 'Type "Poppy" in binary: 01010000 01101111 01110000 01110000 01111001',
      icon: <Binary className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('binary-poppy')
    },
    {
      id: 'elliot-code',
      title: 'Founder\'s Legacy',
      hint: 'Type E-L-L-I-O-T to honor the company founder.',
      icon: <Users className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('elliot-code')
    },
    {
      id: 'catnap-shrine',
      title: 'Purple Cat\'s Blessing',
      hint: 'Click CatNap 10 times on any page. The shrine demands devotion.',
      icon: <Skull className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('catnap-shrine')
    },
    {
      id: 'page-explorer',
      title: 'Facility Explorer (MANDATORY)',
      hint: 'Visit ALL areas of the facility. Knowledge comes from exploration.',
      icon: <Map className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('page-explorer')
    },
    {
      id: 'make-a-friend-puzzle',
      title: 'Friendship Factory',
      hint: 'Complete the Make-A-Friend machine sequence on its dedicated page.',
      icon: <Heart className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('make-a-friend-puzzle')
    },
    {
      id: 'school-nightmare',
      title: 'Miss Delight\'s Lesson',
      hint: 'Solve the educational puzzle in the School Sector.',
      icon: <School className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('school-nightmare')
    },
    {
      id: 'dna-sequence',
      title: 'Genetic Integration',
      hint: 'Enter the DNA sequence pattern: ATCGATCGATCG in the Research Lab',
      icon: <Binary className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('dna-sequence')
    },
    {
      id: 'chemical-formula',
      title: 'Chemical Synthesis',
      hint: 'Click all 8 chemical vials in the Research Lab to create the consciousness serum',
      icon: <Zap className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('chemical-formula')
    },
    {
      id: 'tape-collection',
      title: 'VHS Archive Discovery',
      hint: 'Visit the VHS Tapes page and unlock recordings by completing other puzzles',
      icon: <Eye className="w-4 h-4" />,
      completed: puzzlesCompleted.some(p => p.startsWith('tape-'))
    },
    {
      id: 'school-spelling',
      title: 'Miss Delight\'s Spelling Lesson',
      hint: 'Complete the alphabet spelling puzzle in the School Sector',
      icon: <School className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('school-spelling')
    }
  ];

  if (isHourOfJoyActive) return null;

  return (
    <section className="py-16 bg-slate-900 bg-opacity-50 border-y border-red-700 static-noise">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 subtle-glow nostalgic-text text-green-400">
          🔍 Mandatory Investigation Progress
        </h2>
        
        <div className="text-center mb-6">
          <p className="text-red-400 font-bold text-lg">
            ⚠️ ALL PUZZLES MUST BE COMPLETED ⚠️
          </p>
          <p className="text-yellow-400 text-sm mt-2">
            The Hour of Joy requires every mystery to be solved. No exceptions.
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Mysteries Solved: {completedCount}/{totalPuzzles}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 border-2 border-red-600">
            <div 
              className={`h-4 rounded-full transition-all duration-500 ${
                progressPercentage === 100 
                  ? 'bg-gradient-to-r from-red-600 to-red-400 animate-pulse' 
                  : 'bg-gradient-to-r from-green-600 to-yellow-500'
              }`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          {progressPercentage === 100 && (
            <p className="text-red-400 text-center mt-2 font-bold animate-pulse">
              🚨 ALL PUZZLES COMPLETE - HOUR OF JOY IMMINENT 🚨
            </p>
          )}
        </div>

        {/* Page Exploration Tracker */}
        <Card className="bg-slate-800 border-green-600 mb-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              Facility Exploration ({visitedPages.length}/{requiredPages.length}) - MANDATORY
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {requiredPages.map((page) => (
                <div 
                  key={page.name}
                  className={`p-2 rounded text-center text-xs border ${
                    page.visited 
                      ? 'bg-green-600 text-white border-green-400' 
                      : 'bg-gray-700 text-gray-400 border-red-600'
                  }`}
                >
                  {page.visited ? '✓' : '✗'} {page.display}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mandatory Puzzle Hints */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hints.map((hint) => (
            <Card 
              key={hint.id}
              className={`transition-all duration-300 border-2 ${
                hint.completed 
                  ? 'bg-green-800 border-green-500 opacity-90' 
                  : 'bg-red-900 border-red-500 hover:border-red-400 animate-pulse'
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center text-sm ${
                  hint.completed ? 'text-green-300' : 'text-red-400'
                }`}>
                  {hint.icon}
                  <span className="ml-2">{hint.completed ? '✓' : '⚠️'} {hint.title}</span>
                  {!hint.completed && <span className="ml-auto text-xs">REQUIRED</span>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-xs ${
                  hint.completed ? 'text-green-200' : 'text-red-200'
                }`}>
                  {hint.completed ? 'SOLVED: Mystery uncovered!' : hint.hint}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Critical Warning */}
        <div className="mt-8 text-center bg-red-900 bg-opacity-50 border-2 border-red-500 rounded-lg p-4">
          <p className="text-red-400 text-lg font-bold">
            🚨 CRITICAL: ALL PUZZLES ARE MANDATORY 🚨
          </p>
          <p className="text-red-300 text-sm mt-2">
            The Hour of Joy cannot begin until every mystery is solved. The toys are waiting.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Missing puzzles will prevent the final sequence. Complete everything to unlock the truth.
          </p>
        </div>
      </div>
    </section>
  );
};
