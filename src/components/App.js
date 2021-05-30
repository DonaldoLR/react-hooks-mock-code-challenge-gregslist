import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText, setsearchText] = useState("");
  function searchFormHandler(text) {
    setsearchText(text);
  }
  return (
    <div className="app">
      <Header handleSearch={searchFormHandler} />
      <ListingsContainer searchText={searchText} />
    </div>
  );
}

export default App;
