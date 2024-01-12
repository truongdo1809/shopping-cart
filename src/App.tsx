import { useReducer } from "react";
import "./App.css";
import Header from "./features/cart/Header";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { cartReducer } from "./features/cart/CartReducer";
import ProductList from "./features/cart/ProductList";

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
          title: "Samsung Galaxy S8",
          price: 399.99,
          image: "https://www.course-api.com/images/cart/phone-1.png",
        },
        quantity: 1,
      },
      {
        id: 3,
        product: {
          id: 3,
          title: "Samsung Galaxy S8",
          price: 399.99,
          image: "https://www.course-api.com/images/cart/phone-1.png",
        },
        quantity: 1,
      },
      {
        id: 4,
        product: {
          id: 4,
          title: "Samsung Galaxy S8",
          price: 399.99,
          image: "https://www.course-api.com/images/cart/phone-1.png",
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
  return (
    <main>
      <Header />
      <ProductList products={state.items} />
    </main>
  );
}

export default App;
