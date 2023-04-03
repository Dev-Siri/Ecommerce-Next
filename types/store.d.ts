export interface StoreItems {
  showCart: boolean;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty(): void;
  decQty(): void;
  onAdd(quantity: number, product: any): Promise<void>;
  toggleCartItemQuantity(id: string, value: "inc" | "dec"): void;
  onRemove(product: any): void;
}
