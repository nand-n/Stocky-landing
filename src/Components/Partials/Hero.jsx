import React from "react";
import banner1 from "../../assets/Images/StockyBanner.png";
import { Link } from "react-router-dom";
import { TypingText } from "../TypingText";
import { motion } from "framer-motion";
import { staggerContainer } from "../../Common/motion";

function Hero() {
  return (
    <div className="h-screen bg-indigo px-8 md:px-14 md:mt-8 lg:mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:justify-between my-4 md:my-8 py-4 md:py-12 overflow-x-hidden">
      {/* Hero Text */}
      <div className="w-full md:w-2/4 mt-20 md:mt-0">
        <h1 className="fonty text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-neutral-900 leading-snug">
          Vendi e <br />
          Acquista scorte in <br /> eccedenza.
        </h1>
        <p className="muli text-neutralGray text-base mb-8 w-full md:pr-12">
          La prima piattaforma italiana che ti consente di acquistare e vendere
          scorte di merce in eccedenza velocemente e in totale sicurezza.
        </p>
        <Link
          to={"/get-started"}
          className="underline px-4 py-3 mb-8 bg-[#817ED3] hover:bg-[#6A65B5] text-white rounded transition-all duration-300 hover:-translate-y-2"
        >
          INIZIA ADESSO
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-2/4 md:p-4">
        {/* Centered and smaller image */}
        <div className="flex justify-center items-center">
          <img src={banner1} className="rounded-lg max-w-xl" alt="banner1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
