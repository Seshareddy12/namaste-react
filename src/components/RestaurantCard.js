import { CloudinaryUrl } from "../utils/Constants";

const RestaurantCard = ({ responseObj }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    responseObj;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo">
        <img src={CloudinaryUrl + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines?.join()}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
