import React, { useContext } from "react";
import "./FoodDisplay.css";
import StoreContext from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(food_list[1]);
  console.log(typeof food_list);
  console.log(`Category: ${category}`);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <ul>
        {food_list
          .filter((food) => food.category === category)
          .map((food, index) => {
            return <li key={index}>{food.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default FoodDisplay;
