import React, { useState } from "react";

function Search({ handleSearch }) {
  const [formData, setformData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(formData);
    setformData("");
  }
  function handleFormChange(e) {
    setformData(e.target.value);
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={handleFormChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
