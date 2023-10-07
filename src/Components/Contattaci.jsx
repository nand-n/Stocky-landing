/* eslint-disable react/prop-types */
import React from "react";
import TextInput from "./Partials/TextInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "./Partials/Navbar";

export const ContattaciSchema = Yup.object().shape({
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
function Contattaci() {
  const formik = useFormik({
    initialValues: {
      name: "",
      cognome: "",
      email: "",
      oggetto: "",
      messaggio: "",
    },
    validationSchema: ContattaciSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <>
      <Navbar />
      <div className="md:w-2/4 mx-auto shadow-sm rounded-2xl pb-2 bg-white pt-24 ">
        <div className="bg-gray-200 rounded-lg shadow-lg pb-12">
          <div className="grid   items-center p-4 mb-6">
            <div className="fonty flex justify-center items-center text-center text-3xl text-black font-semibold mb-3">
              Contattaci
            </div>
            <div className="flex justify-center items-center text-center text-lg font-normal">
              Per ottenere maggiori informazioni su Stocky scrivici un messaggio
              e ti risponderemo al più presto.
            </div>
          </div>
          {/* <div className="grid  md:flex md:flex-cols-2 justify-between px-12 items-center mb-2">
            <div className="flex w-full justify-start items-center ">
              <div className="grid w-full mr-2  px-4 py-2  ">
                <label htmlFor="state" className="text-[12px] text-[#1C1F1B]">
                  Name <span className="text-red-600">*</span>
                </label>
                <TextInput
                  formik={formik}
                  name={"name"}
                  type={"text"}
                  className={
                    "border focus:outline-none w-full mr-4 text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10"
                  }
                  errorClassName={
                    "border focus:outline-none px-12 text-[12px] text-black border-red-500 h-10"
                  }
                  errorDisplayClassName={"text-[12px] text-red-500"}
                />
              </div>
            </div>
            <div className="flex justify-start items-center w-full">
              <div className="grid w-full ml-2 px-4 py-2  ">
                <label htmlFor="state" className="text-[12px] text-[#1C1F1B]">
                  Cognome <span className="text-red-600">*</span>
                </label>
                <TextInput
                  formik={formik}
                  name={"cognome"}
                  type={"text"}
                  className={
                    "border focus:outline-none px-4 text-[12px] text-black rounded-md border-[#D1D1D1] h-10"
                  }
                  errorClassName={
                    "border focus:outline-none px-12 text-[12px] text-black border-red-500 h-10"
                  }
                  errorDisplayClassName={"text-[12px] text-red-500"}
                />
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 px-12 mx-4 mb-2">
            <div className="mb-2   md:mb-0">
              <label htmlFor="name" className="text-[12px] text-[#1C1F1B]">
                Name <span className="text-red-600">*</span>
              </label>
              <TextInput
                formik={formik}
                name="name"
                type="text"
                className="border focus:outline-none w-full text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10"
                errorClassName="border focus:outline-none w-full px-4 text-[12px] text-black border-red-500 h-10"
                errorDisplayClassName="text-[12px] text-red-500"
              />
            </div>
            <div>
              <label htmlFor="cognome" className="text-[12px] text-[#1C1F1B]">
                Cognome <span className="text-red-600">*</span>
              </label>
              <TextInput
                formik={formik}
                name="cognome"
                type="text"
                className="border focus:outline-none w-full text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10"
                errorClassName="border focus:outline-none w-full px-4 text-[12px] text-black border-red-500 h-10"
                errorDisplayClassName="text-[12px] text-red-500"
              />
            </div>
          </div>
          <div className="flex justify-start w-full items-center mb-2">
            <div className=" grid  w-full mx-4 px-12 py-2  ">
              <label
                htmlFor="state"
                className="text-[12px] w-full text-[#1C1F1B]"
              >
                Indirizzo email <span className="text-red-600">*</span>
              </label>
              <TextInput
                formik={formik}
                name={"email"}
                type={"text"}
                className={
                  "border focus:outline-none px-4 text-[12px] text-black rounded-md border-[#D1D1D1] h-10"
                }
                errorClassName={
                  "border focus:outline-none px-4 text-[12px] text-black border-red-500 h-10"
                }
                errorDisplayClassName={"text-[12px] text-red-500"}
              />
            </div>
          </div>

          <div className="flex justify-start w-full items-center mb-2">
            <div className="grid w-full  px-12 py-2 mx-4 ">
              <label
                htmlFor="state"
                className="text-[12px] w-full text-[#1C1F1B]"
              >
                Oggetto
              </label>

              <TextInput
                formik={formik}
                name={"oggetto"}
                type={"text"}
                className={
                  "border focus:outline-none px-4 text-[12px] text-black rounded-md border-[#D1D1D1] h-10"
                }
                errorClassName={
                  "border focus:outline-none px-4 text-[12px] text-black border-red-500 h-10"
                }
                errorDisplayClassName={"text-[12px] text-red-500"}
              />
            </div>
          </div>
          <div className="flex justify-start w-full items-center mb-2">
            <div className="grid w-full  px-12 py-2 mx-4 ">
              <label
                htmlFor="state"
                className="text-[12px] w-full text-[#1C1F1B]"
              >
                Messaggio
              </label>

              <TextInput
                formik={formik}
                name={"messaggio"}
                type={"text"}
                isMulti
                className={
                  "border focus:outline-none px-4 text-[12px] text-black rounded-md border-[#D1D1D1] h-10"
                }
                errorClassName={
                  "border focus:outline-none px-4 text-[12px] text-black border-red-500 h-10"
                }
                errorDisplayClassName={"text-[12px] text-red-500"}
              />
            </div>
          </div>
          <div className="w-full flex-col flex justify-center items-center px-14">
            <button className="btn bg-indigo-600 w-full col-span mx-4">
              Invia
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contattaci;
