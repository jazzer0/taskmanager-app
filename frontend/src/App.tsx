import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import customTheme from "./config/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Landing from "./modules/landing/landing.layout";
import { Home } from "./modules/home/home.layout";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.LANDING_PAGE,
      element: <Landing />,
    },
    {
      path: ROUTES.HOME,
      element: <Home/>,
    }
  ]);
  return (
    <ChakraProvider theme={customTheme} resetCSS>
        <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
