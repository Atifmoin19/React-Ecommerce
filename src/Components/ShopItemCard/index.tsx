import { Button, Flex, Text } from "@chakra-ui/react";

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
  const { product, variant = "static" } = props;
  return (
    <Flex
      position={"relative"}
      className="shopItemCard"
      overflow={"hidden"}
      _hover={
        variant === "hoverable"
          ? {
              zIndex: 9999,
              overflow: "visible",
              shadow: "all",
              borderRadius: "md",
              borderColor: "primary.500",
            }
          : {}
      }
    >
      {variant === "hoverable" && (
        <Flex
          w={"100%"}
          className={"shopItemButton"}
          position={"absolute"}
          left={0}
          bottom={"-4rem"}
          bg={"#fff"}
          border={"1px"}
          roundedBottom={"md"}
          borderTop={"none"}
          p={"1rem"}
        >
          <Button
            variant={"outline"}
            w={"100%"}
            rounded={"full"}
            colorScheme="secondary"
          >
            Add to cart
          </Button>
        </Flex>
      )}
      <Flex
        w={"100%"}
        bg={"#fff"}
        border={"1px"}
        h={"400px"}
        position={"relative"}
        borderColor={"inherit"}
        p={"1rem"}
        fontSize={"md"}
        justifyContent={"space-between"}
        alignItems={"start"}
        roundedTop={"inherit"}
        direction={"column"}
      >
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
          h={"200px"}
          justifyContent={"center"}
          mx={"auto"}
          alignItems={"center"}
          backgroundSize={"contain"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={product.product_images[0]}
        >
          {/* <Image h={"100%"} draggable="false" height={"auto"} src={} /> */}
        </Flex>

        <Text
          maxH={"60px"}
          textAlign={"start"}
          fontWeight={"bold"}
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
        {variant === "hoverable" ? (
          ""
        ) : (
          <Flex w={"100%"} bg={"#fff"} p={"0 1rem"}>
            <Button
              variant={"outline"}
              w={"100%"}
              rounded={"full"}
              colorScheme="secondary"
            >
              Add to cart
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ShopItemCard;
