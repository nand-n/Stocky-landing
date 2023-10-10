/* eslint-disable react/prop-types */
import React from "react";
import toast from "react-hot-toast";
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
            //   handleClick("Continua");
            //   if (currentStep === steps.length - 1) {
            //     formik.handleSubmit();
            //   }
            // }}
            formik.handleSubmit((values, actions) => {
              // Your form submission logic goes here

              // Only call handleClick if formik submission is successful
              if (
                actions.formik.isSubmitting === false &&
                actions.formik.isValidating === false
              ) {
                // toast.success("Successfully Created", {
                //   position: toast.POSITION.TOP_CENTER,
                // });
                // toast.success("Successfully Created!");
                handleClick("Continua");
              }
            });
          }}
          className={`${"bg-[#817ED3] hover:bg-indigo-900 "} bg-[#817ED3] text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 hover:text-white transition duration-200 ease-in-out  
  `}
        >
          {currentStep === steps.length - 1 ? "Invia" : "null "}
        </button>
      )}
    </div>
  );
}

export default SteperControl;
