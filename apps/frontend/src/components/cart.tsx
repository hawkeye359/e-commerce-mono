import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, state) => ({
      items: [],
      addItem: (item) => {
        const existingItem = state().items.find(
          (eitem) => eitem.id === item.id,
        );
        if (existingItem) {
          set((state) => ({
            items: state.items.map((existingItem) =>
              existingItem.id === item.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : existingItem,
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }));
        }
      },
      removeItem: (id) => {
        set((state) => {
          const existingItem = state.items.find((eitem) => eitem.id === id);
          if (existingItem) {
            if (existingItem.quantity > 1) {
              return {
                items: state.items.map((item) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
                ),
              };
            }
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          } else {
            return state;
          }
        });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: 'cart',
    },
  ),
);

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ShoppingCart } from 'lucide-react';

export function Cart() {
  const { items } = useCart();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-1002" align="end">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.quantity}</span>
              <span>
                {item.quantity} x {item.name} - ${item.price}
              </span>
              <Button
                variant="destructive"
                size="xs"
                onClick={() => useCart.getState().removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="flex justify-end">
            <Button
              onClick={() => useCart.getState().clear()}
              className="mt-2"
              variant="outline"
            >
              Clear Cart
            </Button>
          </div>
        )}
        {items.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-sm">Your cart is empty.</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
