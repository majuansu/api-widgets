import React from "react";

const WikiItem = ({ result }) => {
  return (
    <div className="wiki-item item">
      <div className="content">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="header">{result.title}</div>
        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
      </div>
    </div>
  );
};

export default WikiItem;
