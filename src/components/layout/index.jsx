import Header from "../materials/header";
const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <div
        style={{
          width: "100vw",
        }}
      >
        footer
      </div>
    </>
  );
};

export default Layout;
