import { carousel_url } from "../componats/utils/coursel.js";
function RestaurantCard(props) {
  let { id, imageId } = props.restarent;

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img
            className="img"
            src={"https://res.cloudinary.com/swiggy/image/upload/" + imageId}
            style={{ width: "10rem" }}
          />
        </div>
      </div>
    </>
  );
}
export default RestaurantCard;
