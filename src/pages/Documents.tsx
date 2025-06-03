
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, File, Lock, Search, LogOut, User } from "lucide-react";

interface User {
  username: string;
  role: 'staff' | 'researcher' | 'executive';
  name: string;
  clearanceLevel: number;
}

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('playtime_user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('playtime_user');
    navigate('/');
  };

  const documents = [
    // Level 1 - Staff Access
    {
      id: "incident-001",
      title: "Minor Incident Report",
      date: "1995-07-10",
      classification: "INTERNAL",
      clearanceLevel: 1,
      content: `INCIDENT REPORT - MINOR
Date: July 10, 1995
Location: Production Floor A
Reported by: Security Guard Johnson

A toy malfunction occurred during routine testing. Subject 1170 exhibited unexpected movement during power-down sequence. No injuries reported.

Maintenance team notified. Issue resolved by replacing power coupling.

Status: Closed`,
    },
    {
      id: "staff-memo",
      title: "Staff Safety Memo",
      date: "1995-06-15",
      classification: "INTERNAL", 
      clearanceLevel: 1,
      content: `STAFF SAFETY MEMO
Date: June 15, 1995
To: All Production Staff

Reminder: When working with larger prototype toys, always maintain minimum 10-foot distance during active testing.

New safety protocols:
- Wear protective equipment at all times
- Report any unusual toy behavior immediately
- Do not approach toys during "rest mode"

Management`,
    },

    // Level 2 - Researcher Access
    {
      id: "test-results",
      title: "Behavioral Test Results",
      date: "1995-08-01",
      classification: "CONFIDENTIAL",
      clearanceLevel: 2,
      content: `BEHAVIORAL ANALYSIS REPORT
Date: August 1, 1995
Subject: Multiple prototype subjects
Researcher: Dr. Sarah Chen

Observations:
- Subjects show increased attachment to researchers
- Aggressive responses when separated from "favored" humans
- Intelligence levels exceed initial projections
- Subjects appear to communicate with each other

Recommendation: Further study required before public release.

[WARNING: Some behaviors concerning - request supervisory review]`,
    },
    {
      id: "psychological-profile",
      title: "Subject Psychological Profiles",
      date: "1995-07-25",
      classification: "CONFIDENTIAL",
      clearanceLevel: 2,
      content: `PSYCHOLOGICAL EVALUATION
Date: July 25, 1995
Evaluator: Dr. Roberts

Subject 1006 "Huggy Wuggy":
- Displays protective instincts
- Forms strong emotional bonds
- Shows signs of jealousy when attention diverted
- Intelligence: Above average child level

Subject 1170 "Kissy Missy":
- Empathetic responses
- Nurturing behavior patterns
- Responds to emotional distress in others
- Potential therapeutic applications

Note: Subjects seem to understand more than they let on.`,
    },

    // Level 3 - Executive Access (Original documents plus new ones)
    {
      id: "exp-1006",
      title: "Experiment 1006",
      date: "1995-03-15",
      classification: "TOP SECRET",
      clearanceLevel: 3,
      content: `EXPERIMENT LOG 1006
Date: March 15, 1995
Subject: Project Playtime Initiative
Researcher: Dr. Harley Sawyer

The prototype is showing remarkable results. Subject 1006 has exceeded all expectations in terms of size, strength, and cognitive ability. However, we're experiencing some... behavioral issues.

The subject shows signs of aggression when separated from other subjects. Dr. Ludwig believes this is a feature, not a bug. "A toy that truly cares for its friends," he said.

I'm not so sure. Yesterday, 1006 broke through a reinforced steel door when we tried to move Subject 1170 to a different testing area. The destruction was... concerning.

Note: Recommend immediate review of containment protocols.

[DOCUMENT ENDS]`,
    },
    {
      id: "bigger-bodies",
      title: "Bigger Bodies Initiative",
      date: "1990-12-01",
      classification: "TOP SECRET",
      clearanceLevel: 3,
      content: `PROJECT: BIGGER BODIES INITIATIVE
Phase: Alpha Testing
Date: December 1, 1990
Lead: Dr. Ludwig

Objective: Create large-scale toys capable of independent operation and emotional attachment.

Current Subjects:
- Subject 1006: "Huggy Wuggy" - 17 feet tall, blue fur, extendable arms
- Subject 1170: "Kissy Missy" - 15 feet tall, pink fur, heightened empathy protocols

The synthetic biology integration is showing promise. Subjects display genuine emotional responses and protective instincts. However, power requirements are enormous.

Dr. Ludwig's notes: "We need a renewable energy source. Something... organic."

[WARNING: LEVEL 3 CLEARANCE REQUIRED FOR FULL DOCUMENTATION]`,
    },
    {
      id: "hour-of-joy",
      title: "Incident Report - Hour of Joy",
      date: "1995-08-08",
      classification: "EYES ONLY",
      clearanceLevel: 3,
      content: `INCIDENT REPORT
Date: August 8, 1995, 11:00 AM
Event Code Name: "Hour of Joy"
Reporting Officer: [REDACTED]

At approximately 11:00 AM, all active Bigger Bodies subjects simultaneously breached containment. Security protocols failed across all sectors. 

Subjects 1006, 1170, and others showed coordinated behavior suggesting planned uprising. Factory-wide lockdown initiated but proved ineffective.

Casualty Report: [DATA EXPUNGED]
Survivors: [REDACTED]
Status of experiments: All subjects remain loose in facility

Dr. Ludwig's final transmission: "They're not just toys anymore. They're alive. God help us, they're truly alive."

Facility sealed indefinitely. Cover story: Gas leak closure.

[END REPORT]`,
    },
    {
      id: "missing-employees",
      title: "Employee Status Report",
      date: "1995-08-22",
      classification: "TOP SECRET",
      clearanceLevel: 3,
      content: `EMPLOYEE STATUS REPORT
Date: August 22, 1995
Department: Human Resources

MISSING PERSONNEL:
- Dr. Sarah Chen (Research Division) - Last seen 08/15/95
- Marcus Webb (Security) - Last seen 08/16/95  
- Jennifer Adams (Testing) - Last seen 08/17/95
- Robert Klein (Maintenance) - Last seen 08/18/95

Total missing this month: 47 employees

Security footage from Testing Area 02 shows employees entering but no footage of them leaving. All access cards remain active. Personal belongings found in lockers untouched.

Dr. Ludwig has instructed all staff that missing employees have been "transferred to other projects." No further questions are to be asked.

[CLASSIFIED]`,
    },
    {
      id: "energy-source",
      title: "Alternative Energy Research",
      date: "1994-11-30",
      classification: "EYES ONLY",
      clearanceLevel: 3,
      content: `CONFIDENTIAL RESEARCH NOTES
Date: November 30, 1994
Researcher: Dr. Ludwig
Project: Sustainable Power Source

Traditional power sources insufficient for Bigger Bodies project. Subjects require enormous energy input to maintain consciousness and mobility.

Discovery: Organic matter provides more efficient energy conversion. Initial tests with plant matter showed 300% efficiency increase.

Further research into... alternative organic sources shows promising results. Human bioelectric fields may be key to solving power crisis.

Note: Ethics committee review bypassed due to project urgency.

[AUTHORIZATION: EXECUTIVE LEVEL ONLY]`,
    },
    {
      id: "prototype-ai",
      title: "Artificial Intelligence Integration",
      date: "1993-05-20",
      classification: "TOP SECRET",
      clearanceLevel: 3,
      content: `AI INTEGRATION REPORT
Date: May 20, 1993
Lead Researcher: Dr. Ludwig
Project: Consciousness Transfer

Breakthrough achieved in artificial consciousness development. Successfully transferred human personality patterns into prototype subjects.

Test Subject: Employee #4732 (volunteer)
Result: Complete personality integration with Subject 1006
Retention: 94% of original memories and behaviors

Side effects:
- Increased aggression toward perceived threats
- Protective instincts amplified beyond normal parameters
- Memories of "previous life" cause distress

Recommendation: Continue testing with additional volunteers.

[VOLUNTEER PROGRAM EXPANDED - SEE ATTACHED FORMS]`,
    }
  ];

  // Filter documents based on user clearance level
  const accessibleDocuments = user 
    ? documents.filter(doc => doc.clearanceLevel <= user.clearanceLevel)
    : [];

  if (!user) {
    return <div className="min-h-screen bg-gray-900 text-green-400 font-mono flex items-center justify-center">
      <div>Loading...</div>
    </div>;
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'staff': return 'text-green-400';
      case 'researcher': return 'text-yellow-400';
      case 'executive': return 'text-red-400';
      default: return 'text-green-400';
    }
  };

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'staff': return 'STAFF LEVEL';
      case 'researcher': return 'RESEARCHER LEVEL';
      case 'executive': return 'EXECUTIVE LEVEL';
      default: return 'UNKNOWN';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Header */}
      <header className="bg-gray-800 border-b border-green-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">PLAYTIME CO. - CLASSIFIED DATABASE</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className={`text-sm ${getRoleColor(user.role)}`}>
                {user.name} | {getRoleDisplay(user.role)} | Clearance {user.clearanceLevel}
              </span>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline" 
              size="sm" 
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Document List */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <File className="w-5 h-5 mr-2" />
              ACCESSIBLE FILES ({accessibleDocuments.length})
            </h2>
            <div className="space-y-2">
              {accessibleDocuments.map((doc) => (
                <Card 
                  key={doc.id}
                  className={`cursor-pointer transition-all bg-gray-800 border-green-400 hover:bg-gray-700 ${
                    selectedDoc === doc.id ? 'ring-2 ring-green-400' : ''
                  }`}
                  onClick={() => setSelectedDoc(doc.id)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm text-green-400">{doc.title}</h3>
                      <span className={`text-xs ${
                        doc.classification === 'INTERNAL' ? 'text-green-400' :
                        doc.classification === 'CONFIDENTIAL' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {doc.classification}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{doc.date}</p>
                    <div className="text-xs text-blue-400 mt-1">
                      Clearance Level {doc.clearanceLevel}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Document Viewer */}
          <div className="md:col-span-2">
            {selectedDoc ? (
              <Card className="bg-gray-800 border-green-400">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    {accessibleDocuments.find(d => d.id === selectedDoc)?.title}
                  </CardTitle>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {accessibleDocuments.find(d => d.id === selectedDoc)?.date}
                    </span>
                    <span className={`${
                      accessibleDocuments.find(d => d.id === selectedDoc)?.classification === 'INTERNAL' ? 'text-green-400' :
                      accessibleDocuments.find(d => d.id === selectedDoc)?.classification === 'CONFIDENTIAL' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {accessibleDocuments.find(d => d.id === selectedDoc)?.classification}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap text-sm text-green-300 leading-relaxed">
                    {accessibleDocuments.find(d => d.id === selectedDoc)?.content}
                  </pre>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gray-800 border-green-400">
                <CardContent className="p-8 text-center">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-400">Select a document to view its contents</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Your clearance level: {user.clearanceLevel} | 
                    Available documents: {accessibleDocuments.length}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 p-4 bg-red-900 border border-red-400 rounded">
          <p className="text-red-400 text-center font-bold">
            ⚠️ WARNING: These documents contain classified information. 
            Unauthorized access is prohibited. All viewing sessions are logged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
