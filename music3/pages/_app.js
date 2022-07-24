import "../styles/globals.css";
import Layout from "../src/components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Layout> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </Layout> */}
    </>
  );
}
export default MyApp;
