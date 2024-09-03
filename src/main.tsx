import React from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
