import React, { useState, useEffect } from "react";
import searchIcon from "../assets/icon-search.png";

export const Characters = ({ charactersData }) => {
  charactersData.sort((a, b) => a.name.localeCompare(b.name));
  const charactersPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);

 
  useEffect(() => {
    const filtered = charactersData.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCharacters(filtered);

    setCurrentPage(1);
  }, [searchText, charactersData]);


  useEffect(() => {
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = filteredCharacters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
    );
    setDisplayedCharacters(currentCharacters);
  }, [currentPage, filteredCharacters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="pagination">
        <div className="pages">
          {currentPage > 1 && (
            <button
              className="button"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
           {filteredCharacters.length > charactersPerPage * currentPage &&(
            <button
              className="button"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
        <div className="search">
          <input
            className="input-search"
            placeholder="Search a character..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img className="searchIcon" src={searchIcon} alt="Search" />
        </div>
      </div>
      <div className="container">
        {displayedCharacters.map((item, index) => (
          <div key={index}>
            <div className="card">
              <img className="image-card" src={item.image} alt={item.name} />
              <p className="name">{item.name}</p>
            </div>
            <div className="info">
              <p>Gender: {item.gender}</p>
              <p>Planet: {item.homeworld ? item.homeworld : "unknown"}</p>
              <p>Species: {item.species}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
