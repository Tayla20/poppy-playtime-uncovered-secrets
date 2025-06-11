
import { Eye, Map, Clock, Keyboard, Mouse, Navigation, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PuzzleHintsProps {
  puzzlesCompleted: string[];
  visitedPages: string[];
  isHourOfJoyActive: boolean;
}

export const PuzzleHints = ({ puzzlesCompleted, visitedPages, isHourOfJoyActive }: PuzzleHintsProps) => {
  const totalPuzzles = 11;
  const completedCount = puzzlesCompleted.length;
  const progressPercentage = (completedCount / totalPuzzles) * 100;

  const requiredPages = [
    { name: 'home', display: 'Home', visited: visitedPages.includes('home') },
    { name: 'about', display: 'About Us', visited: visitedPages.includes('about') },
    { name: 'products', display: 'Our Toys', visited: visitedPages.includes('products') },
    { name: 'factory', display: 'Factory Tour', visited: visitedPages.includes('factory') },
    { name: 'orphanage', display: 'Children\'s Home', visited: visitedPages.includes('orphanage') },
    { name: 'prison', display: 'Research Facility', visited: visitedPages.includes('prison') },
    { name: 'contact', display: 'Contact', visited: visitedPages.includes('contact') },
    { name: 'game-station', display: 'Game Station', visited: visitedPages.includes('game-station') },
    { name: 'playcare', display: 'Playcare', visited: visitedPages.includes('playcare') },
    { name: 'departments', display: 'Our Team', visited: visitedPages.includes('departments') }
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
      hint: 'Type in Morse code: PROTOTYPE (. = dot, - = dash, space = separator). No scrolling allowed.',
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
      id: 'page-explorer',
      title: 'Facility Explorer',
      hint: 'Visit every area of the facility. Knowledge comes from exploration.',
      icon: <Map className="w-4 h-4" />,
      completed: puzzlesCompleted.includes('page-explorer')
    }
  ];

  if (isHourOfJoyActive) return null;

  return (
    <section className="py-16 bg-slate-900 bg-opacity-50 border-y border-red-700 static-noise">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 subtle-glow nostalgic-text text-green-400">
          🔍 Investigation Progress
        </h2>
        
        {/* Progress Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Mysteries Solved: {completedCount}/{totalPuzzles}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 border border-green-600">
            <div 
              className="bg-gradient-to-r from-green-600 to-yellow-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Page Exploration Tracker */}
        <Card className="bg-slate-800 border-green-600 mb-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              Facility Exploration ({visitedPages.length}/{requiredPages.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {requiredPages.map((page) => (
                <div 
                  key={page.name}
                  className={`p-2 rounded text-center text-xs ${
                    page.visited 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {page.visited ? '✓' : '○'} {page.display}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Puzzle Hints */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hints.map((hint) => (
            <Card 
              key={hint.id}
              className={`transition-all duration-300 ${
                hint.completed 
                  ? 'bg-green-800 border-green-500 opacity-75' 
                  : 'bg-slate-800 border-yellow-500 hover:border-yellow-400'
              }`}
            >
              <CardHeader>
                <CardTitle className={`flex items-center text-sm ${
                  hint.completed ? 'text-green-300' : 'text-yellow-400'
                }`}>
                  {hint.icon}
                  <span className="ml-2">{hint.completed ? '✓' : '🔍'} {hint.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-xs ${
                  hint.completed ? 'text-green-200' : 'text-gray-300'
                }`}>
                  {hint.completed ? 'SOLVED: Mystery uncovered!' : hint.hint}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Message */}
        <div className="mt-8 text-center">
          <p className="text-yellow-400 text-sm">
            💡 Solve all mysteries to unlock the Hour of Joy...
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Each puzzle reveals more about Playtime Co.'s dark secrets
          </p>
        </div>
      </div>
    </section>
  );
};
