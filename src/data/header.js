import { useEffect, useState } from "react";
import { getHeadrNews } from "@/pages/api";
export const headerNews = () => {
  const news = getHeadrNews("url", { token: "token" });
  return news;
};
