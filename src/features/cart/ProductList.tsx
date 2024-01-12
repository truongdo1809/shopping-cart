import React, { useContext } from "react";
import Product, { Products } from "./Product";
import CartContext from "./CartContext";

type ProductListProps = {
  products: Array<Products>;
};

const ProductList = ({ products }: ProductListProps) => {
  const {clearCart,updatePrice}:any = useContext(CartContext)
  return (
    <div className="section-cart">
      <h1>YOUR BAG</h1>
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}

      <div className="bottom-cart">
        <div className="bottom-cart-item">
          <div className="cart-total">
            <h5>Total</h5>
            <span></span>
          </div>
          <div className="delate-cart">
            <button onClick={clearCart}>Clear cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
