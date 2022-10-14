import { GlobalStyles } from "../styles/globalStyles";
import { Provider } from "react-redux";
import store from "../store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
