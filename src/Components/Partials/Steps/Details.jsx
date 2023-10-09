/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox } from "../Checkbox";
import { Link } from "react-router-dom";

function Details({ yup, formik, isAcquistare }) {
  return (
    <div className=" bg-gray-200 rounded-lg shadow-lg pb-12">
      <div className="flex justify-between items-center p-4 mb-6">
        <div className="text-lg text-black font-semibold">
          Registrati come acquirente
        </div>
        <div className="px-4 py-2 flex items-end space-x-3">
          {/* <button
            onClick={() => {}}
            className="px-4 py-2 flex items-center justify-center bg-gray-400 text-white hover:bg-gray-600 transition-all hover:-translate-y-2  rounded-lg "
          >
            Step 3/3
          </button> */}
          <Link
            to={"/get-started"}
            className="px-4 py-2 flex items-center justify-center underline bg-[#817ED3] rounded-lg hover:bg-indigo-900 text-white  transition-all hover:-translate-y-2 "
          >
            Indietro
          </Link>
        </div>
      </div>
      <div className="flex flex-col  items-center mb-2">
        <div className="col-span ">
          <div className="text-center mb-4 text-xl font-normal">
            {isAcquistare ? (
              <p>
                Cosa ti piacerebbe acquistare{" "}
                <span className="text-red-700">*</span>
              </p>
            ) : (
              <p> Cosa ti piacerebbe vendere?</p>
            )}
          </div>
          <div className="w-full h-full border p-10 border-black rounded-lg ">
            <Checkbox
              label="Abbigliamento"
              name="abbigliamento"
              checked={formik.values.abbigliamento}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Cosmetica"
              name="cosmetica"
              checked={formik.values.cosmetica}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Casa"
              name="casa"
              checked={formik.values.casa}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Beni di Consumo"
              name="benidiconsumo"
              checked={formik.values.benidiconsumo}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Calzature"
              name="calzature"
              checked={formik.values.calzature}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Accessori"
              name="accessori"
              checked={formik.values.accessori}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Altro"
              name="altro"
              checked={formik.values.altro}
              onChange={formik.handleChange}
            />
            <Checkbox
              label="Tutto"
              name="tutto"
              checked={formik.values.tutto}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
