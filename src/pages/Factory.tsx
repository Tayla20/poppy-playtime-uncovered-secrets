
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Factory = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDarkContent, setShowDarkContent] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const tourSteps = [
    {
      title: "Welcome Center",
      description: "Start your magical journey through our state-of-the-art facility!",
      darkDescription: "Entry point. All visitors must sign waivers. Exit protocols disabled during tour.",
      image: "🏭"
    },
    {
      title: "Design Studio",
      description: "Where creativity comes to life! Our talented artists design every beloved character.",
      darkDescription: "Psychological profiling unit. Designs based on child behavioral studies and fear responses.",
      image: "🎨"
    },
    {
      title: "Manufacturing Floor",
      description: "Watch as our skilled workers craft each toy with love and precision!",
      darkDescription: "Automated assembly. Human workers replaced after 'Hour of Joy' incident. No survivors.",
      image: "🔧"
    },
    {
      title: "Testing Laboratory",
      description: "Every toy is thoroughly tested to ensure maximum fun and safety!",
      darkDescription: "Experiment chambers. Subject testing facility. Mortality rate: 73.6%",
      image: "🧪"
    },
    {
      title: "Quality Control",
      description: "Our final inspection ensures every toy meets our highest standards!",
      darkDescription: "Containment protocols. Failed subjects terminated. Successful subjects... deployed.",
      image: "✅"
    },
    {
      title: "Shipping Center",
      description: "Ready to bring joy to children around the world!",
      darkDescription: "Distribution network. Tracking enabled on all units. Remote activation possible.",
      image: "📦"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.15) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleDarkContent = () => {
    setShowDarkContent(!showDarkContent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PLAYTIME CO.</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-pink-200 transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-pink-200 transition-colors">Our Toys</Link>
            <Link to="/factory" className="text-pink-200">Factory Tour</Link>
            <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className={`text-5xl font-bold text-center mb-8 transition-all duration-300 ${
          glitchEffect ? 'text-red-600 animate-pulse' : 'text-purple-700'
        }`}>
          {glitchEffect ? 'F̷A̸C̴T̵O̷R̸Y̵ ̶T̴O̸U̴R̷' : 'Factory Tour'}
        </h1>
        
        <p className="text-center text-gray-600 mb-12 text-xl">
          {showDarkContent 
            ? "Discover the truth behind our manufacturing process..."
            : "Take a magical journey through our toy-making wonderland!"
          }
        </p>

        {/* Tour Progress */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Step {currentStep + 1} of {tourSteps.length}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleDarkContent}
              className={showDarkContent ? 'border-red-500 text-red-500' : ''}
            >
              {showDarkContent ? 'Show Normal Tour' : 'Show Real Tour'}
            </Button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                showDarkContent ? 'bg-red-500' : 'bg-pink-500'
              }`}
              style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Tour Content */}
        <div className="max-w-4xl mx-auto">
          <Card className={`transition-all duration-500 ${
            showDarkContent ? 'border-red-500 bg-red-50' : 'border-purple-200'
          }`}>
            <CardHeader className="text-center">
              <div className={`text-8xl mb-4 transition-all duration-300 ${
                glitchEffect ? 'animate-bounce' : ''
              }`}>
                {tourSteps[currentStep].image}
              </div>
              <CardTitle className={`text-3xl ${
                showDarkContent ? 'text-red-700' : 'text-purple-700'
              }`}>
                {tourSteps[currentStep].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className={`text-lg mb-8 transition-all duration-500 ${
                showDarkContent ? 'text-red-600 font-semibold' : 'text-gray-700'
              }`}>
                {showDarkContent 
                  ? tourSteps[currentStep].darkDescription 
                  : tourSteps[currentStep].description
                }
              </p>

              {/* Tour Navigation */}
              <div className="flex justify-between items-center">
                <Button 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  variant="outline"
                  className={showDarkContent ? 'border-red-500 text-red-500' : ''}
                >
                  Previous
                </Button>
                
                <span className="text-gray-500">
                  {currentStep + 1} / {tourSteps.length}
                </span>
                
                <Button 
                  onClick={nextStep}
                  disabled={currentStep === tourSteps.length - 1}
                  className={showDarkContent ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-500 hover:bg-pink-600'}
                >
                  {currentStep === tourSteps.length - 1 ? 'Tour Complete' : 'Next'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Special Areas */}
          {currentStep === 3 && showDarkContent && (
            <Card className="mt-8 border-red-600 bg-red-900 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">🚨 RESTRICTED AREA - TESTING CHAMBER 02</h3>
                <p className="text-red-200 mb-4">
                  This is where the Bigger Bodies subjects were created. The chamber remains sealed 
                  since the Hour of Joy incident. Motion sensors still detect movement inside.
                </p>
                <p className="text-xs text-red-300">
                  Last entry: Dr. Harley Sawyer, August 8th, 1995. Status: Never exited.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Tour Complete */}
          {currentStep === tourSteps.length - 1 && (
            <Card className="mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">
                  {showDarkContent ? 'You Know Too Much' : 'Thank You for Visiting!'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {showDarkContent 
                    ? "Please report to Security. Do not attempt to leave the facility."
                    : "We hope you enjoyed learning about how we make toys that bring joy to children everywhere!"
                  }
                </p>
                <div className="space-x-4">
                  <Button asChild className="bg-pink-500 hover:bg-pink-600">
                    <Link to="/products">Shop Our Toys</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/">Return Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
        </div>
      </footer>
    </div>
  );
};

export default Factory;
