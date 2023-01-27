import React from "react";

function Search({searchFilter}) {
  return (
    <form className="searchbar" class="relative text-gray-600 focus-within:text-gray-400" >
      <input
        type="text"
        id="search"
        placeholder="Search by name"
        onChange={searchFilter}
      />
      <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">🔍</button>
    </form>
  );
}

export default Search;
