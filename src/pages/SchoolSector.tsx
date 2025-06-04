import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Clock, AlertTriangle } from "lucide-react";

const SchoolSector = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [delightMood, setDelightMood] = useState<'happy' | 'concerned' | 'angry'>('happy');
  const [attendance, setAttendance] = useState(true);

  const classes = [
    {
      id: "basic-learning",
      name: "Basic Learning",
      teacher: "Miss Delight",
      level: "Elementary",
      subject: "Reading, Writing, Arithmetic",
      description: "Fundamental education for growing minds",
      secret: "Students who ask too many questions need special attention"
    },
    {
      id: "playtime-studies",
      name: "Playtime Studies", 
      teacher: "Miss Delight",
      level: "All Ages",
      subject: "Toy Interaction & Friendship",
      description: "Learning to be the perfect friend to your toys",
      secret: "The toys are watching and learning about you too"
    },
    {
      id: "behavioral-conditioning",
      name: "Good Behavior Class",
      teacher: "Miss Delight",
      level: "Remedial",
      subject: "Discipline & Compliance",
      description: "Special class for children who need guidance",
      secret: "Bad children need to be taught proper lessons"
    },
    {
      id: "advanced-studies",
      name: "Advanced Studies",
      teacher: "Miss Delight",
      level: "Gifted",
      subject: "Special Projects",
      description: "For exceptional students with potential",
      secret: "Some students are chosen for very special experiments"
    }
  ];

  const handleClassClick = (classId: string) => {
    setSelectedClass(selectedClass === classId ? null : classId);
    
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
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
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

      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-blue-900 text-white p-8 shadow-lg border-b border-green-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-green-400 flex items-center subtle-glow">
            <GraduationCap className="w-10 h-10 mr-4" />
            School Sector
          </h1>
          <p className="text-green-200 mt-3 text-lg">Excellence in education with loving guidance</p>
          <p className="text-sm text-gray-300 mt-2">Led by Miss Delight and her sister teachers</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Miss Delight Introduction */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-green-500 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400 text-center">
                Meet Miss Delight - Your Dedicated Teacher
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">
                {delightMood === 'happy' ? '👩‍🏫' : delightMood === 'concerned' ? '😟' : '😠'}
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Miss Delight is our most <span className="text-green-400">dedicated educator</span>, ensuring every child 
                receives the attention they deserve. She believes in 
                <span className="invisible-text"> strict discipline and </span> 
                personalized learning for each student.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                "A good student is a quiet student. A perfect student never questions the lesson." - Miss Delight
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/prototype-conversations">Class Schedule</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-400 text-green-400">
                  <Link to="/playcare">Student Life</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400" onClick={handleAttendanceClick}>
                  <Link to="/departments">Attendance Office</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Classes */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 subtle-glow">Available Classes</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {classes.map((classItem) => (
              <Card 
                key={classItem.id}
                className={`bg-slate-800 border-green-500 cursor-pointer transition-all duration-300 hover:border-green-300 card-hover ${
                  selectedClass === classItem.id ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => handleClassClick(classItem.id)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-green-400">
                    {classItem.name}
                    <span className={`text-xs px-2 py-1 rounded ${
                      classItem.level === 'Elementary' ? 'bg-blue-600' :
                      classItem.level === 'All Ages' ? 'bg-green-600' :
                      classItem.level === 'Remedial' ? 'bg-red-600' :
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
                        <h4 className="text-green-400 font-bold mb-2">Teacher's Notes</h4>
                        <p className="text-red-300 text-sm">{classItem.secret}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Enroll</Button>
                        <Button size="sm" variant="outline" className="border-green-400 text-green-400">
                          Class Materials
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
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">School Rules & Expectations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 bg-opacity-80 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Classroom Behavior
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Always raise your hand before speaking</li>
                  <li>• Stay in your assigned seat at all times</li>
                  <li>• Complete all assignments without question</li>
                  <li>• No talking during lessons</li>
                  <li>• Perfect attendance is expected</li>
                  <li>• Respect Miss Delight's authority completely</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 bg-opacity-80 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Disciplinary Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• First offense: Warning and extra homework</li>
                  <li>• Second offense: After-school detention</li>
                  <li>• Third offense: Special behavior class</li>
                  <li>• Repeated offenses: One-on-one correction</li>
                  <li>• Serious disruption: Permanent remediation</li>
                  <li>• <span className="text-red-400">No student leaves until they learn</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Daily Class Schedule</h2>
          <Card className="bg-slate-800 bg-opacity-80 border-green-500 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                School Day Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-bold mb-3">Morning Session</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>8:00 AM - Attendance and inspection</li>
                    <li>8:15 AM - Morning announcements</li>
                    <li>8:30 AM - Basic Learning (Reading)</li>
                    <li>9:30 AM - Mathematics and Logic</li>
                    <li>10:30 AM - Recess (supervised)</li>
                    <li>11:00 AM - Playtime Studies</li>
                    <li>12:00 PM - Lunch break</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold mb-3">Afternoon Session</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>1:00 PM - Writing and Communication</li>
                    <li>2:00 PM - Science and Observation</li>
                    <li>3:00 PM - Good Behavior Class</li>
                    <li>4:00 PM - Study hall</li>
                    <li>5:00 PM - Advanced Studies (selected)</li>
                    <li>6:00 PM - Evening cleanup</li>
                    <li>6:30 PM - Return to Playcare</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Teachers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Other Faculty Members</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 bg-opacity-60 border-green-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">👩‍🏫</div>
                <h3 className="text-green-400 font-bold">Miss Delight #2</h3>
                <p className="text-xs text-gray-400">Identical sister teacher</p>
                <p className="text-xs text-red-400 mt-2">Currently in maintenance</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">Sister Stories</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-green-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">👩‍🏫</div>
                <h3 className="text-green-400 font-bold">Miss Delight #3</h3>
                <p className="text-xs text-gray-400">Backup instructor</p>
                <p className="text-xs text-red-400 mt-2">Status unknown</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/the-doctor">Investigation</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 bg-opacity-60 border-green-600 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="text-green-400 font-bold">Assistant Bot</h3>
                <p className="text-xs text-gray-400">Automated helper</p>
                <p className="text-xs text-yellow-400 mt-2">Always watching</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/prototype-conversations">AI Helper</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Programs */}
        <section className="mb-16">
          <Card className="bg-red-900 bg-opacity-50 border-red-400 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-red-400">Special Education Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-200 mb-4">
                For students who require additional attention, we offer intensive one-on-one sessions with Miss Delight. 
                These sessions ensure that <span className="text-red-400">no child is left behind</span> and that everyone 
                learns to be the perfect student.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Warning: These programs have a 100% success rate in behavioral modification.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/prototype-conversations">Program Details</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400">
                  <Link to="/the-doctor">Safety Protocols</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Attendance Warning */}
        {!attendance && (
          <section className="mb-16">
            <Card className="bg-red-900 bg-opacity-80 border-red-400 max-w-2xl mx-auto animate-pulse">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Attendance Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-300 mb-4">
                  Miss Delight has noticed your absence. Skipping school is not acceptable behavior. 
                  Report to the behavioral conditioning classroom immediately.
                </p>
                <p className="text-xs text-gray-400">
                  Access Code: miss-delight-sees-all
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700 mt-3">
                  <Link to="/prototype-conversations">Report Now</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-green-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Education Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Shaping young minds with care and precision</p>
          <div className="text-xs text-green-400 mt-1 opacity-50">
            Student Records: school-files | Emergency: miss-delight-help
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolSector;
