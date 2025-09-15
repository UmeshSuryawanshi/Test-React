import { useContext } from "react";
import { RES_CARD_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { info } = props.resData;
  //const data = props.resData;
  //console.log("resData : " + JSON.stringify(data));
  const { name, cuisines, avgRating, costForTwo, sla } = info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={RES_CARD_LOGO + info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ✨</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-3 p-2 rounded-lg">
          Popular
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
