import { Button, Flex, Text } from "@chakra-ui/react";
import { product_list, sliderSettingsJr } from "Constants";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShopItemCard from "Components/ShopItemCard";
import { MdArrowRightAlt } from "react-icons/md";

interface ICategorySection {
  onViewAll?: (category: string) => void;
  category: string | React.ReactNode;
  description?: string;
  withSwipper?: boolean;
}
const CategorySection = (props: ICategorySection) => {
  const { onViewAll, withSwipper, category, description } = props;

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };

  return (
    <Flex w={"100%"} minH={"20rem"} direction={"column"}>
      <Flex w={"100%"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Text fontSize={"xl"} fontWeight={"bold"} onClick={handleNext}>
            {category}
          </Text>
          <Text fontSize={"md"} color={"gray.500"} mb={"1rem"}>
            {description}
          </Text>
        </Flex>
        {onViewAll && (
          <Button
            variant={"unstyled"}
            rounded={"full"}
            border={"1px solid"}
            color={"gray.400"}
            _hover={{ color: "gray.600" }}
          >
            <Flex
              alignItems={"center"}
              gap={2}
              transformOrigin={"start"}
              justifyContent={"start"}
              px={"2rem"}
            >
              <Text> View All</Text>
              <MdArrowRightAlt />
            </Flex>
          </Button>
        )}
      </Flex>
      {withSwipper ? (
        <Flex
          w={"100%"}
          bg={"red"}
          position={"relative"}
          gap={".5rem"}
          shadow={"DEFAULT"}
          rounded={"md"}
        >
          <Flex
            w={"35px"}
            minW={"35px"}
            left={0}
            top={"50%"}
            transform={"translate(0,-50%)"}
            ml={"-1rem"}
            zIndex={9}
            position={"absolute"}
            h={"35px"}
            my={"auto"}
            bg={"#fff"}
            shadow={"DEFAULT"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={handlePrev}
            alignItems={"center"}
            fontSize={"16px"}
            rounded={"full"}
          >
            <FaChevronLeft />
          </Flex>
          <Swiper
            ref={swiperRef}
            onSlideChange={(e) => {
              console.log(e);
            }}
            {...sliderSettingsJr}
            className="mySwiper"
          >
            {product_list.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ShopItemCard key={idx} product={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Flex
            w={"35px"}
            h={"35px"}
            my={"auto"}
            onClick={handleNext}
            cursor={"pointer"}
            right={0}
            top={"50%"}
            transform={"translate(0,-50%)"}
            mr={"-1rem"}
            zIndex={9}
            position={"absolute"}
            minW={"35px"}
            bg={"#fff"}
            justifyContent={"center"}
            alignItems={"center"}
            shadow={"DEFAULT"}
            fontSize={"16px"}
            rounded={"full"}
          >
            <FaChevronRight />
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default CategorySection;
