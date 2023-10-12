import React from "react";
import Navbar from "./Partials/Navbar";
import Hero from "./Partials/Hero";
import About from "./About";
import Sistema from "./Sistema";
import Footerr from "./Footer";
import Contattaci from "./Contattaci";

function Home() {
  return (
    <>
      <Navbar isHome />
      <div className=" ">
        <Hero />
        <About />
        <Sistema />
        <Contattaci />
        <Footerr />
      </div>
    </>
  );
}

export default Home;
