//Below is a functional React componenet called CartItem. It is used to
//display the items in my shopping cart. It allows me to remove and update my cart.
//The props are item, onUpdate, and onRemove. They are passed into the component.
//onUpdate is a function that updates the item's quantity; onRemove is a function that
//removes the item in a cart.



function CartItem({ item, onUpdate, onRemove }) {
  const handleUpdate = () => {
    const newQuantity = prompt('Enter new quantity:', item.quantity);
    if (newQuantity) {
      onUpdate(item.id, parseInt(newQuantity, 10));
    }
  };

  return (
    <div>
      <span>{item.name} - ${item.price} x {item.quantity}</span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
