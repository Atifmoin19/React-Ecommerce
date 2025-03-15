import { Flex, Text } from "@chakra-ui/react";
interface IBannerSectionsVerticle {
  bannerData?: {
    bannerImage: string;
    bannerTitle: string | React.ReactNode;
    bannerDescription: string;
    bannerSubTitle: string;
    offer: string;
    price: number;
    redirectionUrl: string;
  };
}
export const BannerSectionsVerticle = (props: IBannerSectionsVerticle) => {
  const { bannerData } = props;
  return (
    <>
      <Flex
        justifyContent={"start"}
        alignItems={"start"}
        p={"2rem"}
        rounded={"md"}
        shadow={"md"}
        minH={"400px"}
        backgroundPosition={"start"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundImage={bannerData?.bannerImage}
      >
        <Flex direction={"column"} gap={"2"}>
          <Flex alignItems={"center"} gap={"2"}>
            <Text>{bannerData?.bannerDescription}</Text>
          </Flex>
          <Text fontSize={"xl"} fontWeight={"thin"}>
            {bannerData?.bannerSubTitle}
          </Text>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {bannerData?.bannerTitle}
          </Text>

          <Flex alignItems={"baseline"} direction={"column"} gap={2}>
            <Text>only from</Text>
            <Text fontSize={"3xl"} color={"red.500"} fontWeight={"bold"}>
              $ {bannerData?.price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
