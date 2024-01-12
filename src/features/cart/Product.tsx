import React, { useContext } from "react";
import CartContext from "./CartContext";
export type Products = {
  id: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  quantity: number;
};
export type ProductItem = {
  item: Products;
};
const Product = ({ item }: ProductItem) => {
  const { incrementQuantity, decrementQuantity, removeById }: any =
    useContext(CartContext);
  return (
    <>
      <div className="cart" key={item.id}>
        <div className="cart-item">
          <img src={item.product.image} alt={item.product.title} />
          <div className="product-info">
            <h2>{item.product.title}</h2>
            <span>${item.product.price}</span>
            <p onClick={() => removeById(item.id)}>remove</p>
          </div>
          <div className="product-icon">
            <svg
              onClick={() => incrementQuantity(item.id)}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="amount-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
            </svg>
            <span className="product-quantity">{item.quantity}</span>
            <svg
              onClick={() => decrementQuantity(item.id)}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
