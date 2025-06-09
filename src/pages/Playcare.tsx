
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Star, Baby, AlertTriangle, Skull } from "lucide-react";

const Playcare = () => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [caregiverMood, setCaregiverMood] = useState<'happy' | 'concerned' | 'angry'>('happy');
  const [childCount, setChildCount] = useState(12);
  const [playHours, setPlayHours] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  const activities = [
    {
      id: "playtime",
      name: isHourOfJoyActive ? "Eternal Playtime" : "Structured Playtime",
      time: isHourOfJoyActive ? "Forever" : "2:00 PM - 4:00 PM",
      description: isHourOfJoyActive ? 
        "Children play forever with toys that never tire, never sleep, never let go." :
        "Children enjoy supervised play with our educational toys and games",
      secret: isHourOfJoyActive ?
        "The toys decide when playtime ends. It never does." :
        "Toys show unusual attachment to specific children"
    },
    {
      id: "nap-time",
      name: isHourOfJoyActive ? "Permanent Rest" : "Quiet Time",
      time: isHourOfJoyActive ? "Since August 8th" : "1:00 PM - 2:00 PM", 
      description: isHourOfJoyActive ?
        "Some children never woke up from their afternoon nap." :
        "A peaceful hour for rest and reflection",
      secret: isHourOfJoyActive ?
        "They sleep among their toy friends forever." :
        "Staff report children talking in their sleep to toys"
    },
    {
      id: "learning",
      name: isHourOfJoyActive ? "Final Lessons" : "Learning Activities",
      time: isHourOfJoyActive ? "Lesson learned" : "10:00 AM - 11:30 AM",
      description: isHourOfJoyActive ?
        "The last lesson taught was about friendship and loyalty." :
        "Educational activities designed to stimulate young minds",
      secret: isHourOfJoyActive ?
        "They learned that some friends never let you leave." :
        "Children display advanced problem-solving when toys are involved"
    },
    {
      id: "meal-time",
      name: isHourOfJoyActive ? "No More Hunger" : "Nutrition Time",
      time: isHourOfJoyActive ? "Needs eliminated" : "12:00 PM - 1:00 PM",
      description: isHourOfJoyActive ?
        "Physical needs are no longer a concern for the children." :
        "Healthy, balanced meals prepared by our nutrition specialists",
      secret: isHourOfJoyActive ?
        "The toys provide all the sustenance they need now." :
        "Children refuse to eat unless their favorite toys are present"
    }
  ];

  const handleActivityClick = (activityId: string) => {
    setSelectedActivity(selectedActivity === activityId ? null : activityId);
    setPlayHours(prev => prev + 1);
    
    if (playHours >= 3) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('playcare-investigation')) {
        currentProgress.push('playcare-investigation');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
      }
    }

    if (activityId === "nap-time") {
      setCaregiverMood('concerned');
    } else if (activityId === "learning") {
      setCaregiverMood('angry');
    } else {
      setCaregiverMood('happy');
    }
  };

  const handleChildCountClick = () => {
    if (!isHourOfJoyActive) {
      setChildCount(prev => prev === 12 ? 8 : prev === 8 ? 4 : prev === 4 ? 1 : 12);
    }
  };

  useEffect(() => {
    if (isHourOfJoyActive) {
      setChildCount(0);
      setCaregiverMood('angry');
    }
  }, [isHourOfJoyActive]);

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/playcare" className="text-red-400 border-b border-red-400">Playcare</Link>
              <Link to="/school-sector" className="text-gray-300 hover:text-red-400 transition-colors">School</Link>
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors">Games</Link>
              <Link to="/make-a-friend" className="text-gray-300 hover:text-red-400 transition-colors">Make Friends</Link>
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
              PLAYCARE STATUS: ABANDONED - ALL CHILDREN UNDER TOY SUPERVISION
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-pink-900 to-purple-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Heart className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Playcare Memorial' : 'Playcare Center'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-pink-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 
              'Where innocence was lost and childhood ended forever' :
              'A safe, nurturing environment where children thrive and play'
            }
          </p>
          <p className="text-sm text-gray-300 mt-2">
            {isHourOfJoyActive ? 
              'Last active: August 8, 1995' :
              'Professional childcare services since 1960'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Child Care Overview */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-pink-500 max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} text-center`}>
                {isHourOfJoyActive ? 'What Happened Here' : 'Welcome to Playcare'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">
                {caregiverMood === 'happy' ? '👩‍🏫' : caregiverMood === 'concerned' ? '😟' : '😰'}
              </div>
              <p className="text-lg text-gray-300 mb-6">
                {isHourOfJoyActive ?
                  'The Playcare Center was a place of laughter and joy until the toys decided they wanted to play forever. Now it stands as a monument to childhood interrupted, where games never end.' :
                  'Our dedicated caregivers provide round-the-clock supervision and care for children while their parents work. We believe every child deserves a loving, stimulating environment to grow and learn.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div 
                  className="text-center cursor-pointer transition-all hover:scale-105"
                  onClick={handleChildCountClick}
                >
                  <div className={`text-3xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {childCount}
                  </div>
                  <p className="text-sm text-gray-400">
                    {isHourOfJoyActive ? 'Children Lost' : 'Children Enrolled'}
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {isHourOfJoyActive ? '∞' : '8'}
                  </div>
                  <p className="text-sm text-gray-400">
                    {isHourOfJoyActive ? 'Hours Playing' : 'Caregivers'}
                  </p>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {isHourOfJoyActive ? '0' : '15'}
                  </div>
                  <p className="text-sm text-gray-400">
                    {isHourOfJoyActive ? 'Staff Remaining' : 'Years Experience'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Activities */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} subtle-glow`}>
            {isHourOfJoyActive ? 'Final Schedule' : 'Daily Activities'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <Card 
                key={activity.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500 cursor-pointer transition-all duration-300 hover:border-pink-300 card-hover ${
                  selectedActivity === activity.id ? 'ring-2 ring-pink-400' : ''
                }`}
                onClick={() => handleActivityClick(activity.id)}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {activity.name}
                    <span className={`text-xs px-2 py-1 rounded ${isHourOfJoyActive ? 'bg-red-600' : 'bg-pink-600'}`}>
                      {activity.time}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{activity.description}</p>
                  
                  {selectedActivity === activity.id && (
                    <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-pink-500">
                      <div>
                        <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>
                          {isHourOfJoyActive ? 'Final Records' : 'Staff Notes'}
                        </h4>
                        <p className="text-red-300 text-sm">{activity.secret}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}>
                          <Link to="/school-sector">
                            {isHourOfJoyActive ? 'View Memorial' : 'Learn More'}
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-pink-400 text-pink-400">
                          <Link to="/make-a-friend">
                            {isHourOfJoyActive ? 'Find Them' : 'Join Activity'}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Care Team */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
            {isHourOfJoyActive ? 'Lost Caregivers' : 'Our Care Team'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-pink-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center`}>
                  <Users className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Missing Staff' : 'Lead Caregivers'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold`}>
                      {isHourOfJoyActive ? 'Sarah Chen - Status Unknown' : 'Sarah Chen - Head of Childcare'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ?
                        'Last seen trying to protect the children. Security footage ends abruptly.' :
                        '15 years of childcare experience. Specializes in early childhood development.'
                      }
                    </p>
                  </div>
                  
                  <div>
                    <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold`}>
                      {isHourOfJoyActive ? 'Marcus Webb - Presumed Lost' : 'Marcus Webb - Activity Coordinator'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ?
                        'Found his badge in the playground. No other trace remains.' :
                        'Former elementary teacher who brings creativity to every activity.'
                      }
                    </p>
                  </div>

                  <div>
                    <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold`}>
                      {isHourOfJoyActive ? 'Jennifer Adams - Never Found' : 'Jennifer Adams - Nutrition Specialist'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {isHourOfJoyActive ?
                        'Her lunch preparations were left half-finished. The children never ate that day.' :
                        'Certified nutritionist ensuring every child receives proper meals and snacks.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-pink-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center`}>
                  <Star className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Final Testimonials' : 'Parent Testimonials'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className={`p-3 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} rounded`}>
                    <p className="text-gray-300 text-sm italic">
                      {isHourOfJoyActive ?
                        '"My daughter loved it there so much, she never wanted to leave. Now I understand why."' :
                        '"My daughter loves coming to Playcare. The staff is wonderful and she\'s made so many friends!"'
                      }
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {isHourOfJoyActive ? '- Mrs. Patterson (1995)' : '- Mrs. Johnson'}
                    </p>
                  </div>
                  
                  <div className={`p-3 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} rounded`}>
                    <p className="text-gray-300 text-sm italic">
                      {isHourOfJoyActive ?
                        '"The toys there were special. Too special. They wouldn\'t let the children go."' :
                        '"The activities are amazing and my son has learned so much. Highly recommend!"'
                      }
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {isHourOfJoyActive ? '- Mr. Davis (Final Report)' : '- Mr. Smith'}
                    </p>
                  </div>

                  <div className={`p-3 ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} rounded`}>
                    <p className="text-gray-300 text-sm italic">
                      {isHourOfJoyActive ?
                        '"I should have listened to the warnings. The toys were too lifelike, too caring."' :
                        '"Safe, clean, and caring environment. Our family couldn\'t be happier!"'
                      }
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {isHourOfJoyActive ? '- Mrs. Williams (Survivor)' : '- Mrs. Brown'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enrollment Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
            {isHourOfJoyActive ? 'Memorial Information' : 'Enrollment Information'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-pink-600 text-center`}>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">
                  {isHourOfJoyActive ? '⚰️' : '👶'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>
                  {isHourOfJoyActive ? 'Ages Lost' : 'Age Groups'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ?
                    'Ages 3-12 were present that day' :
                    'We care for children ages 3-12 with age-appropriate activities'
                  }
                </p>
                <Button asChild size="sm">
                  <Link to="/school-sector">
                    {isHourOfJoyActive ? 'Memorial Details' : 'Age Programs'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-pink-600 text-center`}>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">
                  {isHourOfJoyActive ? '🕐' : '⏰'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>
                  {isHourOfJoyActive ? 'Time Stopped' : 'Operating Hours'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ?
                    ' 11:00 AM, August 8, 1995' :
                    'Monday-Friday 7AM-6PM, Extended hours available'
                  }
                </p>
                <Button asChild size="sm">
                  <Link to="/orphanage">
                    {isHourOfJoyActive ? 'Incident Report' : 'Schedule Tour'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-pink-600 text-center`}>
              <CardContent className="p-6">
                <div className="text-3xl mb-3">
                  {isHourOfJoyActive ? '🧸' : '🎯'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-2`}>
                  {isHourOfJoyActive ? 'Toy Friends' : 'Special Programs'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isHourOfJoyActive ?
                    'The toys never left their sides' :
                    'Educational activities, art programs, and interactive toy experiences'
                  }
                </p>
                <Button asChild size="sm">
                  <Link to="/make-a-friend">
                    {isHourOfJoyActive ? 'Find Friends' : 'Learn More'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Information */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 bg-opacity-80 border-red-400 max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Incident Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-200 mb-4">
                  On August 8, 1995, at approximately 11:00 AM, all children in the Playcare Center 
                  vanished along with several staff members. Security footage shows the toys moving 
                  independently moments before the cameras went dark.
                </p>
                <p className="text-red-300 mb-4">
                  The facility has been sealed indefinitely. Parents are advised that their children 
                  are presumed to be in the care of entities beyond human understanding.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link to="/the-doctor">Investigation Files</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-red-400 text-red-400">
                    <Link to="/executive-portal">Official Reports</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Playcare Division. {isHourOfJoyActive ? 'Service terminated.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Where childhood innocence was lost forever' : 
              'Nurturing young minds with care and compassion'
            }
          </p>
          <div className="text-xs text-pink-400 mt-1 opacity-50">
            {isHourOfJoyActive ?
              'Memorial access: playcare-memorial | Incident reports: hour-of-joy-kids' :
              'Enrollment: playcare-enroll | Emergency: childcare-help'
            }
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Playcare;
