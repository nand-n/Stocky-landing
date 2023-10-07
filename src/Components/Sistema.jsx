import React from "react";
import { VscChecklist } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
// import { VscChecklist } from "react-icons/vsc";
import chatLogo from "../assets/Svg/chat2.svg";
import chatLogo1 from "../assets/Svg/chat1.svg";
import { Link } from "react-router-dom";

TiMessages;

function Sistema() {
  return (
    <div
      className="px-4 lg:px-14  mx-auto my-8  mt-28 bg-gray-50"
      name="contattaci"
    >
      <div className="flex justify-center  ">
        <div className="fonty text-4xl md:text-6xl text-neutralGray font-semibold mb-8 md:w-4/5 text-center  ">
          Un sistema sicuro
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-4 md:px-16">
        {/* Card 1 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 max-w-[400px] w-full">
            <h1 className="text-xl font-bold mb-4 text-center">
              VERIFICA AUTENTICITÀ
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-8 mb-4">
              <div className="flex justify-center text-center">
                <VscChecklist className="text-6xl" />
              </div>
            </div>
            <p className="litefont text-center text-sm">
              Su Stocky entrambe le parti sono tutelate da un sistema di
              autenticazione che garantisce massima fiducia tra le parti e una
              community di utenti affidabile.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 max-w-[400px] w-full">
            <h1 className="text-xl font-bold mb-4 text-center">
              VERIFICA AUTENTICITÀ
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-8 mb-4">
              <div className="flex justify-center text-center">
                <img
                  src={chatLogo1}
                  alt=""
                  width={60}
                  height={60}
                  className="text-6xl"
                />
              </div>
            </div>
            <p className="litefont text-center text-sm">
              Il nostro sistema di feedback permette di creare una comunità
              affidabile e di fornire importanti informazioni sulle parti in
              questione.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 max-w-[400px] w-full">
            <h1 className="text-xl font-bold mb-4 text-center">
              CHAT INTEGRATA
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-8 mb-4">
              <div className="flex justify-center text-center">
                <img
                  src={chatLogo}
                  alt=""
                  width={60}
                  height={60}
                  className="text-6xl"
                />
              </div>
            </div>
            <p className="litefont text-center text-sm">
              La comunicazione tra acquirenti e venditori può essere
              semplificata grazie all&apos;utilizzo della chat, permettendo
              un&apos;esperienza interattiva e personalizzata.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-4 md:gap-8 bg-[#F0F0FA] rounded-lg shadow-lg border">
          <div className="text-center md:text-left">
            Entra a far parte dei +1000 iscritti alla piattaforma
          </div>
          <Link
            to={"/get-started"}
            className="underline px-4 py-2 bg-[#817ED3] text-white rounded hover:bg-gray900 transition-all duration-300 hover:-translate-y-2"
          >
            REGISTRATI ADESSO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sistema;
