import React from 'react'

const Exterior=[
"Images/exterior/Frontview.jpg",
"Images/exterior/Frontview2.jpg",
"Images/exterior/Sideview.jpg",
"Images/exterior/Sideview2.jpg",
"Images/exterior/Topview.jpg",
"Images/exterior/Topview2.jpg",
"Images/exterior/Stairs.jpg",
"Images/exterior/g+2 -1 ext.png",
"Images/exterior/g+2 ext.png",
"Images/exterior/g+2 night ext.png",

]
const ExteriorDetails = () => {
  return (
    <div className="mx-auto p-6 text-white bg-gray-800">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">Exterior Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {Exterior.map((image, index) => (
          <div key={index} className="bg-white p-4 shadow-lg">
            <img
              src={image}
              alt={`Exterior Design ${index + 1}`}
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExteriorDetails;