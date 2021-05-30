import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchText }) {
  const [listings, setListings] = useState([]);
  const BASE_URL = `http://localhost:6001`;
  useEffect(() => {
    fetch(`${BASE_URL}/listings`)
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);
  function handleDelete(id) {
    fetch(`${BASE_URL}/listings/${id}`, {
      method: `DELETE`,
    })
      .then((r) => r.json())
      .then(() => {
        setListings((prevState) => {
          return prevState.filter((listing) => listing.id !== id);
        });
      });
  }
  const visibleListings = listings.filter((item) => {
    if (searchText === "") return true;
    console.log(item.description.toLowerCase(), searchText.toLowerCase());
    return item.description.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <main>
      <ul className="cards">
        {visibleListings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              listing={listing}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
