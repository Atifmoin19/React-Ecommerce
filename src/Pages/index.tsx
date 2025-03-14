import { Flex, Text } from "@chakra-ui/react";

import Header from "Components/Header";
import Navigation from "Components/Navigation";
import { theme } from "Styles";

const HomePage = () => {
  return (
    <>
      {" "}
      <Flex
        w={"100%"}
        p={"1rem"}
        bg={"primary.500"}
        color={"#fff"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"sm"}
      >
        <Text>
          Due to the{" "}
          <Text as="span" fontWeight={"bold"}>
            COVID 19
          </Text>{" "}
          epidemic, orders may be processed with a slight delay
        </Text>
      </Flex>
      <Flex
        borderTop={"1px"}
        borderBottom={"1px"}
        direction={"column"}
        w={"100%"}
        px={theme.constantPadding}
      >
        <Header />
        <Navigation />
      </Flex>
    </>
  );
};

export default HomePage;
