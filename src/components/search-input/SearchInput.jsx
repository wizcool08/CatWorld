import React from "react";
import "./search-input.styles.css";

const SearchInput = ({ handleSearchChange, placeholder }) => {
  const searchChange = e => {
    handleSearchChange(e.target.value);
  };
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchInput;
