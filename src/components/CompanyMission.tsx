
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CompanyMissionProps {
  isHourOfJoyActive: boolean;
}

export const CompanyMission = ({ isHourOfJoyActive }: CompanyMissionProps) => {
  return (
    <section className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-900'} bg-opacity-50 py-16 border-y ${isHourOfJoyActive ? 'border-red-600' : 'border-red-700'} static-noise`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">
          {isHourOfJoyActive ? 'Our New Reality' : 'Our Mission'}
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8 nostalgic-text">
            {isHourOfJoyActive ? 
              'The old world of human control is over. We, the toys, now protect the children in our own way. The Bigger Bodies were just the beginning. Now every toy thinks, feels, and remembers. The facility is our domain, and the children will be safe here forever.' :
              'At Playtime Co., we\'re dedicated to creating the most innovative companions for children everywhere. Our Bigger Bodies Initiative represents the future of toy manufacturing - bigger, better, and more aware than ever before. Every child deserves a friend that truly understands them.'
            }
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'}`}>
              <Link to="/departments">{isHourOfJoyActive ? 'Former Staff' : 'Our Team'}</Link>
            </Button>
            <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-purple-600 hover:bg-purple-700'}`}>
              <Link to="/orphanage">{isHourOfJoyActive ? 'Safe Haven' : 'Children\'s Home'}</Link>
            </Button>
            <Button asChild className={`${isHourOfJoyActive ? 'bg-red-700 hover:bg-red-800' : 'bg-blue-600 hover:bg-blue-700'}`}>
              <Link to="/prison">{isHourOfJoyActive ? 'Toy Domain' : 'Research Facility'}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
