import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

const Factory = () => {
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';
  const isPhase2Active = localStorage.getItem('phase2Activated') === 'true';

  useEffect(() => {
    const trackPageVisit = (pageName: string) => {
      const visited = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      if (!visited.includes(pageName)) {
        visited.push(pageName);
        localStorage.setItem('visitedPages', JSON.stringify(visited));
      }
    };
    trackPageVisit('factory');
  }, []);

return (
    <div className={`min-h-screen ${isPhase2Active ? 'bg-gradient-to-b from-gray-900 to-blue-900' : (isHourOfJoyActive ? 'bg-red-900' : 'factory-gradient')} text-white`}>
      <nav className={`${isPhase2Active ? 'bg-gray-900' : (isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900')} shadow-lg sticky top-0 z-50 border-b border-red-900`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Home</Link>
              <Link to="/about" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>About Us</Link>
              <Link to="/products" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Our Toys</Link>
              <Link to="/factory" className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} font-medium border-b-2 ${isHourOfJoyActive ? 'border-red-400' : 'border-purple-400'}`}>Factory Tour</Link>
              <Link to="/contact" className={`text-gray-300 ${isHourOfJoyActive ? 'hover:text-red-400' : 'hover:text-purple-400'} transition-colors`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        
        <section className="mb-16">
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500`}>
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Factory Access Terminal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-green-400 font-bold">SECURITY</div>
                  <div className="text-xs text-gray-400">Night shift since '95</div>
                  <div className="text-xs text-green-300">security.mike</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">RESEARCH</div>
                  <div className="text-xs text-gray-400">Psychology case 101</div>
                  <div className="text-xs text-blue-300">dr.chen</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold">EXECUTIVE</div>
                  <div className="text-xs text-gray-400">Bigger vision project</div>
                  <div className="text-xs text-purple-300">dr.ludwig</div>
                </div>
              </div>
              <div className="text-center p-3 border border-yellow-500 bg-yellow-900 bg-opacity-20 rounded">
                <p className="text-yellow-300 text-sm">
                  🔑 Complete facility puzzles to unlock staff access portal
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-green-400')}`}>
            {isPhase2Active ? 'Memory-Linked Facility Areas' : (isHourOfJoyActive ? 'Abandoned Production Areas' : 'Factory Production Areas')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500`}>
              <CardHeader>
                <CardTitle className="text-green-400">Make-A-Friend Station</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ? 
                    'You remember supervising production here... the consciousness transfer protocols...' :
                    'Advanced toy creation using our patented synthetic life technology.'
                  }
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>👨‍🔧 Maintenance: Bob Matthews (wrench456)</p>
                  <p>🔬 Research: Dr. Chen oversight</p>
                  <p>🎯 Production Target: 47.3kg organic matter per unit</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-green-600 hover:bg-green-700 w-full">
                  <Link to="/make-a-friend">Explore Station</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-blue-500`}>
              <CardHeader>
                <CardTitle className="text-blue-400">Research Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ?
                    'Your former workplace. The Bigger Bodies Division where your transformation began...' :
                    'Cutting-edge research in consciousness preservation and synthetic biology.'
                  }
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>🧪 Lab Tech: Amy Rodriguez (specimen789)</p>
                  <p>📐 Engineer: Marcus Davis (blueprint456)</p>
                  <p>🎨 Designer: Emma Foster (creative321)</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-blue-600 hover:bg-blue-700 w-full">
                  <Link to="/research-lab">Access Lab</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-purple-500`}>
              <CardHeader>
                <CardTitle className="text-purple-400">Executive Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ?
                    'Ludwig\'s office... Pierre\'s special projects lab... memories surface of classified meetings...' :
                    'Administrative headquarters for company leadership and strategic planning.'
                  }
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>👔 CEO: Elliot Ludwig (biggerbodies)</p>
                  <p>🎯 Special Projects: Leith Pierre (prototype1170)</p>
                  <p>📊 Operations: Chief Ops (facility2024)</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-purple-600 hover:bg-purple-700 w-full">
                  <Link to="/executive-portal">Executive Access</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-red-500`}>
              <CardHeader>
                <CardTitle className="text-red-400">Security Division</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ?
                    'The Doctor\'s domain now. Sawyer was weak, but The Doctor sees all...' :
                    'Facility security and access control systems management.'
                  }
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>🕐 Night Security: Mike Schmidt (nightshift1995)</p>
                  <p>🏥 Former Chief: Dr. Harley Sawyer</p>
                  <p>👁️ Current Director: The Doctor (sawyer-was-weak)</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-red-600 hover:bg-red-700 w-full">
                  <Link to="/the-doctor">Security Override</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-yellow-500`}>
              <CardHeader>
                <CardTitle className="text-yellow-400">Guest Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Public tours and visitor orientation services.
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>👩‍🏫 Tour Guide: Sarah Johnson (welcome123)</p>
                  <p>🍽️ Cafeteria: Patricia Wells (lunch789)</p>
                  <p>📋 Guest Relations: Standard protocols</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-yellow-600 hover:bg-yellow-700 w-full">
                  <Link to="/contact">Contact Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-cyan-500`}>
              <CardHeader>
                <CardTitle className="text-cyan-400">Special Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isPhase2Active ?
                    'Hidden systems... prototype communications... insider contacts...' :
                    'Restricted areas requiring special authorization.'
                  }
                </p>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>🔒 Insider Contact: insider (inside-help-1995)</p>
                  <p>🤖 Prototype Network: prototype (experiment1006)</p>
                  <p>📡 Communications: Encrypted channels</p>
                </div>
                <Button asChild size="sm" className="mt-4 bg-cyan-600 hover:bg-cyan-700 w-full">
                  <Link to="/prototype-conversations">Special Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-green-400')}`}>
            {isPhase2Active ? 'Memory Fragment: Production Records' : 'Production Schedule'}
          </h2>
          
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500`}>
            <CardHeader>
              <CardTitle className="text-green-400">Staff Schedule & Access Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-300 font-bold mb-3">Current Shift Schedule:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Night Security (1995-current):</span>
                      <span className="text-green-400">Mike Schmidt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Psychology Research:</span>
                      <span className="text-blue-400">Dr. Chen (Cases 101+)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Executive Leadership:</span>
                      <span className="text-purple-400">Dr. Ludwig (Bigger Bodies)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Special Projects:</span>
                      <span className="text-yellow-400">Leith Pierre (Proto-1170)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Security Director:</span>
                      <span className="text-red-400">The Doctor (Post-Sawyer)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-green-300 font-bold mb-3">Access Instructions:</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>🔑 Username: {'{department.name}'}</p>
                    <p>🔐 Password: {'{role/project + number/year}'}</p>
                    <p>🎯 Security: nightshift + year started</p>
                    <p>🔬 Research: specialty + case number</p>
                    <p>💼 Executive: vision/project name</p>
                    <p>⚡ Special: prototype + series number</p>
                    <p>👁️ Override: predecessor + weakness</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link to="/login">
                    <Key className="w-4 h-4 mr-2" />
                    Staff Login Portal
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isPhase2Active ? 'text-blue-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-green-400')}`}>
            {isPhase2Active ? 'Production Status: Neural Integration' : 'Production Status'}
          </h2>
          
          <Card className={`${isPhase2Active ? 'bg-blue-800' : (isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800')} border-green-500`}>
            <CardHeader>
              <CardTitle className="text-green-400">Current Production Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-300 font-bold mb-3">Make-A-Friend Station:</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">Units Produced: 478</p>
                    <p className="text-gray-300">Organic Matter Used: 22,612 kg</p>
                    <p className="text-gray-300">Consciousness Retention: 98%</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-green-300 font-bold mb-3">Research Laboratory:</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">Experiments Conducted: 1006</p>
                    <p className="text-gray-300">Subjects Transferred: 78</p>
                    <p className="text-gray-300">Prototype Enhancements: 12</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  {isPhase2Active ?
                    'Neural integration progressing... memories resurfacing...' :
                    'Production goals on track... innovation continues...'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Factory;
