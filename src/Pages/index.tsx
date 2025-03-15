import { Flex } from "@chakra-ui/react";
import Banner from "Components/Banner";
import { BannerSectionsVerticle } from "Components/Banner/BannerCardVerticle";
import CategorySection from "Components/CategorySection/Index";
import { BannerDataVerticle } from "Constants";

import HomePageLayout from "Layouts";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex my={"2rem"} direction={"column"} minH={"50vh"}>
        <Banner />
      </Flex>

      <Flex
        flexWrap={"wrap-reverse"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Flex
          direction={"column"}
          gap={"2rem"}
          w={{ lg: "23%", md: "23%", sm: "100%", xs: "100%" }}
          flex={{
            lg: "0 0 23%",
            md: "0 0 25%",
            sm: "0 0 100%",
            xs: "0 0 100%",
          }}
        >
          {BannerDataVerticle.map((item, idx) => {
            return <BannerSectionsVerticle bannerData={item} key={idx} />;
          })}
        </Flex>
        <Flex
          p={"0 1rem"}
          w={{ lg: "75%", md: "72%", sm: "100%", xs: "100%" }}
          flex={{
            lg: "0 0 75%",
            md: "0 0 72%",
            sm: "0 0 100%",
            xs: "0 0 100%",
          }}
        >
          <CategorySection
            onViewAll={() => {
              console.log("s");
            }}
            category="Best Seller"
            description="shadhj"
            withSwipper
          />
        </Flex>
      </Flex>
    </HomePageLayout>
  );
};

export default HomePage;
