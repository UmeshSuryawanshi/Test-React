import RestaurantCard, { withPromotedCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedCard(RestaurantCard);

  useEffect(()=>{ fetchData(); }, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4028691&lng=73.8536683&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterDataWithRating = () => {
    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(filteredList);
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>Looks like you lost the internet connection !!!</h1>);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-2 py-1 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              filterDataWithRating();
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.totalRatingsString === "6.9K+" ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
