import { Button, Flex, Image, Text } from "@chakra-ui/react";

export interface IShopItemCards {
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
  return (
    <Flex
      w={"100%"}
      minH={"300px"}
      bg={"#fff"}
      position={"relative"}
      borderRight={"1px"}
      p={"1rem"}
      gap={".5rem"}
      fontSize={"md"}
      pt={"2rem"}
      alignItems={"start"}
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
          <Text lineHeight={"12px"} fontSize={"md"}>
            {product.discount} %
          </Text>
        </Flex>
      )}

      <Image
        w={"100%"}
        height={"100px"}
        bg={"red"}
        objectFit={"contain"}
        src={product.product_images[0]}
      />
      <Text fontWeight={"bold"} fontSize={"lg"} mt={"1rem"}>
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
        <Flex gap={2} alignItems={"baseline"}>
          <Text fontSize={"lg"} textDecor={"line-through"} color={"gray.400"}>
            ${product.price}
          </Text>
          <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
          </Text>
        </Flex>
      ) : (
        <Flex gap={2} alignItems={"baseline"}>
          {" "}
          <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
            ${product.price}
          </Text>
        </Flex>
      )}
      <Flex w={"100%"}>
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
  );
};

export default ShopItemCard;
