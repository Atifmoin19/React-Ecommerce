import { MdOutlineBakeryDining } from "react-icons/md";
import { TbMeat } from "react-icons/tb";

export const navitems = [
  {
    title: "Home",
    icon: "",
    isActive: true,
    link: "",
    subMenu: [
      { category: "", title: "Home 1", icon: "", link: "/Home_1" },
      { category: "", title: "Home 2", icon: "", link: "/Home_2" },
      { category: "", title: "Home 3", icon: "", link: "/Home_3" },
      { category: "", title: "Home 4", icon: "", link: "/Home_4" },
    ],
  },
  {
    title: "Shop",
    icon: "",
    link: "/shop",
    isActive: false,
    subMenu: [
      {
        category: "Shop Lists",
        title: "Shop Default",
        icon: "",
        link: "/shop-lists/shop-default",
      },
      {
        category: "Shop Lists",
        title: "Shop Right Sidebar",
        icon: "",
        link: "/shop-lists/shop-right-sidebar",
      },
      {
        category: "Shop Lists",
        title: "Shop Wide",
        icon: "",
        link: "/shop-lists/shop-wide",
      },
      {
        category: "Shop Lists",
        title: "List Left Sidebar",
        icon: "",
        link: "/shop-lists/list-left-sidebar",
      },
      {
        category: "Shop Lists",
        title: "Load More Button",
        icon: "",
        link: "/shop-lists/load-more-button",
      },
      {
        category: "Shop Lists",
        title: "Infinite Scrolling",
        icon: "",
        link: "/shop-lists/infinite-scrolling",
      },
      {
        category: "Product Detail",
        title: "Product Default",
        icon: "",
        link: "/product-detail/product-default",
      },
      {
        category: "Product Detail",
        title: "Product Variable",
        icon: "",
        link: "/product-detail/product-variable",
      },
      {
        category: "Product Detail",
        title: "Product Grouped",
        icon: "",
        link: "/product-detail/product-grouped",
      },
      {
        category: "Product Detail",
        title: "Product External",
        icon: "",
        link: "/product-detail/product-external",
      },
      {
        category: "Product Detail",
        title: "Product Downloadable",
        icon: "",
        link: "/product-detail/product-downloadable",
      },
      {
        category: "Product Detail",
        title: "Product With Video",
        icon: "",
        link: "/product-detail/product-with-video",
      },
      {
        category: "Product Types",
        title: "Single Type 1",
        icon: "",
        link: "/product-types/single-type-1",
      },
      {
        category: "Product Types",
        title: "Single Type 2",
        icon: "",
        link: "/product-types/single-type-2",
      },
      {
        category: "Product Types",
        title: "Single Type 3",
        icon: "",
        link: "/product-types/single-type-3",
      },
      {
        category: "Product Types",
        title: "Single Type 4",
        icon: "",
        link: "/product-types/single-type-4",
      },
      {
        category: "Thumbnails",
        title: "Thumbnails Left",
        icon: "",
        link: "/thumbnails/thumbnails-left",
      },
      {
        category: "Thumbnails",
        title: "Zoom Image",
        icon: "",
        link: "/thumbnails/zoom-image",
      },
      { category: "Shop Pages", title: "Cart", icon: "", link: "/pages/cart" },
      {
        category: "Shop Pages",
        title: "Checkout",
        icon: "",
        link: "/pages/checkout",
      },
      {
        category: "Shop Pages",
        title: "My account",
        icon: "",
        link: "/pages/my-account",
      },
      {
        category: "Shop Pages",
        title: "Wishlist",
        icon: "",
        link: "/pages/wishlist",
      },
      {
        category: "Shop Pages",
        title: "Order Tracking",
        icon: "",
        link: "/pages/order-tracking",
      },
      {
        category: "Shop Pages",
        title: "Order on WhatsApp",
        icon: "",
        link: "/pages/order-on-whatsapp",
      },
      {
        category: "Shop Layouts",
        title: "Two Columns",
        icon: "",
        link: "/layouts/two-columns",
      },
      {
        category: "Shop Layouts",
        title: "Three Columns",
        icon: "",
        link: "/layouts/three-columns",
      },
      {
        category: "Shop Layouts",
        title: "Three Columns Wide",
        icon: "",
        link: "/layouts/three-columns-wide",
      },
      {
        category: "Shop Layouts",
        title: "Four Columns",
        icon: "",
        link: "/layouts/four-columns",
      },
      {
        category: "Shop Layouts",
        title: "Four Columns Wide",
        icon: "",
        link: "/layouts/four-columns-wide",
      },
      {
        category: "Shop Layouts",
        title: "Five Columns wide",
        icon: "",
        link: "/layouts/five-columns-wide",
      },
    ],
  },
  {
    title: "Meat&SeeFood",
    icon: TbMeat,
    isActive: false,
    link: "/meat&seeFood",
    subMenu: [
      { category: "", title: "Fresh Cuts", icon: "", link: "/fresh-cuts" },
      {
        category: "",
        title: "Seafood Delights",
        icon: "",
        link: "/seafood-delights",
      },
      {
        category: "",
        title: "Grill Masters",
        icon: "",
        link: "/grill-masters",
      },
      {
        category: "",
        title: "Butcher's Choice",
        icon: "",
        link: "/butchers-choice",
      },
    ],
  },
  {
    title: "Bakery",
    icon: MdOutlineBakeryDining,
    isActive: false,
    link: "/Bakery",
    subMenu: [
      { category: "", title: "Fresh Breads", icon: "", link: "/fresh-breads" },
      {
        category: "",
        title: "Pastry Delights",
        icon: "",
        link: "/pastry-delights",
      },
      {
        category: "",
        title: "Cakes & Treats",
        icon: "",
        link: "/cakes-treats",
      },
      {
        category: "",
        title: "Artisan Bakes",
        icon: "",
        link: "/artisan-bakes",
      },
    ],
  },
  {
    title: "Blog",
    icon: "",
    isActive: false,
    link: "/Blog",
    subMenu: [
      {
        category: "",
        title: "Latest Trends",
        icon: "",
        link: "/latest-trends",
      },
      {
        category: "",
        title: "Healthy Recipes",
        icon: "",
        link: "/healthy-recipes",
      },
      { category: "", title: "Cooking Tips", icon: "", link: "/cooking-tips" },
      { category: "", title: "Food Reviews", icon: "", link: "/food-reviews" },
    ],
  },
  {
    title: "Contact Us",
    icon: "",
    isActive: false,
    link: "/contact-us",
    subMenu: [],
  },
];
