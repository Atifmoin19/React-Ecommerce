import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { IoExpandOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export interface IShopItemCards {
  variant: "static" | "hoverable";
  product: {
    product_images: string[];
    discount: number;
    title: string;
    isInStock: boolean;
    rating: number;
    price: number;
    reviews: number;
    item_code: string;
    product_description: string;
    quantity: number;
    category: string;
    tags: string[];
    product_full_description: string[];
  };
}
const ShopItemCard = (props: IShopItemCards) => {
  const { product } = props;
  const navigate = useNavigate();
  return (
    <Flex
      position={"relative"}
      className="shopItemCard"
      bg={"red"}
      cursor={"pointer"}
      onClick={() => {
        navigate(
          `/product/${product.category}/${product.title?.replaceAll(" ", "-")}`
        );
      }}
    >
      <Flex
        w={"100%"}
        bg={"#fff"}
        h={"370px"}
        position={"relative"}
        border={".5px solid"}
        borderColor={"inherit"}
        p={"0.5rem 1rem"}
        fontSize={"md"}
        // justifyContent={"space-between"}
        alignItems={"start"}
        roundedTop={"inherit"}
        overflow={"hidden"}
        direction={"column"}
      >
        <Flex
          position={"absolute"}
          direction={"column"}
          gap={2}
          top={".5rem"}
          right={".5rem"}
          transform={"translate(0px,0)"}
        >
          <Flex
            w={"40px"}
            h={"40px"}
            className="hoverBtn"
            rounded={"full"}
            bg={"#fff"}
            color={"gray.500"}
            _hover={{
              color: "#fff",
              bg: "primary.500",
              transition: "0",
            }}
            transition={"transform .2s"}
            transitionDelay={".11s"}
            border={"1px solid"}
            borderColor={"gray.200"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Icon as={IoExpandOutline} />
          </Flex>
          <Flex
            w={"40px"}
            h={"40px"}
            rounded={"full"}
            bg={"#fff"}
            data-variant={1}
            className="hoverBtn"
            _hover={{
              color: "#fff",
              bg: "primary.500",
              transition: "0",
            }}
            transitionDelay={".18s"}
            transition={"transform .2s"}
            border={"1px solid"}
            borderColor={"gray.200"}
            color={"gray.500"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Icon as={FaHeart} />
          </Flex>
        </Flex>
        {product.discount > 0 && (
          <Flex
            bg={"secondary.500"}
            color={"#fff"}
            position={"absolute"}
            top={"1rem"}
            left={"1rem"}
            p={".2rem .5rem"}
            rounded={"sm"}
          >
            <Text lineHeight={"12px"} fontSize={"md"} userSelect={"none"}>
              {product.discount} %
            </Text>
          </Flex>
        )}
        <Flex
          w={"100%"}
          h={"160px"}
          p={"1rem"}
          justifyContent={"center"}
          mx={"auto"}
          mb={"auto"}
          alignItems={"center"}
          backgroundSize={"contain"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          // backgroundImage={product.product_images[0]}
        >
          <Image draggable="false" src={product.product_images[0]} />
        </Flex>

        <Text
          maxH={"60px"}
          mb={"auto"}
          objectFit={"contain"}
          textAlign={"start"}
          fontWeight={"500"}
          fontSize={{ lg: "lg", md: "md", sm: "md", xs: "lg" }}
        >
          {product.title}
        </Text>
        {product.isInStock ? (
          <Text
            textTransform={"uppercase"}
            fontSize={"sm"}
            fontWeight={"bold"}
            color={"green.500"}
          >
            IN STock
          </Text>
        ) : (
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"sm"}
            color={"red.500"}
          >
            out of STock
          </Text>
        )}
        <Flex>
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <Text
              key={index}
              color={index < product.rating ? "yellow.400" : "gray.300"}
            >
              ★
            </Text>
          ))}
          <Text ml={".4rem"}>{product.reviews} reviews</Text>
        </Flex>
        {product.discount ? (
          <Flex
            w={"100%"}
            bg={"#fff"}
            gap={2}
            alignItems={"baseline"}
            userSelect={"none"}
          >
            <Text fontSize={"lg"} textDecor={"line-through"} color={"gray.400"}>
              ${product.price}
            </Text>
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </Text>
          </Flex>
        ) : (
          <Flex
            w={"100%"}
            bg={"#fff"}
            gap={2}
            alignItems={"baseline"}
            userSelect={"none"}
          >
            {" "}
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              ${product.price}
            </Text>
          </Flex>
        )}
        <Flex w={"100%"} bg={"#fff"} p={"0.4rem 1rem"} mt={".5rem"}>
          <Button
            variant={"outline"}
            w={"100%"}
            rounded={"full"}
            colorScheme="secondary"
          >
            Add to cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ShopItemCard;
