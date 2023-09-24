import Header from "../materials/header";
const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
    </>
  );
};

export default Layout;
