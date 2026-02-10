import React from 'react'

const Exterior=[
"images/exterior/Frontview.jpg",
"images/exterior/Frontview2.jpg",
"images/exterior/Sideview.jpg",
"images/exterior/Sideview2.jpg",
"images/exterior/Topview.jpg",
"images/exterior/Topview2.jpg",
"images/exterior/Stairs.jpg",
"images/exterior/g+2 -1 ext.png",
"images/exterior/g+2 ext.png",
"images/exterior/g+2 night ext.png",
"images/exterior/ext1.png",
"images/exterior/ext2.png",
"images/exterior/ext3.png",
"images/exterior/ext4.png",
"images/exterior/ext5.png",
"images/exterior/ext6.png",
"images/exterior/ext7.png",
"images/exterior/ext8.png",
"images/exterior/ext9.png",
"images/exterior/ext10.png",
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