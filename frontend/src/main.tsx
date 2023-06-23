import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store, legacy_createStore as createStore } from "redux";
import { reducer } from "./store/reducer.tsx";

const store: Store<State, Action> = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
