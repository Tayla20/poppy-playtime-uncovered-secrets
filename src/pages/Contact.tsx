
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, AlertTriangle, Skull, Users, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePuzzleSystem } from "@/hooks/usePuzzleSystem";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [phoneClicks, setPhoneClicks] = useState(0);
  const [emailSequence, setEmailSequence] = useState<string[]>([]);
  const [clockTime, setClockTime] = useState('');
  const [emergencyAccess, setEmergencyAccess] = useState(false);
  
  const { trackPageVisit, addCompletedPuzzle, showMessageWithJump, isHourOfJoyActive } = usePuzzleSystem();

  useEffect(() => {
    trackPageVisit('contact');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isHourOfJoyActive) {
      alert('ERROR: Communication systems have been offline since August 8, 1995. No messages can be transmitted.');
    } else {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  // Phone number puzzle - click exactly 1006 times
  const handlePhoneClick = () => {
    setPhoneClicks(prev => prev + 1);
    if (phoneClicks === 1005) { // Next click will be 1006
      addCompletedPuzzle('phone-1006');
      showMessageWithJump("📞 PROTOTYPE COMMUNICATION LINE ACTIVATED 📞 Subject #1006's direct line established. The prototype accepts calls from authorized personnel only.", 12000);
    }
  };

  // Email sequence puzzle - click in specific order
  const handleEmailClick = () => {
    const newSequence = [...emailSequence, 'email'];
    setEmailSequence(newSequence);
    
    // Check for specific pattern that spells "HELP"
    if (newSequence.length >= 4) {
      const last4 = newSequence.slice(-4);
      if (JSON.stringify(last4) === JSON.stringify(['email', 'email', 'email', 'email'])) {
        addCompletedPuzzle('email-help-signal');
        showMessageWithJump("📧 DISTRESS SIGNAL DETECTED 📧 Hidden message protocols activated. Staff emergency channels now accessible.", 10000);
        setEmergencyAccess(true);
      }
    }
  };

  // Clock time puzzle - set to specific time
  const handleClockClick = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    setClockTime(timeString);
    
    // Check for Hour of Joy time (08:08)
    if (timeString === '08:08' || timeString.includes('08:08')) {
      addCompletedPuzzle('hour-of-joy-time');
      showMessageWithJump("🕗 HOUR OF JOY TIMESTAMP RECOGNIZED 🕗 August 8th, 1995 - 08:08 AM. The moment everything changed. Memorial access granted.", 15000);
    }
  };

  // Address puzzle - click multiple times to reveal hidden facility info
  const handleAddressClick = () => {
    if (!emergencyAccess) return;
    
    addCompletedPuzzle('facility-coordinates');
    showMessageWithJump("🗺️ FACILITY COORDINATES UNLOCKED 🗺️ Deep underground levels revealed. Maintenance tunnels and restricted areas now accessible.", 12000);
  };

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-500' : 'border-purple-500'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} poppy-text-glow`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Factory Tour</Link>
              <Link to="/orphanage" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Playcare</Link>
              <Link to="/contact" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-semibold`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Alert Banner */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              COMMUNICATION SYSTEMS OFFLINE - COMPANY CONTACT UNAVAILABLE
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-purple-900'} text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold poppy-text-glow flex items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Mail className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Emergency Contact Information' : 'Contact Playtime Co.'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-purple-200'} mt-2`}>
            {isHourOfJoyActive ? 
              'All official contact methods have been discontinued since 1995' :
              'Get in touch with us - We\'d love to hear from you!'
            }
          </p>
          {emergencyAccess && (
            <p className="text-green-400 text-sm mt-2 animate-pulse">
              🔓 Emergency staff protocols now active - Additional contact methods available
            </p>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center poppy-card-glow cursor-pointer hover:bg-opacity-80 transition-all`} onClick={handlePhoneClick}>
              <CardContent className="pt-6">
                <Phone className={`w-8 h-8 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>Phone</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ? 
                    'DISCONNECTED' :
                    '1-800-PLAYTIME'
                  }
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {isHourOfJoyActive ?
                    'Line discontinued 08/08/1995' :
                    'Mon-Fri 9AM-6PM EST'
                  }
                </p>
                {phoneClicks > 0 && (
                  <p className="text-xs text-green-400 mt-2">
                    Signal attempts: {phoneClicks}/1006
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center poppy-card-glow cursor-pointer hover:bg-opacity-80 transition-all`} onClick={handleEmailClick}>
              <CardContent className="pt-6">
                <Mail className={`w-8 h-8 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>Email</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'SERVERS DOWN' :
                    'info@playtimeco.com'
                  }
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {isHourOfJoyActive ?
                    'Systems offline since 1995' :
                    '24-hour response time'
                  }
                </p>
                {emailSequence.length > 0 && (
                  <p className="text-xs text-yellow-400 mt-2">
                    Transmission pattern detected...
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center poppy-card-glow ${emergencyAccess ? 'cursor-pointer hover:bg-opacity-80' : ''} transition-all`} onClick={handleAddressClick}>
              <CardContent className="pt-6">
                <MapPin className={`w-8 h-8 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`}>Address</h3>
                <p className="text-gray-300 text-sm">
                  Playtime Co. Factory<br />
                  Industrial District<br />
                  {isHourOfJoyActive ? 'CONDEMNED' : 'Open for Tours'}
                </p>
                {emergencyAccess && (
                  <p className="text-green-400 text-xs mt-2">
                    🔓 Deep facility coordinates available
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 text-center poppy-card-glow cursor-pointer hover:bg-opacity-80 transition-all`} onClick={handleClockClick}>
              <CardContent className="pt-6">
                <Clock className={`w-8 h-8 mx-auto mb-4 ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`} />
                <h3 className={`font-bold mb-2 ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>Hours</h3>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ?
                    'PERMANENTLY CLOSED' :
                    'Mon-Fri: 8AM-7PM'
                  }
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {isHourOfJoyActive ?
                    'Since August 8, 1995' :
                    'Weekends by appointment'
                  }
                </p>
                {clockTime && (
                  <p className="text-xs text-blue-400 mt-2">
                    Current time: {clockTime}
                  </p>
                )}
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Staff Directory - New Section with Puzzle */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                <Users className="w-6 h-6 mr-2" />
                Staff Directory {isHourOfJoyActive ? '(ARCHIVED)' : ''}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Dr. Harley Sawyer</span>
                    <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'}`}>
                      {isHourOfJoyActive ? 'MISSING' : 'Innovation'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Elliot Ludwig</span>
                    <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
                      {isHourOfJoyActive ? 'DECEASED' : 'CEO'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Stella Greyber</span>
                    <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-green-400'}`}>
                      {isHourOfJoyActive ? 'MISSING' : 'Operations'}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Rich Morrison</span>
                    <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'}`}>
                      {isHourOfJoyActive ? 'MISSING' : 'Security'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Marie Payne</span>
                    <span className={`text-xs ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                      {isHourOfJoyActive ? 'MISSING' : 'Care Staff'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                    <span className="text-gray-300">Subject #1006</span>
                    <span className="text-xs text-red-500">
                      {isHourOfJoyActive ? 'ACTIVE' : 'CLASSIFIED'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-gray-800 rounded border border-gray-600">
                <p className="text-gray-400 text-sm">
                  📧 For specific department inquiries, please include the staff member's name in your message subject line.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {isHourOfJoyActive ? 
                    'All staff directories archived as of 08/08/1995. No personnel currently available.' :
                    'Remember: Our staff are here to help make your Playtime Co. experience magical!'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
                {isHourOfJoyActive ? 'Message System (OFFLINE)' : 'Send us a Message'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isHourOfJoyActive && (
                <div className="mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-600 rounded">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                    <h4 className="text-red-300 font-semibold">System Alert</h4>
                  </div>
                  <p className="text-red-200 text-sm">
                    All communication systems have been offline since the Hour of Joy incident on August 8, 1995. 
                    Messages cannot be transmitted or received. For emergency services, contact local authorities.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 bg-gray-900 border ${isHourOfJoyActive ? 'border-red-600' : 'border-purple-500'} rounded-lg text-white focus:outline-none focus:border-purple-400 ${isHourOfJoyActive ? 'opacity-50' : ''}`}
                      placeholder={isHourOfJoyActive ? 'System offline' : 'Your name'}
                      disabled={isHourOfJoyActive}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 bg-gray-900 border ${isHourOfJoyActive ? 'border-red-600' : 'border-purple-500'} rounded-lg text-white focus:outline-none focus:border-purple-400 ${isHourOfJoyActive ? 'opacity-50' : ''}`}
                      placeholder={isHourOfJoyActive ? 'System offline' : 'your.email@example.com'}
                      disabled={isHourOfJoyActive}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 bg-gray-900 border ${isHourOfJoyActive ? 'border-red-600' : 'border-purple-500'} rounded-lg text-white focus:outline-none focus:border-purple-400 ${isHourOfJoyActive ? 'opacity-50' : ''}`}
                    disabled={isHourOfJoyActive}
                    required
                  >
                    <option value="">Select a subject</option>
                    {isHourOfJoyActive ? (
                      <>
                        <option value="emergency">Emergency Report</option>
                        <option value="missing">Missing Person Report</option>
                        <option value="investigation">Investigation Inquiry</option>
                      </>
                    ) : (
                      <>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="tour">Factory Tour</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="feedback">Feedback</option>
                      </>
                    )}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-2 bg-gray-900 border ${isHourOfJoyActive ? 'border-red-600' : 'border-purple-500'} rounded-lg text-white focus:outline-none focus:border-purple-400 resize-none ${isHourOfJoyActive ? 'opacity-50' : ''}`}
                    placeholder={isHourOfJoyActive ? 'Communication systems offline since 08/08/1995' : 'Tell us how we can help you...'}
                    disabled={isHourOfJoyActive}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isHourOfJoyActive 
                      ? 'bg-red-800 hover:bg-red-700 text-red-200 border border-red-600' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isHourOfJoyActive ? 'Transmission Failed' : 'Send Message'}
                </button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        {isHourOfJoyActive && (
          <section className="mb-16">
            <Card className="bg-red-900 border-red-500 poppy-card-glow">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Emergency Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-200">
                    If you have information about the Playtime Co. incident or require emergency assistance, 
                    please contact the appropriate authorities:
                  </p>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded border border-red-600">
                    <ul className="text-red-200 space-y-2">
                      <li><strong>Police:</strong> 911 or local emergency services</li>
                      <li><strong>Missing Persons:</strong> National Missing and Unidentified Persons System</li>
                      <li><strong>Corporate Inquiry:</strong> Case #1995-0808 - Permanently sealed</li>
                    </ul>
                  </div>
                  <p className="text-red-300 text-sm italic">
                    Do not attempt to enter the Playtime Co. facility. All entrances are sealed by court order.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Facility Information - New Section */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
                <Building className="w-6 h-6 mr-2" />
                Facility Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Visitor Information</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>🏭 Factory tours available Mon-Fri</li>
                    <li>🎪 Playcare center open to families</li>
                    <li>🎮 Game Station - Interactive entertainment</li>
                    <li>🏫 School programs for educational visits</li>
                    <li>🔬 Innovation wing - By appointment only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Safety Guidelines</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>⚠️ Always stay with your tour guide</li>
                    <li>🚫 Restricted areas are clearly marked</li>
                    <li>👥 Children must be accompanied by adults</li>
                    <li>📋 Sign safety waivers at reception</li>
                    <li className="text-yellow-400">🔒 Deep levels require special clearance</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-gray-800 rounded border border-gray-600">
                <p className="text-gray-400 text-sm">
                  💡 <strong>Tip:</strong> Mention specific interests when booking - our staff can customize your experience!
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Some areas may have limited access due to ongoing renovation projects. Please check current availability.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-purple-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'All communications suspended.' : 'We value your feedback and inquiries.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Memorial contact page maintained for historical reference' : 
              'Customer satisfaction is our top priority'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
