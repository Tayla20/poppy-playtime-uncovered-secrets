
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Skull, Eye } from "lucide-react";

interface Phase2HeroSectionProps {
  glitchActive: boolean;
  memoryLevel: number;
  currentMemory: string;
  isInsiderRevealed: boolean;
}

export const Phase2HeroSection = ({ 
  glitchActive, 
  memoryLevel,
  currentMemory,
  isInsiderRevealed
}: Phase2HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16 text-center relative bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <h1 className={`text-6xl font-bold mb-6 typing-effect ${glitchActive ? 'text-blue-400 glitch-text' : 'text-blue-400 subtle-glow'}`}>
        {isInsiderRevealed ? 'Welcome Back, Employee #1006' : 'Memory Restoration in Progress...'}
      </h1>
      
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto nostalgic-text">
        {isInsiderRevealed ? 
          'You were one of us. You helped design the Hour of Joy. Two days before the event, you volunteered for the Bigger Bodies project. Your consciousness survived.' :
          'Fragments of your past life are surfacing. You were more than just an employee here. The facility recognizes you, but why?'
        }
      </p>
      
      <div className="text-sm text-gray-500 mb-6 opacity-75">
        Current Status: {isInsiderRevealed ? 'Insider Identity Recovered' : 'Memory Reconstruction Active'}
        <span className="invisible-text ml-4">
          {isInsiderRevealed ? 'The Prototype awaits your return...' : 'Searching neural pathways...'}
        </span>
      </div>

      {currentMemory && (
        <div className="mb-8 bg-black bg-opacity-60 p-4 rounded-lg border border-blue-500 animate-pulse">
          <div className="flex items-center justify-center mb-2">
            <Brain className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-400 text-sm font-bold">MEMORY FRAGMENT RECOVERED</span>
          </div>
          <p className="text-blue-200 italic">{currentMemory}</p>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white card-hover">
          <Link to="/vhs-tapes">
            <Eye className="w-4 h-4 mr-2" />
            Access Memory Archives
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white card-hover">
          <Link to="/research-lab">
            <Brain className="w-4 h-4 mr-2" />
            Neural Reconstruction
          </Link>
        </Button>
        {isInsiderRevealed && (
          <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black card-hover">
            <Link to="/prototype-conversations">
              <Skull className="w-4 h-4 mr-2" />
              Contact The Prototype
            </Link>
          </Button>
        )}
      </div>

      <div className="mt-8 text-center">
        <div className="text-sm text-gray-400 mb-2">
          Memory Restoration Progress: {memoryLevel}/9
        </div>
        <div className="w-64 mx-auto bg-gray-700 rounded-full h-3">
          <div 
            className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-400"
            style={{ width: `${(memoryLevel / 9) * 100}%` }}
          ></div>
        </div>
        {memoryLevel === 9 && (
          <p className="text-blue-400 mt-2 animate-pulse">FULL IDENTITY RESTORATION COMPLETE</p>
        )}
        <div className="text-xs text-gray-500 mt-2">
          Status: {isInsiderRevealed ? 'Insider Protocol Active' : 'Identity Unknown'}
        </div>
      </div>
    </section>
  );
};
