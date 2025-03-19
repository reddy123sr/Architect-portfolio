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
"Images/interior/bathroom.jpg",
"Images/interior/cieling.jpg",
"Images/interior/LivingHall.jpg",
"Images/interior/Wallscreen.jpg",

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
