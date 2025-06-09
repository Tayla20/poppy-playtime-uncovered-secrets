
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";
import { Navigation } from "@/components/Navigation";
import { WarningBanner } from "@/components/WarningBanner";
import { HeroSection } from "@/components/HeroSection";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { CompanyMission } from "@/components/CompanyMission";
import { HiddenElements } from "@/components/HiddenElements";
import { Footer } from "@/components/Footer";

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
    handleLogoClick,
    handleProductHover
  } = usePuzzleSystem();

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
