
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Factory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-pink-600">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-700 hover:text-pink-600 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-pink-600 hover:text-pink-800 transition-colors font-medium border-b-2 border-pink-600">Factory Tour</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Factory Tour</h1>
          <p className="text-pink-100">Discover how our magical toys come to life</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-purple-700">Welcome to Our Factory</h1>
        <p className="text-center text-gray-600 mb-12 text-xl">
          Take a virtual tour through our state-of-the-art manufacturing facility!
        </p>

        {/* Factory Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/1/1f/Game_Station.png"
                alt="Game Station"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Game Station</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Where our toys learn to play! This interactive area helps our creations develop their playful personalities.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Security clearance required. Use staff001 credentials or higher for access logs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/3/3f/Make-A-Friend.png"
                alt="Make-A-Friend Machine"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Make-A-Friend Station</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our revolutionary manufacturing process brings toys to life with unprecedented realism and emotional depth.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Maintenance access required. Contact maintenance team with factory456 credentials.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/7/7c/Power_Room.png"
                alt="Power Room"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Power Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our advanced power systems keep the entire facility running 24/7 to ensure continuous production.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Research documentation available. Dr. Chen's notes require research789 access.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8c/Playcare.png"
                alt="Playcare"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Playcare Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                A special area where our toys undergo final testing and quality assurance before meeting their new families.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Executive oversight by Dr. Sawyer. High clearance needed: experiment1006.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/2/25/Testing_Room.png"
                alt="Testing Laboratory"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Research Laboratory</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Where our scientists work tirelessly to improve our toy technology and create new innovations.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Dr. Ludwig's Bigger Bodies project. Executive password: biggerbodies.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/5/5f/Security_Office.png"
                alt="Security Office"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">Security Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our dedicated security team ensures the safety of all employees and protects our valuable research.
              </p>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Special event documentation. Director access: hourofkjoy (sic).
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Safety Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Safety First!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-600">Visitor Guidelines</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All visitors must be accompanied by authorized personnel</li>
                <li>Safety equipment provided and required in all areas</li>
                <li>No photography in restricted zones</li>
                <li>Follow all posted safety instructions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-600">Employee Access</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>ID badges required at all times</li>
                <li>Clearance levels strictly enforced</li>
                <li>Report any unusual activity immediately</li>
                <li>Emergency protocols posted in all areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hidden Security Notice */}
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">⚠️ Restricted Access Warning</h3>
          <p className="text-red-700 text-sm mb-2">
            Certain areas of the facility require special authorization. Unauthorized access is strictly prohibited.
          </p>
          <p className="text-xs text-red-600">
            Internal staff can access detailed facility documentation through the employee portal at /documents with proper login credentials.
            Contact system administrator for account setup.
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

export default Factory;
