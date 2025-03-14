import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "Features/Store";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
