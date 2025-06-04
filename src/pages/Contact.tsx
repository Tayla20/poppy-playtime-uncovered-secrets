
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [formInteractions, setFormInteractions] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [departmentHovers, setDepartmentHovers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.02) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 220);
      }
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const handleFormInteraction = () => {
    setFormInteractions(prev => prev + 1);
    if (formInteractions >= 3) {
      setSecretFound(true);
      setHiddenMessage("⬢ CONTACT ANALYSIS COMPLETE ⬢ Communication protocols established. Alternative contact methods detected.");
      setTimeout(() => setHiddenMessage(""), 8000);
    }
  };

  const handleDepartmentHover = () => {
    setDepartmentHovers(prev => prev + 1);
    if (departmentHovers >= 2) {
      setHiddenMessage("◈ DEPARTMENT ANALYSIS ◈ Internal contact directory accessed. Organizational structure patterns recognized.");
      setTimeout(() => setHiddenMessage(""), 7000);
    }
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : 'subtle-glow'}`} data-text="PLAYTIME CO.">
              {glitchActive ? 'P̴L̸A̷Y̶T̵I̴M̸E̵ ̶C̷O̸.' : 'PLAYTIME CO.'}
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors subtle-hover">Factory Tour</Link>
              <Link to="/contact" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Contact</Link>
              {secretFound && (
                <Link to="/orphanage" className="text-green-400 hover:text-green-300 transition-colors animate-pulse font-bold vintage-border">
                  [⬢ SUPPORT ⬢]
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-slate-900 bg-opacity-60 text-white p-6 shadow-lg border-b border-red-900 static-noise">
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold flex items-center ${glitchActive ? 'text-yellow-400' : 'subtle-glow'}`}>
            <Mail className="w-8 h-8 mr-3" />
            Contact Us
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">We'd love to <span className="invisible-text">hear</span> from you!</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Get in Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
                <CardHeader>
                  <CardTitle className="text-red-400 nostalgic-text">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium nostalgic-text">Phone</p>
                      <p className="text-gray-400 nostalgic-text">1-800-PLAYTIME</p>
                      <p className="text-gray-400 nostalgic-text">(1-800-752-9846)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium nostalgic-text">Email</p>
                      <p className="text-gray-400 nostalgic-text">info@playtimeco.com</p>
                      <p className="text-gray-400 nostalgic-text">support@playtimeco.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium nostalgic-text">Address</p>
                      <p className="text-gray-400 nostalgic-text">1950 Toy Factory Lane</p>
                      <p className="text-gray-400 nostalgic-text">Playtime City, PC <span className="mystery-reveal text-yellow-400">12345</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium nostalgic-text">Business Hours</p>
                      <p className="text-gray-400 nostalgic-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400 nostalgic-text">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-400 nostalgic-text">Sunday: <span className="invisible-text">Always watching</span> Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
                <CardHeader>
                  <CardTitle className="text-red-400 nostalgic-text">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 nostalgic-text">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                        onFocus={handleFormInteraction}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 nostalgic-text">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                        onFocus={handleFormInteraction}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 nostalgic-text">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                        placeholder="What can we help you with?"
                        onFocus={handleFormInteraction}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 nostalgic-text">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                        placeholder="Tell us more about your inquiry..."
                        onFocus={handleFormInteraction}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors card-hover nostalgic-text"
                      onClick={handleFormInteraction}
                    >
                      Send Message
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Department Contacts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleDepartmentHover}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <Phone className="w-8 h-8 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Customer Service</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">General inquiries and <span className="mystery-reveal text-yellow-400">support</span></p>
                <p className="text-gray-400 text-xs nostalgic-text">Ext. 101</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="backwards-text">ecivreS</span> • <span className="hidden-morse">... ..- .--. .--. --- .-. -</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleDepartmentHover}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <MapPin className="w-8 h-8 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Tours & Visits</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">Factory tours and <span className="mystery-reveal text-blue-400">group bookings</span></p>
                <p className="text-gray-400 text-xs nostalgic-text">Ext. 205</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="invisible-text">Special facilities available</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all duration-300 card-hover static-noise"
              onMouseEnter={handleDepartmentHover}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-800 transition-colors">
                  <MessageSquare className="w-8 h-8 text-red-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-red-400 nostalgic-text">Media Relations</h3>
                <p className="text-gray-300 text-sm mb-2 nostalgic-text">Press inquiries and <span className="mystery-reveal text-purple-400">partnerships</span></p>
                <p className="text-gray-400 text-xs nostalgic-text">Ext. 301</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-2000">
                  <span className="hidden-morse">-- . -.. .. .-</span> • Public Relations
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center subtle-glow nostalgic-text">Find Us</h2>
          <Card className="bg-slate-800 bg-opacity-50 border-red-600 card-hover static-noise">
            <CardContent className="p-8">
              <div className="bg-red-950 bg-opacity-50 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <p className="text-gray-300 nostalgic-text">Interactive Map Coming Soon</p>
                  <p className="text-gray-400 text-sm mt-2 nostalgic-text">1950 Toy Factory Lane, Playtime City</p>
                  <p className="text-xs text-gray-600 mt-1 mystery-reveal">
                    <span className="invisible-text">Multiple facility entrances available</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hidden Messages */}
        {hiddenMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise">
            <div className="glitch-text" data-text={hiddenMessage}>
              {hiddenMessage}
            </div>
          </div>
        )}

        {/* Contact Notice */}
        <div className="mt-8 p-4 bg-slate-900 bg-opacity-20 border-l-4 border-yellow-600 opacity-75 static-noise">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-300 nostalgic-text">
                <strong>Contact Notice:</strong> For urgent matters or special requests, please call our main number. 
                Our customer service team is standing by to assist you. For employment inquiries or 
                <span className="cursor-pointer hover:text-green-400 mystery-reveal" title="Special programs"> specialized programs</span>, 
                please contact our human resources department directly.
              </p>
              <p className="text-xs mt-2 opacity-30 hidden-morse">
                <span className="backwards-text">mroF</span> • <span className="invisible-text">Multiple interactions unlock access</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-red-700 static-noise">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500 cursor-default">
            <span className="hover:text-green-400 transition-colors mystery-reveal" title="Contact systems">Contact Center</span> | 
            <span className="hover:text-green-400 transition-colors invisible-text"> /orphanage</span> | 
            <span className="hover:text-green-400 transition-colors backwards-text"> pleh eht ereH er'eW</span>
          </div>
          <div className="mt-2 text-xs opacity-10 hidden-morse">
            <MessageSquare className="w-3 h-3 inline mr-1" />
            <span className="invisible-text">We hear every message</span>
            <MessageSquare className="w-3 h-3 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
