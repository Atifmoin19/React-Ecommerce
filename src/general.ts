import { product_list } from "Constants";

const getProductData = (title: string) => {
  const filter_prod = product_list.filter((item) => {
    return (
      item.title?.toLowerCase() === title?.toLowerCase()?.replaceAll("-", " ")
    );
  });
  return filter_prod.length ? filter_prod[0] : null;
};

export { getProductData };
