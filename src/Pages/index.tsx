import { Flex, Grid, Text } from "@chakra-ui/react";
import Banner from "Components/Banner";
import { BannerSectionsVerticle } from "Components/Banner/BannerCardVerticle";
import BannerFlex from "Components/Banner/BannerFlex";
import CategorySection from "Components/CategorySection/Index";
import ShopItemCard from "Components/ShopItemCard";
import { BannerDataVerticle, product_list } from "Constants";

import HomePageLayout from "Layouts";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex my={"2rem"} direction={"column"}>
        <Banner />
      </Flex>

      <Flex
        flexWrap={"wrap-reverse"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Flex
          p={{ lg: "0 1rem", md: "0", sm: "0 1rem", xs: "0 1rem" }}
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
          direction={"column"}
          gap={"2rem"}
          w={{ lg: "75%", md: "72%", sm: "100%", xs: "100%" }}
          flex={{
            lg: "0 0 75%",
            md: "0 0 72%",
            sm: "0 0 100%",
            xs: "0 0 100%",
          }}
        >
          <CategorySection
            product_list={product_list}
            onViewAll={() => {
              console.log("s");
            }}
            category="Best Sellers"
            description="Do not miss the current offers until the end of March."
            withSwipper
          />

          <BannerFlex
            isFixed={false}
            banner_image={
              "https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg"
            }
            banner_color="#F8EFEA"
            justifyContent={"start"}
            alignItems={"center"}
            p={{
              lg: "3rem",
              md: "2.5rem",
              sm: "2rem",
              xs: "1.5rem",
            }}
            rounded={"md"}
            fontSize={{ lg: "1rem", md: ".8rem", sm: ".8rem", xs: ".8rem" }}
            backgroundPosition={{
              lg: "100%",
              md: "100%",
              sm: "120%",
              xs: "180%",
            }}
            height={"10rem"}
          >
            <Flex direction={"column"} maxW={"60%"} color={"gray.500"}>
              <Text fontWeight={"thin"}>Always Taking Care</Text>
              <Text
                fontWeight={"bold"}
                fontSize={{
                  lg: "1.3rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "1rem",
                }}
              >
                In store or online your health & safety is our top priority.
              </Text>
            </Flex>
          </BannerFlex>

          <CategorySection
            onViewAll={() => {
              console.log("s");
            }}
            category={
              <Text>
                HOT PRODUCT FOR{" "}
                <Text as={"span"} color={"red"}>
                  THIS WEEK
                </Text>
              </Text>
            }
            description="Dont miss this opportunity at a special discount just for this week."
            // withSwipper
          >
            <Grid
              w={"100%"}
              p={"1rem"}
              border={"1px solid red"}
              rounded={"md"}
              gridTemplateColumns={"repeat(4,1fr)"}
              bg={"#fff"}
            >
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
              <ShopItemCard variant="hoverable" product={product_list[0]} />
            </Grid>
          </CategorySection>
        </Flex>
      </Flex>
    </HomePageLayout>
  );
};

export default HomePage;
