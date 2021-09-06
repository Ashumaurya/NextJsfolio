import Head from "next/head";
import ThemeChanger from "./api/theme";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Box, Paper } from "@mui/material";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeChanger>
        <Box sx={{ flexGrow: "auto" }}>
          <Paper square elevation={0}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Paper>
        </Box>
      </ThemeChanger>
    </>
  );
}

export default MyApp;
