import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          onChange={handleChange}
          value={text}
          placeholder="Type favorite meal"
        />
        <button type="submit" className="btn">
          search
        </button>
        <button className="btn btn-hipster" onClick={handleRandomMeal}>
          surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
