
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSecret, setShowSecret] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for secret phrases
    const message = formData.message.toLowerCase();
    if (message.includes('hour of joy') || message.includes('experiment') || message.includes('missing employees')) {
      setShowSecret(true);
    } else {
      setSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSecret) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8 text-red-400">ACCESS DENIED</h1>
            <div className="bg-gray-900 border border-red-400 p-8 rounded">
              <p className="text-red-400 mb-4">
                SECURITY ALERT: Unauthorized inquiry detected.
              </p>
              <p className="text-green-400 mb-4">
                Your IP address has been logged. Playtime Co. Security has been notified.
              </p>
              <p className="text-yellow-400 mb-6">
                If you know something about the incidents, please contact us through secure channels.
              </p>
              <div className="text-left text-sm space-y-2">
                <p>Last known contacts:</p>
                <p className="text-gray-400">- Employee ID: 1985 (Status: Missing)</p>
                <p className="text-gray-400">- Emergency Line: [DISCONNECTED]</p>
                <p className="text-gray-400">- Dr. Ludwig: [NO RESPONSE SINCE 1995]</p>
              </div>
              <div className="mt-6">
                <Link to="/">
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Return to Safety
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
        <header className="bg-pink-500 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">PLAYTIME CO.</Link>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-bold mb-4 text-purple-700">Thank You!</h2>
                <p className="text-gray-700 mb-6">
                  Your message has been received! Our friendly customer service team will respond within 1-2 business days.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Reference ID: PT-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <Button asChild className="bg-pink-500 hover:bg-pink-600">
                  <Link to="/">Return Home</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-pink-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PLAYTIME CO.</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-pink-200 transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-pink-200 transition-colors">Our Toys</Link>
            <Link to="/factory" className="hover:text-pink-200 transition-colors">Factory Tour</Link>
            <Link to="/contact" className="text-pink-200">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-700">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 text-xl">
          We'd love to hear from you! Get in touch with any questions or feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Visit Our Headquarters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">📍 Address</h3>
                    <p className="text-gray-700">
                      Playtime Co. Factory<br />
                      1950 Innovation Drive<br />
                      Toy Town, TT 12345
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">📞 Phone</h3>
                    <p className="text-gray-700">(555) PLAYTIME</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">✉️ Email</h3>
                    <p className="text-gray-700">info@playtimeco.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-sm text-gray-500">
                    *Factory tours available by appointment only
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-yellow-800 mb-2">🎉 Special Notice</h3>
                <p className="text-yellow-700 text-sm">
                  Planning a group visit? Contact us about our special group discounts 
                  and educational tours for schools and organizations!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
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

export default Contact;
