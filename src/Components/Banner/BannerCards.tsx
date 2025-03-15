import { Flex, Text } from "@chakra-ui/react";
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
      <Flex
        className="embla__slide"
        justifyContent={"start"}
        alignItems={"center"}
        p={"4rem"}
        rounded={"md"}
        w={"100%"}
        height={"30rem"}
        backgroundPosition={"start"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundImage={bannerData?.bannerImage}
      >
        <Flex direction={"column"} gap={"1rem"}>
          <Flex alignItems={"center"} gap={"2"} textTransform={"uppercase"}>
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
          <Text fontWeight={"bold"} fontSize={"4rem"}>
            {bannerData?.bannerTitle}
          </Text>
          <Text>{bannerData?.bannerDescription}</Text>
          <Flex alignItems={"baseline"} gap={2}>
            <Text>from</Text>
            <Text fontSize={"3xl"} color={"red.500"} fontWeight={"bold"}>
              $ {bannerData?.price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
