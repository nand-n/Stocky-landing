/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DeleteButtonWithModal = ({
  setIsModalOpen,
  isModalOpen,
  handleDelete,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="modal bg-white p-4 rounded">
            <p className="text-xl font-bold pt-4">
              Are you sure you want to delete?
            </p>
            <div className="mt-5 flex justify-between items-center m">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
