import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItem] = useState([]);

  const addItem = (newItem) => {
    setItem([...items, newItem]);
  };

  const removeItem = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, amount) => {
    setItem(
      items.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + amount;
          const cost = (item.product.price * quantity).toFixed(2);
          return { ...item, quantity, cost };
        }
        return item;
      })
    );
  };

  return (
    <ItemContext.Provider
      value={{ items, addItem, removeItem, updateItemQuantity }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
