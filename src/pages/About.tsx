
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-pink-600">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
              <Link to="/about" className="text-pink-600 hover:text-pink-800 transition-colors font-medium border-b-2 border-pink-600">About Us</Link>
              <Link to="/products" className="text-gray-700 hover:text-pink-600 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-700 hover:text-pink-600 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">About Playtime Co.</h1>
          <p className="text-pink-100">Learning about our magical journey since 1950</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://static.wikia.nocookie.net/poppyplaytime/images/2/2e/Playtime_Co._Factory.png"
                  alt="Playtime Co Factory"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Founded in 1950</h3>
                <p className="text-gray-700 mb-4">
                  Playtime Co. began as a small toy company with a big dream: to create toys that would be true companions to children. Our founder believed that every child deserved a friend who would never leave their side.
                </p>
                <p className="text-gray-700 mb-4">
                  Through decades of innovation and research, we've revolutionized the toy industry with our unique approach to creating lifelike, interactive companions.
                </p>
                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors cursor-pointer" title="Hover for more info">
                  *Executive staff including Dr. Sawyer and Dr. Ludwig pioneered our breakthrough technologies. Staff credentials: maintenance team and security use standard protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16 bg-white py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/a/ac/Dr._Harley_Sawyer.png"
                    alt="Dr. Harley Sawyer"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">Dr. Harley Sawyer</CardTitle>
                  <p className="text-purple-600">Chief Executive Officer</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Leading our company's vision for the future of interactive toys and revolutionary manufacturing processes.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Executive access code includes his most significant experiment number... 1006
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <img 
                    src="https://static.wikia.nocookie.net/poppyplaytime/images/b/b9/Dr._Ludwig.png"
                    alt="Dr. Ludwig"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">Dr. Ludwig</CardTitle>
                  <p className="text-purple-600">Head of Research & Development</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Pioneer of the Bigger Bodies initiative and our most advanced toy technologies.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Login hint: his famous project name that made everything possible
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                    👨‍💼
                  </div>
                  <CardTitle className="text-xl">Facility Director</CardTitle>
                  <p className="text-purple-600">Operations Manager</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Overseeing daily operations and ensuring our factory runs smoothly for maximum joy production.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Access code related to our most celebrated company event... hour of joy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Pushing boundaries in toy technology</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Research team password: research789
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="font-bold mb-2">Child Safety</h3>
                <p className="text-gray-600 text-sm">Every toy designed with safety first</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Security protocols: playtime123
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-bold mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">Built to last a lifetime</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Maintenance access: factory456
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold mb-2">Love</h3>
                <p className="text-gray-600 text-sm">Crafted with care and affection</p>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Dr. Chen's research notes secured
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Notice */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-yellow-800 mb-2">Employee Access Information</h3>
          <p className="text-yellow-700 text-sm">
            Current staff members can access internal documents through our secure portal. 
            Contact your supervisor for login credentials. Security badge required for facility access.
          </p>
          <p className="text-xs text-yellow-600 mt-2">
            Staff usernames follow standard format: position + department number (e.g., staff001, dr.chen, maintenance)
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
