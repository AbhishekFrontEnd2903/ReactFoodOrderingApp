import React from "react";
import { RESTAURANT_IMG_CDN } from "../utils/constants";
const RestaurantCard = (resData) => {
  // console.log("resdata", resData);

  return (
    <div
      className="res-card"
      style={{ backgroundColor: "rgb(242, 241, 241)", margin: "5px" }}
    >
      <img
        className="res-logo"
        src={RESTAURANT_IMG_CDN + resData.resData.info.cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3>{resData.resData.info.name}</h3>
      <p>Rating:{resData.resData.info.avgRatingString}</p>
      <p className="cuisineText">
        Cuisine:{resData.resData.info.cuisines.join(",")}{" "}
      </p>
      <p>Cost:{resData.resData.info.costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
