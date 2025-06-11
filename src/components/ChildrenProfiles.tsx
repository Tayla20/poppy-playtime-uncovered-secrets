
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ChildrenProfilesProps {
  isHourOfJoyActive: boolean;
  investigationClicks: number;
  onSecretClick: () => void;
}

export const ChildrenProfiles = ({ isHourOfJoyActive, investigationClicks, onSecretClick }: ChildrenProfilesProps) => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const children = [
    {
      id: "marie",
      name: "Marie Payne",
      age: 8,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Creative, Artistic, Shy",
      notes: isHourOfJoyActive ? 
        "Last seen in the Home Sweet Home area. Her pink bow was found in the Playhouse." :
        "Shows exceptional creativity in art class. Responds well to Poppy doll therapy sessions.",
      darkNotes: isHourOfJoyActive ?
        "Transformed during the Bigger Bodies Initiative. Now roams the Playcare tunnels as Mommy Long Legs." :
        "Selected for Project 1222. Consciousness successfully transferred. Subject shows remarkable adaptation to extended limb modifications.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/4/4b/Mommy_Long_Legs_Render.png/revision/latest?cb=20220506150829"
    },
    {
      id: "thomas",
      name: "Thomas Clarke", 
      age: 10,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Energetic, Protective, Leader",
      notes: isHourOfJoyActive ?
        "Security footage shows him trying to lead other children to safety during the Hour of Joy incident." :
        "Natural leader in the School area. Excels in both physical and academic activities.",
      darkNotes: isHourOfJoyActive ?
        "His protective nature made him perfect for the prototype experiments. Guards the deepest parts of Playcare." :
        "Consciousness transferred to Experiment 1006. Protective protocols amplified beyond human comprehension.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/8/8e/Huggy_Wuggy_Render.png/revision/latest?cb=20211012174838"
    },
    {
      id: "stella",
      name: "Stella Greyber",
      age: 9,
      status: isHourOfJoyActive ? "Missing" : "Adopted",
      traits: "Caring, Nurturing, Gentle",
      notes: isHourOfJoyActive ?
        "Found her favorite pink bow in the Counselor's Office. She was helping younger children when the incident occurred." :
        "Excellent caretaker instincts. Frequently assists staff in the Nursery area of Playcare.",
      darkNotes: isHourOfJoyActive ?
        "Her caring nature was preserved and amplified in her new form. Still protects children, but in a different way." :
        "Perfect candidate for empathy enhancement protocols. Now designated as Subject 1170 - 'Kissy Missy'.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/f/f7/Kissy_Missy_Render.png/revision/latest?cb=20211015134550"
    },
    {
      id: "theodore",
      name: "Theodore Grambell",
      age: 7,
      status: isHourOfJoyActive ? "Missing" : "Adopted", 
      traits: "Sleepy, Gentle, Dreamer",
      notes: isHourOfJoyActive ?
        "Always found napping in quiet corners. His favorite spot was the soft play area near CatNap's shrine." :
        "Requires extra rest periods. Shows strong attachment to CatNap plush toys and peaceful environments.",
      darkNotes: isHourOfJoyActive ?
        "His perpetual sleepiness made him the perfect vessel for CatNap. The gas production was modeled after his sleep patterns." :
        "Subject 1188 - 'CatNap'. Sleep study participant. Red gas experiments proved highly successful.",
      image: "https://static.wikia.nocookie.net/poppyplaytime/images/c/c5/CatNap_Render.png/revision/latest?cb=20230819143705"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className={`text-3xl font-bold mb-8 text-center ${isHourOfJoyActive ? 'text-red-400' : 'text-purple-400'}`}>
        {isHourOfJoyActive ? 'The Lost Children of Playcare' : 'Our Special Residents'}
      </h2>
      <div className="mb-4 text-center">
        <p className="text-gray-400 text-sm">
          Investigation Progress: {investigationClicks}/3 clicks
          {investigationClicks > 0 && ' - Click on profiles to uncover the truth...'}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {children.map((child) => (
          <Card 
            key={child.id}
            className={`${isHourOfJoyActive ? 'bg-red-800' : 'bg-slate-800'} border-purple-500 hover:border-red-500 transition-all duration-300 cursor-pointer poppy-card-glow ${investigationClicks > 0 ? 'ring-2 ring-yellow-400' : ''}`}
            onMouseEnter={() => setSelectedChild(child.id)}
            onMouseLeave={() => setSelectedChild(null)}
            onClick={onSecretClick}
          >
            <CardHeader className="text-center pb-2">
              <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-900">
                <img 
                  src={child.image}
                  alt={child.name}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isHourOfJoyActive ? 'filter grayscale opacity-75' : ''
                  }`}
                />
              </div>
              <CardTitle className={`text-sm ${selectedChild === child.id ? 'text-red-400' : (isHourOfJoyActive ? 'text-red-400' : 'text-purple-400')}`}>
                {child.name}
              </CardTitle>
              <p className="text-gray-400 text-xs">Age: {child.age} | Status: {child.status}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-gray-300 mb-2">
                <strong>Traits:</strong> {child.traits}
              </p>
              <p className={`text-xs transition-all duration-500 ${
                selectedChild === child.id ? 'text-red-300' : 'text-gray-400'
              }`}>
                {selectedChild === child.id ? child.darkNotes : child.notes}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
