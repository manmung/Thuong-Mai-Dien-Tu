import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvide } from "./component/productsContext/ProductsContext";

import App from "./App";
import GlobalStyles from "./globalStyle/GlobalStyles";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProductsProvide>
      <GlobalStyles>
        <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </GlobalStyles>
    </ProductsProvide>
  </Provider>
);

reportWebVitals();
