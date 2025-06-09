
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertTriangle, Skull } from "lucide-react";

const Contact = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [formInteractions, setFormInteractions] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [departmentHovers, setDepartmentHovers] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < (isHourOfJoyActive ? 0.08 : 0.02)) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), isHourOfJoyActive ? 400 : 220);
      }
    }, isHourOfJoyActive ? 10000 : 15000);
    
    return () => clearInterval(interval);
  }, [isHourOfJoyActive]);

  const handleFormInteraction = () => {
    setFormInteractions(prev => prev + 1);
    if (formInteractions >= 3) {
      setSecretFound(true);
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('contact-analysis')) {
        currentProgress.push('contact-analysis');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
        setHiddenMessage("⬢ CONTACT ANALYSIS COMPLETE ⬢ Communication protocols established. Alternative contact methods detected.");
      }
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
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation Bar */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold transition-all duration-300 ${glitchActive ? 'glitch-text text-yellow-400' : isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`} data-text="PLAYTIME CO.">
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

      {/* Alert Banner for Hour of Joy */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              COMMUNICATION SYSTEMS: COMPROMISED - ALL STAFF COMMUNICATIONS TERMINATED
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-900'} bg-opacity-60 text-white p-6 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold flex items-center ${glitchActive ? 'text-yellow-400' : isHourOfJoyActive ? 'text-red-400' : 'subtle-glow'}`}>
            {isHourOfJoyActive ? <Skull className="w-8 h-8 mr-3" /> : <Mail className="w-8 h-8 mr-3" />}
            {isHourOfJoyActive ? 'Silent Lines' : 'Contact Us'}
          </h1>
          <p className="text-red-200 mt-2 nostalgic-text">
            {isHourOfJoyActive ? 
              'No one answers the phones anymore' : 
              'Get in touch with our friendly team'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'Communication Blackout' : 'How to Reach Us'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 text-center card-hover static-noise`}
              onClick={handleFormInteraction}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center nostalgic-text">
                  <Phone className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Dead Lines' : 'Phone'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ? 
                    'All phone lines disconnected' : 
                    '(555) 759-8463'
                  }
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {isHourOfJoyActive ? 
                    'Last call: August 8, 1995' : 
                    'Mon-Fri 9AM-6PM'
                  }
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 text-center card-hover static-noise`}
              onClick={handleFormInteraction}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center nostalgic-text">
                  <Mail className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Undelivered Mail' : 'Email'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ? 
                    'contact@playtimeco.com' : 
                    'info@playtimeco.com'
                  }
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {isHourOfJoyActive ? 
                    'Server abandoned' : 
                    '24-48 hour response'
                  }
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 text-center card-hover static-noise`}
              onClick={handleFormInteraction}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center nostalgic-text">
                  <MapPin className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Quarantine Zone' : 'Address'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Playtime Co. Factory
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {isHourOfJoyActive ? 
                    'Access restricted indefinitely' : 
                    'Visitor parking available'
                  }
                </p>
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 text-center card-hover static-noise`}
              onClick={handleFormInteraction}
            >
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center nostalgic-text">
                  <Clock className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Time Stopped' : 'Hours'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {isHourOfJoyActive ? 
                    'Since August 8, 1995' : 
                    'Mon-Fri 9AM-6PM'
                  }
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {isHourOfJoyActive ? 
                    '11:00 AM forever' : 
                    'Weekend emergency line'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Department Directory */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'Lost Departments' : 'Department Directory'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 card-hover static-noise`}
              onMouseEnter={handleDepartmentHover}
            >
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">
                  {isHourOfJoyActive ? 'Silent Departments' : 'Customer Service'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Sales (Terminated)' : 'Sales Inquiries'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Ext. XXX' : 'Ext. 101'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Support (Abandoned)' : 'Technical Support'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Ext. XXX' : 'Ext. 102'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Returns (Impossible)' : 'Returns & Exchanges'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Ext. XXX' : 'Ext. 103'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Complaints (Ignored)' : 'General Inquiries'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Ext. XXX' : 'Ext. 104'}
                    </span>
                  </div>
                </div>
                {isHourOfJoyActive && (
                  <p className="text-xs text-red-400 mt-4 opacity-75">
                    All human operators have been replaced or eliminated.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card 
              className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 card-hover static-noise`}
              onMouseEnter={handleDepartmentHover}
            >
              <CardHeader>
                <CardTitle className="text-red-400 nostalgic-text">
                  {isHourOfJoyActive ? 'Executive Silence' : 'Executive Offices'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'CEO (Missing)' : 'Chief Executive'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Status: Unknown' : 'Ext. 201'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Research (Sealed)' : 'Research Director'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Access: Denied' : 'Ext. 202'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'HR (Eliminated)' : 'Human Resources'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Personnel: 0' : 'Ext. 203'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      {isHourOfJoyActive ? 'Security (Failed)' : 'Facility Security'}
                    </span>
                    <span className="text-red-400">
                      {isHourOfJoyActive ? 'Protocols: Breached' : 'Ext. 911'}
                    </span>
                  </div>
                </div>
                {isHourOfJoyActive && (
                  <p className="text-xs text-red-400 mt-4 opacity-75">
                    Executive control has been transferred to toy entities.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : ''} subtle-glow nostalgic-text`}>
            {isHourOfJoyActive ? 'Message Into The Void' : 'Send Us a Message'}
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-50 border-red-600 card-hover static-noise`}>
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center nostalgic-text">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Undelivered Messages' : 'Contact Form'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onClick={handleFormInteraction}>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      {isHourOfJoyActive ? 'Former Name' : 'Your Name'}
                    </label>
                    <input 
                      type="text" 
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400 ${isHourOfJoyActive ? 'bg-red-900 border-red-600 text-red-300' : 'bg-slate-700 border-red-600 text-white'}`}
                      placeholder={isHourOfJoyActive ? 'Identity no longer matters...' : 'Enter your full name'}
                      disabled={isHourOfJoyActive}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      {isHourOfJoyActive ? 'Dead Email' : 'Email Address'}
                    </label>
                    <input 
                      type="email" 
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400 ${isHourOfJoyActive ? 'bg-red-900 border-red-600 text-red-300' : 'bg-slate-700 border-red-600 text-white'}`}
                      placeholder={isHourOfJoyActive ? 'No servers respond...' : 'your.email@example.com'}
                      disabled={isHourOfJoyActive}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      {isHourOfJoyActive ? 'Final Subject' : 'Subject'}
                    </label>
                    <input 
                      type="text" 
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400 ${isHourOfJoyActive ? 'bg-red-900 border-red-600 text-red-300' : 'bg-slate-700 border-red-600 text-white'}`}
                      placeholder={isHourOfJoyActive ? 'Help... anyone...' : 'What can we help you with?'}
                      disabled={isHourOfJoyActive}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      {isHourOfJoyActive ? 'Last Words' : 'Message'}
                    </label>
                    <textarea 
                      rows={5}
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400 ${isHourOfJoyActive ? 'bg-red-900 border-red-600 text-red-300' : 'bg-slate-700 border-red-600 text-white'}`}
                      placeholder={isHourOfJoyActive ? 'The toys... they\'re alive... they\'re coming...' : 'Tell us how we can help you...'}
                      disabled={isHourOfJoyActive}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`w-full py-3 px-6 rounded font-bold transition-colors ${
                      isHourOfJoyActive ? 
                        'bg-red-900 text-red-400 cursor-not-allowed opacity-50' : 
                        'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                    disabled={isHourOfJoyActive}
                  >
                    {isHourOfJoyActive ? 'TRANSMISSION FAILED' : 'Send Message'}
                  </button>
                </form>

                {isHourOfJoyActive && (
                  <div className="mt-4 p-3 bg-red-900 bg-opacity-50 border border-red-600 rounded">
                    <p className="text-red-300 text-sm text-center">
                      Communication systems have been permanently disabled. 
                      All messages are intercepted by toy surveillance networks.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-yellow-900'} bg-opacity-50 border-${isHourOfJoyActive ? 'red' : 'yellow'}-600 max-w-3xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} flex items-center`}>
                <AlertTriangle className="w-5 h-5 mr-2" />
                {isHourOfJoyActive ? 'Emergency Protocol Failed' : 'Emergency Contact Information'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-yellow-200'} mb-4`}>
                {isHourOfJoyActive ?
                  'All emergency protocols have failed. Security systems are compromised. Evacuation routes are blocked. The toys have taken complete control of all communication systems.' :
                  'For urgent matters outside business hours, please use our emergency contact line. This should only be used for genuine emergencies related to product safety or facility security.'
                }
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} font-bold mb-2`}>
                    {isHourOfJoyActive ? 'Failed Emergency Lines' : 'Emergency Phone'}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {isHourOfJoyActive ? 
                      '(555) 911-HELP - NO ANSWER' : 
                      '(555) 911-HELP'
                    }
                  </p>
                  <p className="text-xs text-gray-400">
                    {isHourOfJoyActive ? 
                      'All operators eliminated' : 
                      '24/7 availability'
                    }
                  </p>
                </div>
                <div>
                  <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} font-bold mb-2`}>
                    {isHourOfJoyActive ? 'Compromised Security' : 'Security Direct Line'}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {isHourOfJoyActive ? 
                      '(555) 759-SAFE - DISCONNECTED' : 
                      '(555) 759-SAFE'
                    }
                  </p>
                  <p className="text-xs text-gray-400">
                    {isHourOfJoyActive ? 
                      'Security protocols failed' : 
                      'Immediate response team'
                    }
                  </p>
                </div>
              </div>
              {!isHourOfJoyActive && (
                <p className="text-xs text-gray-400 mt-4">
                  Access codes: emergency-contact | Facility security: contact-help
                </p>
              )}
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
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-red-700'} static-noise`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '2024'} Playtime Co. {isHourOfJoyActive ? 'Communications terminated.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75 nostalgic-text">
            {isHourOfJoyActive ? 'Where voices were silenced forever' : 'We\'re here to help you create magical moments'}
          </p>
          <div className="text-xs mt-1 opacity-30 text-gray-500">
            {isHourOfJoyActive ? 
              'Last transmission: August 8, 1995 - 11:00 AM' : 
              'Response time: 24-48 hours | Emergency: Immediate'
            }
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
