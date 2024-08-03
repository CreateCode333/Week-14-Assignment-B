



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
