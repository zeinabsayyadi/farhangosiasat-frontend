import { Document, Page } from "react-pdf";
import pdfjs from "pdfjs-dist";
import { BASE_URL, ReadPDFFile } from "@/api";
import { useEffect, useState } from "react";
import axios from "axios";

const PdfContentReader = ({ contentLink }) => {
  console.log(contentLink?.replace(/\\/g, "/"));
  const pdfUrl = `${BASE_URL}/static/article/contents/articleContent1688973583056.pdf`;
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState("");
  useEffect(() => {
    ReadPDFFile(
      { address: pdfUrl },
      { contentType: "text/pdf"
      , responseType: "arraybuffer" }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    // Extract text from each page
    const textPromises = [];
    for (let i = 1; i <= numPages; i++) {
      textPromises.push(
        pdfjs
          .getDocument({ url: pdfUrl })
          .then((pdf) => pdf.getPage(i))
          .then((page) => page.getTextContent())
          .then((textContent) => {
            const pageText = textContent.items
              .map((item) => item.str)
              .join(" ");
            return pageText;
          })
      );
    }

    Promise.all(textPromises)
      .then((pageTexts) => {
        const extractedText = pageTexts.join(" ");
        setPdfText(extractedText);
      })
      .catch((error) => console.error("Failed to extract PDF text:", error));
  };
  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
      <div>{pdfText}</div>
    </div>
  );
};

export default PdfContentReader;
