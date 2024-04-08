import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
=======

    <BrowserRouter>
      <App  />
    </BrowserRouter>

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
  </React.StrictMode>
);
