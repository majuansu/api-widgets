import React from "react";
import WikiItem from "./WikiItem";

const WikiList = ({ results }) => {
  const renderedItems = results.map((result) => {
    return <WikiItem key={result.pageid} result={result} />;
  });

  return <div className="wiki-list ui celled list">{renderedItems}</div>;
};

export default WikiList;
