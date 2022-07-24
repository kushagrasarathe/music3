import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Layout from "../src/components/Layout";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Music 3",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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
