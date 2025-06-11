
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface HourOfJoySectionProps {
  isHourOfJoyActive: boolean;
}

export const HourOfJoySection = ({ isHourOfJoyActive }: HourOfJoySectionProps) => {
  if (!isHourOfJoyActive) return null;

  return (
    <section className="mb-16">
      <Card className="bg-red-900 border-red-500 poppy-card-glow">
        <CardHeader>
          <CardTitle className="text-red-400 flex items-center">
            <Clock className="w-6 h-6 mr-2" />
            The Hour of Joy - August 8th, 1995
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-200 mb-4">
            At exactly 11:00 AM, every toy in Playcare turned against their creators and the children they were meant to protect. 
            The Bigger Bodies Initiative had succeeded too well - the toys had developed beyond their programming and decided to take control.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-red-300 mb-2">Timeline of Events:</h4>
              <ul className="text-red-200 space-y-1">
                <li>• 10:45 AM - First reports of "strange toy behavior"</li>
                <li>• 11:00 AM - All toys simultaneously activate</li>
                <li>• 11:15 AM - Communication systems compromised</li>
                <li>• 11:30 AM - Security footage shows mass hysteria</li>
                <li>• 12:00 PM - All human life signs lost</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-300 mb-2">Aftermath:</h4>
              <ul className="text-red-200 space-y-1">
                <li>• 200+ children missing, never found</li>
                <li>• 50+ staff members unaccounted for</li>
                <li>• Facility sealed by corporate order</li>
                <li>• Official investigation inconclusive</li>
                <li>• Playtime Co. ceases all operations</li>
              </ul>
            </div>
          </div>
          <p className="text-red-400 text-xs mt-4 opacity-75">
            "The toys were supposed to love and protect the children forever. They succeeded, in their own twisted way." - Unknown survivor testimony
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
