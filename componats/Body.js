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
      json.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <>
      <div>
        <button
          className="top_restarent"
          onClick={() => {
            let fillterresta = restarent.filter(
              (fill) => fill.info.avgRating >= 4
            );

            setrestarent(fillterresta);
          }}
        >
          Top Rating restarent
        </button>
      </div>
      {restarent.map((rest) => {
        return <RestaurantCard key={rest.info.id} rest={rest} />;
      })}
    </>
  );
};
export default Body;
