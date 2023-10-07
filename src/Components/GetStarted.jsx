import React, { useState } from "react";
import handmoney from "../assets/Svg/handmoney.svg";
import { GiShoppingCart } from "react-icons/gi";
import Navbar from "./Partials/Navbar";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <>
      <Navbar />
      <div className="grid justify-center items-center m-12 px-28 py-16">
        <div className="fonty text-3xl md:text-7xl text-center mb-8">
          {" "}
          Per cosa vuoi usare Stocky?
        </div>
        <div className="text-indigo-400 text-center text-xl mb-8">
          Inizia adesso
        </div>
        <div className=" grid md:flex  justify-center  items-center gap-12 ">
          <Link
            to={"/buyer"}
            className="cursor-pointer w-64 bg-gray-100 text-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl my-4">
              <h2 className="text-xl text-indigo-500 font-semibold">
                ACQUISTARE
              </h2>
              <div className="text-4xl my-4 flex justify-center items-center text-center">
                <GiShoppingCart size={60} className="text-black" />
              </div>
              <p className="text-sm font-light text-gray-500">
                Sono qui per acquistare stock di merce invenduta da venditori
                affidabili.
              </p>
            </div>
          </Link>

          <Link
            to={"/seller"}
            className="cursor-pointer w-64 bg-gray-100 text-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl my-4">
              <h2 className="text-xl text-indigo-500 font-semibold">VENDERE</h2>
              <div className="text-4xl my-4 flex justify-center items-center text-center">
                {/* <GiShoppingCart size={60} className="text-black" /> */}
                <img src={handmoney} alt="" width={60} />
              </div>
              <p className="text-sm font-light text-gray-500">
                Sono qui per vendere stock di merce invenduta ad acquirenti di
                fiducia.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
