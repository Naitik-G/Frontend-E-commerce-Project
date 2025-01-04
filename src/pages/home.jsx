import React, { useState } from "react";
import TShirt from "../assets/TShirt.png";
import Backpack from "../assets/Backpack.png";
import DeskLamp from "../assets/DeskLamp.png";
import OfficeChair from "../assets/OfficeChair.png";
import RunningShoes from "../assets/RunningShoes.png";
import GamingConsole from "../assets/GamingConsole.png";

function HomePage() {
  const [mainImage, setMainImage] = useState(TShirt);

  return (
    <div className="bg-[#FFF5EE] min-h-screen flex flex-col font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-8 py-16 flex-grow flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:pr-16 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-pink-500 mb-4">
            e-commerce <br /> Website
          </h1>
          <p className="text-gray-700 mb-8">SUPPORT LOCAL EVERYTHING</p>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 self-center lg:self-start"
          >
            Continue shopping →
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:relative">
          {/* Center content */}
          <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mb-8 lg:mb-0">
            <div className="bg-[#FFDAB9] rounded-full absolute inset-0"></div>
            <img
              src={mainImage}
              alt="Main Product"
              className="absolute inset-0 w-full h-full object-contain z-10 p-12 rounded-full bg-contain bg-no-repeat bg-center"
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-none lg:absolute lg:inset-0 lg:flex lg:justify-center lg:items-center">
            {/* Item 1 */}
            <div
              className="bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
              onClick={() => setMainImage(TShirt)}
            >
              <span className="text-gray-700 text-center">Casual T-Shirt</span>
              <img
                src={TShirt}
                alt="Casual T-Shirt"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Item 2 */}
            <div
              className="bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center lg:absolute lg:top-1/4 lg:left-0 lg:translate-x-1/2"
              onClick={() => setMainImage(Backpack)}
            >
              <span className="text-gray-700 text-center">Minimalistic</span>
              <img
                src={Backpack}
                alt="Minimalistic Backpack"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Item 3 */}
            <div
              className="bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center lg:absolute lg:bottom-0 lg:left-1/4 lg:translate-x-1/2 lg:-translate-y-1/2"
              onClick={() => setMainImage(DeskLamp)}
            >
              <span className="text-gray-700 text-center">¡Super cozy!</span>
              <img
                src={DeskLamp}
                alt="Cozy Desk Lamp"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Item 4 */}
            <div
              className="lg:absolute lg:bottom-0 lg:right-1/4 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center  "
              onClick={() => setMainImage(OfficeChair)}
            >
              <span className="text-gray-700 text-center">Stylish Chair</span>
              <img
                src={OfficeChair}
                alt="Stylish Chair"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Item 5 */}
            <div
              className="bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center lg:absolute lg:top-1/4 lg:right-0 lg:-translate-x-1/2"
              onClick={() => setMainImage(RunningShoes)}
            >
              <span className="text-gray-700 text-center">Running Shoes</span>
              <img
                src={RunningShoes}
                alt="Running Shoes"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Item 6 */}
            <div
              className="bg-white rounded-md p-4 shadow-md cursor-pointer flex flex-col items-center lg:absolute lg:top-0 lg:right-1/2 lg:translate-x-1/2"
              onClick={() => setMainImage(GamingConsole)}
            >
              <span className="text-gray-700 text-center">Gaming Console</span>
              <img
                src={GamingConsole}
                alt="Gaming Console"
                className="mt-2 w-16 h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
