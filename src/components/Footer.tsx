
import { Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 1995 Playtime Co. All rights reserved.</p>
        <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
        <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
          <span className="hover:text-green-400 transition-colors mystery-reveal" title="The toys are listening">System Status</span> | 
          <span className="hover:text-green-400 transition-colors invisible-text"> The Prototype Knows</span> | 
          <span className="hover:text-green-400 transition-colors backwards-text"> gnimoc si emoS</span>
        </div>
        <div className="mt-2 text-xs opacity-10 hidden-morse">
          <Star className="w-3 h-3 inline mr-1" />
          <span className="invisible-text">We are always watching. The children will understand soon.</span>
          <Star className="w-3 h-3 inline ml-1" />
        </div>
      </div>
    </footer>
  );
};
