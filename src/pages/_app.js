import Layout from "@/components/layout";
import "@/styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";
import CustomBackdrop from "@/components/materials/custombackdrop";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

export default function App({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
  }

  return (
    <>
      <RTL>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <CustomBackdrop />
            <Layout Children={<Component {...pageProps} />} />
          </div>
        </ThemeProvider>
      </RTL>
    </>
  );
}
