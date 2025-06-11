
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Clock, AlertTriangle } from "lucide-react";

interface FacilityOverviewProps {
  isHourOfJoyActive: boolean;
  onPlaycareSecretDiscovery: () => void;
}

export const FacilityOverview = ({ isHourOfJoyActive, onPlaycareSecretDiscovery }: FacilityOverviewProps) => {
  return (
    <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 poppy-card-glow`}>
      <CardHeader>
        <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'} flex items-center`}>
          {isHourOfJoyActive ? <AlertTriangle className="w-6 h-6 mr-2" /> : <Building className="w-6 h-6 mr-2" />}
          {isHourOfJoyActive ? 'The Lost Paradise of Playcare' : 'Playcare - Underground Sanctuary'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <img 
              src="https://static.wikia.nocookie.net/poppyplaytime/images/a/a0/Playcare_Overview.png/revision/latest?cb=20240131000000" 
              alt="Playcare Overview"
              className="w-full h-48 object-cover rounded-lg border border-purple-500"
            />
            <p className="text-xs text-gray-400 mt-2 text-center">Playcare Central Hub - Home Sweet Home Visible</p>
          </div>
          <div>
            <p className="text-gray-300 mb-4">
              {isHourOfJoyActive ?
                'Playcare was Playtime Co.\'s underground orphanage, a massive facility housing over 200 children. Built beneath the main factory, it featured themed living areas, educational facilities, and recreational spaces. The Hour of Joy turned this sanctuary into a tomb.' :
                'Playcare represents the future of childcare - a revolutionary underground complex providing comprehensive care, education, and development. Our innovative Bigger Bodies Initiative ensures every child reaches their maximum potential.'
              }
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={onPlaycareSecretDiscovery}>
                <Building className="w-4 h-4 mr-2" />
                <span>{isHourOfJoyActive ? 'Former capacity: 200+ children' : 'Current capacity: 200+ children'}</span>
              </div>
              <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={onPlaycareSecretDiscovery}>
                <Users className="w-4 h-4 mr-2" />
                <span>{isHourOfJoyActive ? 'Staff lost: 50+ caregivers' : 'Dedicated staff: 50+ trained caregivers'}</span>
              </div>
              <div className="flex items-center cursor-pointer hover:text-purple-300" onClick={onPlaycareSecretDiscovery}>
                <Clock className="w-4 h-4 mr-2" />
                <span>{isHourOfJoyActive ? 'Operational: 1960-1995' : 'Established: 1960 - Still operating'}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
