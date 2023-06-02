import React from "react";

import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();

  return (
    <div className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image, strMeal: title } = item;
            return (
              <div key={idMeal} className="favorites-item">
                <img
                  src={image}
                  alt={title}
                  title={title}
                  className="img favorites-img"
                  onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
