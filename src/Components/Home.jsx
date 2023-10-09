import React from "react";
import Navbar from "./Partials/Navbar";
import Hero from "./Partials/Hero";
import About from "./About";
import Sistema from "./Sistema";
import Footerr from "./Footer";

function Home() {
  return (
    <>
      <Navbar isHome />
      <div className=" ">
        <Hero />
        <About />
        <Sistema />
        <Footerr />
      </div>
    </>
  );
}

export default Home;
