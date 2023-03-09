import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query/";
import Router from "./routes";
import NavBar from "./components/NavBar";

import { store } from "./redux/store";

import { GlobalStyles } from "./styles/GlobalStyles";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <NavBar />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
