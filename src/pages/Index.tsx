import { useEffect, useState } from "react";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";
import { usePhase2System } from "@/hooks/usePhase2System";
import { Navigation } from "@/components/Navigation";
import { Phase2Navigation } from "@/components/Phase2Navigation";
import { WarningBanner } from "@/components/WarningBanner";
import { HeroSection } from "@/components/HeroSection";
import { Phase2HeroSection } from "@/components/Phase2HeroSection";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { CompanyMission } from "@/components/CompanyMission";
import { HiddenElements } from "@/components/HiddenElements";
import { Footer } from "@/components/Footer";
import { PuzzleHints } from "@/components/PuzzleHints";
import { Button } from "@/components/ui/button";
import { Settings, RotateCcw, HelpCircle } from "lucide-react";

const Index = () => {
  const [showResetMenu, setShowResetMenu] = useState(false);
  const [showHints, setShowHints] = useState(false);
  
  const {
    glitchActive,
    secretFound,
    clickCount,
    hiddenMessage,
    warningLevel,
    sawyerTransformed,
    puzzlesCompleted,
    morseInput,
    isHourOfJoyActive,
    isPhase2Active,
    visitedPages,
    mandatoryPuzzles,
    handleLogoClick,
    handleProductHover,
    trackPageVisit
  } = usePuzzleSystem();

  const {
    memoryFragments,
    currentMemory,
    memoryLevel,
    isInsiderRevealed,
    glitchedMemories,
    getSubtileInsiderHint
  } = usePhase2System();

  useEffect(() => {
    trackPageVisit('home');
  }, []);

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset ALL progress? This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Phase 2 Layout
  if (isPhase2Active) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white nostalgic-text">
        <Phase2Navigation 
          glitchActive={glitchActive}
          clickCount={clickCount}
          secretFound={secretFound}
          memoryLevel={memoryLevel}
          onLogoClick={handleLogoClick}
        />

        {/* Menu for Phase 2 */}
        <div className="fixed top-16 right-4 z-40 flex gap-2">
          <Button
            onClick={() => setShowHints(!showHints)}
            variant="outline"
            size="sm"
            className="text-blue-400 border-blue-600 hover:text-white bg-gray-900"
          >
            <HelpCircle className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => setShowResetMenu(!showResetMenu)}
            variant="outline"
            size="sm"
            className="text-blue-400 border-blue-600 hover:text-white bg-gray-900"
          >
            <Settings className="w-4 h-4" />
          </Button>
          {showResetMenu && (
            <div className="absolute right-0 top-10 bg-gray-800 border border-blue-600 p-4 rounded shadow-lg">
              <Button onClick={resetProgress} variant="outline" size="sm" className="text-red-400 border-red-600 w-full">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset All Progress
              </Button>
              <Button onClick={() => setShowResetMenu(false)} variant="outline" size="sm" className="mt-2 w-full">
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Hints Panel for Phase 2 */}
        {showHints && (
          <div className="fixed top-16 right-20 z-40 bg-gray-800 border border-blue-600 p-4 rounded shadow-lg max-w-md">
            <PuzzleHints 
              puzzlesCompleted={puzzlesCompleted}
              visitedPages={visitedPages}
              isHourOfJoyActive={isHourOfJoyActive}
              mandatoryPuzzles={mandatoryPuzzles}
            />
            <Button onClick={() => setShowHints(false)} variant="outline" size="sm" className="mt-2 w-full">
              Close Hints
            </Button>
          </div>
        )}

        <Phase2HeroSection 
          glitchActive={glitchActive}
          memoryLevel={memoryLevel}
          currentMemory={currentMemory}
          isInsiderRevealed={isInsiderRevealed}
        />

        {/* Subtle insider hints scattered throughout */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded border border-blue-500">
              <h3 className="text-blue-400 font-bold mb-2">Memory Fragments</h3>
              <p className="text-sm text-gray-300">{memoryFragments.length}/9 recovered</p>
              <p className="text-xs text-gray-500 mt-2">{getSubtileInsiderHint()}</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded border border-blue-500">
              <h3 className="text-blue-400 font-bold mb-2">Neural Status</h3>
              <p className="text-sm text-gray-300">{isInsiderRevealed ? 'Full Integration' : 'Partial Recovery'}</p>
              <p className="text-xs text-gray-500 mt-2">Consciousness stable</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded border border-blue-500">
              <h3 className="text-blue-400 font-bold mb-2">Facility Access</h3>
              <p className="text-sm text-gray-300">Level 5 Clearance</p>
              <p className="text-xs text-gray-500 mt-2">Why do you have this access?</p>
            </div>
          </div>

          {/* Login Credential Hints for Phase 2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-30 p-4 rounded border border-cyan-500">
              <h3 className="text-cyan-400 font-bold mb-2">Employee Records</h3>
              <p className="text-xs text-gray-400 mb-2">Last known staff members:</p>
              <div className="text-xs space-y-1">
                <p className="text-green-400">Mike worked the nightshift since 1995...</p>
                <p className="text-blue-400">Dr. Chen studied psychology with case number 101...</p>
                <p className="text-purple-400">Ludwig's vision was about bigger bodies...</p>
                <p className="text-red-400">Pierre worked on prototype 1170...</p>
                <p className="text-yellow-400">The Doctor knew Sawyer was weak...</p>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-30 p-4 rounded border border-cyan-500">
              <h3 className="text-cyan-400 font-bold mb-2">Access Terminal</h3>
              <p className="text-xs text-gray-400">Staff login protocols still active...</p>
              <p className="text-xs text-cyan-300 mt-2">🔍 Search for "staff portal" or look for login access</p>
            </div>
          </div>
        </div>

        <ProductsShowcase 
          onProductHover={handleProductHover}
        />

        <Footer />

        {/* Phase 2 Hidden Messages */}
        {hiddenMessage && (
          <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-blue-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-blue-400 vintage-border static-noise animate-pulse">
            <div className="glitch-text" data-text={hiddenMessage}>
              {hiddenMessage}
            </div>
          </div>
        )}

        {/* Glitched memories */}
        {glitchedMemories.map((memory, index) => (
          <div 
            key={index}
            className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-cyan-400 p-3 rounded border border-cyan-400 text-xs font-mono animate-pulse"
            style={{ bottom: `${4 + index * 60}px` }}
          >
            💭 {memory}
          </div>
        ))}
      </div>
    );
  }

  // Original Phase 1 Layout
  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-red-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      <Navigation 
        glitchActive={glitchActive}
        clickCount={clickCount}
        isHourOfJoyActive={isHourOfJoyActive}
        secretFound={secretFound}
        onLogoClick={handleLogoClick}
      />

      {/* Menu for Phase 1 */}
      <div className="fixed top-16 right-4 z-40 flex gap-2">
        <Button
          onClick={() => setShowHints(!showHints)}
          variant="outline"
          size="sm"
          className="text-red-400 border-red-600 hover:text-white bg-gray-900"
        >
          <HelpCircle className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => setShowResetMenu(!showResetMenu)}
          variant="outline"
          size="sm"
          className="text-red-400 border-red-600 hover:text-white bg-gray-900"
        >
          <Settings className="w-4 h-4" />
        </Button>
        {showResetMenu && (
          <div className="absolute right-0 top-10 bg-gray-800 border border-red-600 p-4 rounded shadow-lg">
            <Button onClick={resetProgress} variant="outline" size="sm" className="text-red-400 border-red-600 w-full">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All Progress
            </Button>
            <Button onClick={() => setShowResetMenu(false)} variant="outline" size="sm" className="mt-2 w-full">
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Hints Panel for Phase 1 */}
      {showHints && (
        <div className="fixed top-16 right-20 z-40 bg-gray-800 border border-red-600 p-4 rounded shadow-lg max-w-md max-h-96 overflow-y-auto">
          <PuzzleHints 
            puzzlesCompleted={puzzlesCompleted}
            visitedPages={visitedPages}
            isHourOfJoyActive={isHourOfJoyActive}
            mandatoryPuzzles={mandatoryPuzzles}
          />
          <Button onClick={() => setShowHints(false)} variant="outline" size="sm" className="mt-2 w-full">
            Close Hints
          </Button>
        </div>
      )}

      <WarningBanner 
        warningLevel={warningLevel}
        isHourOfJoyActive={isHourOfJoyActive}
      />

      <HeroSection 
        glitchActive={glitchActive}
        isHourOfJoyActive={isHourOfJoyActive}
        puzzlesCompleted={puzzlesCompleted}
        morseInput={morseInput}
      />

      {/* Subtle investigation progress without obvious hints */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <p className="text-red-400 font-bold text-lg">
            Investigation Progress: {puzzlesCompleted.length}/{mandatoryPuzzles.length}
          </p>
          <div className="w-64 mx-auto bg-gray-700 rounded-full h-3 mt-2">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                puzzlesCompleted.length === mandatoryPuzzles.length 
                  ? 'bg-gradient-to-r from-red-600 to-red-400 animate-pulse' 
                  : 'bg-gradient-to-r from-green-600 to-yellow-500'
              }`}
              style={{ width: `${(puzzlesCompleted.length / mandatoryPuzzles.length) * 100}%` }}
            ></div>
          </div>
          {puzzlesCompleted.length === mandatoryPuzzles.length && (
            <p className="text-red-400 mt-2 animate-pulse">
              🚨 ALL MYSTERIES SOLVED - THE TRUTH AWAITS 🚨
            </p>
          )}
        </div>
      </section>

      <ProductsShowcase 
        onProductHover={handleProductHover}
      />

      <CompanyMission 
        isHourOfJoyActive={isHourOfJoyActive}
      />

      <HiddenElements 
        hiddenMessage={hiddenMessage}
        secretFound={secretFound}
        sawyerTransformed={sawyerTransformed}
      />

      <Footer />
    </div>
  );
};

export default Index;
