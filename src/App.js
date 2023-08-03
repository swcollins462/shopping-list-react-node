import './App.css';
import { useState, useEffect } from 'react';
import ShoppingForm from './components/ShoppingForm/ShoppingForm';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const loadData = () => {
    fetch('https://n6fvq5-8080.csb.app/api/items')
      .then(x => x.json())
      .then(setShoppingList);
  };

  useEffect(loadData, []);

  const addItem = (item, quantity) => {
    fetch('https://n6fvq5-8080.csb.app/api/items/new', {
      method: 'POST',
      body: JSON.stringify({
        item,
        quantity
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'cors'
    })
      .then(x => x.json())
      .then(loadData);
  }

  const deleteItem = (id) => {
    fetch('https://n6fvq5-8080.csb.app/api/items/' + id, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'cors',
    })
      .then((x) => x.json())
      .then(loadData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <main>
        <ShoppingForm addItem={addItem} />
        <ShoppingList items={shoppingList} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
