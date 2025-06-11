
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Eye, Lock, Star, Home, School, Heart, Zap, Clock, Skull } from "lucide-react";

interface OrphanageMapProps {
  onLocationClick: (location: string) => void;
  completedPuzzles: string[];
}

export const OrphanageMap = ({ onLocationClick, completedPuzzles }: OrphanageMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [clickCounts, setClickCounts] = useState<{[key: string]: number}>({});

  const locations = [
    {
      id: 'home-sweet-home',
      name: 'Home Sweet Home',
      x: 25,
      y: 35,
      description: 'Colorful houses where children lived in family groups. Each house had its own unique theme and personality.',
      secret: 'Click on each house 3 times to hear the children\'s lullabies',
      puzzle: 'home-lullabies',
      icon: <Home className="w-4 h-4" />,
      color: 'text-blue-400'
    },
    {
      id: 'school-sector',
      name: 'School',
      x: 65,
      y: 25,
      description: 'Educational facilities with classrooms, library, and Miss Delight\'s domain. Learning was mandatory.',
      secret: 'Spell "PLAYTIME" using the alphabet blocks sequence',
      puzzle: 'school-spelling',
      icon: <School className="w-4 h-4" />,
      color: 'text-yellow-400'
    },
    {
      id: 'playhouse',
      name: 'Playhouse',
      x: 45,
      y: 50,
      description: 'Central entertainment hub with Smiling Critters. Where joy turned to horror during the Hour of Joy.',
      secret: 'Click the Smiling Critters in order: DogDay, CatNap, Bobby, Hoppy, Crafty, Bubba, Picky, KickinChicken',
      puzzle: 'smiling-critters-sequence',
      icon: <Heart className="w-4 h-4" />,
      color: 'text-pink-400'
    },
    {
      id: 'counselors-office',
      name: 'Counselor\'s Office',
      x: 20,
      y: 65,
      description: 'Where troubled children received "therapy". The office holds dark secrets about the Bigger Bodies Initiative.',
      secret: 'Type the counselor\'s secret code: PROTOTYPE1006',
      puzzle: 'counselor-code',
      icon: <Eye className="w-4 h-4" />,
      color: 'text-purple-400'
    },
    {
      id: 'gas-production',
      name: 'Gas Production',
      x: 75,
      y: 70,
      description: 'CatNap\'s red gas originated here. The source of the sleeping agent that kept children compliant.',
      secret: 'Hold your breath - don\'t move the mouse for 10 seconds',
      puzzle: 'gas-breath-hold',
      icon: <Zap className="w-4 h-4" />,
      color: 'text-red-400'
    },
    {
      id: 'caverns',
      name: 'The Caverns',
      x: 80,
      y: 85,
      description: 'Deep underground tunnels where the Prototype lurks. The oldest and most dangerous part of Playcare.',
      secret: 'Click rapidly 20 times to wake the Prototype',
      puzzle: 'prototype-awakening',
      icon: <Skull className="w-4 h-4" />,
      color: 'text-gray-400'
    },
    {
      id: 'catnap-shrine',
      name: 'CatNap\'s Shrine',
      x: 55,
      y: 75,
      description: 'A mysterious shrine dedicated to CatNap, built by devoted children. Red smoke emanates from this area.',
      secret: 'Wait exactly 30 seconds without clicking anything',
      puzzle: 'catnap-meditation',
      icon: <Clock className="w-4 h-4" />,
      color: 'text-indigo-400'
    }
  ];

  const handleLocationClick = (location: typeof locations[0]) => {
    setSelectedLocation(location.id);
    onLocationClick(location.id);
    
    // Handle click-based puzzles
    const newClickCount = (clickCounts[location.id] || 0) + 1;
    setClickCounts(prev => ({ ...prev, [location.id]: newClickCount }));
    
    // Check for specific puzzle completions based on clicks
    if (location.id === 'home-sweet-home' && newClickCount >= 3) {
      addCompletedPuzzle('home-lullabies');
    } else if (location.id === 'prototype-awakening' && newClickCount >= 20) {
      addCompletedPuzzle('prototype-awakening');
    }
  };

  const addCompletedPuzzle = (puzzleName: string) => {
    const completed = JSON.parse(localStorage.getItem('completedPuzzles') || '[]');
    if (!completed.includes(puzzleName)) {
      completed.push(puzzleName);
      localStorage.setItem('completedPuzzles', JSON.stringify(completed));
    }
  };

  return (
    <Card className="bg-slate-800 border-purple-600">
      <CardHeader>
        <CardTitle className="text-purple-400 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Playcare Layout - Interactive Investigation Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Map Container */}
        <div className="relative bg-gray-900 rounded-lg p-4 h-96 border border-purple-500 overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-900 via-blue-900 to-red-900"></div>
          
          {/* Playcare main structure outline */}
          <div className="absolute inset-4 border-2 border-gray-600 rounded-lg bg-gray-800 opacity-30">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-yellow-500 rounded-full opacity-50"></div>
          </div>
          
          {/* Connecting pathways */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path d="M 25% 35% Q 35% 45% 45% 50%" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <path d="M 65% 25% Q 55% 35% 45% 50%" stroke="#eab308" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <path d="M 45% 50% Q 60% 60% 75% 70%" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <path d="M 75% 70% L 80% 85%" stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          </svg>
          
          {/* Location markers */}
          {locations.map((location) => {
            const isCompleted = completedPuzzles.includes(location.puzzle);
            const isSelected = selectedLocation === location.id;
            const clickCount = clickCounts[location.id] || 0;
            
            return (
              <div
                key={location.id}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isCompleted ? 'text-green-400' : location.color
                } ${isSelected ? 'scale-125 z-10' : 'hover:scale-110'} ${
                  clickCount > 0 ? 'animate-pulse' : ''
                }`}
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => handleLocationClick(location)}
                title={`${location.name} ${clickCount > 0 ? `(${clickCount} clicks)` : ''}`}
              >
                <div className="relative">
                  {isCompleted ? (
                    <Star className="w-6 h-6 fill-current drop-shadow-lg" />
                  ) : (
                    <div className="bg-slate-800 rounded-full p-1 border-2 border-current">
                      {location.icon}
                    </div>
                  )}
                  {clickCount > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {clickCount}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Danger zones overlay */}
          <div className="absolute bottom-4 right-4 opacity-20">
            <div className="w-20 h-16 bg-red-600 rounded border border-red-400"></div>
            <p className="text-red-400 text-xs text-center mt-1">Danger Zone</p>
          </div>
        </div>

        {/* Location details */}
        {selectedLocation && (
          <div className="mt-4 p-4 bg-slate-700 rounded border border-purple-500 animate-fade-in">
            {(() => {
              const location = locations.find(l => l.id === selectedLocation);
              const isCompleted = completedPuzzles.includes(location?.puzzle || '');
              const clickCount = clickCounts[selectedLocation] || 0;
              
              return location ? (
                <div>
                  <h4 className={`font-bold flex items-center mb-3 ${location.color}`}>
                    {location.icon}
                    <span className="ml-2">{location.name}</span>
                    {isCompleted && <Star className="w-4 h-4 ml-2 text-green-400" />}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">{location.description}</p>
                  
                  {!isCompleted && (
                    <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded p-2 mb-2">
                      <p className="text-yellow-300 text-xs">
                        🧩 <strong>Puzzle:</strong> {location.secret}
                      </p>
                      {clickCount > 0 && (
                        <p className="text-yellow-200 text-xs mt-1">
                          Progress: {clickCount} interactions
                        </p>
                      )}
                    </div>
                  )}
                  
                  {isCompleted && (
                    <div className="bg-green-900 bg-opacity-30 border border-green-600 rounded p-2">
                      <p className="text-green-300 text-xs">
                        ✅ <strong>Solved!</strong> You've uncovered the secrets of {location.name}.
                      </p>
                    </div>
                  )}
                </div>
              ) : null;
            })()}
          </div>
        )}

        {/* Progress indicator */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Areas Explored: {completedPuzzles.filter(p => locations.some(l => l.puzzle === p)).length}/{locations.length}
          </div>
          <div className="text-xs text-purple-400">
            💡 Each area holds unique puzzles and secrets from Playcare's dark past
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-3 text-center">
          <p className="text-gray-400 text-xs">
            Click on map locations to investigate. Follow the puzzle hints to uncover Playcare's mysteries.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
