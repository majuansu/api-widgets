import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // Close dropdown when click outside the menu
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
  }, []);

  // Render the dropdown options
  const renderedOptions = options.map((option) => {
    // Filtered out the selected option
    if (option === selected) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="drop-down ui form ">
      <div className="field">
        <label className="label">Select a {label}</label>
        <div
          className={`ui selection dropdown ${open ? "active visible" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="default text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`} ref={ref}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
