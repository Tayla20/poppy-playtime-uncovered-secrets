
import { Link } from "react-router-dom";
import { Gamepad2, Skull } from "lucide-react";

interface GameHeaderProps {
  isHourOfJoyActive: boolean;
}

export const GameHeader = ({ isHourOfJoyActive }: GameHeaderProps) => {
  return (
    <>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors">Playcare</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-pink-900 to-purple-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Gamepad2 className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Final Game Station' : 'Game Station'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-pink-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 'Where games become eternal nightmares!' : 'Where fun never ends and games come alive!'}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            {isHourOfJoyActive ? 'Governed by autonomous toy entities' : 'Hosted by Mommy Long Legs and friends'}
          </p>
        </div>
      </header>
    </>
  );
};
