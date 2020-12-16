import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import ReactGA from "react-ga";
import {useEffect} from "react"


import "../styles/styles.scss";
import Loading from "../components/Other/Loading";
import withReduxStore from "../common/with-redux-store";

/* uso practico, en un desarrollo real se haria desde el ENV en la configuración de la APP */
ReactGA.initialize(G-D1JGS8XCZ0);

const App = ({ Component, pageProps, reduxStore }) => {


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
});
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer position="bottom-left" autoClose={3000} />
        <ScrollToTop
          smooth
          component={<i className="fal fa-arrow-to-top" />}
          style={{
            backgroundColor: "#f7f5f4",
            borderRadius: "999px",
            height: "50px",
            width: "50px",
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default withReduxStore(App);
