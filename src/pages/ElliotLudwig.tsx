
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Crown, AlertTriangle, Skull, Building, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ElliotLudwig = () => {
  const [founderClicks, setFounderClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [memorialVisits, setMemorialVisits] = useState(0);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('elliot-ludwig');
  }, []);

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

  const handleFounderClick = () => {
    setFounderClicks(prev => prev + 1);
    if (founderClicks >= 7) {
      addCompletedPuzzle('elliot-memorial');
      showMessageWithJump("👨‍💼 ELLIOT LUDWIG'S VISION UNLOCKED 👨‍💼 The founder's true legacy revealed. Innovation through any means necessary.", 12000);
    }
  };

  const handleMemorialVisit = () => {
    setMemorialVisits(prev => prev + 1);
    if (memorialVisits >= 4) {
      addCompletedPuzzle('founder-legacy');
      showMessageWithJump("🏛️ FOUNDER'S LEGACY COMPLETE 🏛️ You have honored Elliot Ludwig's memory. His spirit guides Playtime Co. forever.", 10000);
    }
  };

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation */}
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

      {/* Alert Banner */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              ELLIOT LUDWIG MEMORIAL - THE FOUNDER'S DARK LEGACY EXPOSED
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Crown className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Elliot Ludwig Memorial - A Founder\'s Fall' : 'Elliot Ludwig - Visionary Founder'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'The man whose ambition led to unthinkable horrors' :
              '1930-1960 - The brilliant mind behind Playtime Co.\'s revolutionary success'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Founder Portrait */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} text-center`}>
                Elliot Ludwig - Company Founder & Visionary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8a/Elliot_Ludwig_Portrait.png/revision/latest?cb=20231201000000"
                    alt="Elliot Ludwig Portrait"
                    className="w-full max-w-sm mx-auto rounded-lg border border-purple-500 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleFounderClick}
                  />
                  <p className="text-sm text-gray-400">Click to pay respects to the founder ({founderClicks}/8)</p>
                </div>
                <div className="space-y-4">
                  <div className="cursor-pointer" onClick={handleMemorialVisit}>
                    <h3 className={`text-xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} mb-2`}>
                      Biography
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {isHourOfJoyActive ?
                        'Elliot Ludwig founded Playtime Co. in 1930 with noble intentions to bring joy to children worldwide. However, his obsession with innovation and the tragic loss of his daughter led him down a dark path. His experiments with consciousness transfer and the Bigger Bodies Initiative would ultimately doom the company and everyone within it.' :
                        'Elliot Ludwig founded Playtime Co. in 1930 with a simple mission: to create toys that would bring unprecedented joy to children everywhere. His innovative approach to toy manufacturing and his dedication to quality made Playtime Co. the world\'s most beloved toy company.'
                      }
                    </p>
                  </div>
                  
                  <div className="cursor-pointer" onClick={handleMemorialVisit}>
                    <h3 className={`text-xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mb-2`}>
                      Legacy
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {isHourOfJoyActive ?
                        'Ludwig\'s legacy is one of good intentions corrupted by grief and ambition. His daughter\'s death drove him to pursue impossible goals, leading to human experimentation and the creation of the toys that would eventually turn against their creators during the Hour of Joy.' :
                        'Under Ludwig\'s leadership, Playtime Co. revolutionized the toy industry with groundbreaking innovations including the first living toys, advanced manufacturing techniques, and the development of toys that could truly interact with and care for children.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            The Ludwig Timeline
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                year: "1930",
                title: "Company Foundation",
                description: isHourOfJoyActive ? "Elliot Ludwig establishes Playtime Co. with innocent dreams of childhood joy" : "Elliot Ludwig founds Playtime Co. with revolutionary toy concepts",
                icon: <Building className="w-5 h-5" />
              },
              {
                year: "1935",
                title: "First Major Success",
                description: isHourOfJoyActive ? "Early toys become popular, masking the dark research beginning in secret" : "Launch of the first interactive toy line, establishing market dominance",
                icon: <Award className="w-5 h-5" />
              },
              {
                year: "1950",
                title: "Tragic Loss",
                description: isHourOfJoyActive ? "Ludwig's daughter dies in an accident, driving him to obsession with resurrection" : "Personal tragedy motivates Ludwig to create more emotionally connected toys",
                icon: <Skull className="w-5 h-5" />
              },
              {
                year: "1955",
                title: "Bigger Bodies Initiative",
                description: isHourOfJoyActive ? "Secret human experimentation begins, turning people into toys" : "Revolutionary new manufacturing process creates larger, more lifelike toys",
                icon: <AlertTriangle className="w-5 h-5" />
              },
              {
                year: "1960",
                title: "Ludwig's Disappearance",
                description: isHourOfJoyActive ? "Elliot Ludwig vanishes, rumored to have become the first successful experiment" : "Elliot Ludwig steps down from active management to focus on research",
                icon: <Calendar className="w-5 h-5" />
              }
            ].map((event, index) => (
              <Card 
                key={index}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 cursor-pointer hover:border-purple-400 transition-all`}
                onClick={handleMemorialVisit}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`${isHourOfJoyActive ? 'bg-red-600' : 'bg-purple-600'} rounded-full p-3 mr-4`}>
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-bold text-lg mr-3`}>
                          {event.year}
                        </span>
                        <h3 className="text-white font-semibold">{event.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Truth Section */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  THE HIDDEN TRUTH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-200">
                    Documents recovered after the Hour of Joy reveal Elliot Ludwig's true fate. Consumed by grief over his daughter's death, 
                    he became obsessed with consciousness transfer and resurrection technology.
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <h4 className="text-red-300 font-semibold mb-2">Classified Findings:</h4>
                    <ul className="text-red-200 space-y-1 text-sm">
                      <li>• Ludwig was likely the first successful human-to-toy consciousness transfer</li>
                      <li>• His disappearance in 1960 coincided with the first Prototype experiments</li>
                      <li>• Company records suggest he may still exist within the facility</li>
                      <li>• His ambition directly led to the creation of the entities that caused the Hour of Joy</li>
                    </ul>
                  </div>
                  <p className="text-red-300 text-sm italic">
                    "Innovation at any cost" - The Ludwig motto that doomed us all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
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
          <p>&copy; {isHourOfJoyActive ? '1960' : '2024'} Elliot Ludwig Memorial Foundation. {isHourOfJoyActive ? 'In memory of a visionary who lost his way.' : 'Preserving the legacy of innovation.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              '"Innovation through any means necessary" - The motto that destroyed everything' : 
              '"Making the impossible possible" - Elliot Ludwig, 1930-1960'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ElliotLudwig;
