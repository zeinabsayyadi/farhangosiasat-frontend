import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ButtonBase, useTheme } from "@mui/material";
import style from "@/styles/Embla.module.css";
const BackgroundCard = ({ backgroundSlide }) => {
  const theme = useTheme();
  const contentfulImageLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const GoToCntent = () => {
    console.log("open back drop and then open this news page ");
  };
  return (
    <Card
      key={backgroundSlide?.id}
      className={style[`embla__slide__img`]}
    >
      <CardMedia sx={{ width: "100vw", height: "100vh" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            loader={contentfulImageLoader}
            alt={backgroundSlide?.title}
            src={backgroundSlide?.imageurl}
            //src="/images.jfif"
            sizes="(max-width: 768px) 100vw"
            fill
            priority
          />
          <div
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <ButtonBase onClick={GoToCntent}>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{
                    color: theme?.palette?.text?.secondary?.main,
                  }}
                >
                  {backgroundSlide?.title}
                </Typography>
              </ButtonBase>
            </CardContent>
          </div>
        </div>
      </CardMedia>
    </Card>
  );
};
export default BackgroundCard;
