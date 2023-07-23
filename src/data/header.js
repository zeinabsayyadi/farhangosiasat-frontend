import { getHeadrNews } from "@/api";
export const headerNews = () => {
  const news = getHeadrNews("url", { token: "token" });
  return news;
};
