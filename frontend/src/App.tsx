import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./modules/home/home.layout";
import customTheme from "./config/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.LANDING_PAGE,
      element: <Home />,
    },
    {
      path: ROUTES.HOME,
      element: <>hello world</>,
    }
  ]);
  return (
    <ChakraProvider theme={customTheme} resetCSS>
        <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
