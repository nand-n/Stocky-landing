import React, { useEffect, useState } from "react";
import Layout from "./Dashboard/Layout";
import { HiClock } from "react-icons/hi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdBallot } from "react-icons/md";
import axios from "axios";

import { Bar } from "react-chartjs-2";

function countTrueValues(data) {
  const counts = {
    tutto: 0,
    abbigliamento: 0,
    cosmetica: 0,
    casa: 0,
    benidiconsumo: 0,
    calzature: 0,
    accessori: 0,
    altro: 0,
  };

  for (const item of data) {
    for (const key in counts) {
      if (item[key] === true) {
        counts[key]++;
      }
    }
  }

  return counts;
}

function Dashboard() {
  const [buyer, setBuyer] = useState();
  const [seller, setSeller] = useState();
  const [contact, setContact] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buyerData, setBuyerData] = useState([]);
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://stocky-back.onrender.com/api/v1/buyer"
        );
        setBuyer(response.data);
        setLoading(false); // Data has been loaded
      } catch (error) {
        setError(error);
        setLoading(false); // Error occurred
      }
    }
    async function fetchSellerData() {
      try {
        const response = await axios.get(
          "https://stocky-back.onrender.com/api/v1/seller"
        );
        setSeller(response.data);
        setLoading(false); // Data has been loaded
      } catch (error) {
        setError(error);
        setLoading(false); // Error occurred
      }
    }

    async function fetchContactData() {
      try {
        const response = await axios.get(
          "https://stocky-back.onrender.com/api/v1/contact"
        );
        setContact(response.data);
        setLoading(false); // Data has been loaded
      } catch (error) {
        setError(error);
        setLoading(false); // Error occurred
      }
    }
    fetchData();
    fetchSellerData();
    fetchContactData();
  }, []);

  useEffect(() => {
    // Process the seller data
    const sellerCounts = {
      tutto: 0,
      abbigliamento: 0,
      cosmetica: 0,
      casa: 0,
      benidiconsumo: 0,
      calzature: 0,
      accessori: 0,
      altro: 0,
    };

    if (seller) {
      seller.forEach((item) => {
        for (const key in sellerCounts) {
          if (item[key] === 0) {
            sellerCounts[key]++;
          }
        }
      });
    }

    setSellerData(sellerCounts);

    // Process the buyer data
    const buyerCounts = {
      tutto: 0,
      abbigliamento: 0,
      cosmetica: 0,
      casa: 0,
      benidiconsumo: 0,
      calzature: 0,
      accessori: 0,
      altro: 0,
    };

    if (buyer) {
      buyer.forEach((item) => {
        for (const key in buyerCounts) {
          if (item[key] === true) {
            buyerCounts[key]++;
          }
        }
      });
    }

    setBuyerData(buyerCounts);
  }, [buyer, seller]);

  console.log(sellerData, buyerData, loading);

  return (
    <Layout>
      <div className="grid grid-cols-1">
        <div className="px-4  col-span-1">
          <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-start gap-4 sm:gap-5 md:gap-6">
            <div className="bg-gray-50 rounded p-4 sm:p-5 md:p-6 flex justify-between items-center border-b-4 sm:border-b-5 md:border-b-6 border-[#817ED3]">
              <div className="grid">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-OpenSans">
                  {contact?.length}
                </h1>
                <div className="h2 text-base sm:text-lg text-text">
                  Total Contacts
                </div>
              </div>
              <MdBallot className="text-primary w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
            </div>

            <div className="bg-gray-50 rounded p-4 sm:p-5 md:p-6 flex justify-between items-center border-b-4 sm:border-b-5 md:border-b-6 border-[#817ED3]">
              <div className="grid">
                <h1 className="text-success text-2xl sm:text-3xl md:text-4xl font-OpenSans">
                  {buyer?.length}
                </h1>
                <div className="h2 text-base sm:text-lg text-text">
                  Total Buyers
                </div>
              </div>
              <BsFillCheckCircleFill className="text-success w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
            </div>

            <div className="bg-gray-50 rounded p-4 sm:p-5 md:p-6 flex justify-between items-center border-b-4 sm:border-b-5 md:border-b-6 border-[#817ED3]">
              <div className="grid">
                <h1 className="text-warning text-2xl sm:text-3xl md:text-4xl font-OpenSans">
                  {seller?.length}
                </h1>
                <div className="h2 text-base sm:text-lg text-text">
                  Total Sellers
                </div>
              </div>
              <HiClock className="text-warning w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
            </div>
          </div>
          <div className="container mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(sellerData)?.map((category) => (
                <div
                  key={category}
                  className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-2">
                    {category}
                  </h2>
                  <div className="flex justify-between">
                    <div className="mb-4 col-span sm:mb-0 ">
                      <p className="text-gray-600">Seller</p>
                      <p className="text-lg md:text-2xl font-semibold text-green-800">
                        {sellerData[category]}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Buyer</p>
                      <p className="text-lg md:text-2xl font-semibold text-blue-800">
                        {buyerData[category]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
