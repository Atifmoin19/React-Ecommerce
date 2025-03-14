import { filter, Flex, Icon, Text } from "@chakra-ui/react";
import { MyContext } from "App";
import { ElementType, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavItems = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  return (
    <Flex w={"100%"} justifyContent={"space-around"} alignItems={"center"}>
      {context &&
        context.navigationList.map((item, idx) => {
          return (
            <Flex
              key={idx}
              alignItems={"center"}
              position={"relative"}
              p={".5rem 1rem"}
              cursor={"pointer"}
              fontWeight={"500"}
              height={"min-content"}
              rounded={"full"}
              onClick={(e) => {
                navigate(item.link);
                console.log("clicked parent");
              }}
              border={"1px solid transparent"}
              background={item.isActive ? "#2bbef9" : ""}
              _hover={{
                borderColor: !item.isActive ? "#2bbef9" : "",
                color: !item.isActive ? "#2bbef9" : "",
              }}
              className="mainMenu"
              color={item.isActive ? "#fff" : "gray.500"}
            >
              {item.icon && <Icon as={item.icon as ElementType} />}
              <Text letterSpacing={"1.3px"}>{item.title}</Text>
              <Flex
                w={"fit-content"}
                display={"none"}
                p={"2rem"}
                rounded={"md"}
                boxSizing="border-box"
                zIndex={8}
                className={item.subMenu.length > 0 ? "subMenu" : ""}
                bg={"#fff"}
                border={"1px"}
                shadow={"sm"}
                justifyContent={"start"}
                position={"absolute"}
                bottom={"-1rem"}
                left={"50%"}
                _before={{
                  width: "100%",
                  height: "20px",
                  position: "absolute",
                  zIndex: "9",
                  bg: "transparent",
                  top: 0,
                  left: 0,
                  mt: "-1rem",
                  content: '""',
                }}
                transform={"translate(-50%,100%)"}
                alignItems={"start"}
              >
                {Array.from(
                  new Set(item.subMenu.map((itemn) => itemn.category))
                ).map((category, index) => (
                  <Flex
                    key={index}
                    mx={"1.5rem"}
                    w={"100%"}
                    minW={"max-content"}
                    direction={"column"}
                    alignItems={"start"}
                    gap={"1rem"}
                    color={"primary.500"}
                    _hover={{ color: "#2bbef9" }}
                  >
                    {category && (
                      <Text fontWeight={"bold"} fontSize={"lg"}>
                        {category}
                      </Text>
                    )}
                    <Flex direction={"column"} gap={".6rem"}>
                      {item.subMenu.map((itemMap) => {
                        return itemMap.category === category ? (
                          <Text
                            cursor={"pointer"}
                            onClick={(e) => {
                              e.stopPropagation();

                              navigate(item.link + itemMap.link);
                            }}
                            fontSize={"md"}
                            color={"#000"}
                            _hover={{ color: "#2bbef9" }}
                          >
                            {itemMap.title}
                          </Text>
                        ) : (
                          <></>
                        );
                      })}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default NavItems;
