import { Box, Button, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      padding="0.5rem"
      justifyContent={"space-between"}
      width={"100%"}
      backgroundColor={"cyan"}
      borderRadius={"0.5rem"}
    >
      <Flex gap={"0.5rem"}>
        <Box marginRight={5} backgroundColor={"#ff0000"}>Logo</Box>
        <Button>Click me</Button>
        <Button colorScheme="teal">Click me</Button>
        <Button colorScheme="purple">Click me</Button>
      </Flex>

      <Flex gap={"0.5rem"}>
        <Button>User</Button>
        <Button>Logout</Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
