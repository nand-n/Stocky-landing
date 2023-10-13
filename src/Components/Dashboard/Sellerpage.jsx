import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import ExcelJS from "exceljs";
import { BsDownload } from "react-icons/bs";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { URLst } from "../../Common/url";
import { toast, ToastContainer } from "react-toastify";
import { DeleteButtonWithModal } from "../DeleteBtnModal";
import { AiFillDelete } from "react-icons/ai";

function SellerPage() {
  // Initialize state to store seller data
  const [dataSeller, setDataSeller] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();

  const handleDownload = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Sellers `);
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

    if (dataSeller) {
      const rows = dataSeller.map((item) => [
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
      a.download = `Sellers-${Date.now()}.xlsx`;
      a.click();
    });
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://stocky-back.onrender.com/api/v1/seller"
        );
        setDataSeller(response.data);
        setLoading(false); // Data has been loaded
      } catch (error) {
        setError(error);
        setLoading(false); // Error occurred
      }
    }
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      // Send a delete request to your API
      await axios.delete(
        `https://stocky-back.onrender.com/api/v1/seller/${id}`
      );
      // Show success toast message
      // setDataSeller((dataSeller) => dataSeller.filter((id) => id.id != id));
      setDataSeller((prevData) =>
        prevData.filter((seller) => seller.id !== id)
      );
      toast.success("Item deleted successfully");
    } catch (error) {
      // Handle the error and show an error toast message
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
  };
  return (
    <Layout>
      <ToastContainer />
      <div className="p-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mb-4">Seller Page</h1>

          <button className="btnprimary" onClick={handleDownload}>
            <BsDownload size="24" color="white" />
          </button>
        </div>
        {loading ? (
          <p className="flex justify-center items-center h-full">
            <ClipLoader />
          </p>
        ) : error ? (
          <p>
            Error: {error.message}{" "}
            <button
              className="btn-primary"
              onClick={() => {
                window.location.reload();
              }}
            >
              Try Again!
            </button>{" "}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-16">
            <DeleteButtonWithModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleDelete={handleDelete}
            />
            {dataSeller.map((seller) => (
              <div
                key={seller.id}
                className="bg-white shadow-lg rounded p-4 hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{seller.cognome}</h2>
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setId(seller.id);
                    }}
                    className=""
                  >
                    <AiFillDelete className="text-red-500 hover:text-red-700" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-gray-600">
                    <strong>Email:</strong>{" "}
                    <span
                      style={{
                        maxWidth: "200px",
                        display: "block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {seller.email}
                    </span>
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
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      {seller.sitoweb}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default SellerPage;
