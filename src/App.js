import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <RoutesProviders />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
