import { Button, Flex, Icon, Text } from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = (props: any) => {
  const { stack } = props;
  return (
    <Flex w={"100%"} fontSize={"md"} gap={"1rem"} p={"1rem"}>
      <Flex gap={1} alignItems={"center"}>
        <Button variant={"link"}>
          <Text color={"#000"} fontWeight={"normal"} whiteSpace={"nowrap"}>
            Home
          </Text>
        </Button>
        <Icon color={"gray.400"} as={IoIosArrowForward} />
      </Flex>
      {stack.map((item, idx) => {
        return (
          <Flex gap={1} alignItems={"center"}>
            <Button variant={"link"}>
              <Text color={"#000"} fontWeight={"normal"} whiteSpace={"nowrap"}>
                {item}
              </Text>
            </Button>
            {idx < stack.length - 1 && (
              <Icon color={"gray.400"} as={IoIosArrowForward} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreadCrumbs;
