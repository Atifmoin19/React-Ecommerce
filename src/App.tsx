import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "Routes";
import { theme } from "Styles";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { navitems } from "Constants";
import { IconType } from "react-icons";

const MyContext = createContext<{
  list: string[];
  navigationList: {
    title: string;
    link: string;
    icon: string | IconType;
    isActive: boolean;
    subMenu: {
      category: string;
      title: string;
      link: string;
      icon: string;
    }[];
  }[];
  countryList: {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
  }[];
  setSelectedCity: React.Dispatch<
    React.SetStateAction<{
      iso2: string;
      iso3: string;
      country: string;
      cities: string[];
    } | null>
  >;
  selectedCity: {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
  } | null;
} | null>(null); // Added null as an argument to fix the error
const App = () => {
  const [selectedCity, setSelectedCity] = useState<{
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
  } | null>(null);
  const [countryList, setCountryList] = useState<
    {
      iso2: string;
      iso3: string;
      country: string;
      cities: string[];
    }[]
  >([]);

  useEffect(() => {
    getCountryList("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountryList = async (url: string) => {
    await axios.get(url).then((resp) => {
      setCountryList(resp.data.data);
    });
  };
  const list = [
    "Essence Mascara Lash Princess",
    "Eyeshadow Palette with Mirror",
    "Powder Canister",
    "Red Lipstick",
    "Red Nail Polish",
    "Calvin Klein CK One",
    "Chanel Coco Noir Eau De",
    "Dior J'adore",
    "Dolce Shine Eau de",
    "Gucci Bloom Eau de",
    "Annibale Colombo Bed",
    "Annibale Colombo Sofa",
    "Bedside Table African Cherry",
    "Knoll Saarinen Executive Conference Chair",
    "Wooden Bathroom Sink With Mirror",
    "Apple",
    "Beef Steak",
    "Cat Food",
    "Chicken Meat",
    "Cooking Oil",
    "Cucumber",
    "Dog Food",
    "Eggs",
    "Fish Steak",
    "Green Bell Pepper",
    "Green Chili Pepper",
    "Honey Jar",
    "Ice Cream",
    "Juice",
    "Kiwi",
  ];

  const [navigationList, setNavigationList] = useState<
    {
      title: string;
      icon: string | IconType;
      isActive: boolean;
      link: string;
      subMenu: {
        category: string;
        title: string;
        link: string;
        icon: string;
      }[];
    }[]
  >([]);
  const values = {
    countryList,
    setSelectedCity,
    selectedCity,
    navigationList,
    list,
  };
  useEffect(() => {
    setNavigationList(navitems);
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <MyContext.Provider value={values}>
        <Router basename="/React-Ecommerce">
          <AppRouter />
        </Router>
      </MyContext.Provider>
    </ChakraProvider>
  );
};

export default App;
export { MyContext };
