/* eslint-disable react/prop-types */
import React from "react";
import TextInput from "../TextInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Account({ yup, formik, isvenditore }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg pb-12">
      <div className="flex justify-between items-center p-4 mb-6">
        <div className="text-lg text-black font-semibold">
          {isvenditore
            ? "Registrati come venditore "
            : "Registrati come acquirente"}
        </div>
        <div className="px-4 py-2 flex items-end space-x-3">
          {/* <button
            onClick={() => {}}
            className="px-4 py-2 flex items-center justify-center bg-gray-400 text-white hover:bg-gray-600 transition-all hover:-translate-y-2  rounded-lg "
          >
            Step 2/3
          </button> */}
          <Link
            to={"/get-started"}
            onClick={() => {}}
            className="px-4 py-2 flex items-center justify-center underline bg-[#817ED3] rounded-lg hover:bg-indigo-900 text-white  transition-all hover:-translate-y-2 "
          >
            Indietro
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 items-center mx-4 mb-2">
        <div className="mb-2 md:mb-0">
          <label htmlFor="name" className="text-[12px] text-[#1C1F1B]">
            Name <span className="text-red-600">*</span>
          </label>
          <TextInput
            formik={formik}
            name="name"
            type="text"
            className="border focus:outline-none w-full text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10 md:mr-4"
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
            errorClassName="border focus:outline-none w-full px-4 text-[12px] text-black border-red-500 h-10 md:ml-4"
            errorDisplayClassName="text-[12px] text-red-500"
          />
          {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null} */}
        </div>
      </div>

      {/* <div className="grid md:flex   md:flex-cols-2 justify-between px-12 items-center mb-2">
        <div className="flex w-full justify-start items-center ">
          <div className="grid w-full md:mr-2  px-4 py-2  ">
            <label htmlFor="state" className="text-[12px] text-[#1C1F1B]">
              Name <span className="text-red-600">*</span>
            </label>
            <TextInput
              formik={formik}
              name={"name"}
              type={"text"}
              className={
                "border focus:outline-none w-full md:mr-4 text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10"
              }
              errorClassName={
                "border focus:outline-none px-12 text-[12px] text-black border-red-500 h-10"
              }
              errorDisplayClassName={"text-[12px] text-red-500"}
            />
          </div>
        </div>
        <div className="flex justify-start items-center w-full">
          <div className="grid w-full md:ml-2 px-4 py-2  ">
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
      <div className="flex justify-start w-full items-center mb-2">
        <div className=" grid  w-full mx-4 px-12 py-2  ">
          <label htmlFor="state" className="text-[12px] w-full text-[#1C1F1B]">
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
          <label htmlFor="state" className="text-[12px] w-full text-[#1C1F1B]">
            Numero di telefono
          </label>

          <TextInput
            formik={formik}
            name={"numeroditelefono"}
            type={"number"}
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
      {/* <div className="grid  md:flex md:flex-cols-2 justify-between px-12 items-center mb-2">
        <div className="flex w-full justify-start items-center ">
          <div className="grid w-full md:mr-2  px-4 py-2  ">
            <label htmlFor="state" className="text-[12px] text-[#1C1F1B]">
              Nome azienda
            </label>
            <TextInput
              formik={formik}
              name={"nomeazienda"}
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
          <div className="grid w-full md:ml-2 px-4 py-2  ">
            <label htmlFor="state" className="text-[12px] text-[#1C1F1B]">
              Sito web
            </label>
            <TextInput
              formik={formik}
              name={"sitoweb"}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 mx-4 items-center mb-2">
        <div className="mb-2 md:mb-0">
          <label htmlFor="nomeazienda" className="text-[12px] text-[#1C1F1B]">
            Nome azienda
          </label>
          <TextInput
            formik={formik}
            name="nomeazienda"
            type="text"
            className="border focus:outline-none w-full text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10 md:mr-4"
            errorClassName="border focus:outline-none w-full px-4 text-[12px] text-black border-red-500 h-10"
            errorDisplayClassName="text-[12px] text-red-500"
          />
        </div>
        <div>
          <label htmlFor="sitoweb" className="text-[12px] text-[#1C1F1B]">
            Sito web
          </label>
          <TextInput
            formik={formik}
            name="sitoweb"
            type="text"
            className="border focus:outline-none w-full text-[12px] text-black rounded-md border-[#D1D1D1] px-4 h-10"
            errorClassName="border focus:outline-none w-full px-4 text-[12px] text-black border-red-500 h-10 md:ml-4"
            errorDisplayClassName="text-[12px] text-red-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Account;
