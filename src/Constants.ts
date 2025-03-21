import { MdOutlineBakeryDining } from "react-icons/md";
import { TbMeat } from "react-icons/tb";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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

export const sliderSettingsMain = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    clickable: true,
  },
  autoplay: true,
  modules: [Pagination, Autoplay],
};
export const sliderSettingsJr = {
  slidesPerView: 1,
  breakpoints: {
    455: {
      slidesPerView: 2,
    },
    860: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  },
  // slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  navigation: false,
  modules: [Navigation],
};

export const BannerData = [
  {
    bannerImage:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg",
    bannerTitle: "Specialist in the grocery store",
    bannerDescription: "Only this week. Don’t miss...",
    offer: "30",
    price: 29.99,
    redirectionUrl: "/summer-sale",
  },
  {
    bannerImage:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg",
    bannerTitle: "Feed your family the best",
    bannerDescription: "Only this week. Don’t miss...",
    offer: "20",
    price: 49.99,
    redirectionUrl: "/winter-collection",
  },
  {
    bannerImage:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg",
    bannerTitle: "Grocery full of inspiration",
    bannerDescription: "Only this week. Don’t miss...",
    offer: "15",
    price: 19.99,
    redirectionUrl: "/spring-specials",
  },
];

export const BannerDataVerticle = [
  {
    bannerImage:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg",
    bannerTitle: "Roats Burger",
    bannerSubTitle: "Special Organic",
    bannerDescription: "Bacola Natural Foods",
    offer: "30",
    price: 29.99,
    redirectionUrl: "/summer-sale",
  },
  {
    bannerImage:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg",
    bannerTitle: "Every Hour",
    bannerSubTitle: "Freshest Products",
    bannerDescription: "Best bakery Products",
    offer: "20",
    price: 49.99,
    redirectionUrl: "/winter-collection",
  },
];

export const product_list = [
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
      "https://example.com/images/apple2.jpg",
    ],
    discount: 0,
    title: "Fresh Apples",
    isInStock: true,
    rating: 4.5,
    price: 2.99,
    reviews: 150,
    item_code: "GROC001",
    product_description: "Crisp and juicy fresh apples, perfect for snacking.",
    quantity: 100,
    category: "Fruits",
    tags: ["organic", "fresh", "healthy"],
    product_full_description: [
      "Our fresh apples are sourced from local farms.",
      "They are perfect for salads, baking, or just eating on their own.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
      "",
    ],
    discount: 5,
    title: "Whole Wheat Bread",
    isInStock: true,
    rating: 4.7,
    price: 3.49,
    reviews: 200,
    item_code: "GROC002",
    product_description: "Nutritious whole wheat bread, great for sandwiches.",
    quantity: 50,
    category: "Bakery",
    tags: ["whole wheat", "fresh", "baked"],
    product_full_description: [
      "Made with 100% whole wheat flour.",
      "Perfect for a healthy breakfast or lunch.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg",
    ],
    discount: 0,
    title: "Organic Milk",
    isInStock: true,
    rating: 4.8,
    price: 1.99,
    reviews: 300,
    item_code: "GROC003",
    product_description: "Fresh organic milk from grass-fed cows.",
    quantity: 200,
    category: "Dairy",
    tags: ["organic", "dairy", "fresh"],
    product_full_description: [
      "Our organic milk is free from hormones and antibiotics.",
      "Rich in calcium and vitamins.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
    ],
    discount: 15,
    title: "Cheddar Cheese",
    isInStock: true,
    rating: 4.6,
    price: 4.99,
    reviews: 180,
    item_code: "GROC004",
    product_description: "Rich and creamy cheddar cheese.",
    quantity: 75,
    category: "Dairy",
    tags: ["cheese", "dairy", "snack"],
    product_full_description: [
      "Perfect for sandwiches, burgers, or just snacking.",
      "Aged for a rich flavor.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg",
      "https://example.com/images/banana2.jpg",
    ],
    discount: 5,
    title: "Bananas",
    isInStock: true,
    rating: 4.2,
    price: 0.99,
    reviews: 250,
    item_code: "GROC005",
    product_description: "Sweet and ripe bananas.",
    quantity: 150,
    category: "Fruits",
    tags: ["organic", "fresh", "snack"],
    product_full_description: [
      "Great for smoothies, baking, or eating on the go.",
      "High in potassium and vitamins.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
      "https://example.com/images/chicken2.jpg",
    ],
    discount: 20,
    title: "Organic Chicken Breast",
    isInStock: true,
    rating: 4.9,
    price: 9.99,
    reviews: 100,
    item_code: "GROC006",
    product_description: "Tender and juicy organic chicken breast.",
    quantity: 80,
    category: "Meat",
    tags: ["organic", "protein", "fresh"],
    product_full_description: [
      "Perfect for grilling, baking, or stir-frying.",
      "Sourced from free-range farms.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
      "https://example.com/images/olive_oil2.jpg",
    ],
    discount: 10,
    title: "Extra Virgin Olive Oil",
    isInStock: true,
    rating: 4.8,
    price: 6.99,
    reviews: 220,
    item_code: "GROC007",
    product_description: "High-quality extra virgin olive oil.",
    quantity: 60,
    category: "Condiments",
    tags: ["organic", "healthy", "cooking"],
    product_full_description: [
      "Ideal for dressings, marinades, and cooking.",
      "Rich in antioxidants and healthy fats.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg",
      "https://example.com/images/yogurt2.jpg",
    ],
    discount: 0,
    title: "Greek Yogurt",
    isInStock: true,
    rating: 4.7,
    price: 3.49,
    reviews: 150,
    item_code: "GROC008",
    product_description: "Creamy and delicious Greek yogurt.",
    quantity: 120,
    category: "Dairy",
    tags: ["healthy", "snack", "protein"],
    product_full_description: [
      "Great for breakfast or as a snack.",
      "High in protein and probiotics.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg",
      "https://example.com/images/coffee2.jpg",
    ],
    discount: 15,
    title: "Organic Coffee",
    isInStock: true,
    rating: 4.9,
    price: 8.99,
    reviews: 300,
    item_code: "GROC009",
    product_description: "Rich and aromatic organic coffee.",
    quantity: 90,
    category: "Beverages",
    tags: ["organic", "coffee", "beverage"],
    product_full_description: [
      "Perfect for your morning brew.",
      "Sourced from fair-trade farms.",
    ],
  },
  {
    product_images: [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg",
      "https://example.com/images/tea2.jpg",
    ],
    discount: 10,
    title: "Green Tea",
    isInStock: true,
    rating: 4.5,
    price: 2.49,
    reviews: 180,
    item_code: "GROC010",
    product_description: "Refreshing and healthy green tea.",
    quantity: 200,
    category: "Beverages",
    tags: ["organic", "tea", "beverage"],
    product_full_description: [
      "Rich in antioxidants and great for health.",
      "Perfect for any time of the day.",
    ],
  },
];
