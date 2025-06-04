
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Gift, AlertTriangle } from "lucide-react";

const MakeAFriend = () => {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [adoptionForm, setAdoptionForm] = useState(false);

  const availableToys = [
    {
      id: "huggy-wuggy",
      name: "Huggy Wuggy",
      size: "17 feet tall",
      personality: "Loving, protective, never lets go",
      specialFeatures: ["Extendable arms", "Warm hugs", "Constant companionship"],
      adoptionRequirements: "Must provide large living space and unconditional trust",
      warning: "Huggy becomes very attached to his friends. Separation is not recommended."
    },
    {
      id: "kissy-missy",
      name: "Kissy Missy",
      size: "15 feet tall", 
      personality: "Gentle, caring, understanding",
      specialFeatures: ["Soft pink fur", "Comforting presence", "Emotional support"],
      adoptionRequirements: "Looking for a child who needs extra love and care",
      warning: "Kissy remembers everyone who has ever been kind to her."
    },
    {
      id: "mini-huggy",
      name: "Mini Huggy",
      size: "2 feet tall",
      personality: "Playful, energetic, loyal",
      specialFeatures: ["Perfect travel size", "Bright colors", "Always smiling"],
      adoptionRequirements: "Great for children who want a pocket-sized friend",
      warning: "Mini Huggies work best in groups. They protect each other."
    },
    {
      id: "poppy",
      name: "Poppy",
      size: "Standard doll size",
      personality: "Wise, experienced, protective",
      specialFeatures: ["Beautiful vintage dress", "Real hair", "Talking capability"],
      adoptionRequirements: "For special children who can handle responsibility",
      warning: "Poppy knows more than she says. She's been here the longest."
    }
  ];

  const handleAdopt = (toyId: string) => {
    setSelectedToy(toyId);
    setAdoptionForm(true);
  };

  return (
    <div className="min-h-screen welcome-gradient text-white nostalgic-text">
      {/* Navigation */}
      <nav className="bg-slate-900 bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-red-900 static-noise">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-red-400 subtle-glow">PLAYTIME CO.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">Our Toys</Link>
              <Link to="/playcare" className="text-gray-300 hover:text-red-400 transition-colors">Playcare</Link>
              <Link to="/game-station" className="text-gray-300 hover:text-red-400 transition-colors">Games</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-900 to-red-900 text-white p-8 shadow-lg border-b border-pink-700">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-pink-400 flex items-center subtle-glow">
            <Heart className="w-10 h-10 mr-4" />
            Make-A-Friend Adoption Center
          </h1>
          <p className="text-pink-200 mt-3 text-lg">Where every child finds their perfect forever friend</p>
          <p className="text-sm text-gray-300 mt-2">Bigger Bodies, Bigger Love, Forever Bonds</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-slate-800 bg-opacity-80 border-pink-500 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-pink-400 text-center">
                Find Your Perfect Companion
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                Our Bigger Bodies Initiative has created the most <span className="text-pink-400">loving and loyal</span> friends 
                any child could ask for. These aren't just toys - they're <span className="invisible-text">living</span> companions 
                who will stay with you <span className="text-red-400">forever</span>.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                All our friends come with a lifetime guarantee. They will never leave your side.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button asChild className="bg-pink-600 hover:bg-pink-700">
                  <Link to="/prototype-conversations">Adoption Process</Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-400 text-pink-400">
                  <Link to="/playcare">Meet at Playcare</Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400">
                  <Link to="/departments">Special Requirements</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Available Friends */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400 subtle-glow">Available Friends</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {availableToys.map((toy) => (
              <Card 
                key={toy.id}
                className="bg-slate-800 border-pink-500 transition-all duration-300 hover:border-pink-300 card-hover"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-pink-400">
                    {toy.name}
                    <span className="text-sm bg-pink-600 px-2 py-1 rounded">Available</span>
                  </CardTitle>
                  <p className="text-gray-300">Size: {toy.size}</p>
                  <p className="text-sm text-gray-400">Personality: {toy.personality}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-pink-400 font-bold mb-1">Special Features</h4>
                      <ul className="text-gray-300 text-sm">
                        {toy.specialFeatures.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-pink-400 font-bold mb-1">Ideal For</h4>
                      <p className="text-gray-300 text-sm">{toy.adoptionRequirements}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-red-400 font-bold mb-1">Important Note</h4>
                      <p className="text-red-300 text-sm">{toy.warning}</p>
                    </div>
                    
                    <Button 
                      onClick={() => handleAdopt(toy.id)}
                      className="w-full bg-pink-600 hover:bg-pink-700"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Adopt {toy.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Adoption Form Modal */}
        {adoptionForm && (
          <section className="mb-16">
            <Card className="bg-slate-800 bg-opacity-95 border-pink-400 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-pink-400 flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Adoption Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Congratulations on choosing your forever friend! Please note that all adoptions 
                  are final and permanent. Your new friend will become part of your family immediately.
                </p>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-pink-400 mb-2 text-sm">Your Name</label>
                      <input type="text" className="w-full bg-slate-700 border border-pink-400 rounded p-2 text-white" />
                    </div>
                    <div>
                      <label className="block text-pink-400 mb-2 text-sm">Age</label>
                      <input type="number" className="w-full bg-slate-700 border border-pink-400 rounded p-2 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-pink-400 mb-2 text-sm">Why do you want to adopt {selectedToy && availableToys.find(t => t.id === selectedToy)?.name}?</label>
                    <textarea className="w-full bg-slate-700 border border-pink-400 rounded p-2 text-white h-24"></textarea>
                  </div>
                  
                  <div className="bg-red-900 bg-opacity-30 border border-red-400 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
                      <h4 className="text-red-400 font-bold">Important Agreement</h4>
                    </div>
                    <p className="text-red-300 text-sm mb-3">
                      By adopting this friend, you agree to the following terms:
                    </p>
                    <ul className="text-red-300 text-xs space-y-1">
                      <li>• Your friend will never leave your side</li>
                      <li>• You will never try to abandon your friend</li>
                      <li>• Your friend may grow and change with time</li>
                      <li>• Your friend will protect you during the Hour</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline" className="border-pink-400 text-pink-400" onClick={() => setAdoptionForm(false)}>
                      Cancel
                    </Button>
                    <Button asChild className="bg-pink-600 hover:bg-pink-700">
                      <Link to="/prototype-conversations">Submit Application</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-pink-700">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 1995 Playtime Co. Adoption Division. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Friends today, friends tomorrow, friends forever</p>
          <div className="text-xs text-pink-400 mt-1 opacity-50">
            Adoption Hotline: 1-800-HUG-TOYS | Emergency: huggy-rescue
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MakeAFriend;
