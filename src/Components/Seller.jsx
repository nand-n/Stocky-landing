// import React, { useState } from "react";
// import Steper from "./Partials/Steper";
// import SteperControl from "./Partials/SteperControl";
// import Account from "./Partials/Steps/Account";
// import Details from "./Partials/Steps/Details";
// import Final from "./Partials/Steps/Final";
// import { SteperContext } from "../Context/StepContext";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import Navbar from "./Partials/Navbar";
// import { Link } from "react-router-dom";

// export const BuyerSchema = Yup.object().shape({
//   name: Yup.string().required("Name is Required!"),
//   cognome: Yup.string().required("Cognome is Required!"),
//   email: Yup.string().required("Email is Required!"),
//   numeroditelefono: Yup.string(),
//   nomeazienda: Yup.string(),
//   sitoweb: Yup.string(),

//   tutto: Yup.boolean(),
//   abbigliamento: Yup.boolean(),
//   cosmetica: Yup.boolean(),
//   casa: Yup.boolean(),
//   benidiconsumo: Yup.boolean(),
//   calzature: Yup.boolean(),
//   accessori: Yup.boolean(),
//   altro: Yup.boolean(),
// });
// function Buyer() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       cognome: "",
//       email: "",
//       numeroditelefono: "",
//       nomeazienda: "",
//       sitoweb: "",
//       tutto: false,
//       abbigliamento: false,
//       cosmetica: false,
//       casa: false,
//       benidiconsumo: false,
//       calzature: false,
//       accessori: false,
//       altro: false,
//     },
//     validationSchema: BuyerSchema,
//     validateOnChange: false,
//     validateOnBlur: false,
//   });
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState("");
//   const [finalData, setFinalData] = useState([]);
//   const steps = ["1", "2", "3"];

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return <Account formik={formik} yup={BuyerSchema} isvenditore />;
//       case 2:
//         return <Details formik={formik} yup={BuyerSchema} />;
//       case 3:
//         return <Final />;
//     }
//   };

//   const handleClick = (direction) => {
//     let newStep = currentStep;

//     direction === "Continua" ? newStep++ : newStep--;
//     //check if steps are with in bounds
//     newStep > 0 &&
//     newStep <= steps.length &&
//     Object.keys(formik.values).every(
//       (field) =>
//         formik.getFieldMeta(field)?.touched &&
//         !formik.getFieldMeta(field)?.error
//     )
//       ? setCurrentStep(newStep)
//       : currentStep;
//   };
//   return (
//     <div className="md:w-2/4 mx-auto shadow-sm rounded-2xl pb-2 bg-white pt-24 ">
//       <Navbar />
//       {/* Steper */}
//       <div className="container horizontal mt-0 ">
//         <Steper steps={steps} currentStep={currentStep} formik={formik} />
//       </div>
//       {/* Display Components */}
//       <div className="my-5 p-5">
//         <SteperContext.Provider
//           value={{
//             userData,
//             setUserData,
//             finalData,
//             setFinalData,
//           }}
//         >
//           {displayStep(currentStep)}
//         </SteperContext.Provider>
//       </div>
//       {/* Steper Control */}
//       <SteperControl
//         handleClick={handleClick}
//         currentStep={currentStep}
//         steps={steps}
//         formik={formik}
//       />
//       <p className="litefont text-xs text-center  px-8">
//         Inviando il modulo, confermi di aver letto la nostra{" "}
//         <Link
//           className="underline text-sm font-semibold text-indigo-600"
//           to={"/privacyuser"}
//         >
//           Informativa sulla Privacy{" "}
//         </Link>{" "}
//         e accetti il trattamento dei tuoi dati personali in conformità con essa.
//       </p>
//     </div>
//   );
// }

// export default Buyer;

import React, { useEffect, useState } from "react";
import Steper from "./Partials/Steper";
import SteperControl from "./Partials/SteperControl";
import Account from "./Partials/Steps/Account";
import Details from "./Partials/Steps/Details";
import Final from "./Partials/Steps/Final";
import { SteperContext } from "../Context/StepContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "./Partials/Navbar";
import { Link } from "react-router-dom";

const BuyerSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required!"),
  cognome: Yup.string().required("Cognome is Required!"),
  email: Yup.string().required("Email is Required!"),
  numeroditelefono: Yup.string(),
  nomeazienda: Yup.string(),
  sitoweb: Yup.string(),
  tutto: Yup.boolean(),
  abbigliamento: Yup.boolean(),
  cosmetica: Yup.boolean(),
  casa: Yup.boolean(),
  benidiconsumo: Yup.boolean(),
  calzature: Yup.boolean(),
  accessori: Yup.boolean(),
  altro: Yup.boolean(),
});

function Seller() {
  const formik = useFormik({
    initialValues: {
      name: "",
      cognome: "",
      email: "",
      numeroditelefono: "",
      nomeazienda: "",
      sitoweb: "",
      tutto: false,
      abbigliamento: false,
      cosmetica: false,
      casa: false,
      benidiconsumo: false,
      calzature: false,
      accessori: false,
      altro: false,
    },
    validationSchema: BuyerSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [1, 2, 3]; // Changed steps to use numbers directly

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account formik={formik} yup={BuyerSchema} isvenditore />;
      case 2:
        return <Details formik={formik} yup={BuyerSchema} />;
      case 3:
        return <Final />;
      default:
        return null; // Return null for unknown steps
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "Continua" ? newStep++ : newStep--;

    //check if steps are with in bounds

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      formik?.values?.name !== "" &&
      formik?.values?.email !== "" &&
      formik?.values?.cognome !== ""
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formik]);

  return (
    <div className="md:w-2/4 mx-auto shadow-sm rounded-2xl pb-2 bg-white pt-24">
      <Navbar />
      {/* Steper */}
      <div className="container horizontal mt-0">
        <Steper steps={steps} currentStep={currentStep} formik={formik} />
      </div>
      {/* Display Components */}
      <div className="my-5 p-5">
        <SteperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </SteperContext.Provider>
      </div>
      {/* Steper Control */}
      <SteperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        disable={disable}
      />
      <p className="litefont text-xs text-center px-8">
        Inviando il modulo, confermi di aver letto la nostra{" "}
        <Link
          className="underline text-sm font-semibold text-indigo-600"
          to={"/privacy"}
        >
          Informativa sulla Privacy{" "}
        </Link>{" "}
        e accetti il trattamento dei tuoi dati personali in conformità con essa.
      </p>
    </div>
  );
}

export default Seller;
