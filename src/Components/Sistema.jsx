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
      className="pt-20 px-4 py-4 md:py-8 lg:px-14 mx-auto my-8 mt-28  bg-gray-50 "
      id="sistema"
    >
      <div className="flex justify-center">
        <div className="fonty text-2xl md:text-4xl lg:text-6xl text-neutralGray font-semibold mb-4 md:mb-8 text-center">
          Un sistema sicuro
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16 px-2 md:px-4 lg:px-8 md:mt-4">
        {/* Card 1 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 md:max-w-[400px] w-full">
            <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">
              VERIFICA AUTENTICITÀ
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-4 mb-2 md:mb-4">
              <div className="flex justify-center text-center">
                <VscChecklist className="text-4xl md:text-6xl" />
              </div>
            </div>
            <p className="litefont text-center text-base md:text-xl px-2 md:px-4">
              Su Stocky entrambe le parti sono tutelate da un sistema di
              autenticazione che garantisce massima fiducia tra le parti e una
              community di utenti affidabile.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 md:max-w-[400px] w-full">
            <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">
              SISTEMA DI RECENSIONI
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-4 mb-2 md:mb-4">
              <div className="flex justify-center text-center">
                <img
                  src={chatLogo1}
                  alt=""
                  width={60}
                  height={60}
                  className="text-4xl md:text-6xl"
                />
              </div>
            </div>
            <p className="litefont text-center text-base md:text-xl px-2 md:px-4">
              Il nostro sistema di feedback permette di creare una comunità
              affidabile e di fornire importanti informazioni sulle parti in
              questione.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:w-1/3 shadow-md rounded-lg">
          <div className="p-4 md:max-w-[400px] w-full">
            <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">
              CHAT INTEGRATA
            </h1>
            <div className="bg-[#F0F0FA] rounded-lg p-4 mb-2 md:mb-4">
              <div className="flex justify-center text-center">
                <img
                  src={chatLogo}
                  alt=""
                  width={60}
                  height={60}
                  className="text-4xl md:text-6xl"
                />
              </div>
            </div>
            <p className="litefont text-center text-base md:text-xl px-2 md:px-4">
              La comunicazione tra acquirenti e venditori può essere
              semplificata grazie all&apos;utilizzo della chat, permettendo
              un&apos;esperienza interattiva e personalizzata.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-8 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center p-2 md:p-4 gap-2 md:gap-4 bg-[#F0F0FA] rounded-lg shadow-lg border">
          <div className="text-center md:text-left">
            Entra a far parte dei +1000 iscritti alla piattaforma
          </div>
          <Link
            to={"/get-started"}
            className="underline px-2 md:px-4 py-1 md:py-2 bg-[#817ED3] text-white rounded hover:bg-gray900 transition-all duration-300 hover:-translate-y-2"
          >
            REGISTRATI ADESSO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sistema;
