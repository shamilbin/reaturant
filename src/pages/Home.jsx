import React, { useState } from "react";
import RestCard from "../components/RestCard";
import "./Home.css";
import data from "../utils/mockData.js";

const Home = () => {
  const [selected, setSelected] = useState("");

  const [sorted, setSorted] = useState([]);
  const [res, setRes] = useState(data);
const handleSort = (e) => {
  const value = e.target.value;
  setSelected(value);

  const sortedRes = [...res].sort((a, b) => {
    const costA = Number(a.card.card.info.costForTwo) / 100;
    const costB = Number(b.card.card.info.costForTwo) / 100;

    return value === "low_to_high" ? costA - costB : costB - costA;
  });

  setRes(sortedRes);
};

  function best1() {
    let filtered = data.filter((x) => x.card.card.info.avgRating > 1);
    setRes(filtered);
  }

  function best2() {
    let filtered = data.filter((x) => x.card.card.info.avgRating > 2);
    setRes(filtered);
  }

  function best3() {
    let filtered = data.filter((x) => x.card.card.info.avgRating > 3);
    setRes(filtered);
  }

  function best4() {
    let filtered = data.filter((x) => x.card.card.info.avgRating > 4);
    setRes(filtered);
  }

  function best5() {
    let filtered = data.filter((x) => x.card.card.info.avgRating > 4.5);
    setRes(filtered);
  }
  let total = res.length;

  //  console.log(newData.length)
  return (
    <>
      <div className="body min-h-screen bg-gray-50 p-4">
        {/* Search Bar */}
        <div className="search mb-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="filter items-center flex justify-center-safe">
          <button
            className="bg-amber-400 p-3 m-3 rounded-2xl text-2xl "
            onClick={best1}
          >
            Rest Above 1
          </button>
          <button
            className="bg-amber-400 p-3 m-3 rounded-2xl text-2xl "
            onClick={best2}
          >
            Rest Above 2
          </button>
          <button
            className="bg-amber-400 p-3 m-3 rounded-2xl text-2xl "
            onClick={best3}
          >
            Rest Above 3
          </button>
          <button
            className="bg-amber-400 p-3 m-3 rounded-2xl text-2xl "
            onClick={best4}
          >
            Rest Above 4
          </button>
          <button
            className="bg-amber-400 p-3 m-3 rounded-2xl text-2xl "
            onClick={best5}
          >
            Rest Above 4.5
          </button>

          <div className="text-center text-2xl font-bold hover:bg-gray-400 bg-gray-500  p-3 m-4 rounded-2xl">
            we have total of {total} resturent Available
          </div>

          <div className="selct">
            <select name="" id="" value={selected} onChange={handleSort}>
              <option value="">choose One</option>
              <option value="low_to_high">from lowest to High</option>
              <option value="high_to_low">Highest to Lowest</option>
            </select>
          </div>
        </div>
        {/* Restaurant Cards Grid */}
        <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-y-auto max-h-[100vh] px-2">
          {res.map((x) => {
            const info = x.card.card.info;
            return (
              <RestCard
                key={info.id || info.name} // prefer a unique ID over index
                name={info.name}
                area={info.areaName}
                imageId={info.cloudinaryImageId}
                rating={info.avgRating}
                cost={info.costForTwoMessage}
                time={info.sla.deliveryTime}
                allratings={info.totalRatingsString}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;

// <div className="body">
//         <div className="input">
//           <input type="search" id="" placeholder="Search for your Resturent" />
//         </div>
//         <div className="rest-container flex ">
//           {/* <RestCard name="Shamil" city="krl" time="30min " rating="4.5" />
//           <RestCard  name="Azhar" city="krl" time="20min " rating="4.5"/>
//           <RestCard  name="Ishwari" city="krl" time="10min " rating="4.5"/>
//           <RestCard  name="suhail" city="krl" time="50min " rating="4.5"/>
//           <RestCard  name="aakhil" city="krl" time="20min " rating="4.5"/>
//           <RestCard  name="sameera" city="krl" time="3min " rating="4.5"/>
//           */}
//           {data.map((x,i)=>(
//             <RestCard  name={x.card.card.info.name}  city={x.card.card.info.address} image={x.card.card.info.cloudinaryImageId}  />

//           ))}
//         </div>
//       </div>
