import {
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import SearchBar from "Components/SearchBar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "App";

const CountryDropDown = () => {
  const context = useContext(MyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handelCityChange = (city: {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
  }) => {
    console.log(city, "selectedProductselectedProduct");
    context?.setSelectedCity(city);
    setFilters("");
    onClose();
  };

  const [cityList, setCityList] = useState<
    {
      iso2: string;
      iso3: string;
      country: string;
      cities: string[];
    }[]
  >([]);

  useEffect(() => {
    context?.countryList && setCityList(context?.countryList);
  }, [context?.countryList]);
  const [filters, setFilters] = useState("");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick
        closeOnEsc
        autoFocus={false}
        // initialFocusRef={ref}
      >
        <ModalOverlay backdropFilter={"blur(2px)"} />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={"1rem"} p={"2rem 1rem"}>
              <Text fontWeight={"bold"}>Choose your Delivery Location</Text>
              <Text fontSize={"sm"}>
                Enter your address and we will specify the offer for your area.
              </Text>
              <Text fontWeight={"bold"} color={"primary.500"}>
                Select City
              </Text>

              <SearchBar
                id="modal_search"
                default_value={context?.selectedCity?.country ?? ""}
                shouldAutoFocus
                variant="fixed"
                onSelect={(city) => {
                  handelCityChange(
                    cityList.filter((item) => {
                      return item.country === city;
                    })[0]
                  );
                }}
                searchList={cityList.map((item) => {
                  return item.country;
                })}
                inputValue={filters}
                setInputValue={setFilters}
                onSearch={(e) => {
                  setFilters(e.target.value);
                }}
                iconSide="left"
              />

              {/* <Flex direction={"column"} maxH={"400px"} overflow={"auto"}>
                {cityList
                  .filter((item) => {
                    return item.country
                      ?.toLowerCase()
                      .includes(filters?.toLowerCase());
                  })
                  .map((item, idx) => {
                    return (
                      <Text
                        transition={".2s ease"}
                        _hover={{
                          color: "primary.500",
                          // fontWeight: "bold",
                          letterSpacing: "1.5px",
                        }}
                        cursor={"pointer"}
                        onClick={() => {
                          handelCityChange(item);
                        }}
                        color={
                          item.country === context?.selectedCity?.country
                            ? "primary.500"
                            : ""
                        }
                        p={".5rem"}
                        key={idx}
                        w={"100%"}
                        fontWeight={
                          item.country === context?.selectedCity?.country
                            ? "bold"
                            : ""
                        }
                        letterSpacing={
                          item.country === context?.selectedCity?.country
                            ? "1.5px"
                            : ""
                        }
                        borderBottom={"1px solid rgba(94, 94, 94, 0.1)"}
                      >
                        {item.country}
                      </Text>
                    );
                  })}
              </Flex> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        direction={"column"}
        color={"gray"}
        p={".6rem 1rem"}
        minW={"180px"}
        border={"1px"}
        minH={"4rem"}
        rounded={"md"}
      >
        <Text fontSize={"xs"}>Your Location</Text>
        <Flex
          color={"primary.500"}
          fontWeight={"bold"}
          onClick={() => {
            onOpen();
          }}
          cursor={"pointer"}
          fontSize={"lg"}
          justifyContent={"space-between"}
        >
          <Text>
            {context?.selectedCity
              ? context?.selectedCity.country
              : "Select Location"}
          </Text>
          <Text>
            <Icon as={MdKeyboardArrowDown} />
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default CountryDropDown;
