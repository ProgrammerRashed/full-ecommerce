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
  addQuantity: (item: CartItem) => void;
  removeItem: (id: string) => void;
  removeQuantity: (id: string) => void;
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
      addQuantity: (item: CartItem) => {
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

      removeQuantity: (id: string) => {
        set((state) => {
          const itemToUpdate = state.items.find((i) => i.id === id);
      
          if (!itemToUpdate) return state; // If item is not found, return current state
      
          // If item's quantity is greater than 1, reduce its quantity by 1
          if (itemToUpdate.quantity > 1) {
            const updatedItems = state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            );
            return {
              items: updatedItems,
              total: state.total - itemToUpdate.price,
            };
          }
      
          // If item's quantity is 1, remove it from the cart
          const updatedItems = state.items.filter((i) => i.id !== id);
          return {
            items: updatedItems,
            total: state.total - itemToUpdate.price,
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
