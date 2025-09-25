import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { RESTAURANT_IMG_CDN } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   console.log("resinfo", resInfo);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970021&lng=77.746851&restaurantId=62900&catalog_qa=undefined&submitAction=ENTER"
    );
    const menuData = await data.json();
    console.log("menudata", menuData);
    setResInfo(menuData.data);
  };
  if (resInfo == null) return <ShimmerUi />;
  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
  } = resInfo?.cards?.[2]?.card?.card?.info;
  console.log("qqqqqqqqqq", resInfo?.cards?.[2]?.card?.card?.info);
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("menuItems", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <img
        alt="res-logo"
        style={{ height: "400px", width: "400px" }}
        src={RESTAURANT_IMG_CDN + cloudinaryImageId}
      ></img>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating: {avgRatingString}</h3>
      <h2>Menu</h2>
      <ul style={{ paddingLeft: "0px" }}>
        {itemCards.map((each) => (
          <div key={each.card.info.id}>
            <img
              style={{ height: "100px", width: "100px" }}
              src={RESTAURANT_IMG_CDN + each.card.info.imageId}
            ></img>
            <li style={{ listStyle: "none" }}>{each.card.info.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
