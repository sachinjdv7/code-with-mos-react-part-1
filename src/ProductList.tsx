import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [productList, setProductList] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching....", category);
    setProductList(["oil", "banana"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
