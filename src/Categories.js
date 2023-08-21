import React from "react";

const Categories = ({ categories, navigateCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => navigateCategory(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
