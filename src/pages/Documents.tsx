
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, File, Lock, Search } from "lucide-react";

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [accessGranted, setAccessGranted] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === "poppy" || password === "1006") {
      setAccessGranted(true);
    }
  };

  const documents = [
    {
      id: "exp-1006",
      title: "Experiment 1006",
      date: "1995-03-15",
      classification: "TOP SECRET",
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
      id: "missing-employees",
      title: "Employee Status Report",
      date: "1995-08-22",
      classification: "CONFIDENTIAL",
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
      id: "hour-of-joy",
      title: "Incident Report - Hour of Joy",
      date: "1995-08-08",
      classification: "EYES ONLY",
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
      id: "bigger-bodies",
      title: "Bigger Bodies Initiative",
      date: "1990-12-01",
      classification: "SECRET",
      content: `PROJECT: BIGGER BODIES INITIATIVE
Phase: Alpha Testing
Date: December 1, 1990

Objective: Create large-scale toys capable of independent operation and emotional attachment.

Current Subjects:
- Subject 1006: "Huggy Wuggy" - 17 feet tall, blue fur, extendable arms
- Subject 1170: "Kissy Missy" - 15 feet tall, pink fur, heightened empathy protocols

The synthetic biology integration is showing promise. Subjects display genuine emotional responses and protective instincts. However, power requirements are enormous.

Dr. Ludwig's notes: "We need a renewable energy source. Something... organic."

[WARNING: LEVEL 5 CLEARANCE REQUIRED FOR FULL DOCUMENTATION]`,
    }
  ];

  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">RESTRICTED ACCESS</h1>
              <p className="mb-6">This area requires authorization</p>
            </div>
            
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Enter access code..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-900 border border-green-400 text-green-400 rounded"
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              />
              <Button 
                onClick={handlePasswordSubmit}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                ACCESS
              </Button>
              <div className="text-center">
                <Link to="/" className="text-green-400 hover:text-green-300 underline">
                  Return to Main Site
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-xs text-green-600 text-center">
              <p>Hint: What was the first doll's name?</p>
              <p>Or try the experiment number...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Header */}
      <header className="bg-gray-800 border-b border-green-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">PLAYTIME CO. - CLASSIFIED DATABASE</h1>
          <Link to="/">
            <Button variant="outline" size="sm" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              Exit System
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Document List */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <File className="w-5 h-5 mr-2" />
              CLASSIFIED FILES
            </h2>
            <div className="space-y-2">
              {documents.map((doc) => (
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
                      <span className="text-xs text-red-400">{doc.classification}</span>
                    </div>
                    <p className="text-xs text-gray-400">{doc.date}</p>
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
                    {documents.find(d => d.id === selectedDoc)?.title}
                  </CardTitle>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {documents.find(d => d.id === selectedDoc)?.date}
                    </span>
                    <span className="text-red-400">
                      {documents.find(d => d.id === selectedDoc)?.classification}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap text-sm text-green-300 leading-relaxed">
                    {documents.find(d => d.id === selectedDoc)?.content}
                  </pre>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gray-800 border-green-400">
                <CardContent className="p-8 text-center">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-400">Select a document to view its contents</p>
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
