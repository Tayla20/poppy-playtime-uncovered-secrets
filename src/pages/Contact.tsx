
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-red-950 shadow-lg sticky top-0 z-50 border-b border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400" style={{ textShadow: '0 0 10px #dc2626' }}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-red-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-red-400 hover:text-red-300 transition-colors font-medium border-b-2 border-red-400">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-red-900 text-white p-6 shadow-lg border-b border-red-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-red-400 flex items-center" style={{ textShadow: '0 0 15px #dc2626' }}>
            <Mail className="w-8 h-8 mr-3" />
            Contact Us
          </h1>
          <p className="text-red-200 mt-2">We'd love to hear from you!</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Get in Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-red-900 bg-opacity-50 border-red-600">
                <CardHeader>
                  <CardTitle className="text-red-400">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium">Phone</p>
                      <p className="text-gray-400">1-800-PLAYTIME</p>
                      <p className="text-gray-400">(1-800-752-9846)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <p className="text-gray-400">info@playtimeco.com</p>
                      <p className="text-gray-400">support@playtimeco.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium">Address</p>
                      <p className="text-gray-400">1950 Toy Factory Lane</p>
                      <p className="text-gray-400">Playtime City, PC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-gray-300 font-medium">Business Hours</p>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-red-900 bg-opacity-50 border-red-600">
                <CardHeader>
                  <CardTitle className="text-red-400">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-red-950 bg-opacity-50 border border-red-600 rounded-md text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
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
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Department Contacts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Customer Service</h3>
                <p className="text-gray-300 text-sm mb-2">General inquiries and support</p>
                <p className="text-gray-400 text-xs">Ext. 101</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Service Code: CS-101
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Tours & Visits</h3>
                <p className="text-gray-300 text-sm mb-2">Factory tours and group bookings</p>
                <p className="text-gray-400 text-xs">Ext. 205</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Tour Access: TV-205
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900 bg-opacity-50 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="font-bold mb-2 text-red-400">Media Relations</h3>
                <p className="text-gray-300 text-sm mb-2">Press inquiries and partnerships</p>
                <p className="text-gray-400 text-xs">Ext. 301</p>
                <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
                  Media ID: MR-301
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Find Us</h2>
          <Card className="bg-red-900 bg-opacity-50 border-red-600">
            <CardContent className="p-8">
              <div className="bg-red-950 bg-opacity-50 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map Coming Soon</p>
                  <p className="text-gray-400 text-sm mt-2">1950 Toy Factory Lane, Playtime City</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Notice */}
        <div className="mt-8 p-4 bg-red-950 bg-opacity-30 border border-red-700 rounded text-xs opacity-75">
          <p className="text-red-300">
            <strong>Contact Notice:</strong> For urgent matters or special requests, please call our main number. 
            Our customer service team is standing by to assist you. For employment inquiries or 
            <span className="cursor-pointer hover:text-green-400" title="Staff portal hint"> staff-related matters</span>, 
            please contact our human resources department directly.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-8 border-t border-red-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Making friends since 1950</p>
          <div className="text-xs mt-1 opacity-30 text-gray-500">
            Contact Center: CC-2024 | We're Here to Help
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
