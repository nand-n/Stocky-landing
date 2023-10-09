import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import ExcelJS from "exceljs";
import { BsDownload } from "react-icons/bs";

function BuyerrPage() {
  // Initialize state to store seller data
  const [buyers, setBuyers] = useState([]);

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
    const response = await fetch("/api/buyers");
    const data = await response.json();
    setBuyers(data);
  };

  // Fetch seller data when the component mounts
  useEffect(() => {
    // fetchSellersData();
  }, []);

  const handleDownload = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Buyers `);
    const data = [
      ["Stocky"],
      [`List of Seller`],
      [
        "Name",
        "cognome",
        "Email",
        "Numero di telefono",
        "Sitoweb",
        "Tutto",
        "Abbigliamento",
        "Cosmetica",
        "Casa",
        "Benidiconsumo",
        "Calzature",
        "Accessori",
        "Altro",
      ],
    ];
    worksheet.addRows(data);
    worksheet.mergeCells("A1:N1");
    worksheet.mergeCells("A2:N2");

    const firstRow = worksheet.getRow(1);
    firstRow.eachCell((cell) => {
      if (cell.value !== null) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF6F00" }, // Set the desired background color (amber-900)
        };
        cell.font = { bold: true }; // Make the text bold
        cell.alignment = { horizontal: "center", vertical: "middle" }; // Center align the text vertically and horizontally
      }
    });

    const secondRow = worksheet.getRow(2);
    secondRow.eachCell((cell) => {
      if (cell.value !== null) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "0F3A62" },
        };
        cell.border = {
          top: { style: "double", color: { argb: "0F3A62" } },
          left: { style: "double", color: { argb: "0F3A62" } },
          bottom: { style: "double", color: { argb: "0F3A62" } },
          right: { style: "double", color: { argb: "0F3A62" } },
        };
      }
    });

    const thirdRow = worksheet.getRow(3);
    thirdRow.eachCell((cell) => {
      if (cell.value !== null) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "ECF2F7" },
        };
        cell.border = {
          top: { style: "double", color: { argb: "0F3A62" } },
          left: { style: "double", color: { argb: "0F3A62" } },
          bottom: { style: "double", color: { argb: "0F3A62" } },
          right: { style: "double", color: { argb: "0F3A62" } },
        };
      }
    });

    worksheet.getColumn("I").width = 500;
    worksheet.getRow(1).height = 40;
    worksheet.getRow(2).height = 40;
    worksheet.getRow(3).height = 40;
    worksheet.getRow(1).alignment = {
      horizontal: "center",
      vertical: "middle",
    };
    worksheet.getRow(2).alignment = {
      horizontal: "center",
      vertical: "middle",
    };
    worksheet.getRow(3).alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    if (dummySellers) {
      const rows = dummySellers.map((item) => [
        item.name,
        item.cognome,
        item.email,
        item.numeroditelefono,
        item.sitoweb,
        item.tutto,
        item.abbigliamento,
        item.cosmetica,
        item.casa,
        item.benidiconsumo,
        item.calzature,
        item.accessori,
        item.altro,
      ]);
      worksheet.addRows(rows);
    }

    worksheet.columns = [
      { header: "", key: "name", width: 40 },
      { header: "", key: "cognome", width: 15 },
      { header: "", key: "email", width: 15 },
      { header: "", key: "numeroditelefono", width: 15 },
      { header: "", key: "nomeazienda", width: 15 },
      { header: "", key: "sitoweb", width: 15 },
      { header: "", key: "tutto", width: 15 },
      { header: "", key: "abbigliamento", width: 15 },
      { header: "", key: "cosmetica", width: 15 },
      { header: "", key: "casa", width: 15 },
      { header: "", key: "benidiconsumo", width: 15 },
      { header: "", key: "calzature", width: 15 },
      { header: "", key: "accessori", width: 15 },
      { header: "", key: "altro", width: 15 },
    ];

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Buyers-${Date.now()}.xlsx`;
      a.click();
    });
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mb-4">Buyer Page</h1>

          <button className="btnprimary" onClick={handleDownload}>
            <BsDownload size="24" color="white" />
          </button>
        </div>

        {/* Render the list of sellers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
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
                  <strong>Nomeazienda:</strong> {seller.nomeazienda}
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

export default BuyerrPage;
