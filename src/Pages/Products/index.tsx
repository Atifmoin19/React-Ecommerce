import { Flex, Image, Text } from "@chakra-ui/react";
import BreadCrumbs from "Components/BreadCrumbs";

import { getProductData } from "general";
import HomePageLayout from "Layouts";

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const currStack = window.location.pathname
    .split("/")
    .filter((item) => item && item !== "React-Ecommerce" && item !== "product"); // Extract the :id from the URL
  //   const [category, productName] = pathname.split("/").slice(1); // Extract category and product name from the URL
  //   console.log("Category:", category); // Log the category
  //   console.log("Product Name:", productName); // Log the product name
  //   console.log("Product ID:", pathname); // You can use this ID as needed
  const productData = getProductData(id ?? "");
  return (
    <>
      <HomePageLayout>
        <BreadCrumbs stack={currStack} />

        <Flex w={"100%"} bg={"#fff"} rounded={"md"} p={"2rem"}>
          <Image src={productData?.product_images?.[0]} />
          <Flex direction={"column"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {" "}
              {productData?.title}
            </Text>
            <Text color={"gray.500"} fontSize={"md"} my={"1rem"}>
              {" "}
              {productData?.product_full_description}
            </Text>
          </Flex>
        </Flex>
      </HomePageLayout>
    </>
  );
};

export default Product;
