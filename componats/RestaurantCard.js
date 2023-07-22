import { img_url } from "./utils/constant.js";
import { Image, Shimmer } from "react-shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard(props) {
  console.log(props.rest);
  let {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
  } = props.rest.info;

  return (
    <>
      <div className="card">
        <img
          src={img_url + cloudinaryImageId}
          className="card-img-top"
          alt="..."
        />

        <h4>{name}</h4>

        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
        <h4>
          <FontAwesomeIcon icon={faStar} className="star" />
          {avgRating}
        </h4>
      </div>
    </>
  );
}
export default RestaurantCard;
