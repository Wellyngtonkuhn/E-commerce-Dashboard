import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import NavBar from "./components/NavBar";

import { store } from "./redux/store";

import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Router />
    </BrowserRouter>
  </Provider>
);
