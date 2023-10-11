import React from "react";
import Layout from "./Dashboard/Layout";
import { HiClock } from "react-icons/hi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdBallot } from "react-icons/md";

function Dashboard() {
  const dummyData = {
    Projects: [
      {
        name: "Customer A",
        startVariance: 3, // Replace with the desired start variance value
        finishVariance: 2, // Replace with the desired finish variance value
      },
      {
        name: "Customer B",
        startVariance: null, // Replace with null if there's no start variance
        finishVariance: 5, // Replace with the desired finish variance value
      },
      {
        name: "Customer C",
        startVariance: 1, // Replace with the desired start variance value
        finishVariance: null, // Replace with null if there's no finish variance
      },
      {
        name: "Customer D",
        startVariance: 1, // Replace with the desired start variance value
        finishVariance: null, // Replace with null if there's no finish variance
      },
      {
        name: "Customer E",
        startVariance: 1, // Replace with the desired start variance value
        finishVariance: null, // Replace with null if there's no finish variance
      },
      {
        name: "Customer F",
        startVariance: 1, // Replace with the desired start variance value
        finishVariance: null, // Replace with null if there's no finish variance
      },
      // Add more projects as needed
    ],
  };

  return (
    <Layout>
      <div className="">
        <div className="px-4">
          <div className="flex justify-between items-center my-2 bg-bg p-4 rounded-sm">
            <div className=""></div>
            <div className="w-4 h-4 p-4 rounded-full shadow-lg bg-primary flex justify-center items-center  text-white font-semibold">
              A
            </div>
          </div>
          <div className="mt-[29px] grid grid-cols-3 justify-start gap-5">
            <div className="bg-bg rounded px-[38px] col-span-1 py-[22px] h-[96px] flex items-center border-b-[4px] border-[#817ED3] justify-between container mx-auto">
              <div className="grid">
                <h1 className="text-primary text-[35px] font-OpenSans">500</h1>
                <div className="h2 text-[14px] text-text">Total Customers</div>
              </div>

              <MdBallot className="text-primary w-[25px] h-[25px]" />
            </div>
            <div className="bg-bg rounded px-[38px] py-[22px] h-[96px] col-span-1 flex items-center border-b-[4px] border-[#817ED3] justify-between max-w-5xl container mx-auto">
              <div className="grid">
                <h1 className="text-success text-[35px] font-OpenSans">200</h1>
                <div className="h2 text-[14px] text-text">Total Buyers</div>
              </div>

              <BsFillCheckCircleFill className="text-success w-[25px] h-[25px]" />
            </div>
            <div className="bg-bg rounded px-[38px] py-[22px] h-[96px] col-span-1 flex items-center border-b-[4px] border-[#817ED3] justify-between max-w-5xl container mx-auto">
              <div className="grid">
                <h1 className="text-warning text-[35px] font-OpenSans">300</h1>
                <div className="h2 text-[14px] text-text">Total Sellers</div>
              </div>
              <HiClock className="text-warning w-[25px] h-[25px]" />
            </div>
          </div>

          <div className="container max-w-7xl mx-auto mt-8 ">
            <div className="grid grid-cols-12 gap-4 mb-8">
              <div className="col-span-6 col-start-1 gap-4 space-y-8">
                <div className="grid grid-cols-2 items-center mb-2">
                  <div className="col-span-1">Stocky Total Profit</div>
                  <div className="col-span-1 text-white text-xl font-OpenSans font-extrabold bg-[#0F3A62] px-2 py-4 flex items-center justify-center rounded-lg shadow-lg">
                    100,000 EUR
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <div className="col-span-1">Stocky Total Cash</div>
                  <div className="col-span-1 text-white text-xl font-OpenSans font-extrabold bg-[#817ED3] px-2 py-4 flex items-center justify-center rounded-lg shadow-lg">
                    100,000 EUR
                  </div>
                </div>
              </div>
              <div className="col-span-6 col-start-7 shadow-md rounded-lg  bg-[#FFFFFF] pb-2">
                <div className="w-full bg-[#ECF2F7] p-4 border rounded text-primary grid grid-cols-3  items-center">
                  <div className="col-span-1 border-l-gray-400">Customer </div>
                  <div className="col-span-1 border-l-gray-400 border-l-2 pl-2">
                    Start
                  </div>
                  <div className="col-span-1 border-l-gray-400 border-l-2 pl-2">
                    Finish
                  </div>
                </div>
                <div className="px-2 max-h-44 overflow  overflow-y-scroll space-y-1 mt-4">
                  {dummyData?.Projects?.map((pr, i) => (
                    <div key={i}>
                      <div className="w-full border rounded p-4 grid grid-cols-3  text-primary font-OpenSans font-semibold bg-[#F5FAFD]">
                        <div className="col-span-1">{pr?.name}</div>
                        <div className="col-span-1 border-l-2 pl-2">
                          {pr?.startVariance ? (
                            <>{pr?.startVariance} Days</>
                          ) : (
                            <>-</>
                          )}
                        </div>
                        <div className="col-span-1 border-l-2 pl-2">
                          {pr?.finishVariance ? (
                            <>{pr?.finishVariance} Days</>
                          ) : (
                            <>-</>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
