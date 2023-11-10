import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { GlobalContainer } from "./components/GlobalContainer/GlobalContainer";
import Home from "./modules/home/home.layout";

function App() {
  return (
    <ChakraProvider>
      <GlobalContainer>s
        <Home />
      </GlobalContainer>
    </ChakraProvider>
  );
}

export default App;
