import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WikiList from "./WikiList";
import wikipedia from "../apis/wikipedia";

const Wikipedia = () => {
  const [results, setResults] = useState([]);

  // Set a default search term for API
  const defaultTerm = "nature";
  useEffect(() => {
    searchTerm(defaultTerm);
  }, []);

  // Get results from API
  const searchTerm = async (term) => {
    const res = await wikipedia.get("/w/api.php", {
      params: { srsearch: term },
    });

    setResults(res.data.query.search);
  };

  return (
    <div className="wikipedia ui container">
      <SearchBar label="Search a term" onSubmit={searchTerm} />
      <WikiList results={results} />
    </div>
  );
};

export default Wikipedia;
