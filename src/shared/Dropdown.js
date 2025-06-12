import React, { useState } from "react";
import "../styles/Dropdown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options] = useState([
    "Apple", "Banana", "Cherry", "Date", "Elderberry"
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={inputValue}
        onClick={toggleDropdown}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Select a fruit"
        className="dropdown-input"
      />
      {isOpen && (
        <ul className="dropdown-list">
          {filteredOptions.map((option) => (
            <li
              key={option} // Use unique key
              onClick={() => handleOptionClick(option)}
              className="dropdown-option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;