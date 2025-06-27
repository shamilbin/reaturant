import React from 'react'


const RestCard = ({
  name,
  city,
  area,
  time,
  rating,
  cost,
  allratings,
  imageId,
}) => {
  let imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`
  return (
    <>
       <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{area}</p>
          <div className="text-sm mt-2 flex flex-wrap justify-between text-gray-700">
            <span>{cost}</span>
            <span>{time} mins</span>
          </div>
          

          <div className="text-xs text-gray-500 mb-2">{allratings} ratings</div>
        </div>
      </div>
    </>
  )
}

export default RestCard



//  <div className="card">
//           <div className="img-container">
//             <img className='food' src={imgUrl}alt="This is an image of biriyani" />
//           </div>
//           <div className="content">
//             <h1>{content.name}</h1>
//             <h1>{content.city} </h1>
           
//           </div>
//         </div>