import '../styles/globals.css'
import { Provider } from "react-redux";
 import { store } from "../pages/store/store";
import Layout from '../componets/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp
