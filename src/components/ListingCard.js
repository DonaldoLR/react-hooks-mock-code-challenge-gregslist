import React, { useState } from "react";

function ListingCard({
  listing: { id, description, image, location },
  onDelete,
}) {
  const [favorite, setfavorite] = useState(false);
  function deleteHandler() {
    onDelete(id);
  }
  function favoriteHandler() {
    setfavorite(!favorite);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={favoriteHandler}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteHandler}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteHandler}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
