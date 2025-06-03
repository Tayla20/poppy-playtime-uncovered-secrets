
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-red-950 shadow-lg sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400" style={{ textShadow: '0 0 10px #dc2626' }}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-red-400 flex items-center" style={{ textShadow: '0 0 15px #dc2626' }}>
            <Users className="w-8 h-8 mr-3" />
            About Playtime Co.
          </h1>
          <p className="text-red-200 mt-2">Pioneering toy innovation since 1950</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Our Legacy</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-red-900 bg-opacity-50 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-400">Founded on Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Playtime Co. was founded in 1950 with a simple mission: to create toys that bring joy and wonder to children around the world. 
                  What started as a small workshop has grown into one of the most innovative toy companies in the industry.
                </p>
                <p className="text-gray-300 mb-4">
                  Our breakthrough came in the 1990s with the development of our revolutionary "Bigger Bodies" technology, 
                  allowing us to create larger-than-life companions that children could truly bond with.
                </p>
                <p className="text-gray-300">
                  Today, we continue to push the boundaries of what's possible in toy design, always keeping the magic of childhood at the heart of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="font-bold mb-2 text-red-400">Love</h3>
                <p className="text-gray-300 text-sm">Every toy is crafted with genuine care and affection</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Code: LV-456
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="font-bold mb-2 text-red-400">Excellence</h3>
                <p className="text-gray-300 text-sm">We strive for perfection in every detail</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Standard: EX-789
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="font-bold mb-2 text-red-400">Community</h3>
                <p className="text-gray-300 text-sm">Building connections that last forever</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Access: CM-123
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="font-bold mb-2 text-red-400">Innovation</h3>
                <p className="text-gray-300 text-sm">Pioneering the future of play</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Protocol: IN-1006
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Elliot Ludwig</h3>
                <p className="text-gray-300 text-sm mb-2">Founder & CEO</p>
                <p className="text-gray-400 text-xs">Visionary leader with a passion for bringing joy to children everywhere.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Executive ID: biggerbodies
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Dr. Harley Sawyer</h3>
                <p className="text-gray-300 text-sm mb-2">Chief Research Officer</p>
                <p className="text-gray-400 text-xs">Leading our innovation initiatives and breakthrough technologies.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Research Lead: research789
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Dr. Sarah Chen</h3>
                <p className="text-gray-300 text-sm mb-2">Head of Child Psychology</p>
                <p className="text-gray-400 text-xs">Ensuring our toys meet the emotional needs of every child.</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Medical Access: medical456
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900 bg-opacity-50 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-400">Industry Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• 1995: Innovation Award for Bigger Bodies Technology</li>
                  <li>• 1993: Best Large-Scale Toy Design (Huggy Wuggy)</li>
                  <li>• 1991: Safety Excellence in Manufacturing</li>
                  <li>• 1990: Children's Choice Award (Poppy Doll)</li>
                  <li>• 1975: Toy Industry Lifetime Achievement Award</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardHeader>
                <CardTitle className="text-red-400">Special Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Playcare Educational Initiative</li>
                  <li>• Community Outreach Programs</li>
                  <li>• Advanced Research Partnerships</li>
                  <li>• Child Development Studies</li>
                  <li>• Special Needs Toy Development</li>
                </ul>
                <div className="text-xs text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Program Access: View our specialized facilities for more information
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Company Info */}
        <div className="mt-8 p-4 bg-red-950 bg-opacity-30 border border-red-700 rounded text-xs opacity-75">
          <p className="text-red-300">
            <strong>Corporate Notice:</strong> Playtime Co. is committed to transparency and ethical business practices. 
            For detailed operational information, authorized personnel may access our 
            <span className="cursor-pointer hover:text-green-400" title="Hidden route">/departments</span> directory 
            or review our comprehensive documentation through appropriate channels.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500">
            Corporate Registry: PC-1950 | Authorized Personnel Only
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
