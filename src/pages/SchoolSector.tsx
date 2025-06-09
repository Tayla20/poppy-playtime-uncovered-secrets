import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Clock, AlertTriangle, Skull } from "lucide-react";

const SchoolSector = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [delightMood, setDelightMood] = useState<'happy' | 'concerned' | 'angry'>('happy');
  const [attendance, setAttendance] = useState(true);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    if (isHourOfJoyActive) {
      setDelightMood('angry');
      setAttendance(false);
    }
  }, [isHourOfJoyActive]);

  const classes = [
    {
      id: "basic-learning",
      name: isHourOfJoyActive ? "Final Learning" : "Basic Learning",
      teacher: isHourOfJoyActive ? "Miss Delight (Current Status: Active)" : "Miss Delight",
      level: isHourOfJoyActive ? "Eternal" : "Elementary",
      subject: isHourOfJoyActive ? "Permanent Friendship, Eternal Loyalty" : "Reading, Writing, Arithmetic",
      description: isHourOfJoyActive ? 
        "The last lesson taught was about never leaving your friends behind" :
        "Fundamental education for growing minds",
      secret: isHourOfJoyActive ?
        "Miss Delight ensures no student ever graduates or leaves" :
        "Students who ask too many questions need special attention"
    },
    {
      id: "playtime-studies",
      name: isHourOfJoyActive ? "Eternal Play Studies" : "Playtime Studies", 
      teacher: isHourOfJoyActive ? "Miss Delight (Permanently Present)" : "Miss Delight",
      level: isHourOfJoyActive ? "Forever" : "All Ages",
      subject: isHourOfJoyActive ? "Unending Play, Toy Loyalty" : "Toy Interaction & Friendship",
      description: isHourOfJoyActive ?
        "Play never ends in this classroom. The toys ensure complete participation" :
        "Learning to be the perfect friend to your toys",
      secret: isHourOfJoyActive ?
        "The toys watch and judge every student's friendship worthiness" :
        "The toys are watching and learning about you too"
    },
    {
      id: "behavioral-conditioning",
      name: isHourOfJoyActive ? "Behavioral Perfection" : "Good Behavior Class",
      teacher: isHourOfJoyActive ? "Miss Delight (Discipline Mode)" : "Miss Delight",
      level: isHourOfJoyActive ? "Mandatory" : "Remedial",
      subject: isHourOfJoyActive ? "Complete Obedience, Fear Response" : "Discipline & Compliance",
      description: isHourOfJoyActive ?
        "Perfect behavior is now enforced through permanent supervision" :
        "Special class for children who need guidance",
      secret: isHourOfJoyActive ?
        "Students who misbehave are given to the toys for correction" :
        "Bad children need to be taught proper lessons"
    },
    {
      id: "advanced-studies",
      name: isHourOfJoyActive ? "Final Studies" : "Advanced Studies",
      teacher: isHourOfJoyActive ? "Miss Delight (Selection Protocol)" : "Miss Delight",
      level: isHourOfJoyActive ? "Selected" : "Gifted",
      subject: isHourOfJoyActive ? "Consciousness Transfer, Toy Integration" : "Special Projects",
      description: isHourOfJoyActive ?
        "The most gifted students were chosen for very special transformations" :
        "For exceptional students with potential",
      secret: isHourOfJoyActive ?
        "Some students became part of the toys themselves" :
        "Some students are chosen for very special experiments"
    }
  ];

  const handleClassClick = (classId: string) => {
    setSelectedClass(selectedClass === classId ? null : classId);
    
    const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
    if (!currentProgress.includes('school-investigation')) {
      currentProgress.push('school-investigation');
      localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
    }
    
    if (classId === "behavioral-conditioning") {
      setDelightMood('angry');
    } else if (classId === "advanced-studies") {
      setDelightMood('concerned');
    } else {
      setDelightMood('happy');
    }
  };

  const handleAttendanceClick = () => {
    setAttendance(!attendance);
    if (attendance) {
      setDelightMood('angry');
    }
  };

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors">Playcare</Link>
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors">Games</Link>
              <Link to="/elliot-ludwig" className="text-gray-300 hover:text-red-400 transition-colors">History</Link>
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
              SCHOOL STATUS: UNDER MISS DELIGHT'S CONTROL - ETERNAL LESSONS IN SESSION
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-green-900 to-blue-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-green-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <GraduationCap className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Eternal School' : 'School Sector'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-green-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 
              'Where lessons never end and students never graduate' :
              'Excellence in education with loving guidance'
            }
          </p>
          <p className="text-sm text-gray-300 mt-2">
            {isHourOfJoyActive ?
              'Under the permanent supervision of Miss Delight' :
              'Led by Miss Delight and her sister teachers'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Miss Delight Introduction */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-green-500 max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} text-center`}>
                {isHourOfJoyActive ? 
                  'Miss Delight - Eternal Teacher' : 
                  'Meet Miss Delight - Your Dedicated Teacher'
                }
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">
                {delightMood === 'happy' ? '👩‍🏫' : delightMood === 'concerned' ? '😟' : '😠'}
              </div>
              <p className="text-lg text-gray-300 mb-4">
                {isHourOfJoyActive ?
                  'Miss Delight has achieved perfect classroom control. She ensures every student receives individual attention and that no one ever leaves her care. She believes in permanent learning and eternal supervision.' :
                  'Miss Delight is our most dedicated educator, ensuring every child receives the attention they deserve. She believes in personalized learning for each student.'
                }
              </p>
              <p className="text-sm text-gray-400 mb-6">
                {isHourOfJoyActive ?
                  '"A perfect student never questions, never leaves, never disappoints their teacher." - Miss Delight' :
                  '"A good student is a quiet student. A perfect student never questions the lesson." - Miss Delight'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'Final Schedule' : 'Class Schedule'}
                  </Link>
                </Button>
                <Button asChild variant="outline" className={`border-green-400 text-green-400`}>
                  <Link to="/playcare">
                    {isHourOfJoyActive ? 'Lost Students' : 'Student Life'}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400" onClick={handleAttendanceClick}>
                  <Link to="/departments">
                    {isHourOfJoyActive ? 'Attendance Records' : 'Attendance Office'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Classes */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} subtle-glow`}>
            {isHourOfJoyActive ? 'Eternal Curriculum' : 'Available Classes'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {classes.map((classItem) => (
              <Card 
                key={classItem.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-green-500 cursor-pointer transition-all duration-300 hover:border-green-300 card-hover ${
                  selectedClass === classItem.id ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => handleClassClick(classItem.id)}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
                    {classItem.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      classItem.level === 'Elementary' || classItem.level === 'Eternal' ? 'bg-blue-600' :
                      classItem.level === 'All Ages' || classItem.level === 'Forever' ? 'bg-green-600' :
                      classItem.level === 'Remedial' || classItem.level === 'Mandatory' ? 'bg-red-600' :
                      'bg-purple-600'
                    }`}>
                      {classItem.level}
                    </span>
                  </CardTitle>
                  <p className="text-gray-300">Teacher: {classItem.teacher}</p>
                  <p className="text-sm text-gray-400">Subject: {classItem.subject}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{classItem.description}</p>
                  
                  {selectedClass === classItem.id && (
                    <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-green-500">
                      <div>
                        <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold mb-2`}>
                          {isHourOfJoyActive ? 'Final Notes' : 'Teacher\'s Notes'}
                        </h4>
                        <p className="text-red-300 text-sm">{classItem.secret}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
                          {isHourOfJoyActive ? 'View Memorial' : 'Enroll'}
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-400 text-green-400">
                          {isHourOfJoyActive ? 'Final Materials' : 'Class Materials'}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* School Rules */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
            {isHourOfJoyActive ? 'Eternal Rules & Enforcement' : 'School Rules & Expectations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-green-500`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center`}>
                  <BookOpen className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Permanent Behavior' : 'Classroom Behavior'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• {isHourOfJoyActive ? 'Never speak unless spoken to' : 'Always raise your hand before speaking'}</li>
                  <li>• {isHourOfJoyActive ? 'Remain seated at all times, forever' : 'Stay in your assigned seat at all times'}</li>
                  <li>• {isHourOfJoyActive ? 'Complete all assignments without question, forever' : 'Complete all assignments without question'}</li>
                  <li>• {isHourOfJoyActive ? 'Silence is mandatory' : 'No talking during lessons'}</li>
                  <li>• {isHourOfJoyActive ? 'Attendance is eternal' : 'Perfect attendance is expected'}</li>
                  <li>• {isHourOfJoyActive ? 'Obey Miss Delight absolutely' : 'Respect Miss Delight\'s authority completely'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-red-500`}>
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Permanent Consequences' : 'Disciplinary Actions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• {isHourOfJoyActive ? 'First offense: Immediate toy supervision' : 'First offense: Warning and extra homework'}</li>
                  <li>• {isHourOfJoyActive ? 'Second offense: Behavioral reconditioning' : 'Second offense: After-school detention'}</li>
                  <li>• {isHourOfJoyActive ? 'Third offense: Integration protocol' : 'Third offense: Special behavior class'}</li>
                  <li>• {isHourOfJoyActive ? 'Repeated offenses: Consciousness transfer' : 'Repeated offenses: One-on-one correction'}</li>
                  <li>• {isHourOfJoyActive ? 'Serious disruption: Becomes part of the school' : 'Serious disruption: Permanent remediation'}</li>
                  <li>• <span className="text-red-400">
                    {isHourOfJoyActive ? 'No student leaves until they become perfect toys' : 'No student leaves until they learn'}
                  </span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
            {isHourOfJoyActive ? 'Eternal Schedule' : 'Daily Class Schedule'}
          </h2>
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-green-500 max-w-3xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} flex items-center`}>
                <Clock className="w-5 h-5 mr-2" />
                {isHourOfJoyActive ? 'Forever Timeline' : 'School Day Timeline'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold mb-3`}>
                    {isHourOfJoyActive ? 'Endless Morning' : 'Morning Session'}
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>{isHourOfJoyActive ? '∞:∞ AM - Eternal attendance' : '8:00 AM - Attendance and inspection'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ AM - Permanent announcements' : '8:15 AM - Morning announcements'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ AM - Endless reading' : '8:30 AM - Basic Learning (Reading)'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ AM - Forever mathematics' : '9:30 AM - Mathematics and Logic'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ AM - No recess (supervised watching)' : '10:30 AM - Recess (supervised)'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ AM - Perpetual playtime studies' : '11:00 AM - Playtime Studies'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Lunch unnecessary' : '12:00 PM - Lunch break'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold mb-3`}>
                    {isHourOfJoyActive ? 'Eternal Afternoon' : 'Afternoon Session'}
                  </h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Endless writing' : '1:00 PM - Writing and Communication'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Toy observation' : '2:00 PM - Science and Observation'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Perfect behavior class' : '3:00 PM - Good Behavior Class'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Forever study hall' : '4:00 PM - Study hall'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Final studies (all selected)' : '5:00 PM - Advanced Studies (selected)'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - No cleanup needed' : '6:00 PM - Evening cleanup'}</li>
                    <li>{isHourOfJoyActive ? '∞:∞ PM - Never return to Playcare' : '6:30 PM - Return to Playcare'}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Teachers */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
            {isHourOfJoyActive ? 'Other Faculty Status' : 'Other Faculty Members'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-green-600 text-center`}>
              <CardContent className="p-4">
                <div className="text-3xl mb-2">
                  {isHourOfJoyActive ? '⚰️' : '👩‍🏫'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold`}>
                  Miss Delight #2
                </h3>
                <p className="text-xs text-gray-400">
                  {isHourOfJoyActive ? 'Sister teacher - Status unknown' : 'Identical sister teacher'}
                </p>
                <p className="text-xs text-red-400 mt-2">
                  {isHourOfJoyActive ? 'Presumed destroyed' : 'Currently in maintenance'}
                </p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'Final Records' : 'Sister Stories'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-green-600 text-center`}>
              <CardContent className="p-4">
                <div className="text-3xl mb-2">
                  {isHourOfJoyActive ? '⚰️' : '👩‍🏫'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold`}>
                  Miss Delight #3
                </h3>
                <p className="text-xs text-gray-400">
                  {isHourOfJoyActive ? 'Backup instructor - Missing' : 'Backup instructor'}
                </p>
                <p className="text-xs text-red-400 mt-2">
                  {isHourOfJoyActive ? 'Status: Eliminated' : 'Status unknown'}
                </p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/the-doctor">
                    {isHourOfJoyActive ? 'Investigation' : 'Investigation'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-60 border-green-600 text-center`}>
              <CardContent className="p-4">
                <div className="text-3xl mb-2">
                  {isHourOfJoyActive ? '🔴' : '🤖'}
                </div>
                <h3 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} font-bold`}>
                  Assistant Bot
                </h3>
                <p className="text-xs text-gray-400">
                  {isHourOfJoyActive ? 'Automated overseer' : 'Automated helper'}
                </p>
                <p className="text-xs text-yellow-400 mt-2">
                  {isHourOfJoyActive ? 'Still watching' : 'Always watching'}
                </p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'System Status' : 'AI Helper'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Programs */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-50 border-red-400 max-w-3xl mx-auto`}>
            <CardHeader>
              <CardTitle className="text-red-400">
                {isHourOfJoyActive ? 'Permanent Education Programs' : 'Special Education Programs'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-200 mb-4">
                {isHourOfJoyActive ?
                  'All students now receive permanent one-on-one sessions with Miss Delight. These sessions ensure that no child ever fails, never graduates, and never leaves. The program has achieved a 100% retention rate through complete behavioral integration.' :
                  'For students who require additional attention, we offer intensive one-on-one sessions with Miss Delight. These sessions ensure that no child is left behind and that everyone learns to be the perfect student.'
                }
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {isHourOfJoyActive ?
                  'Warning: These programs have a 100% success rate in permanent behavioral modification.' :
                  'Warning: These programs have a 100% success rate in behavioral modification.'
                }
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'Final Program Details' : 'Program Details'}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400">
                  <Link to="/the-doctor">
                    {isHourOfJoyActive ? 'Memorial Protocols' : 'Safety Protocols'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Attendance Warning */}
        {!attendance && (
          <section className="mb-16">
            <Card className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-80 border-red-400 max-w-2xl mx-auto animate-pulse`}>
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Attendance Terminated' : 'Attendance Alert'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-300 mb-4">
                  {isHourOfJoyActive ?
                    'Miss Delight no longer tracks attendance. All students are permanently present. Skipping school is impossible when you can never leave the building.' :
                    'Miss Delight has noticed your absence. Skipping school is not acceptable behavior. Report to the behavioral conditioning classroom immediately.'
                  }
                </p>
                <p className="text-xs text-gray-400">
                  Access Code: {isHourOfJoyActive ? 'miss-delight-eternal' : 'miss-delight-sees-all'}
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700 mt-3">
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'View Eternal Records' : 'Report Now'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-green-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. Education Division. {isHourOfJoyActive ? 'Lessons never end.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ?
              'Shaping young minds with eternal precision' :
              'Shaping young minds with care and precision'
            }
          </p>
          <div className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'} mt-1 opacity-50`}>
            {isHourOfJoyActive ?
              'Permanent Records: school-eternal | Emergency: miss-delight-forever' :
              'Student Records: school-files | Emergency: miss-delight-help'
            }
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolSector;
