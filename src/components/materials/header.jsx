import { useEffect, useState } from "react";

import BackgroundCard from "../other/backgroundcard";
import EmblaCarousel from "../other/EmbelaCarousel";
import { headerNews } from "@/data/header";
import styles from "../../styles/Header.module.css";
import Appbar from "../other/appBar";
const Header = () => {
  const news = headerNews();
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`overlaybar`]}>
        <Appbar />
      </div>
      <div style={{ position: "relative" }}>
        <EmblaCarousel slides={news} />
      </div>
    </div>
  );
};

export default Header;
