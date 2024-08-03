// this is the App.tsx file it is where the Shopping Cart App is assembled. 

import React, { useState } from 'react';
import CartForm from './CartForm';
import CartList from './CartList';
import { CartItem } from '../types/cart.d';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    setCartItems([...cartItems, { ...item, id: cartItems.length + 1 }]);
  };

  const updateItem = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Tina's Shopping Cart</h1>
      <CartForm onAdd={addItem} />
      <CartList items={cartItems} onUpdate={updateItem} onRemove={removeItem} />
    </div>
  );
};

export default App;
