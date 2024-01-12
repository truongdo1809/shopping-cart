import { Cart, CartAction } from "./Cart.types";


export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "add item": {
      return state;
    }

    case "increment quantity": {
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    }

    case "decrement quantity": {
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item
        ),
      };
    }

    case "delete item": {
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    case "clear cart": {
      return { items: [] };
    }

    default: {
      throw new Error(`Invalid action type ${action}`);
    }
  }
};
