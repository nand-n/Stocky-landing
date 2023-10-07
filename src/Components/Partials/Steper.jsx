/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

function Steper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newStep = [...steps];
    let count = 0;
    while (count < newStep.length) {
      //current Step
      if (count === stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: true,
          selected: true,
          complated: true,
        };
        count++;
      }
      //step complated
      else if (count < stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: true,
          complated: true,
        };
        count++;
      }
      //step pending
      else {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: false,
          complated: false,
        };
        count++;
      }
    }
    return newStep;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          complated: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);

    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={
        index != newStep.length - 1
          ? ` w-full flex items-center `
          : `flex items-center `
      }
    >
      <div className="relative flex flex-col items-center text-[#817ED3] ">
        {/* Display Number */}
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12  flex items-center justify-center py-3 
                ${
                  step.selected
                    ? "bg-[#817ED3] text-white font-bold borde border-gray-400"
                    : ""
                }
            `}
        >
          {step.complated ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>

        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            step.highlighted ? "text-gray-900" : "text-gray-900"
          }`}
        >
          {/* Display the Descripltion  */}
          {step.description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
          step.complated ? "border-[#817ED3]" : "border-gray-300"
        }`}
      >
        {/* Display Line  */}
      </div>
    </div>
  ));
  return (
    <div className="mx-4 p-4 flex justify-between items-center ">
      {displaySteps}
    </div>
  );
}

export default Steper;
