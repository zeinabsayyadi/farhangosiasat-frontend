import Header from "../materials/header";
import EmblaCarousel from "../other/EmbelaCarousel";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />

      {Children}
    </>
  );
};

export default Layout;
