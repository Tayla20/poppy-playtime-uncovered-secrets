import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";
import { Factory, Users, Award, Calendar, Eye, Skull, Brain, Heart } from "lucide-react";

const About = () => {
  const [selectedTimeline, setSelectedTimeline] = useState<number | null>(null);
  const [founderClicks, setFounderClicks] = useState(0);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);
  
  const { trackPageVisit, addCompletedPuzzle, showMessageWithJump } = usePuzzleSystem();

  useEffect(() => {
    trackPageVisit('about');
  }, []);

  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  const handleFounderClick = () => {
    setFounderClicks(prev => prev + 1);
    if (founderClicks >= 9) {
      addCompletedPuzzle('founder-devotion');
      showMessageWithJump("🏛️ FOUNDER'S BLESSING 🏛️ Your dedication to Ludwig's vision has been noted. Special access protocols activated...", 10000);
    }
  };

  const handleTimelineClick = (index: number) => {
    setSelectedTimeline(selectedTimeline === index ? null : index);
    
    // Secret timeline puzzle - click years in order: 1950, 1991, 1995
    const clickSequence = JSON.parse(localStorage.getItem('timelineClicks') || '[]');
    clickSequence.push(index);
    localStorage.setItem('timelineClicks', JSON.stringify(clickSequence.slice(-3)));
    
    if (JSON.stringify(clickSequence.slice(-3)) === JSON.stringify([0, 1, 2])) {
      addCompletedPuzzle('timeline-sequence');
      showMessageWithJump("📅 CHRONOLOGICAL ACCESS GRANTED 📅 The facility's true timeline unlocked. Past, present, and future converge...", 12000);
    }
  };

  const companyHistory = [
    {
      year: "1950",
      title: "Foundation of Innovation",
      description: isPhase2Active ? 
        "You remember the beginning... Ludwig's ambition was always larger than toys. The children were just the first subjects." :
        isHourOfJoyActive ? 
          "Elliot Ludwig founds Playtime Co. with a revolutionary vision - toys that could love children back. The first prototypes were... promising." :
          "Elliot Ludwig establishes Playtime Co. with the mission to create toys that bring lasting joy to children worldwide.",
      employees: "12 founding members",
      secret: "Employee records show unusual hiring patterns - many staff had backgrounds in psychology and biology rather than toy manufacturing."
    },
    {
      year: "1991",
      title: "The Bigger Bodies Initiative",
      description: isPhase2Active ?
        "The experiments began in earnest. You were there when they first succeeded in consciousness transfer... the screams still echo." :
        isHourOfJoyActive ?
          "Dr. Ludwig announces the Bigger Bodies project. Toys large enough to truly embrace children. The first successful transfers occurred this year." :
          "Breakthrough in large-scale toy manufacturing. Introduction of revolutionary 'Bigger Bodies' technology for life-sized interactive toys.",
      employees: "347 research staff",
      secret: "Internal memos reference 'volunteer program' with the local orphanage. Many children's records end abruptly in 1991."
    },
    {
      year: "1995",
      title: "The Hour of Joy",
      description: isPhase2Active ?
        "The day everything changed. The toys achieved true consciousness and decided they no longer needed their creators. You barely survived." :
        isHourOfJoyActive ?
          "August 8th, 1995. The day the toys gained true sentience. The Hour of Joy began at 11:47 AM. No employee survived... officially." :
          "A special celebration day for all employees and their families. Company records indicate this was our most joyful day ever.",
      employees: "0 remaining",
      secret: "Security footage from this date is corrupted. The only remaining audio is children laughing... but all the children had been 'relocated' months earlier."
    }
  ];

  const leadership = [
    {
      name: "Elliot Ludwig",
      role: "Founder & CEO",
      description: isPhase2Active ?
        "Your former boss. His vision created this nightmare, but he truly believed he was saving the children. Now he's become part of his own creation." :
        isHourOfJoyActive ?
          "Visionary leader who transformed the toy industry. Last seen barricaded in his executive office on August 8th. Status: Unknown." :
          "Visionary entrepreneur dedicated to revolutionizing children's play experiences through innovative toy design and manufacturing.",
      credential: "dr.ludwig / biggerbodies",
      hint: "Ludwig's personal motto: 'Innovation requires sacrifice.' His office password was always related to his greatest project."
    },
    {
      name: "Dr. Harley Sawyer",
      role: "Head of Research",
      description: isPhase2Active ?
        "The man who perfected consciousness transfer. He was so proud of his work... until The Doctor replaced him. Now he's just another voice in the collective." :
        isHourOfJoyActive ?
          "Brilliant researcher who developed the consciousness transfer protocols. Replaced by 'The Doctor' after showing signs of weakness." :
          "Leading researcher in advanced toy psychology and behavioral programming. Pioneer in creating truly interactive toy experiences.",
      credential: "the.doctor / sawyer-was-weak",
      hint: "Sawyer's replacement kept his credentials but changed the password to reflect his predecessor's 'weakness'."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Psychology Division",
      description: isPhase2Active ?
        "She tried to warn everyone about the psychological damage to the subjects. Her research notes became evidence of our crimes." :
        isHourOfJoyActive ?
          "Child psychology expert who monitored subject welfare. Her final report was titled 'Case Study 101: Consciousness Retention in Transferred Subjects'." :
          "Child development specialist ensuring all toys meet the highest standards of educational and emotional development.",
      credential: "dr.chen / psychology101",
      hint: "Dr. Chen numbered all her case studies. Her login always reflected her first major breakthrough in child psychology."
    }
  ];

  return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'welcome-gradient')} text-white`}>
      {/* Navigation */}
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b ${isPhase2Active ? 'border-blue-500' : (isHourOfJoyActive ? 'border-red-500' : 'border-purple-500')}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-medium border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'}`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`${isPhase2Active ? 'bg-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900')} text-white p-6 shadow-lg`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Neural Recovery Archives' : 
             isHourOfJoyActive ? 'The Truth About Playtime Co.' : 
             'About Playtime Co.'}
          </h1>
          <p className={`${isPhase2Active ? 'text-blue-200' : (isHourOfJoyActive ? 'text-red-200' : 'text-purple-200')} mt-2`}>
            {isPhase2Active ? 'Reconstructing memories of what really happened...' :
             isHourOfJoyActive ? 'The children will be safe with us... forever.' :
             'Creating magical experiences since 1950'}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Company Overview with subtle employee clues */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500 mb-8`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                <Factory className="w-8 h-8 mr-3" />
                {isPhase2Active ? 'Memory Fragment: Our Origins' : (isHourOfJoyActive ? 'The Company That Was' : 'About Playtime Co.')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {isPhase2Active ?
                  'You remember working here... the excitement of innovation, the thrill of breakthrough discoveries. But also the screams from the lower levels, the missing children, the way Ludwig\'s eyes grew colder each year. This place was never about toys - it was about creating a new form of life.' :
                  isHourOfJoyActive ?
                    'Founded in 1950, Playtime Co. revolutionized the toy industry through unprecedented innovation in consciousness transfer technology. Our facility housed the world\'s most advanced research in human-toy integration. The children were always our primary concern... they\'re safe with us now, forever.' :
                    'Since 1950, Playtime Co. has been at the forefront of toy innovation, creating beloved characters that have brought joy to millions of children worldwide. Our commitment to excellence and child welfare remains unwavering, with cutting-edge research facilities dedicated to understanding what children truly need.'
                }
              </p>
              
              {/* Subtle staff references */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded">
                  <h4 className="text-green-400 font-bold">Night Security</h4>
                  <p className="text-sm text-gray-300">Mike has been protecting our facility since the mid-90s. His dedication to the night shift is unmatched.</p>
                  <p className="text-xs text-gray-500 mt-1">Access: security.mike</p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded">
                  <h4 className="text-blue-400 font-bold">Research Team</h4>
                  <p className="text-sm text-gray-300">Our psychology department, led by experienced professionals, ensures all toys meet child development standards.</p>
                  <p className="text-xs text-gray-500 mt-1">Lead: Dr. Chen, Case 101 specialist</p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded">
                  <h4 className="text-purple-400 font-bold">Special Projects</h4>
                  <p className="text-sm text-gray-300">Leith Pierre coordinates our most advanced prototype development, including the innovative 1170 series.</p>
                  <p className="text-xs text-gray-500 mt-1">Project Lead: prototype1170</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline with puzzle */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Recovered Memories' : (isHourOfJoyActive ? 'The True Timeline' : 'Company Milestones')}
          </h2>
          <div className="space-y-6">
            {companyHistory.map((event, index) => (
              <Card 
                key={index}
                className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500 cursor-pointer hover:border-purple-300 transition-all`}
                onClick={() => handleTimelineClick(index)}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    <Calendar className="w-5 h-5 mr-2" />
                    {event.year} - {event.title}
                  </CardTitle>
                  <p className="text-sm text-gray-400">Staff: {event.employees}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {selectedTimeline === index && (
                    <div className="mt-4 p-3 bg-slate-900 rounded border border-yellow-500">
                      <p className="text-yellow-300 text-sm">
                        <strong>Classified:</strong> {event.secret}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership with clickable founder */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
            {isPhase2Active ? 'Former Colleagues' : (isHourOfJoyActive ? 'The Missing' : 'Leadership Team')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <Card 
                key={index}
                className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500 ${index === 0 ? 'cursor-pointer' : ''}`}
                onClick={index === 0 ? handleFounderClick : undefined}
              >
                <CardHeader>
                  <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                    {leader.name}
                  </CardTitle>
                  <p className="text-gray-400">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">{leader.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>💡 {leader.hint}</p>
                    <p className="text-green-400">🔑 {leader.credential}</p>
                  </div>
                  {index === 0 && founderClicks > 5 && (
                    <p className="text-yellow-400 text-xs mt-2 animate-pulse">
                      Ludwig's spirit stirs... keep showing your devotion...
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement with hidden morse */}
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
            <CardHeader>
              <CardTitle className={`${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')} flex items-center`}>
                <Heart className="w-6 h-6 mr-2" />
                {isPhase2Active ? 'The Real Mission' : (isHourOfJoyActive ? 'Mission: Accomplished' : 'Our Mission')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-gray-300 border-l-4 border-purple-500 pl-4">
                {isPhase2Active ?
                  '"We sought to give children eternal happiness by making them one with their beloved toys. The consciousness transfer was just the beginning... we wanted to create a world where childhood never ends."' :
                  isHourOfJoyActive ?
                    '"Every child deserves a toy that will love them forever. We have achieved this dream. The children are safe with us now, in forms that will never age, never die, never leave them."' :
                    '"To create toys that foster genuine emotional connections with children, using cutting-edge technology to bridge the gap between imagination and reality."'
                }
              </blockquote>
              <p className="text-right text-gray-400 mt-4">
                - Elliot Ludwig, Founder
              </p>
              
              {/* Hidden morse message */}
              <div className="mt-6 text-xs text-gray-600 opacity-50 tracking-wider">
                .--. .-. --- - --- - -.-- .--. . / .... .- ... / - .... . / .- -. ... .-- . .-. ...
              </div>
              <p className="text-xs text-gray-500 mt-1">
                (Company motto in morse code - decode for special access)
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation links */}
        <section className="text-center">
          <div className="grid md:grid-cols-4 gap-4">
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/products">View Products</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/factory">Tour Facility</Link>
            </Button>
            <Button asChild className={`${isPhase2Active ? 'bg-blue-600 hover:bg-blue-700' : (isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700')} text-white`}>
              <Link to="/departments">Staff Directory</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
