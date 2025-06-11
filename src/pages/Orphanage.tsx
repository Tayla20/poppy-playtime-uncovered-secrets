
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, AlertTriangle, Skull } from "lucide-react";
import { OrphanageMap } from "@/components/OrphanageMap";
import { FacilityOverview } from "@/components/FacilityOverview";
import { FacilityAreas } from "@/components/FacilityAreas";
import { ChildrenProfiles } from "@/components/ChildrenProfiles";
import { HourOfJoySection } from "@/components/HourOfJoySection";

const Orphanage = () => {
  const [investigationClicks, setInvestigationClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [playcareSecrets, setPlaycareSecrets] = useState(0);

  // Track page visit
  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('orphanage');
  }, []);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

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

  const handleSecretClick = () => {
    setInvestigationClicks(prev => prev + 1);
    if (investigationClicks >= 2) {
      addCompletedPuzzle('orphanage-investigation');
      showMessageWithJump("👶 PLAYCARE INVESTIGATION COMPLETE 👶 Missing children files accessed. The Bigger Bodies Initiative consumed them all...", 10000);
    }
  };

  const handlePlaycareSecretDiscovery = () => {
    setPlaycareSecrets(prev => prev + 1);
    if (playcareSecrets >= 4) {
      addCompletedPuzzle('playcare-secrets');
      showMessageWithJump("🔍 PLAYCARE SECRETS UNLOCKED 🔍 You have discovered the truth about the underground facility. The children never left...", 12000);
    }
  };

  const handleLocationClick = (location: string) => {
    console.log(`Investigating ${location}`);
    handlePlaycareSecretDiscovery();
  };

  const completedPuzzles = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
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

      {/* Alert Banner for Hour of Joy */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              PLAYCARE STATUS: ABANDONED - ALL RESIDENTS MISSING SINCE THE HOUR OF JOY
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Heart className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Playcare Memorial - The Lost Sanctuary' : 'Playcare - Children\'s Paradise'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'The underground haven that became a tomb for the innocent' :
              'A revolutionary underground childcare facility - Where dreams come to life'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Facility Overview with Playcare Images */}
        <section className="mb-16">
          <FacilityOverview 
            isHourOfJoyActive={isHourOfJoyActive}
            onPlaycareSecretDiscovery={handlePlaycareSecretDiscovery}
          />
        </section>

        {/* Enhanced Facility Areas with Wiki Images */}
        <FacilityAreas 
          isHourOfJoyActive={isHourOfJoyActive}
          onPlaycareSecretDiscovery={handlePlaycareSecretDiscovery}
        />

        {/* Enhanced Missing Children with Click Puzzle */}
        <ChildrenProfiles 
          isHourOfJoyActive={isHourOfJoyActive}
          investigationClicks={investigationClicks}
          onSecretClick={handleSecretClick}
        />

        {/* The Hour of Joy Information */}
        <HourOfJoySection isHourOfJoyActive={isHourOfJoyActive} />

        {/* Add the orphanage map */}
        <section className="mb-16">
          <OrphanageMap 
            onLocationClick={handleLocationClick}
            completedPuzzles={completedPuzzles}
          />
        </section>

        {/* Investigation Notes */}
        <div className={`mt-8 p-4 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-30 border ${isHourOfJoyActive ? 'border-red-700' : 'border-red-700'} rounded text-xs`}>
          <p className="text-red-300">
            <strong>{isHourOfJoyActive ? 'Official Report:' : 'Internal Memo:'}</strong> 
            {isHourOfJoyActive ?
              ' Case #1995-0808: Mass disappearance at Playcare facility. No signs of external intrusion. Security footage shows toys moving independently before total system failure. Classified under Corporate Directive 7731.' :
              ' Playcare represents our most successful integration of toy-based therapy and child development. Continue monitoring the Bigger Bodies Initiative participants for optimal results. Access restricted to Dr. Sawyer and approved personnel only.'
            }
          </p>
        </div>
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
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playcare Facility. {isHourOfJoyActive ? 'Operations permanently suspended.' : 'A Playtime Co. subsidiary.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'In memory of the children who trusted us to keep them safe' : 
              'Where every child\'s potential is realized through innovative care'
            }
          </p>
          <p className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-red-400'} mt-1 opacity-50`}>
            {isHourOfJoyActive ?
              'Memorial inquiry: 1-800-PLAYCARE | Incident files: hourOfJoy-classified' :
              'Staff access: playcare-admin | Facility director: Dr. Harley Sawyer'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Orphanage;
