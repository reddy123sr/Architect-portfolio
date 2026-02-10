import React from "react";

// Step 1: Import all images dynamically from a folder
const importAll = (r) => r.keys().map(r);
const interiorImages =[
"Images/interior/MasterBedroom.png",
"Images/interior/ChildrenBedroom.png",
"Images/interior/KitchenRoom.png",
"Images/interior/Dining Hall.png",
"Images/interior/LivingRoom.png",
"Images/interior/Mandhir.png",
"Images/interior/balcony.jpg",
"Images/interior/Bathroom.jpg",
"Images/interior/cieling.jpg",
"Images/interior/LivingHall.jpg",
"Images/interior/Wallscreen.jpg",
"Images/interior/Enscape_Crockery Unit.png",
"Images/interior/Enscape_Dinning + Wash Basin.png",
"Images/interior/Enscape_Dinning + Wash Unit.png",
"Images/interior/Enscape_Front view.png",
"Images/interior/Enscape_KItchen.png",
"Images/interior/Enscape_Living Room -1.png",
"Images/interior/Enscape_Living Room-1.png",
"Images/interior/Enscape_Living Room-2.png",
"Images/interior/Enscape_Living Room-3.png",
"Images/interior/Enscape_Living room.png",
"Images/interior/Enscape_Master Bed Room-1.png",
"Images/interior/Enscape_Master Bed Room.png",
"Images/interior/Enscape_Pooja Mandhir.png",
"Images/interior/Enscape_Pooja Mandhire.png",
"Images/interior/Enscape_Tv-Unit.png",
"Images/interior/Enscape_House.png",
]

const InteriorDetails = () => {
  return (
    <div className="mx-auto p-6 text-white bg-gray-800">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">Interior Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {interiorImages.map((image, index) => (
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
