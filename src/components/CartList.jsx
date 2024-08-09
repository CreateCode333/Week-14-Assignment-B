//This is the CartList component. It displays a list of the cart item components.


import React from 'react';
import CartItem from './CartItem';

function CartList({ items, onUpdate, onRemove }) {
  return (
    <div>
      {items.map(item => (
        <CartItem key={item.id} item={item} onUpdate={onUpdate} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CartList;
