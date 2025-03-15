import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import Logo from "assets/Logo.png";
import CountryDropDown from "Components/CountryDropdown";
import { IoPersonSharp } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import SearchBar from "Components/SearchBar";
import { useContext, useState } from "react";
import { MyContext } from "App";
import Navigation from "Components/Navigation";
const Header = () => {
  const context = useContext(MyContext);
  const [productFilter, setProductFilter] = useState("");

  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        gap={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Image src={Logo} w={"120x"} height={"50px"} objectFit={"contain"} />
        <CountryDropDown />
        <SearchBar
          inputValue={productFilter}
          setInputValue={setProductFilter}
          searchList={context?.list ?? []}
          setSelectedProduct={setSelectedProduct}
        />
        <Flex
          w={"40px"}
          h={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          border={"1px"}
          color={"gray.500"}
          aspectRatio={"1/1"}
          fontSize={"xl"}
          p={".2rem"}
        >
          <Icon as={IoPersonSharp} />
        </Flex>
        <Text fontWeight={"bold"} color={"gray"}>
          $0.00
        </Text>
        <Flex
          w={"40px"}
          h={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          bg={"red.100"}
          color={"red.500"}
          aspectRatio={"1/1"}
          fontSize={"xl"}
          position={"relative"}
          p={".2rem"}
        >
          <Flex
            position={"absolute"}
            top={"-6px"}
            right={"-6px"}
            w={"20px"}
            height={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"red"}
            aspectRatio={"1/1"}
            color={"#fff"}
            fontSize={"2xs"}
            rounded={"full"}
          >
            0
          </Flex>
          <Icon as={BsBag} />
        </Flex>
      </Flex>
      <Navigation />
    </>
  );
};

export default Header;
