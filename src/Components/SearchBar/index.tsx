import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { IoSearch } from "react-icons/io5";
interface ISearchBar {
  withIcon?: boolean;
  iconSide?: "left" | "right";
  autoHeight?: boolean;
  inputValue: string;
  variant?: "float" | "fixed";
  default_value?: string;
  shouldAutoFocus?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProduct?: React.Dispatch<React.SetStateAction<string>>;
  searchList?: string[];
  id?: string;
  onSelect?: (value: any) => void;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = (props: ISearchBar) => {
  const {
    iconSide = "right",
    shouldAutoFocus = false,
    autoHeight = false,
    variant = "float",
    id = "search-bar",
    default_value,
    withIcon = true,
    setSelectedProduct,
    setInputValue,
    searchList,
    inputValue,
    onSearch,
    onSelect,
  } = props;

  useEffect(() => {
    const firstItem = document.getElementById(id);
    shouldAutoFocus && firstItem?.focus();
  }, []);

  // useEffect(() => {
  //   setInputValue(default_value ?? "");
  // }, [default_value]);

  useEffect(() => {
    if (variant === "float") {
      const handleClickOutside = (e: MouseEvent) => {
        const searchResults = document.querySelector(
          ".search-results-container"
        );
        if (searchResults && !searchResults.contains(e.target as Node)) {
          setInputValue("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);
  return (
    <Flex
      minW={"40%"}
      position={"relative"}
      zIndex={1}
      h={variant === "float" ? "4rem" : "auto"}
      direction={"column"}
    >
      <Flex
        bg={"gray.200"}
        rounded={"md"}
        p={".6rem 1rem"}
        zIndex={2}
        minH={autoHeight ? "auto" : "4rem"}
        flexDirection={iconSide === "left" ? "row-reverse" : "row"}
        w={"100%"}
        gap={"1rem"}
        position={"relative"}
        alignItems={"center"}
      >
        <Input
          autoComplete="off"
          defaultValue={default_value}
          id={id}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              const firstItem = document.getElementById("search-result-0");
              if (firstItem) {
                firstItem.focus();
              }
            }
          }}
          onChange={(e) => {
            onSearch && onSearch(e);
            setInputValue(e.target.value);
          }}
          h={"100%"}
          _placeholder={{ height: "100%" }}
          variant={"unstyled"}
          fontSize={"lg"}
          placeholder="Search for products..."
        />
        {withIcon && <Icon as={IoSearch} />}
      </Flex>

      {variant === "float" && inputValue?.length >= 1 ? (
        <Flex
          w={"100%"}
          left={0}
          className="search-results-container"
          bottom={"-1rem"}
          transform={"translate(0,100%)"}
          position={"absolute"}
          bg={"#fff"}
          p={"1rem"}
          rounded={"md"}
          zIndex={99}
          onClick={() => {
            setInputValue("");
          }}
          overflow={"scroll"}
          direction={"column"}
          shadow={"0 0 6px 1px rgba(0,0,0,0.1)"}
          maxH={"400px"}
        >
          {searchList?.filter((item) => {
            return item
              ?.toLowerCase()
              .includes(
                inputValue
                  ?.toLowerCase()
                  ?.replaceAll(".", "")
                  ?.replaceAll("/", "")
                  ?.trim()
              );
          })?.length ?? 1 > 0 ? (
            searchList
              ?.filter((item) => {
                return item
                  ?.toLowerCase()
                  .includes(
                    inputValue
                      ?.toLowerCase()
                      ?.replaceAll(".", "")
                      ?.replaceAll("/", "")
                      ?.trim()
                  );
              })
              .map((item, idx) => {
                return (
                  <Text
                    id={`search-result-${idx}`}
                    tabIndex={0}
                    transition={".2s ease"}
                    borderRadius={"md"}
                    _hover={{
                      background: "red.50",
                      outline: "1px solid red",
                    }}
                    _focus={{
                      background: "red.50",
                      outline: "1px solid red",
                    }}
                    cursor={"pointer"}
                    p={".5rem"}
                    variant={"unstyled"}
                    key={idx}
                    w={"100%"}
                    bg={default_value?.includes(item) ? "red.100" : ""}
                    outline={
                      default_value?.includes(item)
                        ? "1px solid red"
                        : "1px solid transparent"
                    }
                    borderBottom={"1px solid rgba(94, 94, 94, 0.1)"}
                    onClick={() => {
                      setSelectedProduct && setSelectedProduct(item);
                      onSelect && onSelect(item);
                      const firstItem = document.getElementById(id);
                      firstItem?.focus();
                      (firstItem as HTMLInputElement).value = item;
                    }}
                    onKeyDown={(e) => {
                      const curFoc = document.activeElement;
                      const curFocID = curFoc?.id
                        ? parseInt(curFoc.id.split("-").pop() || "0")
                        : 0;

                      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                        const nextFocID =
                          e.key === "ArrowDown"
                            ? curFocID + 1
                            : Math.max(curFocID - 1, 0);
                        const nextItem =
                          document.getElementById(
                            `search-result-${nextFocID}`
                          ) || document.getElementById("search-result-0");
                        nextItem?.focus();
                      } else if (e.key === "Enter") {
                        const localPr = curFoc?.innerHTML?.toLowerCase()
                          ? searchList.find(
                              (item) =>
                                item.toLowerCase() ===
                                curFoc?.innerHTML?.toLowerCase()
                            ) ?? ""
                          : "";
                        onSelect && onSelect(localPr);
                        setInputValue("");
                        setSelectedProduct && setSelectedProduct(localPr);
                        const firstItem = document.getElementById(id);
                        firstItem?.focus();
                        (firstItem as HTMLInputElement).value = localPr;
                      }
                    }}
                  >
                    {item}
                  </Text>
                );
              })
          ) : (
            <Text
              tabIndex={0}
              transition={".2s ease"}
              cursor={"pointer"}
              mx={"auto"}
              p={".5rem"}
              variant={"unstyled"}
              textAlign={"center"}
              w={"100%"}
              borderBottom={"1px solid rgba(94, 94, 94, 0.1)"}
            >
              No Result Found !!
            </Text>
          )}
        </Flex>
      ) : (
        variant === "fixed" && (
          <Flex
            w={"100%"}
            left={0}
            className="search-results-container"
            bg={"#fff"}
            p={"1rem"}
            rounded={"md"}
            zIndex={99}
            onClick={() => {
              setInputValue("");
            }}
            overflow={"scroll"}
            direction={"column"}
            maxH={"400px"}
          >
            {searchList?.filter((item) => {
              return item
                ?.toLowerCase()
                .includes(
                  inputValue
                    ?.toLowerCase()
                    ?.replaceAll(".", "")
                    ?.replaceAll("/", "")
                    ?.trim()
                );
            })?.length ?? 1 > 0 ? (
              searchList
                ?.filter((item) => {
                  return item
                    ?.toLowerCase()
                    .includes(
                      inputValue
                        ?.toLowerCase()
                        ?.replaceAll(".", "")
                        ?.replaceAll("/", "")
                        ?.trim()
                    );
                })
                .map((item, idx) => {
                  return (
                    <Text
                      id={`search-result-${idx}`}
                      tabIndex={0}
                      transition={".2s ease"}
                      borderRadius={"md"}
                      _hover={{
                        background: "red.50",
                        outline: "1px solid red",
                      }}
                      _focus={{
                        background: "red.50",
                        outline: "1px solid red",
                      }}
                      cursor={"pointer"}
                      p={".5rem"}
                      variant={"unstyled"}
                      key={idx}
                      w={"100%"}
                      bg={default_value?.includes(item) ? "red.100" : ""}
                      outline={
                        default_value?.includes(item)
                          ? "1px solid red"
                          : "1px solid transparent"
                      }
                      borderBottom={"1px solid rgba(94, 94, 94, 0.1)"}
                      onClick={() => {
                        setSelectedProduct && setSelectedProduct(item);
                        const firstItem = document.getElementById(id);
                        firstItem?.focus();
                        (firstItem as HTMLInputElement).value = item;
                        setInputValue("");
                        onSelect && onSelect(item);
                      }}
                      onKeyDown={(e) => {
                        const curFoc = document.activeElement;
                        const curFocID = curFoc?.id
                          ? parseInt(curFoc.id.split("-").pop() || "0")
                          : 0;

                        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                          const nextFocID =
                            e.key === "ArrowDown"
                              ? curFocID + 1
                              : Math.max(curFocID - 1, 0);
                          const nextItem =
                            document.getElementById(
                              `search-result-${nextFocID}`
                            ) || document.getElementById("search-result-0");
                          nextItem?.focus();
                        } else if (e.key === "Enter") {
                          const localPr = curFoc?.innerHTML?.toLowerCase()
                            ? searchList.find(
                                (item) =>
                                  item.toLowerCase() ===
                                  curFoc?.innerHTML?.toLowerCase()
                              ) ?? ""
                            : "";
                          setInputValue("");
                          onSelect && onSelect(localPr);
                          setSelectedProduct && setSelectedProduct(localPr);
                          const firstItem = document.getElementById(id);
                          firstItem?.focus();
                          (firstItem as HTMLInputElement).value = localPr;
                        }
                      }}
                    >
                      {item}
                    </Text>
                  );
                })
            ) : (
              <Text
                tabIndex={0}
                transition={".2s ease"}
                cursor={"pointer"}
                mx={"auto"}
                p={".5rem"}
                variant={"unstyled"}
                textAlign={"center"}
                w={"100%"}
                borderBottom={"1px solid rgba(94, 94, 94, 0.1)"}
              >
                No Result Found !!
              </Text>
            )}
          </Flex>
        )
      )}
    </Flex>
  );
};

export default SearchBar;
