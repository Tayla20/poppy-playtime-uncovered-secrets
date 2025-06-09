
import { Link } from "react-router-dom";
import { LogIn, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  glitchActive: boolean;
  clickCount: number;
  isHourOfJoyActive: boolean;
  secretFound: boolean;
  onLogoClick: () => void;
}

export const Navigation = ({ 
  glitchActive, 
  clickCount, 
  isHourOfJoyActive, 
  secretFound, 
  onLogoClick 
}: NavigationProps) => {
  return (
    <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : 'subtle-glow'} ${clickCount > 5 ? 'creepy-hover' : ''}`}
            onClick={onLogoClick}
            data-text="PLAYTIME CO."
          >
            {glitchActive ? 'P̴L̸A̷Y̶T̵I̴M̸E̵ ̶C̷O̸.' : 'PLAYTIME CO.'}
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">About Us</Link>
            <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
            <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
            <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Game Station</Link>
            <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Playcare</Link>
            <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
            {secretFound && (
              <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                [◈ STAFF ◈]
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
