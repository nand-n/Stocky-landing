import React, { useState, useEffect } from "react";
import Layout from "./Layout";

function SellerPage() {
  // Initialize state to store seller data
  const [sellers, setSellers] = useState([]);

  // Dummy seller data
  const dummySellers = [
    {
      id: 1,
      name: "John",
      cognome: "Doe",
      email: "john@example.com",
      numeroditelefono: "123-456-7890",
      nomeazienda: "ABC Inc.",
      sitoweb: "www.abcinc.com",
      tutto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      abbigliamento: true,
      cosmetica: false,
      casa: true,
      benidiconsumo: false,
      calzature: false,
      accessori: true,
      altro: false,
    },
    {
      id: 2,
      name: "Jane",
      cognome: "Smith",
      email: "jane@example.com",
      numeroditelefono: "987-654-3210",
      nomeazienda: "XYZ Ltd.",
      sitoweb: "www.xyzltd.com",
      tutto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      abbigliamento: false,
      cosmetica: true,
      casa: false,
      benidiconsumo: true,
      calzature: true,
      accessori: false,
      altro: true,
    },
    // Add more dummy sellers here
  ];

  // Simulated data (replace with actual API calls)
  const fetchSellersData = async () => {
    // Replace this with your actual API endpoint to fetch seller data
    const response = await fetch("/api/sellers");
    const data = await response.json();
    setSellers(data);
  };

  // Fetch seller data when the component mounts
  useEffect(() => {
    // fetchSellersData();
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Seller Page</h1>

        {/* Render the list of sellers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummySellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white shadow-lg rounded p-4 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold">
                {seller.name} {seller.cognome}
              </h2>
              <div className="mt-4">
                <p className="text-gray-600">
                  <strong>Email:</strong> {seller.email}
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> {seller.numeroditelefono}
                </p>
                <p className="text-gray-600">
                  <strong>Company:</strong> {seller.nomeazienda}
                </p>
                <p className="text-gray-600">
                  <strong>Website:</strong>{" "}
                  <a
                    href={seller.sitoweb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {seller.sitoweb}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SellerPage;
