import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <h2 className="title">
          our menu
          <div className="underline"></div>
        </h2>
      </section>
      <Categories filterItems={filterItems} categories={categories} setCategories={setCategories}/>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
