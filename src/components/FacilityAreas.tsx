
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, School, Star } from "lucide-react";

interface FacilityAreasProps {
  isHourOfJoyActive: boolean;
  onPlaycareSecretDiscovery: () => void;
}

export const FacilityAreas = ({ isHourOfJoyActive, onPlaycareSecretDiscovery }: FacilityAreasProps) => {
  return (
    <section className="mb-16">
      <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
        Playcare Facility Areas
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Home Sweet Home */}
        <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-blue-400 transition-all cursor-pointer`} onClick={onPlaycareSecretDiscovery}>
          <CardHeader>
            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/b/b2/Home_Sweet_Home_Houses.png/revision/latest?cb=20240131000000"
                alt="Home Sweet Home"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-blue-400'} flex items-center`}>
              <Home className="w-5 h-5 mr-2" />
              Home Sweet Home
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-3 text-sm">
              Residential sector with 12 uniquely themed houses where children lived in family groups. Each house had its own personality, from the Treehouse to the Castle.
            </p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• 12 themed houses including Treehouse, Castle, and Playhouse</li>
              <li>• Family-style living with 8-10 children per house</li>
              <li>• {isHourOfJoyActive ? 'Personal belongings still scattered' : 'Personal living spaces and belongings'}</li>
            </ul>
          </CardContent>
        </Card>

        {/* School Sector */}
        <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-yellow-400 transition-all cursor-pointer`} onClick={onPlaycareSecretDiscovery}>
          <CardHeader>
            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/d/d4/School_Classroom.png/revision/latest?cb=20240131000000"
                alt="School Sector"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-yellow-400'} flex items-center`}>
              <School className="w-5 h-5 mr-2" />
              School Sector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-3 text-sm">
              Educational wing with classrooms, library, and Miss Delight's domain. Children received comprehensive education alongside psychological conditioning.
            </p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Multiple classrooms with Miss Delight teachers</li>
              <li>• {isHourOfJoyActive ? 'Library books scattered and torn' : 'Extensive library and study areas'}</li>
              <li>• {isHourOfJoyActive ? 'Art supplies left abandoned' : 'Art and creative expression studios'}</li>
            </ul>
          </CardContent>
        </Card>

        {/* Playhouse */}
        <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-pink-400 transition-all cursor-pointer`} onClick={onPlaycareSecretDiscovery}>
          <CardHeader>
            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/e/e8/Smiling_Critters_Playhouse.png/revision/latest?cb=20240131000000"
                alt="Playhouse"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center`}>
              <Star className="w-5 h-5 mr-2" />
              The Playhouse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-3 text-sm">
              Central entertainment complex featuring the Smiling Critters. This was where children spent most of their recreational time before everything went wrong.
            </p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Smiling Critters interactive experiences</li>
              <li>• {isHourOfJoyActive ? 'DogDay\'s memorial shrine (destroyed)' : 'DogDay supervision and activities'}</li>
              <li>• {isHourOfJoyActive ? 'CatNap\'s ominous presence' : 'CatNap nap-time coordination'}</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
