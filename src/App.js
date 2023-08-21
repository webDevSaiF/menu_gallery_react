import "./styles.css";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const uniqueCategories = [
  "all",
  ...new Set(items.map((item) => item.category))
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  const navigateCategory = (category) => {
    if (category === "all") return setMenuItems(items);
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main className="menu section">
      <section>
        <div className="title">
          <h2>Our Gallery Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          navigateCategory={navigateCategory}
          categories={categories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
