import { Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NavBar from "../app/components/NavBar/NavBar";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container
      centerContent
      minW="100%"
      minH={"100%"}
      padding={"1rem"}
      backgroundColor={"#2e3440"}
    >
        <NavBar/>
    </Container>
  );
};
