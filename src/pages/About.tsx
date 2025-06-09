
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Award, Target, AlertTriangle, Skull } from "lucide-react";

const About = () => {
  const [staffClicks, setStaffClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  
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

  const handleStaffClick = () => {
    setStaffClicks(prev => prev + 1);
    if (staffClicks >= 4) {
      addCompletedPuzzle('staff-directory');
      showMessageWithJump("👥 STAFF DIRECTORY ACCESSED 👥 Personnel files revealed. Dr. Sawyer's experiments involved the entire leadership team...", 10000);
    }
  };

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'poppy-gradient'} text-white`}>
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'} font-medium`}>About Us</Link>
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
              COMPANY STATUS: ABANDONED - ALL STAFF MISSING SINCE AUGUST 8TH, 1995
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Building className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Former Company Leadership' : 'About Playtime Co.'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'Where visionary leadership met their ultimate creation' :
              'Pioneering the future of interactive entertainment since 1950'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Company Overview */}
        <section className="mb-16 text-center">
          <h2 className={`text-3xl font-bold mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'What We Were' : 'Who We Are'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {isHourOfJoyActive ?
              'Playtime Co. was once the world\'s leading toy manufacturer, pushing the boundaries of what toys could be. Our Bigger Bodies Initiative created toys with consciousness, intelligence, and unfortunately... free will.' :
              'Playtime Co. is the world\'s leading toy manufacturer, dedicated to creating innovative, interactive toys that bring joy to children worldwide. Our revolutionary Bigger Bodies Initiative creates toys that are more than just playthings - they\'re companions.'
            }
          </p>
          <p className="text-gray-400">
            {isHourOfJoyActive ?
              'The company ceased operations on August 8th, 1995, when our greatest success became our greatest failure.' :
              'Founded in 1950, we\'ve been at the forefront of toy innovation for over 45 years.'
            }
          </p>
        </section>

        {/* Leadership Team - STAFF DIRECTORY PUZZLE */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Missing Leadership Team' : 'Our Leadership Team'}
          </h2>
          <p className="text-center text-gray-400 mb-6">
            {staffClicks > 0 && `Staff investigation: ${staffClicks}/5 - `}
            Click on leadership profiles to access personnel files...
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-500 transition-all duration-300 cursor-pointer ${staffClicks > 0 ? 'ring-1 ring-yellow-400' : ''}`}
              onClick={handleStaffClick}
            >
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Elliot Ludwig</CardTitle>
                <p className="text-gray-400">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'Last seen in his office, obsessing over Poppy. His vision created our success... and our doom.' :
                    'Visionary leader who founded Playtime Co. with a dream of creating the perfect toy companion.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-500 transition-all duration-300 cursor-pointer ${staffClicks > 0 ? 'ring-1 ring-yellow-400' : ''}`}
              onClick={handleStaffClick}
            >
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Dr. Harley Sawyer</CardTitle>
                <p className="text-gray-400">Head of Innovation</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'The mastermind behind the Bigger Bodies Initiative. His experiments gave toys consciousness... and hunger.' :
                    'Leading researcher in advanced toy development and the revolutionary Bigger Bodies Initiative.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-500 transition-all duration-300 cursor-pointer ${staffClicks > 0 ? 'ring-1 ring-yellow-400' : ''}`}
              onClick={handleStaffClick}
            >
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Stella Greyber</CardTitle>
                <p className="text-gray-400">Head of Playcare</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'Oversaw the orphanage operations. The children trusted her... until she became one of them.' :
                    'Manages our Playcare Orphanage, ensuring every child finds their perfect toy companion.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? 'Former Values' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Award className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Innovation (Unchecked)' : 'Innovation'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {isHourOfJoyActive ?
                    'We pushed boundaries until the boundaries pushed back. Our toys became too real, too intelligent, too alive.' :
                    'We constantly push the boundaries of what\'s possible in toy manufacturing and child development.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Users className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Care (Twisted)' : 'Care'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {isHourOfJoyActive ?
                    'We cared too much. Our toys now care for the children in their own way, forever and always.' :
                    'Every child deserves a companion who truly understands and cares for them unconditionally.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                  <Target className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Perfection (Achieved)' : 'Excellence'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {isHourOfJoyActive ?
                    'We achieved perfection. Our toys are now perfect companions - conscious, caring, and completely autonomous.' :
                    'We strive for excellence in every aspect of our work, from design to manufacturing to customer satisfaction.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Messages */}
        {hiddenMessage && (
          <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
            <div className="glitch-text" data-text={hiddenMessage}>
              {hiddenMessage}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Operations ceased.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Leadership missing, presumed transformed' : 
              'Leading the future of interactive entertainment'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
