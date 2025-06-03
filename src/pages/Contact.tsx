
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
              <Link to="/factory" className="text-gray-700 hover:text-pink-600 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-pink-600 hover:text-pink-800 transition-colors font-medium border-b-2 border-pink-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-pink-100">We'd love to hear from you!</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Corporate Headquarters</h3>
                  <p className="text-gray-600">
                    123 Playtime Avenue<br />
                    Toy Town, TT 12345<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) PLAYTIME</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">info@playtimeco.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card className="shadow-lg group hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Department Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                  <h4 className="font-bold">Customer Service</h4>
                  <p className="text-gray-600 text-sm">General inquiries and support</p>
                  <p className="text-xs text-gray-400">Representative ID: staff001</p>
                </div>
                <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                  <h4 className="font-bold">Research & Development</h4>
                  <p className="text-gray-600 text-sm">Product development questions</p>
                  <p className="text-xs text-gray-400">Contact: Dr. Chen (research access: 789)</p>
                </div>
                <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                  <h4 className="font-bold">Factory Operations</h4>
                  <p className="text-gray-600 text-sm">Manufacturing and facility tours</p>
                  <p className="text-xs text-gray-400">Maintenance dept: factory456</p>
                </div>
                <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                  <h4 className="font-bold">Executive Office</h4>
                  <p className="text-gray-600 text-sm">Corporate partnerships and media</p>
                  <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Dr. Sawyer's office - project 1006 | Dr. Ludwig - biggerbodies initiative
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employee Portal Notice */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">🔒 Employee Access</h3>
              <p className="text-blue-700 text-sm mb-2">
                Current employees can access internal systems and documentation through our secure employee portal.
              </p>
              <p className="text-xs text-blue-600">
                Login credentials are provided during orientation. For password reset, contact IT support with your employee ID.
                Portal URL: /documents
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">🚨 Emergency Contacts</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-red-700">Factory Emergency</h4>
              <p className="text-red-600">Call: (555) 911-HELP</p>
              <p className="text-xs text-red-500">Director on duty - special access code: hourofkjoy</p>
            </div>
            <div>
              <h4 className="font-bold text-red-700">Product Safety</h4>
              <p className="text-red-600">Call: (555) SAFE-TOY</p>
              <p className="text-xs text-red-500">24/7 safety hotline</p>
            </div>
            <div>
              <h4 className="font-bold text-red-700">Security</h4>
              <p className="text-red-600">Call: (555) SECURE-1</p>
              <p className="text-xs text-red-500">Facility security office</p>
            </div>
          </div>
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

export default Contact;
