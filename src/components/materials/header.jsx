import { useEffect, useState } from "react";

import BackgroundCard from "../other/backgroundcard";
import EmblaCarousel from "../other/EmbelaCarousel";
import { headerNews } from "@/data/header";
import { Typography } from "@mui/material";
import styles from "../../styles/Header.module.css";
import Appbar from "../other/appBar";
const Header = () => {
  const [slides, setSlides] = useState([]);
  const news = headerNews();
  const backgroundSlid = (slide) => {
    return (
      <BackgroundCard
        key={slide?.id}
        backgroundSlide={slide}
      />
    );
  };
  //get slids from api

  useEffect(() => {
    setSlides([]);
    news.forEach((element, index) => {
      console.log(index);
      setSlides((prev) => [...prev, backgroundSlid(element)]);
    });
  }, []);
  return (
    <div className={styles?.wrapper}>
      <div className={styles?.overlaybar}>
        <Appbar />
      </div>
      {slides.length === news.length ? (
        <EmblaCarousel children={slides} />
      ) : null}
    </div>
  );
};

export default Header;
