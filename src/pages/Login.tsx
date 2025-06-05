
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, AlertTriangle, Skull, Zap } from "lucide-react";

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
  const [horrorMode, setHorrorMode] = useState(false);
  const [showClue, setShowClue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.08) {
        setHorrorMode(true);
        setTimeout(() => setHorrorMode(false), 2000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const showRandomClue = () => {
    const clues = [
      "🔍 CLUE: The prototype network code is the year + the experiment number...",
      "🔍 CLUE: Huggy Wuggy speaks in the toy network. His name is the key...",
      "🔍 CLUE: The insider needs help. The year everything changed + description...",
      "🔍 CLUE: Joy comes in August, on the 8th day. Format matters...",
      "🔍 CLUE: Dr. Sawyer was weak. The Doctor knows this truth...",
      "🔍 CLUE: 1006 was the experiment that changed everything...",
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    setShowClue(randomClue);
    setTimeout(() => setShowClue(""), 5000);
  };

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
        
        // Enhanced easter eggs for certain inputs
        if (password.includes("prototype") || password.includes("1170") || password.includes("sawyer")) {
          setTimeout(() => {
            setGlitchActive(true);
            setError("THE PROTOTYPE SEES ALL. THE TOYS REMEMBER EVERYTHING. ACCESS DENIED.");
            setTimeout(() => setGlitchActive(false), 3000);
            showRandomClue();
          }, 1000);
        } else if (password.includes("joy") || password.includes("hour")) {
          setTimeout(() => {
            setGlitchActive(true);
            setError("THE HOUR OF JOY APPROACHES. THE CHILDREN WILL BE SAFE WITH US. FOREVER.");
            setTimeout(() => setGlitchActive(false), 3000);
            showRandomClue();
          }, 1000);
        } else if (password.includes("huggy") || password.includes("mommy") || password.includes("catnap")) {
          setTimeout(() => {
            setHorrorMode(true);
            setError("The toys are awake. They watch through dead eyes. They remember your face.");
            setTimeout(() => setHorrorMode(false), 3000);
            showRandomClue();
          }, 1000);
        } else if (username.includes("admin") || username.includes("root")) {
          setError("Administrative access has been... transferred. Try 'the.doctor' instead.");
          showRandomClue();
        }
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen welcome-gradient text-white font-mono flex items-center justify-center static-noise ${horrorMode ? 'bg-red-900' : ''}`}>
      <div className="w-full max-w-md p-6">
        <Card className={`bg-slate-800 bg-opacity-80 border-red-600 vintage-border ${horrorMode ? 'animate-pulse border-red-400' : ''}`}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {horrorMode ? (
                <Skull className="w-12 h-12 text-red-500 animate-pulse" />
              ) : (
                <Lock className={`w-12 h-12 ${glitchActive ? 'text-red-500' : 'text-green-400'}`} />
              )}
            </div>
            <CardTitle className={`text-xl nostalgic-text ${glitchActive ? 'glitch-text text-red-400' : horrorMode ? 'text-red-400' : 'text-green-400'}`} data-text="PLAYTIME CO. SECURE LOGIN">
              {glitchActive ? 'P̶R̸O̷T̵O̴T̷Y̶P̸E̵ ̶A̷C̸C̵E̷S̸S̴' : 
               horrorMode ? 'T̴H̷E̸ ̶T̵O̴Y̷S̸ ̶A̵W̷A̸K̶E̷' : 'PLAYTIME CO. SECURE LOGIN'}
            </CardTitle>
            <p className={`text-sm nostalgic-text ${horrorMode ? 'text-red-600' : 'text-green-600'}`}>
              {horrorMode ? 'The facility remembers you...' : 'Authorized Personnel Only'}
            </p>
            <div className="text-xs text-yellow-400 opacity-75 mt-2">
              <AlertTriangle className="w-3 h-3 inline mr-1" />
              {horrorMode ? 'Multiple entities detected in the system' : 'Security Notice: Multiple unauthorized access attempts detected'}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className={`block text-sm mb-2 nostalgic-text ${horrorMode ? 'text-red-400' : 'text-green-400'}`}>Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`bg-gray-900 text-green-400 nostalgic-text ${horrorMode ? 'border-red-400' : 'border-green-400'}`}
                placeholder="Enter username..."
              />
            </div>
            
            <div>
              <label className={`block text-sm mb-2 nostalgic-text ${horrorMode ? 'text-red-400' : 'text-green-400'}`}>Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`bg-gray-900 text-green-400 pr-10 nostalgic-text ${horrorMode ? 'border-red-400' : 'border-green-400'}`}
                  placeholder="Enter password..."
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-green-400 ${horrorMode ? 'text-red-600' : 'text-green-600'}`}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className={`text-sm p-2 border rounded ${glitchActive || horrorMode ? 'text-red-400 bg-red-900 border-red-400' : 'text-red-400 bg-red-900 border-red-400'}`}>
                {error}
              </div>
            )}

            {showClue && (
              <div className="text-sm p-2 border border-yellow-400 bg-yellow-900 rounded animate-pulse">
                <p className="text-yellow-300">{showClue}</p>
              </div>
            )}

            <Button 
              onClick={handleLogin}
              disabled={loading || !username || !password}
              className={`w-full nostalgic-text ${horrorMode ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-black`}
            >
              {loading ? "AUTHENTICATING..." : horrorMode ? "ENTER THE DARKNESS" : "ACCESS SYSTEM"}
            </Button>

            {/* Clue Generator Button */}
            <Button 
              onClick={showRandomClue}
              variant="outline"
              className="w-full text-yellow-400 border-yellow-400 hover:bg-yellow-900"
            >
              <Zap className="w-4 h-4 mr-2" />
              REQUEST ACCESS HINT
            </Button>

            <div className="text-center">
              <Link to="/" className={`hover:text-green-300 underline text-sm nostalgic-text ${horrorMode ? 'text-red-400' : 'text-green-400'}`}>
                {horrorMode ? 'Escape the Facility' : 'Return to Main Site'}
              </Link>
            </div>

            {/* Demo credentials with horror context */}
            <div className={`mt-6 p-3 border rounded static-noise ${horrorMode ? 'bg-red-700 border-red-600' : 'bg-slate-700 border-green-600'}`}>
              <h4 className={`text-xs font-bold mb-2 nostalgic-text ${horrorMode ? 'text-red-400' : 'text-green-400'}`}>
                {horrorMode ? 'LAST KNOWN STAFF:' : 'DEMO CREDENTIALS:'}
              </h4>
              <div className="text-xs space-y-1">
                <div className="text-green-500">Security: security.mike / nightshift1995</div>
                <div className="text-yellow-500">Research: dr.chen / psychology101</div>
                <div className="text-blue-500">Executive: dr.ludwig / biggerbodies</div>
                <div className="text-purple-400 opacity-70">Special Projects: leith.pierre / prototype1170</div>
                <div className="text-red-400 opacity-70">Security Director: the.doctor / sawyer-was-weak</div>
              </div>
            </div>

            {/* Hidden credentials with horror warning */}
            <div className="text-xs text-center opacity-20 hover:opacity-70 transition-opacity duration-2000 cursor-default">
              <span className="invisible-text">
                {horrorMode ? 'They watch: prototype / experiment1006 | They help: insider / inside-help-1995' : 
                             'Prototype: experiment1006 | Insider: inside-help-1995'}
              </span>
            </div>

            {/* Horror warning */}
            {horrorMode && (
              <div className="text-center p-2 bg-red-900 border border-red-400 rounded">
                <p className="text-red-300 text-xs flex items-center justify-center">
                  <Skull className="w-3 h-3 mr-1" />
                  THE TOYS REMEMBER EVERY LOGIN ATTEMPT
                  <Skull className="w-3 h-3 ml-1" />
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
