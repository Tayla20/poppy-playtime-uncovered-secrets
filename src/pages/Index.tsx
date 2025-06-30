
import { useEffect } from "react";
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

const Index = () => {
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

      <ProductsShowcase 
        onProductHover={handleProductHover}
      />

      <CompanyMission 
        isHourOfJoyActive={isHourOfJoyActive}
      />

      <PuzzleHints 
        puzzlesCompleted={puzzlesCompleted}
        visitedPages={visitedPages}
        isHourOfJoyActive={isHourOfJoyActive}
        mandatoryPuzzles={mandatoryPuzzles}
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
