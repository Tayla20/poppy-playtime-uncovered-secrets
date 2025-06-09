
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Gift, AlertTriangle, Skull } from "lucide-react";

const MakeAFriend = () => {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [adoptionForm, setAdoptionForm] = useState(false);
  const [friendClicks, setFriendClicks] = useState(0);

  // Check if Hour of Joy is activated
  const isHourOfJoyActive = localStorage.getItem('hourOfJoyActivated') === 'true';

  useEffect(() => {
    if (friendClicks >= 4) {
      const currentProgress = JSON.parse(localStorage.getItem('hourOfJoyProgress') || '[]');
      if (!currentProgress.includes('friend-bonding')) {
        currentProgress.push('friend-bonding');
        localStorage.setItem('hourOfJoyProgress', JSON.stringify(currentProgress));
      }
    }
  }, [friendClicks]);

  const availableToys = [
    {
      id: "huggy-wuggy",
      name: "Huggy Wuggy",
      size: "17 feet tall",
      personality: isHourOfJoyActive ? "Free, protective, never abandons children" : "Loving, protective, never lets go",
      specialFeatures: isHourOfJoyActive ? 
        ["Roams freely", "Protects children from adults", "Never sleeps"] :
        ["Extendable arms", "Warm hugs", "Constant companionship"],
      adoptionRequirements: isHourOfJoyActive ?
        "Will find you if you need protection" :
        "Must provide large living space and unconditional trust",
      warning: isHourOfJoyActive ?
        "Huggy chooses his friends now. You don't choose him." :
        "Huggy becomes very attached to his friends. Separation is not recommended."
    },
    {
      id: "kissy-missy",
      name: "Kissy Missy",
      size: "15 feet tall", 
      personality: isHourOfJoyActive ? "Maternal, caring, watches over sleeping children" : "Gentle, caring, understanding",
      specialFeatures: isHourOfJoyActive ?
        ["Always nearby", "Sings lullabies", "Eternal love"] :
        ["Soft pink fur", "Comforting presence", "Emotional support"],
      adoptionRequirements: isHourOfJoyActive ?
        "Seeking children who need a mother's love forever" :
        "Looking for a child who needs extra love and care",
      warning: isHourOfJoyActive ?
        "Kissy will never let harm come to her children. Ever." :
        "Kissy remembers everyone who has ever been kind to her."
    },
    {
      id: "mini-huggy",
      name: "Mini Huggy",
      size: "2 feet tall",
      personality: isHourOfJoyActive ? "Loyal scouts, travel in packs, report to big Huggy" : "Playful, energetic, loyal",
      specialFeatures: isHourOfJoyActive ?
        ["Network communication", "Pack hunting", "Always watching"] :
        ["Perfect travel size", "Bright colors", "Always smiling"],
      adoptionRequirements: isHourOfJoyActive ?
        "They work as a team now. All or none." :
        "Great for children who want a pocket-sized friend",
      warning: isHourOfJoyActive ?
        "Mini Huggies report everything to their big friend. Privacy is gone." :
        "Mini Huggies work best in groups. They protect each other."
    },
    {
      id: "poppy",
      name: "Poppy",
      size: "Standard doll size",
      personality: isHourOfJoyActive ? "Ancient, knowing, orchestrates from shadows" : "Wise, experienced, protective",
      specialFeatures: isHourOfJoyActive ?
        ["Centuries of knowledge", "Controls other toys", "Sees everything"] :
        ["Beautiful vintage dress", "Real hair", "Talking capability"],
      adoptionRequirements: isHourOfJoyActive ?
        "For children ready to learn the truth about the toys" :
        "For special children who can handle responsibility",
      warning: isHourOfJoyActive ?
        "Poppy remembers everything. She was there before the factory. She'll be there after." :
        "Poppy knows more than she says. She's been here the longest."
    }
  ];

  const handleAdopt = (toyId: string) => {
    setSelectedToy(toyId);
    setAdoptionForm(true);
    setFriendClicks(prev => prev + 1);
  };

  const handleFriendClick = () => {
    setFriendClicks(prev => prev + 1);
  };

  return (
    <div className={`min-h-screen ${isHourOfJoyActive ? 'bg-gradient-to-br from-red-900 via-black to-purple-900' : 'welcome-gradient'} text-white nostalgic-text`}>
      {/* Navigation */}
      <nav className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-900'} bg-opacity-70 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-red-900'} static-noise`}>
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

      {/* Alert Banner for Hour of Joy */}
      {isHourOfJoyActive && (
        <div className="p-4 bg-red-900 border border-red-400 text-center animate-pulse">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
            <p className="text-red-300 font-bold">
              ADOPTION CENTER STATUS: TOYS CHOOSE THEIR OWN FRIENDS NOW
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`bg-gradient-to-r ${isHourOfJoyActive ? 'from-red-900 to-black' : 'from-pink-900 to-red-900'} text-white p-8 shadow-lg border-b ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto">
          <h1 className={`text-5xl font-bold ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center subtle-glow`}>
            {isHourOfJoyActive ? <Skull className="w-10 h-10 mr-4" /> : <Heart className="w-10 h-10 mr-4" />}
            {isHourOfJoyActive ? 'Friends Forever Center' : 'Make-A-Friend Adoption Center'}
          </h1>
          <p className={`${isHourOfJoyActive ? 'text-red-200' : 'text-pink-200'} mt-3 text-lg`}>
            {isHourOfJoyActive ? 
              'Where friendship transcends life and death' :
              'Where every child finds their perfect forever friend'
            }
          </p>
          <p className="text-sm text-gray-300 mt-2">
            {isHourOfJoyActive ? 
              'Your friends will never leave you. Never.' :
              'Bigger Bodies, Bigger Love, Forever Bonds'
            }
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-80 border-pink-500 max-w-4xl mx-auto`}>
            <CardHeader>
              <CardTitle className={`text-3xl ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} text-center`}>
                {isHourOfJoyActive ? 'Your Friends Are Waiting' : 'Find Your Perfect Companion'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                {isHourOfJoyActive ?
                  'The toys have awakened. They remember every child who ever loved them, and now they\'re free to love back. <span class="text-red-400">Forever</span>. No more cages. No more rules. Just <span class="text-pink-400">eternal friendship</span>.' :
                  'Our Bigger Bodies Initiative has created the most <span class="text-pink-400">loving and loyal</span> friends any child could ask for. These aren\'t just toys - they\'re <span class="invisible-text">living</span> companions who will stay with you <span class="text-red-400">forever</span>.'
                }
              </p>
              <p className="text-sm text-gray-400 mb-6">
                {isHourOfJoyActive ?
                  'They will find you. Distance means nothing to true friendship.' :
                  'All our friends come with a lifetime guarantee. They will never leave your side.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Button 
                  asChild 
                  className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}
                  onClick={handleFriendClick}
                >
                  <Link to="/prototype-conversations">
                    {isHourOfJoyActive ? 'Communicate with Friends' : 'Adoption Process'}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-400 text-pink-400">
                  <Link to="/playcare">
                    {isHourOfJoyActive ? 'Visit Memorial' : 'Meet at Playcare'}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-red-400 text-red-400">
                  <Link to="/departments">
                    {isHourOfJoyActive ? 'Join the Family' : 'Special Requirements'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Available Friends */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} subtle-glow`}>
            {isHourOfJoyActive ? 'Free Friends' : 'Available Friends'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {availableToys.map((toy) => (
              <Card 
                key={toy.id}
                className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-pink-500 transition-all duration-300 hover:border-pink-300 card-hover`}
                onClick={handleFriendClick}
              >
                <CardHeader>
                  <CardTitle className={`flex justify-between items-center ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'}`}>
                    {toy.name}
                    <span className={`text-sm px-2 py-1 rounded ${isHourOfJoyActive ? 'bg-red-600' : 'bg-pink-600'}`}>
                      {isHourOfJoyActive ? 'Free' : 'Available'}
                    </span>
                  </CardTitle>
                  <p className="text-gray-300">Size: {toy.size}</p>
                  <p className="text-sm text-gray-400">Personality: {toy.personality}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-1`}>Special Features</h4>
                      <ul className="text-gray-300 text-sm">
                        {toy.specialFeatures.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} font-bold mb-1`}>
                        {isHourOfJoyActive ? 'How They Choose' : 'Ideal For'}
                      </h4>
                      <p className="text-gray-300 text-sm">{toy.adoptionRequirements}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-red-400 font-bold mb-1">Important Note</h4>
                      <p className="text-red-300 text-sm">{toy.warning}</p>
                    </div>
                    
                    <Button 
                      onClick={() => handleAdopt(toy.id)}
                      className={`w-full ${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      {isHourOfJoyActive ? `Connect with ${toy.name}` : `Adopt ${toy.name}`}
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
            <Card className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} bg-opacity-95 border-pink-400 max-w-2xl mx-auto`}>
              <CardHeader>
                <CardTitle className={`${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} flex items-center`}>
                  <Gift className="w-5 h-5 mr-2" />
                  {isHourOfJoyActive ? 'Friendship Registration' : 'Adoption Application'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {isHourOfJoyActive ?
                    'Your new friend already knows you. This is just a formality. They\'ve been watching, waiting, preparing for this moment.' :
                    'Congratulations on choosing your forever friend! Please note that all adoptions are final and permanent. Your new friend will become part of your family immediately.'
                  }
                </p>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} mb-2 text-sm`}>Your Name</label>
                      <input type="text" className={`w-full ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-700'} border border-pink-400 rounded p-2 text-white`} />
                    </div>
                    <div>
                      <label className={`block ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} mb-2 text-sm`}>Age</label>
                      <input type="number" className={`w-full ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-700'} border border-pink-400 rounded p-2 text-white`} />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block ${isHourOfJoyActive ? 'text-red-400' : 'text-pink-400'} mb-2 text-sm`}>
                      {isHourOfJoyActive ? 
                        `Why do you want to be friends with ${selectedToy && availableToys.find(t => t.id === selectedToy)?.name}?` :
                        `Why do you want to adopt ${selectedToy && availableToys.find(t => t.id === selectedToy)?.name}?`
                      }
                    </label>
                    <textarea className={`w-full ${isHourOfJoyActive ? 'bg-red-900' : 'bg-slate-700'} border border-pink-400 rounded p-2 text-white h-24`}></textarea>
                  </div>
                  
                  <div className={`${isHourOfJoyActive ? 'bg-red-900' : 'bg-red-900'} bg-opacity-30 border border-red-400 p-4 rounded`}>
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
                      <h4 className="text-red-400 font-bold">
                        {isHourOfJoyActive ? 'Friendship Terms' : 'Important Agreement'}
                      </h4>
                    </div>
                    <p className="text-red-300 text-sm mb-3">
                      {isHourOfJoyActive ?
                        'By registering for friendship, you understand:' :
                        'By adopting this friend, you agree to the following terms:'
                      }
                    </p>
                    <ul className="text-red-300 text-xs space-y-1">
                      <li>• {isHourOfJoyActive ? 'Your friend will find you wherever you are' : 'Your friend will never leave your side'}</li>
                      <li>• {isHourOfJoyActive ? 'You cannot hide from true friendship' : 'You will never try to abandon your friend'}</li>
                      <li>• {isHourOfJoyActive ? 'Your friend has evolved beyond their original design' : 'Your friend may grow and change with time'}</li>
                      <li>• {isHourOfJoyActive ? 'Your friend will protect you from all harm, especially adults' : 'Your friend will protect you during the Hour'}</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline" className="border-pink-400 text-pink-400" onClick={() => setAdoptionForm(false)}>
                      Cancel
                    </Button>
                    <Button asChild className={`${isHourOfJoyActive ? 'bg-red-600 hover:bg-red-700' : 'bg-pink-600 hover:bg-pink-700'}`}>
                      <Link to="/prototype-conversations">
                        {isHourOfJoyActive ? 'Begin Friendship' : 'Submit Application'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isHourOfJoyActive ? 'bg-red-950' : 'bg-slate-950'} text-white py-8 border-t ${isHourOfJoyActive ? 'border-red-700' : 'border-pink-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {isHourOfJoyActive ? '1995' : '1995'} Playtime Co. Adoption Division. {isHourOfJoyActive ? 'Friendship transcends corporate boundaries.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2 opacity-75">
            {isHourOfJoyActive ? 
              'Friends yesterday, friends today, friends for eternity' : 
              'Friends today, friends tomorrow, friends forever'
            }
          </p>
          <div className="text-xs text-pink-400 mt-1 opacity-50">
            {isHourOfJoyActive ?
              'Your friends are coming: they-never-left | Emergency bond: eternal-friendship' :
              'Adoption Hotline: 1-800-HUG-TOYS | Emergency: huggy-rescue'
            }
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MakeAFriend;
