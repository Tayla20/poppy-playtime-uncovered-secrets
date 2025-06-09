
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductsShowcaseProps {
  onProductHover: (color: string) => void;
}

export const ProductsShowcase = ({ onProductHover }: ProductsShowcaseProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 subtle-glow nostalgic-text">Our Revolutionary Collection</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card 
          className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
          onMouseEnter={() => onProductHover("red")}
        >
          <CardContent className="p-6 text-center">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/6/60/Poppy_Playtime_Doll.png" 
                alt="Poppy Playtime Doll"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">Poppy</h3>
            <p className="text-gray-300">The first truly <span className="mystery-reveal text-yellow-400">perfect</span> doll!</p>
            <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
              <span className="invisible-text">She knows the beginning</span> • Model: P-001 • Since 1950
            </div>
            <Button asChild size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
              <Link to="/elliot-ludwig">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
          onMouseEnter={() => onProductHover("blue")}
        >
          <CardContent className="p-6 text-center">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png" 
                alt="Huggy Wuggy"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">Huggy Wuggy</h3>
            <p className="text-gray-300">Your best friend <span className="mystery-reveal text-red-500">forever and ever</span>!</p>
            <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
              Model: HW-1170 • <span className="backwards-text">seidoB reggiB</span> • <span className="invisible-text">The Prototype's first ally</span>
            </div>
            <Button asChild size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
              <Link to="/make-a-friend">Adoption Center</Link>
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="bg-slate-800 bg-opacity-50 border-red-600 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group card-hover static-noise"
          onMouseEnter={() => onProductHover("yellow")}
        >
          <CardContent className="p-6 text-center">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://static.wikia.nocookie.net/poppyplaytime/images/0/0a/CatNap_Render.png" 
                alt="CatNap"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 creepy-hover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-400 nostalgic-text">CatNap</h3>
            <p className="text-gray-300">Sweet dreams <span className="mystery-reveal text-purple-400">are guaranteed</span>!</p>
            <div className="text-xs text-gray-500 mt-2 mystery-reveal transition-opacity duration-1000">
              Series: CN-1188 • <span className="invisible-text">The Prototype's chosen</span> • <span className="backwards-text">peelS</span> Protocol
            </div>
            <Button asChild size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
              <Link to="/playcare">Playcare Visit</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Toys Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">🕷️</div>
            <h4 className="font-bold text-red-400 nostalgic-text">Mommy Long Legs</h4>
            <p className="text-xs text-gray-400">Stretchy and <span className="invisible-text">protective</span> fun</p>
            <Button asChild size="sm" className="mt-2 bg-pink-600 hover:bg-pink-700">
              <Link to="/game-station">Game Station</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">🐕</div>
            <h4 className="font-bold text-red-400 nostalgic-text">DogDay</h4>
            <p className="text-xs text-gray-400">Leader of the <span className="mystery-reveal text-yellow-400">Smiling Critters</span></p>
            <Button asChild size="sm" className="mt-2 bg-yellow-600 hover:bg-yellow-700">
              <Link to="/playcare">Meet the Critters</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">👩‍🏫</div>
            <h4 className="font-bold text-red-400 nostalgic-text">Miss Delight</h4>
            <p className="text-xs text-gray-400">Educational <span className="invisible-text">excellence</span></p>
            <Button asChild size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
              <Link to="/school-sector">School Sector</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">🦄</div>
            <h4 className="font-bold text-red-400 nostalgic-text">PuppyCorn</h4>
            <p className="text-xs text-gray-400">Magical and <span className="mystery-reveal text-purple-400">loyal</span></p>
            <Button asChild size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
              <Link to="/playcare">Critter Corner</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional toy rows */}
      <div className="grid md:grid-cols-5 gap-4 mb-8">
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-1">🐻</div>
            <h5 className="text-sm font-bold text-red-400">Bobby BearHug</h5>
            <Button asChild size="sm" className="mt-1 text-xs">
              <Link to="/playcare">Playcare</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-1">🐰</div>
            <h5 className="text-sm font-bold text-red-400">Bunzo Bunny</h5>
            <Button asChild size="sm" className="mt-1 text-xs">
              <Link to="/game-station">Games</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-1">🐘</div>
            <h5 className="text-sm font-bold text-red-400">Bubba Bubbaphant</h5>
            <Button asChild size="sm" className="mt-1 text-xs">
              <Link to="/playcare">Wisdom Corner</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-1">🐷</div>
            <h5 className="text-sm font-bold text-red-400">PickyPiggy</h5>
            <Button asChild size="sm" className="mt-1 text-xs">
              <Link to="/playcare">Dining Hall</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800 bg-opacity-30 border-red-600 group cursor-pointer hover:border-yellow-500 transition-all card-hover">
          <CardContent className="p-3 text-center">
            <div className="text-2xl mb-1">🌟</div>
            <h5 className="text-sm font-bold text-red-400">Kissy Missy</h5>
            <Button asChild size="sm" className="mt-1 text-xs">
              <Link to="/make-a-friend">Adoption</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
