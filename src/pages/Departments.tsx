
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Flask, Wrench, Shield, Brain, Heart } from "lucide-react";

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const departments = [
    {
      id: "research",
      name: "Research & Development",
      head: "Dr. Harley Sawyer",
      icon: Flask,
      personnel: 15,
      status: "Active",
      description: "Advanced toy development and consciousness research",
      projects: ["Bigger Bodies Initiative", "Consciousness Transfer Protocol", "Subject Behavioral Analysis"],
      classified: "Project Playtime, Human-Toy Hybridization, Memory Implantation Studies",
      credentials: "research789",
      location: "Building C - Levels 3-5"
    },
    {
      id: "security",
      name: "Security Division", 
      head: "Captain Marcus Webb",
      icon: Shield,
      personnel: 25,
      status: "High Alert",
      description: "Facility security and subject containment",
      projects: ["Perimeter Defense", "Subject Monitoring", "Emergency Response"],
      classified: "Hour of Joy Cover-up, Missing Personnel Reports, Containment Breach Protocols",
      credentials: "security123",
      location: "Building A - All Levels"
    },
    {
      id: "medical",
      name: "Medical & Psychology",
      head: "Dr. Sarah Chen",
      icon: Heart,
      personnel: 8,
      status: "Active",
      description: "Subject health monitoring and psychological evaluation",
      projects: ["Behavioral Assessment", "Trauma Response Analysis", "Medical Care"],
      classified: "Consciousness Transfer Side Effects, Memory Fragmentation Studies, Identity Retention Research",
      credentials: "medical456",
      location: "Building B - Level 2"
    },
    {
      id: "maintenance",
      name: "Maintenance & Engineering",
      head: "Robert Klein",
      icon: Wrench,
      personnel: 12,
      status: "Active",
      description: "Facility maintenance and containment system operation",
      projects: ["Containment Systems", "Power Grid Management", "Facility Repairs"],
      classified: "Subject Feeding Systems, Disposal Protocols, Emergency Lockdown Procedures",
      credentials: "factory456",
      location: "Building D - Underground Levels"
    },
    {
      id: "administration",
      name: "Administration",
      head: "Director Ludwig",
      icon: Users,
      personnel: 6,
      status: "Active", 
      description: "Executive oversight and project coordination",
      projects: ["Budget Management", "Personnel Coordination", "External Relations"],
      classified: "Executive Orders, Cover Story Management, Public Relations Strategy",
      credentials: "biggerbodies",
      location: "Building A - Executive Level"
    },
    {
      id: "special",
      name: "Special Projects Division",
      head: "Dr. Ludwig",
      icon: Brain,
      personnel: 3,
      status: "Classified",
      description: "Highly classified experimental programs",
      projects: ["[REDACTED]", "[REDACTED]", "[REDACTED]"],
      classified: "CatNap Protocol, DogDay Experiments, Prototype 1188, The Smiling Critters Project",
      credentials: "experiment1006",
      location: "Building X - Deep Underground"
    }
  ];

  const staffRoster = [
    { name: "Dr. Harley Sawyer", department: "Research", clearance: 3, status: "Active", notes: "Project lead for Bigger Bodies" },
    { name: "Dr. Sarah Chen", department: "Medical", clearance: 2, status: "Missing", notes: "Last seen investigating subject anomalies" },
    { name: "Director Ludwig", department: "Administration", clearance: 3, status: "Active", notes: "Executive authority over all projects" },
    { name: "Captain Marcus Webb", department: "Security", clearance: 2, status: "Missing", notes: "Disappeared during Hour of Joy incident" },
    { name: "Robert Klein", department: "Maintenance", clearance: 1, status: "Missing", notes: "Last radio contact 08/08/95" },
    { name: "Jennifer Adams", department: "Research", clearance: 2, status: "Missing", notes: "Testing area security footage corrupted" }
  ];

  return (
    <div className="min-h-screen poppy-gradient text-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-purple-400 poppy-text-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-purple-400 transition-colors">Our Toys</Link>
              <Link to="/factory" className="text-gray-300 hover:text-purple-400 transition-colors">Factory Tour</Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-purple-900 text-white p-6 shadow-lg border-b border-purple-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold poppy-text-glow flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Department Directory
          </h1>
          <p className="text-purple-200 mt-2">Organizational structure and personnel management</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Departments Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Active Departments</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {departments.map((dept) => {
              const IconComponent = dept.icon;
              return (
                <Card 
                  key={dept.id}
                  className={`bg-slate-800 border-purple-500 cursor-pointer transition-all duration-300 hover:border-purple-300 poppy-card-glow ${
                    selectedDept === dept.id ? 'ring-2 ring-purple-400' : ''
                  }`}
                  onClick={() => setSelectedDept(selectedDept === dept.id ? null : dept.id)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-400">
                      <IconComponent className="w-6 h-6 mr-2" />
                      {dept.name}
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                      <p>Head: {dept.head}</p>
                      <p>Personnel: {dept.personnel}</p>
                      <p className={`${
                        dept.status === 'Active' ? 'text-green-400' :
                        dept.status === 'High Alert' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        Status: {dept.status}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
                    <p className="text-xs text-gray-400 mb-2">Location: {dept.location}</p>
                    
                    {selectedDept === dept.id && (
                      <div className="space-y-4 mt-4 p-4 bg-slate-900 rounded border border-purple-500">
                        <div>
                          <h4 className="text-purple-400 font-bold mb-2">Current Projects</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {dept.projects.map((project, idx) => (
                              <li key={idx}>• {project}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-red-400 font-bold mb-2">Classified Operations</h4>
                          <p className="text-red-300 text-sm">{dept.classified}</p>
                        </div>
                        <div className="text-xs text-green-400">
                          Access Credentials: {dept.credentials}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Staff Roster */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Personnel Roster</h2>
          <Card className="bg-slate-800 border-purple-500">
            <CardHeader>
              <CardTitle className="text-purple-400">Key Personnel Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffRoster.map((staff, index) => (
                  <div key={index} className="p-3 bg-slate-900 rounded border border-purple-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-400 font-bold">{staff.name}</span>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-purple-700 rounded">
                          Level {staff.clearance}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          staff.status === 'Active' ? 'bg-green-700 text-white' : 'bg-red-700 text-white'
                        }`}>
                          {staff.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Department: {staff.department}</p>
                    <p className="text-gray-300 text-sm">{staff.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Procedures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Emergency Protocols</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Containment Breach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>1. Immediate facility lockdown</li>
                  <li>2. Activate emergency beacons</li>
                  <li>3. Evacuate non-essential personnel</li>
                  <li>4. Deploy security response teams</li>
                  <li>5. Implement CatNap Protocol if necessary</li>
                </ul>
                <p className="text-xs text-red-400 mt-4">
                  Emergency override: catnap-protocol
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-400">Missing Personnel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>1. 72-hour search protocol</li>
                  <li>2. Security footage review</li>
                  <li>3. Last known location sweep</li>
                  <li>4. Subject behavior analysis</li>
                  <li>5. External cover story deployment</li>
                </ul>
                <p className="text-xs text-red-400 mt-4">
                  Protocol access: hourof-joy
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden Administrative Note */}
        <div className="mt-8 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded text-xs">
          <p className="text-yellow-300">
            <strong>Administrative Note:</strong> Multiple department heads missing since Hour of Joy incident. 
            Automated systems maintaining basic operations. Dr. Ludwig's final directive: "Continue the work at all costs."
            Backup protocols stored in /orphanage records.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-purple-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Playtime Co. Human Resources Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Internal Use Only - Confidential</p>
          <p className="text-xs text-purple-400 mt-1 opacity-50">
            HR Access: hr-files | Executive Override: experiment1006
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Departments;
