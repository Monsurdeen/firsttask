import React from "react"
const Achievement = () =>{
  return (
    <div className="flex flex-row justify-around my-4">
      <div>
       
      </div>
      <div className="pl-3">
      <h3 className=" pl-3 mx-6 text-gray-400">Achievements</h3>
        <h1 className="text-5xl  text-white font-bold mx-7">
          Awa<span className="text-violet-900">rds</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-6 rounded  px-2 py-2">
        <div className=" grid bg-zinc-900   rounded px-4 py-4">
          <h4 className="font-bold  text-white ">Best Designer of the Month</h4>
          <h6 className="text-gray-400">2023</h6>
          <p className=" text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />elit, sed do
            eiusmod tempor incididunt ut labore <br /> et dolore
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4 className="font-bold text-lg  text-white ">The True Gem</h4>
          <h6 className="text-gray-400">2023</h6>
          <p className=" text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4 className=" text-white ">First Class Performer</h4>
          <h6 className="text-gray-400">2022</h6>
          <p className=" text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4 className=" text-white ">Customers Favourite</h4>
          <h6 className="text-gray-400">2021</h6>
          <p className=" text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achievement;