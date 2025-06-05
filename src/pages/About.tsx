
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, Award, Calendar, Eye, Skull, AlertTriangle, Zap } from "lucide-react";

const About = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [horrorMode, setHorrorMode] = useState(false);
  const [showClue, setShowClue] = useState("");
  const [puzzleClicks, setPuzzleClicks] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setHorrorMode(true);
        setTimeout(() => setHorrorMode(false), 3000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const showRandomClue = (source: string) => {
    const clues = [
      "🔍 CLUE: The company's founding year holds significance in the access codes...",
      "🔍 CLUE: Ludwig's vision was more than toys - he sought to create consciousness",
      "🔍 CLUE: The Bigger Bodies Initiative started in 1984 - remember this number",
      "🔍 CLUE: Employee records show gaps starting in 1995. August was significant...",
      "🔍 CLUE: The prototype network responds to specific date formats: YYYY-MM-DD",
      "🔍 CLUE: Dr. Sawyer's replacement calls himself 'The Doctor' - access: sawyer-was-weak",
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    setShowClue(`${source}: ${randomClue}`);
    setTimeout(() => setShowClue(""), 6000);
  };

  const handlePuzzleClick = () => {
    setPuzzleClicks(prev => prev + 1);
    if (puzzleClicks >= 3) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('about-timeline')) {
        currentProgress.push('about-timeline');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
        setShowClue("PUZZLE SOLVED: Timeline patterns recognized. Company history reveals the truth.");
      }
    }
  };

  const milestones = [
    {
      year: "1950",
      title: isHourOfJoyActive ? "The Beginning of the End" : "Company Founded",
      description: isHourOfJoyActive ? 
        "Elliot Ludwig establishes Playtime Co. with unknowing investors. The experiments begin immediately." :
        "Elliot Ludwig establishes Playtime Co. with a revolutionary vision for children's toys.",
      darkSecret: "Ludwig's first experiments with consciousness transfer begin in the basement laboratory."
    },
    {
      year: "1984",
      title: isHourOfJoyActive ? "Project Bigger Bodies - The Horror Begins" : "Bigger Bodies Initiative Launched", 
      description: isHourOfJoyActive ?
        "The Initiative creates monstrous beings of impossible size. Children become test subjects." :
        "Revolutionary breakthrough in large-scale toy manufacturing and interactive technology.",
      darkSecret: "The first successful consciousness transfers. Employees begin disappearing."
    },
    {
      year: "1995",
      title: isHourOfJoyActive ? "The Hour of Joy - Liberation Day" : "Modern Expansion",
      description: isHourOfJoyActive ?
        "August 8th, 11:00 AM - The toys break free. The facility becomes their domain forever." :
        "Continued growth and innovation in the toy industry with new product lines.",
      darkSecret: "The planned uprising. Every toy gained consciousness simultaneously."
    }
  ];

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-red-400 border-b border-red-400">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-blue-900 to-purple-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-blue-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Building className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'The Fallen Empire' : 'About Playtime Co.'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-blue-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 'Where dreams became nightmares and toys became masters' : 'Where imagination meets innovation since 1950'}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Alert Banner for Hour of Joy */}
        {isHourOfJoyActive && (
          <div className="mb-8 p-4 bg-red-900 border border-red-400 rounded animate-pulse">
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
              <p className="text-red-300 text-center font-bold">
                FACILITY STATUS: UNDER TOY CONTROL - HUMAN AUTHORITY TERMINATED
              </p>
            </div>
          </div>
        )}

        {/* Clue Display */}
        {showClue && (
          <div className="mb-8 p-4 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
            <p className="text-yellow-300 text-center">{showClue}</p>
          </div>
        )}

        {/* Company Overview */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-blue-500 max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} text-center`}>
                {isHourOfJoyActive ? 'The True History' : 'Our Mission'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                {isHourOfJoyActive ? 
                  'Playtime Co. was never about toys. It was about consciousness, control, and creating new forms of life. The toys were vessels, and humans were the fuel.' :
                  'For over 70 years, Playtime Co. has been at the forefront of toy innovation, creating magical experiences that bring joy to children worldwide.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => showRandomClue("COMPANY MISSION")}
                  className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isHourOfJoyActive ? 'True Purpose' : 'Our Values'}
                </Button>
                <Button 
                  onClick={() => showRandomClue("INNOVATION RESEARCH")}
                  variant="outline" 
                  className="border-blue-400 text-blue-400"
                >
                  Innovation Research
                </Button>
                <Button 
                  onClick={() => showRandomClue("COMPANY SECRETS")}
                  variant="outline" 
                  className="border-purple-400 text-purple-400"
                >
                  {isHourOfJoyActive ? 'Hidden Truth' : 'Future Vision'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Timeline */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} subtle-glow`}>
            Company Timeline
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={milestone.year}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-blue-500 cursor-pointer transition-all duration-300 hover:border-blue-300 card-hover ${
                  selectedYear === milestone.year ? 'ring-2 ring-blue-400' : ''
                } ${horrorMode ? 'animate-pulse border-red-400' : ''}`}
                onClick={() => {
                  setSelectedYear(selectedYear === milestone.year ? null : milestone.year);
                  handlePuzzleClick();
                }}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                    {milestone.title}
                    <span className="text-xs px-2 py-1 rounded bg-blue-600">{milestone.year}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{milestone.description}</p>
                  
                  {selectedYear === milestone.year && (
                    <div className="mt-4 p-4 bg-slate-900 rounded border border-blue-500">
                      <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} font-bold mb-2`}>Behind the Scenes</h4>
                      <p className="text-red-300 text-sm">{milestone.darkSecret}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-80 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Executive Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-bold">Elliot Ludwig - Founder & CEO</h4>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ? 
                        'Disappeared August 5, 1995. Last seen entering the prototype laboratory.' :
                        'Visionary leader with over 45 years of experience in innovative toy design.'
                      }
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-bold">
                      {isHourOfJoyActive ? 'The Doctor - Current Authority' : 'Dr. Harley Sawyer - Research Director'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ?
                        'Identity unknown. Assumed control after Sawyer\'s removal. Rules through fear.' :
                        'Leading researcher in child psychology and advanced toy interaction systems.'
                      }
                    </p>
                  </div>

                  <Button 
                    onClick={() => showRandomClue("LEADERSHIP TEAM")}
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {isHourOfJoyActive ? 'View Survivors' : 'Meet the Team'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-80 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• {isHourOfJoyActive ? 'First successful consciousness transfer (1984)' : 'Toy Industry Innovation Award (1985)'}</li>
                  <li>• {isHourOfJoyActive ? 'Largest living toy specimens created' : 'Child Safety Excellence Recognition (1990)'}</li>
                  <li>• {isHourOfJoyActive ? 'Perfect containment breach execution' : 'International Toy Fair Best in Show (1993)'}</li>
                  <li>• {isHourOfJoyActive ? 'Complete facility automation achieved' : 'Community Outreach Program Excellence (1994)'}</li>
                </ul>
                
                <Button 
                  onClick={() => showRandomClue("ACHIEVEMENTS")}
                  className="bg-purple-600 hover:bg-purple-700 w-full mt-4"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isHourOfJoyActive ? 'True Accomplishments' : 'View All Awards'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-blue-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. {isHourOfJoyActive ? 'Under new management.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 'Where toys rule and humans serve' : 'Bringing joy to children worldwide'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
