export type CartItem = {
  id: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  quantity: number;

};
export type Cart = {

  items: CartItem[];
};
export type CartAction =
  | { type: "add item"; payload: { id: number; quantity: 1 } }
  | { type: "increment quantity"; payload: { id: number } }
  | { type: "decrement quantity"; payload: { id: number } }
  | { type: "delete item"; payload: { id: number } }
  | { type: "clear cart" }
  | { type: "update price" };
