import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import background from "../../assets/Abstract_digital_wave_of_particles_background.jpg";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const handleRoutetoApplication = () => {
    navigate(ROUTES.HOME)
  };
  return (
    <Container
      centerContent
      minW="100%"
      minH={"100%"}
      padding={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      backgroundImage={background}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={16}
        minH={"100vh"}
        maxW={1500}
        margin={"0 auto"}
      >
        <Flex
          minW={"100%"}
          padding={"1rem"}
          borderRadius={8}
          backgroundColor={"rgba(0, 0, 0 , 0.3)"}
        >
          <Text color={"white"}>Logo Taskmanager App</Text>
        </Flex>

        <Flex
          minW={"100%"}
          minH={"100%"}
          padding={"1rem"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={11}
        >
          <Flex
            flexDirection={"column"}
            gap={8}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"5xl"} color={"white"} fontWeight={"bold"}>
              Time management made easy
            </Text>

            <Text
              fontSize={"2xl"}
              maxWidth={"60%"}
              textAlign={"center"}
              alignSelf={"center"}
              color={"rgb(156 163 175)"}
            >
              Streamline your day with our intuitive task manager. Set
              priorities, receive timely reminders, and achieve your goals
              effortlessly. Boost productivity anytime, anywhere with our
              seamless cross-platform experience.
            </Text>

            <Flex gap={8}>
              <Button>Log in</Button>
              <Button>Create an account</Button>
            </Flex>

            <Box>
              <Button colorScheme="red" onClick={handleRoutetoApplication}>
                Enter Application
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;
