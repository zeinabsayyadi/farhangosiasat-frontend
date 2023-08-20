import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PdfContentReader from "@/components/other/pdfContentReader";
import { useRouter } from "next/router";

const NewArticleCard = ({ article }) => {
  console.log(article);
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => router.push(`/articles/${article?._id}`)}>
        <CardMedia
          component="img"
          height="100%"
          image="/images/paella.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {article.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {article.subtitle}
          </Typography>
          <Typography>
            نویسنده : {`${article.authorName} ${article.authorSurname}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default NewArticleCard;
