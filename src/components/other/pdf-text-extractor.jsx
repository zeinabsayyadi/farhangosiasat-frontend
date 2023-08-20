import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFTextExtractor({ pdfUrl }) {
  return (
    <div>
      <Document
        file={pdfUrl}
        className={{
          backgroundColor: "blue",
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFTextExtractor;
