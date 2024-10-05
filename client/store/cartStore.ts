import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// const { items, total,addItem, removeItem, clearCart } = useCartStore();
// Define the CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the CartState interface
interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            const updatedItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            return {
              items: updatedItems,
              total: state.total + item.price,
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
            total: state.total + item.price,
          };
        });
      },

      removeItem: (id: string) => {
        set((state) => {
          const itemToRemove = state.items.find((i) => i.id === id);

          if (!itemToRemove) return state;

          const updatedItems = state.items.filter((i) => i.id !== id);
          return {
            items: updatedItems,
            total: state.total - itemToRemove.price * itemToRemove.quantity,
          };
        });
      },

      clearCart: () => set(() => ({ items: [], total: 0 })),
    }),
    { name: 'cart-storage' }
  )
);
