import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Tipio</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
