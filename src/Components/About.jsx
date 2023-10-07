import React from "react";
import About1 from "../assets/Images/twogirls.png";
import About2 from "../assets/Images/stockyLaptop.png";
import { Typography } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mb-8">
      <div
        className="px-4 lg:px-14 max-w-screen-2xl bg-gray-50 mx-auto my-4 md:my-8 mt-8 lg:mt-28 h-screen  grid items-center"
        id="acquista"
      >
        <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12">
          <div className="md:w-2/5 col-span">
            <img
              src={About1}
              className="rounded-xl shadow-lg"
              alt="anout_img"
            />
          </div>
          <div className="md:w-2/5 col-span">
            <h2 className="fonty text-3xl md:text-4xl text-neutralGray font-semibold mb-4 md:mb-8">
              Stocky per chi acquista
            </h2>
            <div className="my-4 mb-8 space-y-4 ">
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black " size={12} />
                <p className="litefont text-sm">
                  Accedi ad un vastissimo network di acquirenti
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black" size={12} />
                <p className="litefont text-sm">
                  Vendi con rapidità, riducendo drasticamente costi e tempi
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black" size={12} />
                <p className="litefont text-sm">
                  Ottieni liquidità istantanea e riappropriati finalmente del
                  tuo tempo
                </p>
              </div>
            </div>

            <Link
              to={"/get-started"}
              className="underline px-4 py-2 mt-4 bg-[#817ED3] text-white rounded hover:bg-gray900 transition-all duration-300 hover:-translate-y-4"
            >
              REGISTRATI ADESSO
            </Link>
          </div>
        </div>
      </div>

      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-4 md:my-8 mt-4 lg:mt-28"
        id="vendi"
      >
        <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12">
          <div className="md:w-1/2 col-span">
            <h2 className="fonty text-3xl md:text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
              Stocky per chi vende
            </h2>
            <div className="my-4 space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black" size={12} />
                <p className="litefont text-sm">
                  Accedi ad un vastissimo network di acquirenti
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black" size={12} />
                <p className="litefont text-sm">
                  Vendi con rapidità, riducendo drasticamente costi e tempi
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCircle className="text-black" size={12} />
                <p className="litefont text-sm">
                  Ottieni liquidità istantanea e riappropriati finalmente del
                  tuo tempo
                </p>
              </div>
            </div>

            <Link
              to={"/get-started"}
              className="underline px-4 py-2 bg-[#817ED3] text-white rounded hover:bg-gray900 transition-all duration-300 hover:-translate-y-4"
            >
              REGISTRATI ADESSO
            </Link>
          </div>
          <div className="md:w-1/3 col-span">
            <img
              src={About2}
              className="rounded-xl shadow-xl max-w-full h-auto"
              alt="anout_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
