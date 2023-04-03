import { create } from "zustand";

import type { StoreItems } from "@/types";

let foundProduct: any;

const useStore = create<StoreItems>()(set => ({
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  incQty: () => set(state => ({ qty: ++state.qty })),
  decQty: () =>
    set(state => {
      if (--state.qty < 1) return { qty: 1 };

      return { qty: --state.qty };
    }),
  async onAdd(quantity: number, product: any) {
    const { toast } = await import("react-hot-toast");
    const { cartItems, qty } = useStore.getState();

    const checkProductInCart = cartItems.find((item: any) => item._id === product._id);

    set((state: any) => ({
      totalPrice: state.totalPrice + product.price * quantity,
      totalQuantities: state.totalQuantities + quantity,
    }));

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      set({ cartItems: updatedCartItems });
    } else {
      product.quantity = quantity;

      set({ cartItems: [...cartItems, { ...product }] });
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  },
  toggleCartItemQuantity(id: string, value: "inc" | "dec") {
    const { cartItems } = useStore.getState();
    foundProduct = cartItems.find((item: any) => item._id === id);

    const newCartItems = cartItems.filter((item: any) => item._id !== id);

    if (value === "inc")
      useStore.setState((state: any) => ({
        cartItems: [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }],
        totalPrice: state.totalPrice + foundProduct.price,
        totalQuantities: ++state.totalQuantities,
      }));
    else if (value === "dec" && foundProduct.quantity > 1)
      useStore.setState((state: any) => ({
        cartItems: [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }],
        totalPrice: state.totalPrice - foundProduct.price,
        totalQuantities: --state.totalQuantities,
      }));
  },
  onRemove(product: any) {
    const { cartItems } = useStore.getState();

    foundProduct = cartItems.find((item: any) => item._id === product._id);

    const newCartItems = cartItems.filter((item: any) => item._id !== product._id);

    useStore.setState((state: any) => ({
      cartItems: newCartItems,
      totalPrice: state.totalPrice - foundProduct.price * foundProduct.quantity,
      totalQuantities: state.totalQuantities - foundProduct.quantity,
    }));
  },
}));

export default useStore;
