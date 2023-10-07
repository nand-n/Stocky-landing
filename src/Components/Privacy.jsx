import React, { useState } from "react";
import Navbar from "./Partials/Navbar";
import pdf from "../assets/EULA.pdf";
import { Document, pdfjs, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { Document, Page } from "react-pdf";

function Privacy() {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPgeNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPgeNumber(1);
    // setNumPage(numPage);
  };
  return (
    <div>
      <Navbar />
      {/* <div className="mt-8 md:mt-24 flex justify-center items-center ">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPage), (el, index) => (
            <Page
              width={600}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </Document>
      </div> */}
      <div className="mt-24 md:mt-24 lg:mt-24 flex justify-center items-center">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPage), (el, index) => (
            <Page
              width={Math.min(600, window.innerWidth - 32)} // Adjust the maximum width as needed
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default Privacy;
