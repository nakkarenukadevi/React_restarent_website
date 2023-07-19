import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let [restarent, setrestarent] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3155206&lng=80.44447339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setrestarent(
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }

  return (
    <>
      <h1 style={{ margin: "10px" }}>Best offers for you</h1>
      {restarent.map((restarent) => {
        return <RestaurantCard key={restarent.id} restarent={restarent} />;
      })}
    </>
  );
};
export default Body;
