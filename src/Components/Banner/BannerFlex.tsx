import { Flex, FlexProps } from "@chakra-ui/react";
interface IBannerFlex extends FlexProps {
  banner_image: string;
  isFixed?: boolean;

  banner_color: string;
  children: React.ReactNode;
}
const BannerFlex = (props: IBannerFlex) => {
  const {
    banner_color,
    banner_image,

    children,
    isFixed = true,
    ...rest
  } = props;
  return (
    <Flex backgroundColor={banner_color}>
      <Flex
        w={"100%"}
        backgroundPosition={{ lg: "100%", md: "100%", sm: "100%", xs: "120%" }}
        backgroundSize={"contain"}
        backgroundAttachment={isFixed ? "fixed" : "unset"}
        backgroundRepeat={"no-repeat"}
        backgroundImage={banner_image}
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default BannerFlex;
