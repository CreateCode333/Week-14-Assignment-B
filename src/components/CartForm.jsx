//THis is the CartForm component - it allows me to add new items to the cart. 
//This is where the form is created and can be updated with the number of items
//in my cart. 

import React, { useState } from 'react';
//Below is the functional component CartForm  with  onAdd as a prop that the component
//recieves. The useState is a React Hook that will allow me to add state to my functional
//component. The state values are name, price, and quantity. 
//The CartForm component uses the 'useState' hook to manae the state for name, price, and quantity. 
//It allows the component  to keep track of the values entered into the form fields. 

function CartForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && quantity) {
      onAdd({ name, price: parseFloat(price), quantity: parseInt(quantity, 10) });
      setName('');
      setPrice('');
      setQuantity('');
    }
  };
//the handlesubmit function handles the form submission in the code
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default CartForm;
