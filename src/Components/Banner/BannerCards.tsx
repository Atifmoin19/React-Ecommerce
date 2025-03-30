import { Flex, Text } from "@chakra-ui/react";
import BannerFlex from "./BannerFlex";
interface IBannerSections {
  bannerData?: {
    bannerImage: string;
    bannerTitle: string;
    bannerDescription: string;
    offer: string;
    price: number;
    redirectionUrl: string;
  };
}
export const BannerSections = (props: IBannerSections) => {
  const { bannerData } = props;
  return (
    <>
      <BannerFlex
        banner_image={bannerData?.bannerImage ?? ""}
        banner_color="#ecf1f4"
        className="embla__slide"
        justifyContent={"start"}
        alignItems={"center"}
        p={{
          lg: "3rem 5rem",
          md: "3rem",
          sm: "2rem",
          xs: "1.5rem",
        }}
        fontSize={{ lg: "1.2rem", md: "1rem", sm: ".8rem", xs: ".8rem" }}
        height={{ lg: "25rem", md: "20rem", sm: "14rem", xs: "14rem" }}
      >
        <Flex
          direction={"column"}
          alignItems={"start"}
          gap={"1rem"}
          w={{ lg: "30rem", md: "25rem", sm: "20rem", xs: "15rem" }}
        >
          <Flex
            justifyContent={"start"}
            alignItems={"center"}
            gap={"2"}
            textTransform={"uppercase"}
          >
            <Text>Exclusive Offer</Text>
            <Flex
              color={"green.500"}
              fontWeight={"bold"}
              p={".3rem .6rem"}
              rounded={"full"}
              bgGradient="linear(to-r, green.200, transparent)"
            >
              - {bannerData?.offer ?? 20} % OFF
            </Flex>
          </Flex>
          <Text
            as={"h3"}
            textAlign={"start"}
            fontWeight={"700"}
            fontSize={{ lg: "3rem", md: "2rem", sm: "1.5rem", xs: "1.5rem" }}
            letterSpacing={"-0.7px"}
          >
            {bannerData?.bannerTitle}
          </Text>
          <Text>{bannerData?.bannerDescription}</Text>
          <Flex alignItems={"baseline"} gap={2}>
            <Text>from</Text>
            <Text
              fontSize={{
                lg: "2rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              }}
              color={"red.500"}
              fontWeight={"bold"}
            >
              $ {bannerData?.price}
            </Text>
          </Flex>
        </Flex>
      </BannerFlex>
    </>
  );
};
