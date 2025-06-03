
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Star, Eye, FileText } from "lucide-react";

const Orphanage = () => {
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);

  const children = [
    {
      id: "marie",
      name: "Marie Payne",
      age: 8,
      status: "Adopted",
      traits: "Creative, Artistic, Shy",
      notes: "Shows exceptional creativity in art class. Responds well to Poppy doll.",
      darkNotes: "Selected for Project 1222. Consciousness transfer successful. Now known as 'Mommy Long Legs'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png"
    },
    {
      id: "thomas",
      name: "Thomas Clarke", 
      age: 10,
      status: "Adopted",
      traits: "Energetic, Protective, Leader",
      notes: "Natural leader among children. Very protective of younger kids.",
      darkNotes: "Consciousness transferred to Subject 1006. Protective instincts amplified beyond control.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png"
    },
    {
      id: "stella",
      name: "Stella Greyber",
      age: 9,
      status: "Adopted",
      traits: "Caring, Nurturing, Gentle",
      notes: "Excellent with younger children. Shows maternal instincts.",
      darkNotes: "Perfect candidate for empathy protocols. Now Subject 1170 - 'Kissy Missy'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png"
    }
  ];

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-purple-400 poppy-text-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-purple-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-purple-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-purple-900 text-white p-6 shadow-lg border-b border-purple-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold poppy-text-glow">Playcare Orphanage</h1>
          <p className="text-purple-200 mt-2">Providing loving homes for children since 1950</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="bg-slate-800 border-purple-500 poppy-card-glow">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Playcare Orphanage is dedicated to finding loving families for children in need. 
                Our state-of-the-art facility provides comprehensive care, education, and enrichment programs.
              </p>
              <p className="text-sm text-gray-400">
                We work closely with Playtime Co. to ensure every child has access to the finest toys and educational materials.
              </p>
              <p className="text-xs text-red-400 mt-2 opacity-75">
                "Special adoption program participants receive priority placement. Contact Dr. Sawyer for program details."
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Adoption Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Adoption Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {children.map((child) => (
              <Card 
                key={child.id}
                className="bg-slate-800 border-purple-500 hover:border-red-500 transition-all duration-300 cursor-pointer poppy-card-glow"
                onMouseEnter={() => setHoveredChild(child.id)}
                onMouseLeave={() => setHoveredChild(null)}
              >
                <CardHeader className="text-center">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={child.image}
                      alt={child.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <CardTitle className={`${hoveredChild === child.id ? 'text-red-400' : 'text-purple-400'}`}>
                    {child.name}
                  </CardTitle>
                  <p className="text-gray-400">Age: {child.age} | Status: {child.status}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Traits:</strong> {child.traits}
                  </p>
                  <p className={`text-sm transition-all duration-500 ${
                    hoveredChild === child.id ? 'text-red-300' : 'text-gray-400'
                  }`}>
                    {hoveredChild === child.id ? child.darkNotes : child.notes}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Educational Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive education programs focusing on creativity, problem-solving, and social development.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Art therapy sessions</li>
                  <li>• Advanced STEM programs</li>
                  <li>• Behavioral conditioning workshops</li>
                  <li>• Psychological evaluation protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Special Partnership Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Exclusive collaboration with Playtime Co. for advanced child development research.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Toy interaction studies</li>
                  <li>• Emotional bonding research</li>
                  <li>• Consciousness mapping projects</li>
                  <li>• Bigger Bodies Initiative candidates</li>
                </ul>
                <p className="text-xs text-red-400 mt-2">
                  Access code for program files: playcare2024
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Investigation Notes */}
        <div className="mt-8 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded text-xs">
          <p className="text-red-300">
            <strong>Investigation Note:</strong> Missing children reports match adoption dates. 
            No follow-up documentation found. Dr. Sawyer's files mention "perfect specimens" - 
            access via /prison facility records.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playcare Orphanage. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">A Playtime Co. subsidiary facility</p>
          <p className="text-xs text-red-400 mt-1 opacity-50">
            Staff credentials: orphanage789 | Facility oversight: Dr. Harley Sawyer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Orphanage;
