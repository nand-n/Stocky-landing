/* eslint-disable react/prop-types */
import React from "react";

function SteperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back Button  */}
      <button
        onClick={() => handleClick("back")}
        className={`bg-[#817ED3] text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2  hover:bg-indigo-900 hover:text-white transition duration-200 ease-in-out 
        ${currentStep === 1 ? "opacity-100 cursor-not-allowed" : " "}
        `}
      >
        Back
      </button>

      {/* Next Button */}
      <button
        onClick={() => handleClick("Continua")}
        className={`bg-[#817ED3] text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2  hover:bg-indigo-900 hover:text-white transition duration-200 ease-in-out  
      `}
      >
        {currentStep === steps.length - 1 ? "Invia" : "Continua "}
      </button>
    </div>
  );
}

export default SteperControl;
