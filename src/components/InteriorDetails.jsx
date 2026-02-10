import React from "react";

// Step 1: Import all images dynamically from a folder
const importAll = (r) => r.keys().map(r);
const interiorimages =[
"images/interior/MasterBedroom.png",
"images/interior/ChildrenBedroom.png",
"images/interior/KitchenRoom.png",
"images/interior/Dining Hall.png",
"images/interior/LivingRoom.png",
"images/interior/Mandhir.png",
"images/interior/balcony.jpg",
"images/interior/Bathroom.jpg",
"images/interior/cieling.jpg",
"images/interior/LivingHall.jpg",
"images/interior/Wallscreen.jpg",
"images/interior/Enscape_Crockery Unit.png",
"images/interior/Enscape_Dinning + Wash Basin.png",
"images/interior/Enscape_Dinning + Wash Unit.png",
"images/interior/Enscape_Front view.png",
"images/interior/Enscape_KItchen.png",
"images/interior/Enscape_Living Room-4.png",
"images/interior/Enscape_Living Room-1.png",
"images/interior/Enscape_Living Room-2.png",
"images/interior/Enscape_Living Room-3.png",
"images/interior/Enscape_Living room.png",
"images/interior/Enscape_Master Bed Room-1.png",
"images/interior/Enscape_Master Bed Room.png",
"images/interior/Enscape_Pooja Mandhir.png",
"images/interior/Enscape_Pooja Mandhire.png",
"images/interior/Enscape_Tv-Unit.png",
"images/interior/Enscape_House.png",
]

const InteriorDetails = () => {
  return (
    <div className="mx-auto p-6 text-white bg-gray-800">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">Interior Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {interiorimages.map((image, index) => (
          <div key={index} className="bg-white p-4 shadow-lg">
            <img
              src={image}
              alt={`Interior Design ${index + 1}`}
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDetails;
