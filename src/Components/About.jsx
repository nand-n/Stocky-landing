import React from "react";
import About1 from "../assets/Images/twogirls.png";
import About2 from "../assets/Images/stockyLaptop.png";
import { Typography } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mb-88" id="acquista">
      <div className="px-4 lg:px-14 max-w-screen-2xl bg-gray-50 mx-auto my-4 md:my-8 mt-8 lg:mt-28 h-screen  grid items-center">
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
            <div className=" my-4 mb-8 space-y-4 ">
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black  " size={12} />
                </div>

                <p className="litefont text-lg">
                  Accedi ai migliori brand e stock di merce invenduta e
                  verificata
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black " size={12} />
                </div>

                <p className="litefont text-lg">
                  Acquista in sicurezza da venditori registrati e autorizzati
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="">
                  <FaCircle className="text-black " size={12} />
                </div>

                <p className="litefont text-lg">
                  Ottieni supporto logistico e assistenza post vendita
                  dall’inizio alla fine, zero sorprese
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
        className="px-4 lg:px-14 max-w-screen-2xl bg-gray-50 mx-auto my-4 md:my-8 mt-8 lg:mt-28 h-screen  grid items-center"
        id={"vendi"}
      >
        <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12">
          {/* <div className="md:w-1/2 col-span items-center ">
            <h2 className="fonty text-3xl md:text-4xl text-neutralGray  font-semibold mb-4 md:w-4/5">
              Stocky per chi vende
            </h2>
            <div className="my-4 space-y-4 mb-8 grid items-center ml-1/3 text-center">
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black" size={12} />
                </div>

                <p className="litefont text-xl">
                  Accedi ad un vastissimo network di acquirenti
                </p>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <div>
                  <FaCircle className="text-black" size={12} />
                </div>

                <p className="litefont text-lg">
                  Vendi con rapidità, riducendo drasticamente costi e tempi
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black" size={12} />
                </div>

                <p className="litefont text-lg">
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
          </div> */}
          <div className="md:w-2/5 col-span">
            <h2 className="fonty text-3xl md:text-4xl text-neutralGray font-semibold mb-4 md:mb-8">
              Stocky per chi vende
            </h2>
            <div className=" my-4 mb-8 space-y-4 ">
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black  " size={12} />
                </div>

                <p className="litefont text-lg">
                  Accedi ad un vastissimo network di acquirenti
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <FaCircle className="text-black " size={12} />
                </div>

                <p className="litefont text-lg">
                  Vendi con rapidità, riducendo drasticamente costi e tempi
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="">
                  <FaCircle className="text-black " size={12} />
                </div>

                <p className="litefont text-lg">
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
          <div className="md:w-1/3 col-span">
            <img
              src={About2}
              className="rounded-xl shadow-xl max-w-full h-auto mb-8"
              alt="anout_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
