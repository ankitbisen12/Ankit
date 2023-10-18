import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import { Fragment } from "react";
import store from "@/redux/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Fragment>
  );
}
