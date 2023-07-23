import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PdfContentReader from "@/components/other/pdfContentReader";

const NewArticleCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
            {article.authorName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <PdfContentReader contentLink={article.contentlink} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default NewArticleCard;
