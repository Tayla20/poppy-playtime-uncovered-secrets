
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Moon, Sun, AlertTriangle } from "lucide-react";

const Playcare = () => {
  const [selectedCritter, setSelectedCritter] = useState<string | null>(null);
  const [sleepMode, setSleepMode] = useState(false);
  const [redGasWarning, setRedGasWarning] = useState(false);

  const smilingCritters = [
    {
      id: "dogday",
      name: "DogDay",
      role: "Leader",
      color: "yellow",
      personality: "Energetic and optimistic, always ready to help friends!",
      activity: "Morning exercises and leadership training",
      secret: "Tries to keep everyone together, even when they start to change..."
    },
    {
      id: "catnap",
      name: "CatNap",
      role: "Sleep Guardian",
      color: "purple",
      personality: "Calm and peaceful, ensures everyone gets proper rest",
      activity: "Naptime supervision and dream monitoring",
      secret: "Sometimes children don't wake up from his special dreams..."
    },
    {
      id: "bobby",
      name: "Bobby BearHug",
      role: "Comfort Provider",
      color: "red",
      personality: "Warm and caring, gives the best hugs in Playcare",
      activity: "Emotional support and cuddle therapy",
      secret: "His hugs are getting... tighter lately"
    },
    {
      id: "bubba",
      name: "Bubba Bubbaphant",
      role: "Knowledge Keeper",
      color: "blue",
      personality: "Smart and helpful, never forgets anything important",
      activity: "Educational programs and memory games",
      secret: "He remembers things that haven't happened yet..."
    },
    {
      id: "craftycorn",
      name: "CraftyCorn",
      role: "Art Director",
      color: "orange",
      personality: "Creative and artistic, makes beautiful things",
      activity: "Arts and crafts, creative expression",
      secret: "Her paintings show places that don't exist in Playcare"
    },
    {
      id: "picky",
      name: "PickyPiggy",
      role: "Nutrition Expert",
      color: "pink",
      personality: "Enthusiastic about food and healthy eating",
      activity: "Meal planning and cooking lessons",
      secret: "She's always hungry for something more than food..."
    },
    {
      id: "hoppy",
      name: "Hoppy Hopscotch",
      role: "Fitness Coach",
      color: "green",
      personality: "Active and sporty, loves physical activities",
      activity: "Sports and exercise programs",
      secret: "Never stops moving, even when she should be resting"
    },
    {
      id: "kickin",
      name: "KickinChicken",
      role: "Cool Guy",
      color: "yellow",
      personality: "Laid-back and cool, the most popular among children",
      activity: "Social activities and trend-setting",
      secret: "His coolness hides something darker underneath"
    }
  ];

  const handleCritterClick = (critterId: string) => {
    setSelectedCritter(selectedCritter === critterId ? null : critterId);
    
    if (critterId === "catnap") {
      setSleepMode(true);
      setTimeout(() => setSleepMode(false), 3000);
    }
  };

  const handleRedGasClick = () => {
    setRedGasWarning(true);
    setTimeout(() => setRedGasWarning(false), 5000);
  };

  return (
    <div className={`min-h-screen welcome-gradient text-white nostalgic-text ${sleepMode ? 'brightness-50' : ''}`}>
      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors">Game Station</Link>
              <Link to="/school-sector" className="text-gray-300 hover:text-red-400 transition-colors">School</Link>
              <Link to="/make-a-friend" className="text-gray-300 hover:text-red-400 transition-colors">Adoption</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-8 shadow-lg border-b border-purple-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-purple-400 flex items-center subtle-glow">
            <Heart className="w-10 h-10 mr-4" />
            Playcare Center
          </h1>
          <p className="text-purple-200 mt-3 text-lg">Where every child finds their perfect companion</p>
          <p className="text-sm text-gray-300 mt-2">Home of the Smiling Critters and peaceful rest</p>
        </div>
      </header>

      {/* Sleep Mode Overlay */}
      {sleepMode && (
        <div className="fixed inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center">
            <Moon className="w-16 h-16 text-purple-300 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl text-purple-300 mb-2">Sleep time...</h2>
            <p className="text-purple-400">CatNap ensures peaceful dreams for everyone</p>
          </div>
        </div>
      )}

      {/* Red Gas Warning */}
      {redGasWarning && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-900 border border-red-400 p-4 rounded z-50">
          <div className="flex items-center text-red-300">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Warning: Unusual gas detected in ventilation system. Please remain calm.
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16">
        {/* Featured Area */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-purple-500 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-400 text-center">
                Welcome to Playcare - Your Home Away From Home
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                Playcare is where children live, learn, and grow with their favorite toy companions. 
                Our <span className="text-purple-400">Smiling Critters</span> ensure every child feels loved, 
                safe, and <span className="invisible-text">monitored</span> at all times.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/orphanage">Resident Services</Link>
                </Button>
                <Button asChild className="bg-pink-600 hover:bg-pink-700">
                  <Link to="/school-sector">School Programs</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/prototype-conversations">Activities</Link>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700" onClick={handleRedGasClick}>
                  <Link to="/departments">Emergency</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Smiling Critters */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 subtle-glow">Meet the Smiling Critters</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {smilingCritters.map((critter) => (
              <Card 
                key={critter.id}
                className={`bg-slate-800 border-purple-500 cursor-pointer transition-all duration-300 hover:border-purple-300 card-hover ${
                  selectedCritter === critter.id ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => handleCritterClick(critter.id)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-purple-400">
                    {critter.name}
                    <span className={`w-4 h-4 rounded-full bg-${critter.color}-500`}></span>
                  </CardTitle>
                  <p className="text-gray-300 text-sm">{critter.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-2">{critter.personality}</p>
                  <p className="text-gray-400 text-xs mb-4">Activity: {critter.activity}</p>
                  
                  {selectedCritter === critter.id && (
                    <div className="space-y-3 mt-4 p-3 bg-slate-900 rounded border border-purple-500">
                      <div>
                        <h4 className="text-purple-400 font-bold mb-1 text-sm">Behind the Smile</h4>
                        <p className="text-red-300 text-xs">{critter.secret}</p>
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Interact with {critter.name}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">Daily Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-80 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Sun className="w-5 h-5 mr-2" />
                  Daytime Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 7:00 AM - Wake up with DogDay</li>
                  <li>• 8:00 AM - Breakfast with PickyPiggy</li>
                  <li>• 9:00 AM - Morning exercises with Hoppy</li>
                  <li>• 10:00 AM - Learning time with Bubba</li>
                  <li>• 12:00 PM - Lunch and social time</li>
                  <li>• 1:00 PM - Arts and crafts with CraftyCorn</li>
                  <li>• 3:00 PM - Free play and games</li>
                  <li>• 5:00 PM - Dinner preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-80 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Moon className="w-5 h-5 mr-2" />
                  Evening Routine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 6:00 PM - Dinner time</li>
                  <li>• 7:00 PM - Quiet activities</li>
                  <li>• 8:00 PM - Bedtime stories</li>
                  <li>• 8:30 PM - Comfort time with Bobby</li>
                  <li>• 9:00 PM - CatNap's sleep protocol</li>
                  <li>• 9:15 PM - <span className="text-red-400">Red gas sleep aid</span></li>
                  <li>• 10:00 PM - Deep sleep monitoring</li>
                  <li>• Night - <span className="invisible-text">Dream observation</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facility Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">Playcare Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-purple-400 font-bold mb-2">Living Quarters</h3>
                <p className="text-gray-300 text-sm mb-4">Comfortable rooms for all residents</p>
                <Button asChild size="sm">
                  <Link to="/orphanage">Visit Rooms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="text-purple-400 font-bold mb-2">Dining Hall</h3>
                <p className="text-gray-300 text-sm mb-4">Nutritious meals with PickyPiggy</p>
                <Button asChild size="sm">
                  <Link to="/prototype-conversations">Menu</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-purple-400 font-bold mb-2">Recreation Area</h3>
                <p className="text-gray-300 text-sm mb-4">Games and activities</p>
                <Button asChild size="sm">
                  <Link to="/game-station">Play Games</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🛏️</div>
                <h3 className="text-purple-400 font-bold mb-2">Sleep Center</h3>
                <p className="text-gray-300 text-sm mb-4">CatNap's peaceful domain</p>
                <Button asChild size="sm" onClick={() => setSleepMode(true)}>
                  <Link to="/prototype-conversations">Naptime</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-purple-400 font-bold mb-2">Art Studio</h3>
                <p className="text-gray-300 text-sm mb-4">Creative expression space</p>
                <Button asChild size="sm">
                  <Link to="/prototype-conversations">Create Art</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-60 border-purple-600">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="text-purple-400 font-bold mb-2">Medical Wing</h3>
                <p className="text-gray-300 text-sm mb-4">Health and wellness</p>
                <Button asChild size="sm">
                  <Link to="/departments">Health Check</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Notice */}
        <section className="mb-16">
          <Card className="bg-purple-900 bg-opacity-50 border-purple-400 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-purple-400">Special Announcement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200 mb-4">
                We're excited to announce new sleep enhancement protocols! CatNap has been working with our research team 
                to ensure all children get the most <span className="text-red-400">restful sleep possible</span>.
              </p>
              <p className="text-sm text-gray-400">
                The new red gas sleep aid ensures deep, uninterrupted rest. Sweet dreams are guaranteed!
              </p>
              <div className="mt-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 mr-2">
                  <Link to="/prototype-conversations">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400" onClick={handleRedGasClick}>
                  <Link to="/the-doctor">Safety Information</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Playcare Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making every day a joy for children everywhere</p>
          <div className="text-xs text-purple-400 mt-1 opacity-50">
            Sleep Protocol Access: catnap-dreams | Emergency: playcare-911
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Playcare;
