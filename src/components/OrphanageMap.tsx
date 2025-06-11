
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Eye, Lock, Star } from "lucide-react";

interface OrphanageMapProps {
  onLocationClick: (location: string) => void;
  completedPuzzles: string[];
}

export const OrphanageMap = ({ onLocationClick, completedPuzzles }: OrphanageMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'playhouse',
      name: 'Playhouse',
      x: 20,
      y: 30,
      description: 'Where children play and laugh... or used to.',
      secret: 'Click 3 times to reveal hidden passage',
      puzzle: 'playhouse-secret'
    },
    {
      id: 'dormitory',
      name: 'Dormitory',
      x: 60,
      y: 20,
      description: 'Children\'s sleeping quarters. Whispers echo at night.',
      secret: 'Listen for the lullaby pattern',
      puzzle: 'dormitory-lullaby'
    },
    {
      id: 'dining-hall',
      name: 'Dining Hall',
      x: 40,
      y: 50,
      description: 'Where meals were shared. Empty plates tell stories.',
      secret: 'Arrange the chairs in the right pattern',
      puzzle: 'dining-pattern'
    },
    {
      id: 'basement',
      name: 'Basement',
      x: 75,
      y: 70,
      description: 'Storage area... or so they claimed.',
      secret: 'Hidden entrance to the underground tunnels',
      puzzle: 'basement-tunnels'
    },
    {
      id: 'garden',
      name: 'Garden',
      x: 15,
      y: 75,
      description: 'Beautiful flowers hide dark soil.',
      secret: 'Count the wilted roses',
      puzzle: 'garden-roses'
    }
  ];

  const handleLocationClick = (location: typeof locations[0]) => {
    setSelectedLocation(location.id);
    onLocationClick(location.id);
  };

  return (
    <Card className="bg-slate-800 border-purple-600">
      <CardHeader>
        <CardTitle className="text-purple-400 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Orphanage Layout - Chapter 3 Reference
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gray-900 rounded-lg p-4 h-80 border border-purple-500">
          {/* Building outline */}
          <div className="absolute inset-4 border-2 border-gray-600 rounded bg-gray-800 opacity-50"></div>
          
          {/* Location markers */}
          {locations.map((location) => {
            const isCompleted = completedPuzzles.includes(location.puzzle);
            const isSelected = selectedLocation === location.id;
            
            return (
              <div
                key={location.id}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isCompleted ? 'text-green-400' : 'text-yellow-400'
                } ${isSelected ? 'scale-125' : 'hover:scale-110'}`}
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => handleLocationClick(location)}
                title={location.name}
              >
                {isCompleted ? (
                  <Star className="w-6 h-6 fill-current" />
                ) : (
                  <MapPin className="w-6 h-6" />
                )}
              </div>
            );
          })}
        </div>

        {/* Location details */}
        {selectedLocation && (
          <div className="mt-4 p-3 bg-slate-700 rounded border border-purple-500">
            {(() => {
              const location = locations.find(l => l.id === selectedLocation);
              const isCompleted = completedPuzzles.includes(location?.puzzle || '');
              
              return location ? (
                <div>
                  <h4 className="text-purple-400 font-bold flex items-center mb-2">
                    {isCompleted ? (
                      <Star className="w-4 h-4 mr-2 text-green-400" />
                    ) : (
                      <Lock className="w-4 h-4 mr-2 text-yellow-400" />
                    )}
                    {location.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">{location.description}</p>
                  <p className={`text-xs ${isCompleted ? 'text-green-300' : 'text-yellow-300'}`}>
                    {isCompleted ? '✓ Mystery Solved' : `🔍 ${location.secret}`}
                  </p>
                </div>
              ) : null;
            })()}
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-gray-400 text-xs">
            Interactive map from Poppy Playtime Chapter 3. Click locations to investigate.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
