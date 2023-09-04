import axios from "axios";

export const BASE_URL = `http://192.168.1.193:8000`; //api url it must have a api perfix !
const api_url = (uri = "") => `${BASE_URL}${uri}`; // base_url must be config.api_url
const opt = (head = { token: "" }) => ({
  responseType: head?.responseType,
  headers: {
    "x-access-token": head?.token,
    "content-type": head?.contentType,
    "Accept-Encoding": "Binary",
    "Access-Control-Allow-Origin": "*",
  },
});

//----------------------------------------home
export const getHeadrNews = (data, head = {}) => {
  //   axios.get(
  //     api_url(
  //       data.address
  //     ),
  //     opt(head)
  //   );
  return (
    data &&
    head && [
      {
        id: 1,
        imageurl: `/images/background1.jpg`,
        title: "1انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 1,
        date: new Date("2023-03-25"),
      },
      {
        id: 2,
        imageurl: `/images/background2.jpg`,
        title: "2انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 2,
        date: new Date("2023-03-25"),
      },
      {
        id: 3,
        imageurl: `/images/background3.jpg`,
        title: "3انجمن فرهنگ و سیاست دانشگاه شیراز",
        priority: 3,
        date: new Date("2023-03-25"),
      },
    ]
  );
};

//guest apis

export const getOneArticle = (data) => axios.get(api_url(data?.address));

export const getAllArticles = (data, head) =>
  axios.get(api_url(data?.address), opt(head));

export const ReadPDFFile = () =>
  axios.get(
    api_url(`/static/article/contents/articleContent1688973583056.pdf`),
    {
      responseType: "arraybuffer",
      headers: {
        //"content-type": "application.json",
        Accept: "application/pdf",
      },
    }
  );
