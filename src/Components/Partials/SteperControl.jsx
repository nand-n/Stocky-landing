/* eslint-disable react/prop-types */
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function SteperControl({ handleClick, currentStep, steps, formik, disable }) {
  console.log(disable, "disable");
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back Button  */}
      <button
        onClick={() => handleClick("back")}
        className={` bg-[#aaa4e2] 
        
        text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2  hover:bg-indigo-900 hover:text-white transition duration-200 ease-in-out  
        ${currentStep === 1 ? "opacity-0 cursor-not-allowed" : " "}
        `}
      >
        Back
      </button>

      {/* Next Button */}
      {currentStep === 1 ? (
        <button
          disabled={disable}
          onClick={() => {
            handleClick("Continua");
          }}
          className={`${
            disable
              ? " bg-gray-50 hover:bg-gray-50  text-gray-500 cursor-not-allowed"
              : "bg-[#817ED3] hover:bg-indigo-900  text-white "
          }  uppercase py-2 px-4 rounded-xl font-semibold  border-2  transition duration-200 ease-in-out  
      `}
        >
          {currentStep === steps.length - 1 ? "Invia" : "Continua "}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            formik.handleSubmit((values, actions) => {});
          }}
          className={`${"bg-[#817ED3] hover:bg-indigo-900 "} bg-[#817ED3] text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 hover:text-white transition duration-200 ease-in-out  
  `}
        >
          {currentStep === steps.length - 1 ? (
            "Invia"
          ) : (
            <AiOutlineCheckCircle />
          )}
        </button>
      )}
    </div>
  );
}

export default SteperControl;
