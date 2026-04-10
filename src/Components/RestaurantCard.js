import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, locality, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId}></img>
      <h1 className="res-name">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{locality}</h3>
      <h3>
        ⭐ {avgRating} | {costForTwo}
      </h3>
    </div>
  );
};

export default RestaurantCard;
