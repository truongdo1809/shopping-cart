import React from "react";
import Product, { Products } from "./Product";

type ProductListProps = {
  products: Array<Products>;
};

const ProductList = ({
  products
}: ProductListProps) => {
  return (
    <div className="section-cart">
      <h1>YOUR BAG</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          item={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
