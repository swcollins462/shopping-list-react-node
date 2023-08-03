import { useState } from 'react';

export default function ShoppingForm(props) {
  const [item, setItem] = useState('');
  const [num, setNum] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(item, num);
  }

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function handleQuantityChange(event) {
    setNum(event.target.value);
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <label htmlFor="item"></label>
      <input
        type="text"
        id="item"
        name="item"
        value={item}
        onChange={handleItemChange}
        required
      />
      <label htmlFor="quantity"></label>
      <input 
        type="number"
        id="quantity"
        name="quantity"
        value={num}
        onChange={handleQuantityChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
