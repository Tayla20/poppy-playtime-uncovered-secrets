
import { Link } from "react-router-dom";
import { LogIn, Eye, Brain, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Phase2NavigationProps {
  glitchActive: boolean;
  clickCount: number;
  secretFound: boolean;
  memoryLevel: number;
  onLogoClick: () => void;
}

export const Phase2Navigation = ({ 
  glitchActive, 
  clickCount, 
  secretFound, 
  memoryLevel,
  onLogoClick 
}: Phase2NavigationProps) => {
  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-500 static-noise">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${glitchActive ? 'glitch-text text-blue-400' : 'text-blue-400 subtle-glow'} ${clickCount > 5 ? 'creepy-hover' : ''}`}
            onClick={onLogoClick}
            data-text="SUBJECT #1006"
          >
            {glitchActive ? 'S̴U̸B̷J̶E̵C̴T̸ ̵#̶1̷0̸0̷6̸' : 'SUBJECT #1006'}
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium border-b-2 border-blue-400">Memory Core</Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Identity Files</Link>
            <Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Former Creations</Link>
            <Link to="/factory" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Original Workplace</Link>
            <Link to="/vhs-tapes" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Memory Archive</Link>
            <Link to="/research-lab" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Your Lab</Link>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors subtle-hover">Exit Protocol</Link>
            {memoryLevel >= 3 && (
              <Link to="/prototype-conversations" className="text-yellow-400 hover:text-yellow-300 transition-colors animate-pulse font-bold vintage-border">
                [◈ The Prototype ◈]
              </Link>
            )}
          </div>
          {memoryLevel >= 1 && (
            <div className="flex items-center space-x-2 text-xs text-blue-400">
              <Brain className="w-4 h-4" />
              <span>Memory: {memoryLevel}/9</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
