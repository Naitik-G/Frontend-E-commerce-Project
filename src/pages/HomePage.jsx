// Importing necessary libraries and assets
import React, { useState } from 'react';
import TShirt from "../assets/TShirt.png";
import Backpack from "../assets/Backpack.png";
import DeskLamp from "../assets/DeskLamp.png";
import OfficeChair from "../assets/OfficeChair.png";
import RunningShoes from "../assets/RunningShoes.png";
import GamingConsole from "../assets/GamingConsole.png";

// Defining the HomePage component
function HomePage() {
  // State to manage the main image
  const [mainImage, setMainImage] = useState(TShirt);

  return (
    <div className="bg-[#FFF5EE] min-h-screen flex flex-col font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-grow flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4 leading-tight">
            e-commerce <br /> Website
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">SUPPORT LOCAL EVERYTHING</p>
          <a href="#" className="text-gray-500 hover:text-gray-700 self-center lg:self-start text-sm sm:text-base">
            Continue shopping →
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Center content */}
          <div className="relative w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px]">
            <div className="bg-[#FFDAB9] rounded-full absolute inset-0"></div>
            <img
              src={mainImage}
              alt="Main Product"
              className="absolute inset-0 w-full h-full object-contain z-10 p-8 sm:p-10 lg:p-12 rounded-full"
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 w-full max-w-md sm:max-w-lg lg:max-w-none">
            {/* Option 1 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center"
              onClick={() => setMainImage(TShirt)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">Casual T-Shirt</span>
              <img
                src={TShirt}
                alt="Casual T-Shirt"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Option 2 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center"
              onClick={() => setMainImage(Backpack)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">Minimalistic</span>
              <img
                src={Backpack}
                alt="Minimalistic Backpack"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Option 3 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center"
              onClick={() => setMainImage(DeskLamp)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">¡Super cozy!</span>
              <img
                src={DeskLamp}
                alt="Cozy Desk Lamp"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Option 4 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center border-2"
              onClick={() => setMainImage(OfficeChair)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">Stylish Chair</span>
              <img
                src={OfficeChair}
                alt="Stylish Chair"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Option 5 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center"
              onClick={() => setMainImage(RunningShoes)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">Running Shoes</span>
              <img
                src={RunningShoes}
                alt="Running Shoes"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>

            {/* Option 6 */}
            <div
              className="bg-white rounded-md p-3 sm:p-4 shadow-md cursor-pointer flex flex-col items-center"
              onClick={() => setMainImage(GamingConsole)}
            >
              <span className="text-gray-700 text-xs sm:text-sm">Gaming Console</span>
              <img
                src={GamingConsole}
                alt="Gaming Console"
                className="mt-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Exporting the HomePage component
export default HomePage;