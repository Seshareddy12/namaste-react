import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANT_MENU_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(FETCH_RESTAURANT_MENU_URL + id);
      const json = await data.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    data?.data?.cards[2]?.card?.card?.info;
  const menuItems =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join()} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {menuItems.map((menuItem) => {
          const { id, name, price } = menuItem?.card?.info;
          return (
            <li key={id}>
              {name} - Rs. {price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
