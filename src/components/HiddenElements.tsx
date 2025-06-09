
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Eye, Star } from "lucide-react";

interface HiddenElementsProps {
  hiddenMessage: string;
  secretFound: boolean;
  sawyerTransformed: boolean;
}

export const HiddenElements = ({ hiddenMessage, secretFound, sawyerTransformed }: HiddenElementsProps) => {
  return (
    <>
      {hiddenMessage && (
        <div className="hidden-message fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-95 text-green-400 p-6 rounded-lg font-mono text-sm max-w-2xl text-center z-50 border border-green-400 vintage-border static-noise animate-pulse">
          <div className="glitch-text" data-text={hiddenMessage}>
            {hiddenMessage}
          </div>
        </div>
      )}

      {secretFound && (
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Link to="/login">
            <Button variant="destructive" size="sm" className="bg-green-600 hover:bg-green-700 card-hover vintage-border">
              <LogIn className="w-4 h-4 mr-2" />
              <Eye className="w-4 h-4 mr-2" />
              Staff Portal
            </Button>
          </Link>
        </div>
      )}

      {sawyerTransformed && (
        <div className="fixed bottom-4 left-4 animate-pulse">
          <Link to="/the-doctor">
            <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700 card-hover vintage-border">
              <Eye className="w-4 h-4 mr-2" />
              The Doctor
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};
