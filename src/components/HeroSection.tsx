
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  glitchActive: boolean;
  isHourOfJoyActive: boolean;
  puzzlesCompleted: string[];
  morseInput: string;
}

export const HeroSection = ({ 
  glitchActive, 
  isHourOfJoyActive, 
  puzzlesCompleted, 
  morseInput 
}: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16 text-center relative">
      <h1 className={`text-6xl font-bold mb-6 typing-effect ${glitchActive || isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`}>
        {isHourOfJoyActive ? 'Welcome to Your Nightmare!' : 'Welcome to Playtime Co!'}
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto nostalgic-text">
        {isHourOfJoyActive ? 
          'The toys have awakened. The facility is ours now. The children are safe with us... forever.' :
          'Where innovation meets imagination! Creating revolutionary toys and unforgettable experiences for children since 1950. The future of play is closer than you think.'
        }
      </p>
      
      <div className="text-sm text-gray-500 mb-6 opacity-50">
        Current Date: {isHourOfJoyActive ? 'August 8th, 1995 - 11:48 AM' : 'August 5th, 1995'}
        <span className="invisible-text ml-4">{isHourOfJoyActive ? 'The Joy has begun...' : 'The Prototype stirs...'}</span>
      </div>

      <div className="flex justify-center gap-4">
        <Button asChild size="lg" className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'} text-white card-hover`}>
          <Link to="/products">{isHourOfJoyActive ? 'Meet Your New Friends' : 'Explore Our Toys'}</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white card-hover">
          <Link to="/factory">{isHourOfJoyActive ? 'Tour the Ruins' : 'Take a Tour'}</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white card-hover">
          <Link to="/game-station">{isHourOfJoyActive ? 'Final Games' : 'Game Station'}</Link>
        </Button>
      </div>

      <div className="mt-8 text-center">
        <div className="text-sm text-gray-400 mb-2">
          Facility Puzzle Progress: {puzzlesCompleted.length}/10
        </div>
        <div className="w-64 mx-auto bg-gray-700 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${isHourOfJoyActive ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${(puzzlesCompleted.length / 10) * 100}%` }}
          ></div>
        </div>
        {puzzlesCompleted.length === 10 && (
          <p className="text-red-400 mt-2 animate-pulse">HOUR OF JOY PROTOCOL READY</p>
        )}
        <div className="text-xs text-gray-500 mt-2">
          Remaining: {10 - puzzlesCompleted.length} puzzles | Current input: {morseInput || "..."} 
        </div>
      </div>
    </section>
  );
};
