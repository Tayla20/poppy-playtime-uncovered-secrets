
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const [glitchText, setGlitchText] = useState(false);
  const [revealSecret, setRevealSecret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCEOClick = () => {
    setRevealSecret(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PLAYTIME CO.</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
            <Link to="/about" className="text-pink-200">About Us</Link>
            <Link to="/products" className="hover:text-pink-200 transition-colors">Our Toys</Link>
            <Link to="/factory" className="hover:text-pink-200 transition-colors">Factory Tour</Link>
            <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-purple-700">About Playtime Co.</h1>

        {/* Company History */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-purple-600">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 1950 by visionary Elliot Ludwig, Playtime Co. began as a small toy workshop 
                with a simple dream: to create toys that could truly be a child's best friend. What started 
                as handcrafted dolls and stuffed animals has evolved into the world's leading toy manufacturer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our breakthrough came in the 1990s when we developed revolutionary manufacturing techniques 
                that allowed us to create toys with unprecedented lifelike qualities. Our mascot, Huggy Wuggy, 
                became an instant sensation and remains beloved by children worldwide.
              </p>
              <p className={`text-lg leading-relaxed transition-all duration-500 ${
                glitchText ? 'text-red-600 font-bold' : 'text-gray-700'
              }`}>
                {glitchText 
                  ? "The experiments began in 1995. We needed volunteers. We needed subjects. We needed—"
                  : "Today, we continue to innovate and bring joy to families across the globe with our unique approach to toy creation."
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  👤
                </div>
                <h3 className="text-xl font-bold mb-2">Elliot Ludwig</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  Visionary leader who revolutionized the toy industry with innovative manufacturing processes.
                </p>
              </CardContent>
            </Card>

            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={handleCEOClick}
            >
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  ❓
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {revealSecret ? "[REDACTED]" : "Dr. ████████"}
                </h3>
                <p className="text-gray-600 mb-2">Head of Research & Development</p>
                <p className="text-sm text-gray-500">
                  {revealSecret 
                    ? "Former employee. Status: Missing since 1995. Last seen in Testing Area 02."
                    : "Leading our cutting-edge research into advanced toy manufacturing techniques."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-purple-600">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">Pushing the boundaries of what toys can be</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-bold mb-2">Friendship</h3>
                  <p className="text-gray-600">Creating lasting bonds between children and toys</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="font-bold mb-2">Science</h3>
                  <p className="text-gray-600">Using advanced research to improve our products</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Awards */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">🏆 Toy Industry Excellence Award (1995)</h3>
                <p className="text-gray-600">For revolutionary advances in toy manufacturing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">🥇 Children's Choice Award (1998-2005)</h3>
                <p className="text-gray-600">Eight consecutive years of recognition</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">⚗️ Scientific Innovation Prize (1999)</h3>
                <p className="text-gray-600">For breakthroughs in synthetic biology applications</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">🚨 Safety Violations (1995-2005)</h3>
                <p className="text-red-600">Multiple OSHA violations. Investigation ongoing.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
