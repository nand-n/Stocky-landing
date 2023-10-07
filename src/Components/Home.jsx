import React from "react";
import Navbar from "./Partials/Navbar";
import Hero from "./Partials/Hero";
import About from "./About";
import Sistema from "./Sistema";
import Footerr from "./Footer";

function Home() {
  return (
    <div className="bg-indigo px-4 py-0  lg:px-14 w-full h-full ">
      <Navbar />
      <Hero />
      <About />
      <Sistema />
      <Footerr />
    </div>
  );
}

export default Home;
