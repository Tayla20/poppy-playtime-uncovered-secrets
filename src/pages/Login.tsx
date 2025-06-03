
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock } from "lucide-react";

interface User {
  username: string;
  password: string;
  role: 'staff' | 'researcher' | 'executive';
  name: string;
  clearanceLevel: number;
}

const users: User[] = [
  // Staff level (clearance 1)
  { username: "staff001", password: "playtime123", role: "staff", name: "Security Guard", clearanceLevel: 1 },
  { username: "maintenance", password: "factory456", role: "staff", name: "Maintenance Worker", clearanceLevel: 1 },
  
  // Researcher level (clearance 2)
  { username: "dr.chen", password: "research789", role: "researcher", name: "Dr. Sarah Chen", clearanceLevel: 2 },
  { username: "lab.tech", password: "specimen101", role: "researcher", name: "Lab Technician", clearanceLevel: 2 },
  
  // Executive level (clearance 3)
  { username: "dr.sawyer", password: "experiment1006", role: "executive", name: "Dr. Harley Sawyer", clearanceLevel: 3 },
  { username: "ludwig", password: "biggerbodies", role: "executive", name: "Dr. Ludwig", clearanceLevel: 3 },
  { username: "director", password: "hourofkjoy", role: "executive", name: "Facility Director", clearanceLevel: 3 },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError("");

    // Simulate authentication delay
    setTimeout(() => {
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Store user data in localStorage
        localStorage.setItem('playtime_user', JSON.stringify(user));
        navigate('/documents');
      } else {
        setError("Invalid credentials. Access denied.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <Card className="bg-gray-800 border-green-400">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-green-400" />
            </div>
            <CardTitle className="text-green-400 text-xl">PLAYTIME CO. SECURE LOGIN</CardTitle>
            <p className="text-green-600 text-sm">Authorized Personnel Only</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-green-400">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-900 border-green-400 text-green-400"
                placeholder="Enter username..."
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-green-400">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-900 border-green-400 text-green-400 pr-10"
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
              <div className="text-red-400 text-sm p-2 bg-red-900 border border-red-400 rounded">
                {error}
              </div>
            )}

            <Button 
              onClick={handleLogin}
              disabled={loading || !username || !password}
              className="w-full bg-green-600 hover:bg-green-700 text-black"
            >
              {loading ? "AUTHENTICATING..." : "ACCESS SYSTEM"}
            </Button>

            <div className="text-center">
              <Link to="/" className="text-green-400 hover:text-green-300 underline text-sm">
                Return to Main Site
              </Link>
            </div>

            {/* Login credentials hint */}
            <div className="mt-6 p-3 bg-gray-700 border border-green-600 rounded">
              <h4 className="text-green-400 text-xs font-bold mb-2">DEMO CREDENTIALS:</h4>
              <div className="text-xs space-y-1">
                <div className="text-green-600">Staff: staff001 / playtime123</div>
                <div className="text-yellow-600">Researcher: dr.chen / research789</div>
                <div className="text-red-600">Executive: dr.sawyer / experiment1006</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
