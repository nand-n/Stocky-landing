import React from "react";
import banner1 from "../../assets/Images/StockyBanner.png";
import { Link } from "react-router-dom";
import { TypingText } from "../TypingText";
import { motion } from "framer-motion";
import { staggerContainer } from "../../Common/motion";

function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="mt-4 md:mt-8 lg:mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:justify-between my-4 md:my-8 py-4 md:py-12"
      id="acquista"
    >
      {/* Hero Text */}
      <div className="col-span md:w-2/4 mt-20">
        <h1 className="fonty text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-neutral-900 leading-snug">
          Vendi e <br />
          Acquista scorte in <br /> eccedenza.
        </h1>
        <p className="muli text-neutralGray text-base mb-8 w-full md:pr-12">
          {/* <TypingText
            title={
              ""
            }
          /> */}
          La prima piattaforma italiana che ti consente di acquistare e vendere
          scorte di merce in eccedenza velocemente e in totale sicurezza.
        </p>
        <Link
          to={"/get-started"}
          className="underline px-4 py-3 mb-8 bg-[#817ED3] hover:bg-[#6A65B5] text-white rounded  transition-all duration-300 hover:-translate-y-2"
        >
          INIZIA ADESSO
        </Link>
      </div>

      {/* Hero Image */}
      <div className="col-span md:flex md:justify-center md:items-center  md:w-2/4 md:p-4">
        <img src={banner1} className="rounded-2xl" alt="banner1" />
      </div>
    </motion.div>
  );
}

export default Hero;
