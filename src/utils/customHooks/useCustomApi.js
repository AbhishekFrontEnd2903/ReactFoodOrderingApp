import { useState, useEffect } from "react";

const useCustomApi = (ResParam) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    console.log("hhhhhhhhhhh", ResParam);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970021&lng=77.746851&restaurantId=" +
        ResParam
    );
    const menuData = await data.json();
    console.log("menudata", menuData);
    setResInfo(menuData.data);
  };
  return resInfo;
};

export default useCustomApi;
