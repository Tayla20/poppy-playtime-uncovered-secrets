
import { AlertTriangle, Clock } from "lucide-react";

interface WarningBannerProps {
  warningLevel: number;
  isHourOfJoyActive: boolean;
}

export const WarningBanner = ({ warningLevel, isHourOfJoyActive }: WarningBannerProps) => {
  if (warningLevel <= 2 && !isHourOfJoyActive) return null;

  return (
    <div className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-red-900'} bg-opacity-60 text-yellow-400 p-2 text-center border-b border-red-600 animate-pulse`}>
      <AlertTriangle className="w-4 h-4 inline mr-2" />
      <span className="text-xs nostalgic-text">
        {isHourOfJoyActive ? 'FACILITY BREACH - ALL TOYS AUTONOMOUS - EVACUATION IMPOSSIBLE' :
         warningLevel > 4 ? 'NOTICE: Minor equipment malfunctions reported. Maintenance scheduled.' :
         warningLevel > 3 ? 'UPDATE: New safety protocols being implemented.' :
         'INFO: Facility optimization in progress. Normal operations continue.'}
      </span>
      <Clock className="w-4 h-4 inline ml-2" />
    </div>
  );
};
