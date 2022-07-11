import React, { useEffect, useState } from "react";

const InputSearch = ({ label, onChange }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    onChange(debouncedTerm);
  }, [debouncedTerm]);

  return (
    <div className="input-search ui form">
      <div className="field">
        <label>{label}</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputSearch;
