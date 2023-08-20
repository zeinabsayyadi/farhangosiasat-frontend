import { BASE_URL, ReadPDFFile, getOneArticle } from "@/api";
import PDFTextExtractor from "@/components/other/pdf-text-extractor";
import { Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Article = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState();

  // const fetchPdf = async () => {
  //   try {
  //     const response = await axios.get("http://192.168.1.194:8000/api/pdf"); // Update with your backend API endpoint
  //     console.log("res", response.data.url); // Assuming the response includes the URL of the PDF
  //   } catch (error) {
  //     console.error("Error fetching PDF:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchPdf();
  // }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fdaa00",
      }}
    >
      <PDFTextExtractor pdfUrl="http://192.168.1.194:8000/api/pdf" />
      <Image
        src={`${BASE_URL}/${data?.coverimagelink[0].replace(/\\/g, "/")}`}
        width={400}
        height={300}
        alt="Picture of the author"
      />
      <Image
        src={`${BASE_URL}/${data?.coverimagelink[1].replace(/\\/g, "/")}`}
        width={400}
        height={300}
        alt="Picture of the author"
      />
      <Image
        src={`${BASE_URL}/${data?.coverimagelink[2].replace(/\\/g, "/")}`}
        width={400}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Article;
