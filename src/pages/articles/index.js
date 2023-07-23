import { getAllArticles } from "@/api";
import ArticleCard from "@/components/materials/cards/articleCard";
import NewArticleCard from "@/components/materials/cards/newArticleCard";
import { Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
const Articles = () => {
  //get all articles
  const [paginatedArticles, setPaginatedArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  useEffect(() => {
    getAllArticles(
      {
        address: "/guest/artilces",
      },
      {
        contentType: "multipart/form-data",
      }
    )
      .then((res) => {
        console.log("res: ", res.data.articles);
        setPaginatedArticles(res.data.articles);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [page, limit]);
  return (
    <>
      {/* <Image
        //loader={contentfulImageLoader}
        alt={"title"}
        src={
          "http://192.168.1.193:8000/static/article/image/articleImageTop1689444910260.png"
        }
        width={200}
        height={200}
        priority
        className="backgroundImages"
      /> */}

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {paginatedArticles.map((article) => (
            <NewArticleCard
              article={article}
              key={article.id}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Articles;
