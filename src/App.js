
import './App.css';
import React from 'react';
import ItemsList from './components/ItemsList';

const propsValues = {
  title: "Список смартфонов",
  items: [
          "Samsung Galaxy Note20", 
          "Apple iPhone 12 Pro", 
          "Google Pixel 5", 
          "Huawei P40 Pro", 
          "OnePlus 8 Pro", 
          "Asus Zenfone 7 Pro"
  ]
};

function App() {
  return (
    <div className="App">
      <h1>l7_t7, задание 3: список и поиск</h1>
      <ItemsList data={propsValues} />
    </div>
  );
}

export default App;
