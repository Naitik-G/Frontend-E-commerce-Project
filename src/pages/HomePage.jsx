import React, { useState } from 'react';
import TShirt from "../assets/TShirt.png";
import Backpack from "../assets/Backpack.png";
import DeskLamp from "../assets/DeskLamp.png";
import OfficeChair from "../assets/OfficeChair.png";
import RunningShoes from "../assets/RunningShoes.png";
import GamingConsole from "../assets/GamingConsole.png";

function HomePage() {
  const [mainImage, setMainImage] = useState(TShirt);

  return (
    <div className="bg-[#FFF5EE] min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Main Content */}
      <main className="container mx-auto px-8 py-16 flex-grow flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:pr-16 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-5xl font-bold text-pink-500 mb-4">
            e-commerce <br /> Website
          </h1>
          <p className="text-gray-700 mb-8">SUPPORT LOCAL EVERYTHING</p>

          <a href="#" className="text-gray-500 hover:text-gray-700 self-center lg:self-start">
            Continue shopping →
          </a>
        </div>

        <div className="lg:w-1/2 lg:relative flex-col flex items-center lg:justify-center">
          {/* Center content */}
          <div className="relative w-[400px] h-[400px] mt-10">
            <div className="bg-[#FFDAB9] rounded-full absolute inset-0"></div>
            <img
              src={mainImage}
              alt="Main Product"
              className="absolute inset-0 w-full h-full object-contain z-10 p-12 rounded-full bg-contain bg-no-repeat bg-center"
            />
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 lg:grid-cols-none lg:absolute lg:inset-0 lg:flex lg:justify-center lg:items-center mt-10">
          <div
            className=" lg:absolute lg:-top-14 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-white lg:rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center"
            onClick={() => setMainImage(TShirt)}
          >
            <span className="text-gray-700">Casual T-Shirt</span>
            <img
              src={TShirt}
              alt="Casual T-Shirt"
              className="mt-2 w-20 h-20 rounded-md object-cover"
            />
          </div>

          <div
            className="lg:absolute lg:top-1/4 lg:right-[-70px] bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center"
            onClick={() => setMainImage(Backpack)}
          >
            <span className="text-gray-700">Minimalistic</span>
            <img
              src={Backpack}
              alt="Minimalistic Backpack"
              className="mt-2 w-20 h-20 rounded-md object-cover"
            />
          </div>

          <div
            className="lg:absolute lg:bottom-1/4 lg:right-[-70px] bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center"
            onClick={() => setMainImage(DeskLamp)}
          >
            <span className="text-gray-700">¡Super cozy!</span>
            <img
              src={DeskLamp}
              alt="Cozy Desk Lamp"
              className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
            />
          </div>

          <div
            className="lg:absolute lg:-bottom-14 lg:left-1/2 lg:-transformy-1/2 lg:-translate-x-1/2 bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center border-2"
            onClick={() => setMainImage(OfficeChair)}
          >
            <span className="text-gray-700">Stylish Chair</span>
            <img
              src={OfficeChair}
              alt="Stylish Chair"
              className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
            />
          </div>

          <div
            className="lg:absolute lg:bottom-1/4 lg:left-[-70px] bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center"
            onClick={() => setMainImage(RunningShoes)}
          >
            <span className="text-gray-700">Running Shoes</span>
            <img
              src={RunningShoes}
              alt="Running Shoes"
              className="mt-2 w-20 h-20 rounded-md object-cover"
            />
          </div>

          <div
            className="lg:absolute lg:top-1/4 lg:left-[-70px] bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center"
            onClick={() => setMainImage(GamingConsole)}
          >
            <span className="text-gray-700">Gaming Console</span>
            <img
              src={GamingConsole}
              alt="Gaming Console"
              className="mt-2 w-20 h-20 rounded-md object-cover"
            />
          </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default HomePage;
