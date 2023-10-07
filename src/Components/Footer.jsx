import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/Images/stocky.png";

function Footerr() {
  return (
    <div>
      <Footer>
        <div className="w-screen">
          <div className="grid w-full justify-between items-center sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8 ">
              <a href="/">
                <img
                  src={logo}
                  width={150}
                  height={150}
                  className=""
                  alt="logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                {/* <Footer.Title title="about" /> */}
                <Footer.LinkGroup col>
                  <Footer.Link href="/Contattaci">Contattaci</Footer.Link>
                  <Footer.Link href="/privacy">Informativa Privacy</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                {/* <Footer.Title title="Follow us" /> */}
                <Footer.LinkGroup col>
                  <Footer.Link href="/get-started">
                    Registrati per comprare
                  </Footer.Link>
                  <Footer.Link href="/get-started">
                    Registrati per vendere
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                {/* <Footer.Title title="Legal" /> */}
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Rimani in contatto con Stocky
                  </Footer.Link>
                  <Footer.Link href="#">
                    Registra la tua mail per ricevere aggiornamenti
                  </Footer.Link>
                  <input
                    type="text"
                    name="text"
                    placeholder=""
                    id=""
                    className="bg-gray-300 px-2 py-2 text-gray-900 rounded-lg shadow-sm "
                  />
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center pb-4 items-center sm:justify-between">
            <Footer.Copyright
              by="stocky"
              href="/"
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex items-center space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://facebook.com/" icon={BsFacebook} />
              <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
              <Footer.Icon href="https://tweeter.com" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Footerr;
