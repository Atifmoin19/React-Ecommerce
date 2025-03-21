import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

import NavItems from "./NavItems";
const Navigation = () => {
  return (
    <Flex
      w={"100%"}
      p={"1rem"}
      justifyContent={"space-between"}
      gap={"1rem"}
      flexWrap={"wrap"}
    >
      <Flex
        p={"1rem"}
        cursor={"pointer"}
        rounded={"full"}
        w={"20%"}
        h={"min-content"}
        minW={"200px"}
        alignItems={"center"}
        color={"#fff"}
        gap={2}
        justifyContent={"center"}
        fontSize={"md"}
        bg={"#2bbef9"}
        position={"relative"}
      >
        <Icon as={HamburgerIcon} />
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text>ALL CATEGORIES</Text>
        </Flex>

        <Icon as={MdKeyboardArrowDown} />

        <Text
          position={"absolute"}
          bottom={"-.6rem"}
          p={".2rem .4rem"}
          bg={"gray.200"}
          rounded={"full"}
          color={"gray.500"}
          shadow={"md"}
          fontSize={"2xs"}
          fontWeight={"bold"}
        >
          TOTAL 63 PRODUCTS
        </Text>
      </Flex>

      <NavItems />
    </Flex>
  );
};

export default Navigation;
