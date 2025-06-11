import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Building, Clock, Eye, Star } from "lucide-react";

const About = () => {
  const [staffClicks, setStaffClicks] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");

  // Track page visit
  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('about');
  }, []);

  const staffMembers = [
    { id: 1, name: "Dr. Ludwig", title: "Head of Research", department: "Research Division", years: 15 },
    { id: 2, name: "Stella Greyber", title: "Facility Director", department: "Facility Management", years: 20 },
    { id: 3, name: "Leith Pierre", title: "Special Projects Lead", department: "Special Projects", years: 10 },
    { id: 4, name: "Jameson Sawyer", title: "Head of Security", department: "Security", years: 12 },
    { id: 5, name: "Dr. Chen", title: "Child Psychology", department: "Behavioral Studies", years: 8 },
    { id: 6, name: "Marcus Davis", title: "Lead Engineer", department: "Engineering", years: 14 },
    { id: 7, name: "Amy Rodriguez", title: "Lab Technician", department: "Research Lab", years: 6 },
    { id: 8, name: "Emma Foster", title: "Toy Designer", department: "Design", years: 9 },
    { id: 9, name: "Bob Matthews", title: "Maintenance", department: "Facility Maintenance", years: 11 },
    { id: 10, name: "Patricia Wells", title: "Food Services", department: "Cafeteria", years: 7 },
  ];

  const handleStaffClick = (id: number) => {
    setStaffClicks(prevClicks => {
      const newClicks = prevClicks + 1;
      if (newClicks >= 15) {
        revealHiddenMessage();
      }
      return newClicks;
    });
  };

  const revealHiddenMessage = () => {
    setHiddenMessage("The facility remembers all. The children are waiting. The Hour of Joy approaches.");
    setTimeout(() => setHiddenMessage(""), 10000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-slate-950 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold subtle-glow">PLAYTIME CO.</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Game Station</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Playcare</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Contact</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 subtle-glow nostalgic-text">
            Our Legacy
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 nostalgic-text">
              Since 1950, Playtime Co. has been at the forefront of toy innovation, creating smiles and memories for children around the world. Our commitment to quality, safety, and imagination has made us a trusted name in households everywhere.
            </p>
            <p className="text-lg text-gray-300 mb-8 nostalgic-text">
              From our humble beginnings to our state-of-the-art facilities, we've always strived to push the boundaries of what's possible. Our Bigger Bodies Initiative is a testament to our dedication to creating toys that are not only fun but also educational and enriching.
            </p>
            <p className="text-lg text-gray-300 nostalgic-text">
              Join us as we continue to shape the future of play, one toy at a time.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 subtle-glow nostalgic-text">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-red-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-400 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We constantly seek new and creative ways to enhance the play experience.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-red-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-400 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We are committed to producing toys that meet the highest standards of excellence.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-red-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-400 flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We believe in giving back and supporting the communities where we operate.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8 subtle-glow nostalgic-text">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {staffMembers.map(staff => (
              <Card key={staff.id} className="bg-slate-800 border-red-700 hover:border-red-500 transition-colors cursor-pointer" onClick={() => handleStaffClick(staff.id)}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-red-400 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    {staff.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{staff.title}</p>
                  <p className="text-gray-400 text-xs">{staff.department}</p>
                  <div className="mt-2 flex items-center text-gray-500 text-xs">
                    <Clock className="w-4 h-4 mr-1" />
                    Years with Playtime Co.: {staff.years}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {hiddenMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
            <div className="glitch-text" data-text={hiddenMessage}>
              {hiddenMessage}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="The toys are listening">System Status</span> |
            <span className="hover:text-green-400 transition-colors invisible-text"> The Prototype Knows</span> |
            <span className="hover:text-green-400 transition-colors backwards-text"> gnimoc si emoS</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <Star className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">We are always watching. The children will understand soon.</span>
            <Star className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
