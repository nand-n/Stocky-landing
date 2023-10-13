import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import ExcelJS from "exceljs";
import { BsDownload } from "react-icons/bs";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { DeleteButtonWithModal } from "../DeleteBtnModal";

function ContactPage() {
  // Initialize state to store seller data
  const [dummySellers, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();

  const handleDelete = async () => {
    try {
      // Send a delete request to your API
      await axios.delete(
        `https://stocky-back.onrender.com/api/v1/contact/${id}`
      );
      // Show success toast message
      // setDataSeller((dataSeller) => dataSeller.filter((id) => id.id != id));
      setData((prevData) => prevData.filter((seller) => seller.id !== id));
      toast.success("Item deleted successfully");
    } catch (error) {
      // Handle the error and show an error toast message
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
  };

  const handleDownload = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Contact `);
    const data = [
      ["Stocky"],
      [`List of Buyers`],
      ["Name", "cognome", "Email", "Oggetto", "Messaggio"],
    ];
    worksheet.addRows(data);
    worksheet.mergeCells("A1:E1");
    worksheet.mergeCells("A2:E2");

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
        item.oggetto,
        item.messaggio,
      ]);
      worksheet.addRows(rows);
    }

    worksheet.columns = [
      { header: "", key: "name", width: 40 },
      { header: "", key: "cognome", width: 15 },
      { header: "", key: "email", width: 15 },
      { header: "", key: "oggetto", width: 15 },
      { header: "", key: "nomeazienda", width: 15 },
    ];

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Contacts-${Date.now()}.xlsx`;
      a.click();
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://stocky-back.onrender.com/api/v1/contact"
        );
        setData(response.data);
        setLoading(false); // Data has been loaded
      } catch (error) {
        setError(error);
        setLoading(false); // Error occurred
      }
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <ToastContainer />
      <div className="p-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold mb-4">Contacts Page</h1>

          <button className="btnprimary" onClick={handleDownload}>
            <BsDownload size="24" color="white" />
          </button>
        </div>
        {loading ? (
          <p className="flex justify-center items-center h-full">
            <ClipLoader />
          </p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-16">
            <DeleteButtonWithModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleDelete={handleDelete}
            />
            {dummySellers.map((seller) => (
              <div
                key={seller.id}
                className="bg-white shadow-lg rounded p-4 hover:shadow-xl transition duration-300  overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    Name : {seller.cognome}
                  </h2>
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
                    <strong>Cognome:</strong> {seller.cognome}
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> {seller.email}
                  </p>
                  <p className="text-gray-600">
                    <strong>Oggetto:</strong> {seller.oggetto}
                  </p>
                  <p className="text-gray-600">
                    <strong>Messaggio:</strong> {seller.messaggio}
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

export default ContactPage;
