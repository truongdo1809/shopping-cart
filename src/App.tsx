import { useReducer } from "react";
import "./App.css";
import Header from "./features/cart/Header";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { cartReducer } from "./features/cart/CartReducer";
import ProductList from "./features/cart/ProductList";
import CartContext from "./features/cart/CartContext";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      {
        id: 1,
        product: {
          id: 1,
          title: "Samsung Galaxy S8",
          price: 399.99,
          image: "https://www.course-api.com/images/cart/phone-1.png",
        },
        quantity: 1,
      },
      {
        id: 2,
        product: {
          id: 2,
          title: "Google Pixel",
          price: 499.99,
          image: "https://www.course-api.com/images/cart/phone-2.png",
        },
        quantity: 1,
      },
      {
        id: 3,
        product: {
          id: 3,
          title: "Xiaomi Redmi Note 2",
          price: 699.99,
          image: "https://www.course-api.com/images/cart/phone-3.png",
        },
        quantity: 1,
      },
      {
        id: 4,
        product: {
          id: 4,
          title: "Samsung Galaxy S7",
          price: 599.99,
          image: "https://www.course-api.com/images/cart/phone-4.png",
        },
        quantity: 1,
      },
    ],
  });
  const incrementQuantity = (id: number) => {
    dispatch({ type: "increment quantity", payload: { id } });
  };

  const decrementQuantity = (id: number) => {
    dispatch({ type: "decrement quantity", payload: { id } });
  };

  const removeById = (id: number) => {
    dispatch({ type: "delete item", payload: { id } });
  };
  const clearCart = ()=>{
    dispatch({type:"clear cart"})
  }
  const updatePrice =() =>{
    dispatch({type:"update price"})
  }
  return (
    <CartContext.Provider
      value={{ incrementQuantity, decrementQuantity, removeById,clearCart ,updatePrice}}
    >
      <main>
        <Header />
        <ProductList products={state.items} />
      </main>
    </CartContext.Provider>
  );
}

export default App;
