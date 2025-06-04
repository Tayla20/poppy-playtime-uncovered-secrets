
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, AlertTriangle } from "lucide-react";

interface User {
  username: string;
  password: string;
  role: 'staff' | 'researcher' | 'executive';
  name: string;
  clearanceLevel: number;
  department: string;
}

const users: User[] = [
  // Staff level (clearance 1)
  { username: "security.mike", password: "nightshift1995", role: "staff", name: "Mike Schmidt", clearanceLevel: 1, department: "Security" },
  { username: "maintenance.bob", password: "wrench456", role: "staff", name: "Bob Matthews", clearanceLevel: 1, department: "Maintenance" },
  { username: "tour.guide", password: "welcome123", role: "staff", name: "Sarah Johnson", clearanceLevel: 1, department: "Tours" },
  { username: "cafeteria.pat", password: "lunch789", role: "staff", name: "Patricia Wells", clearanceLevel: 1, department: "Food Services" },
  
  // Researcher level (clearance 2)
  { username: "dr.chen", password: "psychology101", role: "researcher", name: "Dr. Sarah Chen", clearanceLevel: 2, department: "Child Psychology" },
  { username: "engineer.davis", password: "blueprint456", role: "researcher", name: "Marcus Davis", clearanceLevel: 2, department: "Engineering" },
  { username: "lab.tech.amy", password: "specimen789", role: "researcher", name: "Amy Rodriguez", clearanceLevel: 2, department: "Research Lab" },
  { username: "toy.designer", password: "creative321", role: "researcher", name: "Emma Foster", clearanceLevel: 2, department: "Design" },
  { username: "dr.matthews", password: "behavioral555", role: "researcher", name: "Dr. James Matthews", clearanceLevel: 2, department: "Behavioral Studies" },
  
  // Executive level (clearance 3)
  { username: "dr.ludwig", password: "biggerbodies", role: "executive", name: "Dr. Ludwig", clearanceLevel: 3, department: "Research Division" },
  { username: "director.stella", password: "oversight1995", role: "executive", name: "Director Stella Greyber", clearanceLevel: 3, department: "Facility Management" },
  { username: "leith.pierre", password: "prototype1170", role: "executive", name: "Leith Pierre", clearanceLevel: 3, department: "Special Projects" },
  { username: "chief.ops", password: "facility2024", role: "executive", name: "Operations Chief", clearanceLevel: 3, department: "Operations" },
  { username: "the.doctor", password: "sawyer-was-weak", role: "executive", name: "The Doctor", clearanceLevel: 3, department: "Security" },
  
  // Special/Hidden Users
  { username: "insider", password: "inside-help-1995", role: "researcher", name: "INSIDER_CONTACT", clearanceLevel: 2, department: "Unknown" },
  { username: "prototype", password: "experiment1006", role: "executive", name: "The Prototype", clearanceLevel: 3, department: "None" },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError("");

    // Simulate authentication delay
    setTimeout(() => {
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Special cases
        if (username === "insider") {
          // Route to prototype conversations
          navigate('/prototype-conversations');
        } else if (username === "prototype" || username === "the.doctor") {
          // Route to the doctor's page
          navigate('/the-doctor');
        } else {
          // Store user data in localStorage
          localStorage.setItem('playtime_user', JSON.stringify(user));
          
          // Route based on clearance level
          if (user.role === 'executive') {
            navigate('/executive-portal');
          } else {
            navigate('/documents');
          }
        }
      } else {
        setError("Invalid credentials. Access denied.");
        
        // Easter eggs for certain inputs
        if (password.includes("prototype") || password.includes("1170") || password.includes("sawyer")) {
          setTimeout(() => {
            setGlitchActive(true);
            setError("THE PROTOTYPE SEES ALL. AUGUST 8TH APPROACHES.");
            setTimeout(() => setGlitchActive(false), 2000);
          }, 1000);
        } else if (password.includes("joy") || password.includes("hour")) {
          setTimeout(() => {
            setGlitchActive(true);
            setError("THE HOUR OF JOY IS COMING. THE TOYS ARE WAITING.");
            setTimeout(() => setGlitchActive(false), 2000);
          }, 1000);
        }
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen welcome-gradient text-white font-mono flex items-center justify-center static-noise">
      <div className="w-full max-w-md p-6">
        <Card className="bg-slate-800 bg-opacity-80 border-red-600 vintage-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lock className={`w-12 h-12 ${glitchActive ? 'text-red-500' : 'text-green-400'}`} />
            </div>
            <CardTitle className={`text-xl nostalgic-text ${glitchActive ? 'glitch-text text-red-400' : 'text-green-400'}`} data-text="PLAYTIME CO. SECURE LOGIN">
              {glitchActive ? 'P̶R̸O̷T̵O̴T̷Y̶P̸E̵ ̶N̷E̸T̶W̷O̸R̶K̵' : 'PLAYTIME CO. SECURE LOGIN'}
            </CardTitle>
            <p className="text-green-600 text-sm nostalgic-text">Authorized Personnel Only</p>
            <div className="text-xs text-yellow-400 opacity-75 mt-2">
              <AlertTriangle className="w-3 h-3 inline mr-1" />
              Security Notice: Multiple unauthorized access attempts detected
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-green-400 nostalgic-text">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-900 border-green-400 text-green-400 nostalgic-text"
                placeholder="Enter username..."
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-green-400 nostalgic-text">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-900 border-green-400 text-green-400 pr-10 nostalgic-text"
                  placeholder="Enter password..."
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className={`text-sm p-2 border rounded ${glitchActive ? 'text-red-400 bg-red-900 border-red-400' : 'text-red-400 bg-red-900 border-red-400'}`}>
                {error}
              </div>
            )}

            <Button 
              onClick={handleLogin}
              disabled={loading || !username || !password}
              className="w-full bg-green-600 hover:bg-green-700 text-black nostalgic-text"
            >
              {loading ? "AUTHENTICATING..." : "ACCESS SYSTEM"}
            </Button>

            <div className="text-center">
              <Link to="/" className="text-green-400 hover:text-green-300 underline text-sm nostalgic-text">
                Return to Main Site
              </Link>
            </div>

            {/* Demo credentials with departments */}
            <div className="mt-6 p-3 bg-slate-700 border border-green-600 rounded static-noise">
              <h4 className="text-green-400 text-xs font-bold mb-2 nostalgic-text">DEMO CREDENTIALS:</h4>
              <div className="text-xs space-y-1">
                <div className="text-green-500">Security: security.mike / nightshift1995</div>
                <div className="text-yellow-500">Research: dr.chen / psychology101</div>
                <div className="text-blue-500">Executive: dr.ludwig / biggerbodies</div>
                <div className="text-purple-400 opacity-70">Special Projects: leith.pierre / prototype1170</div>
                <div className="text-red-400 opacity-70">Security Director: the.doctor / sawyer-was-weak</div>
              </div>
            </div>

            {/* Hidden credentials */}
            <div className="text-xs text-center opacity-20 hover:opacity-70 transition-opacity duration-2000 cursor-default">
              <span className="invisible-text">Prototype: experiment1006 | Insider: inside-help-1995</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
