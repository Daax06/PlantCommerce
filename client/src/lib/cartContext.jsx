import { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (plantId) => {
    setCart(prev => {
      const existing = prev.find(item => item.plantId === plantId);
      if (existing) {
        return prev.map(item =>
          item.plantId === plantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { plantId, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId) => {
    setCart(prev => prev.filter(item => item.plantId !== plantId));
  };

  const updateQuantity = (plantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.plantId === plantId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
