import React, { useState } from 'react';
import '../styles/Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && isOpen) {
      // Select the first option if needed
      if (options.length > 0) {
        handleOptionClick(options[0]);
      }
    }
  };

  const filteredOptions = options.filter(
    (option) => option.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={inputValue}
        onClick={toggleDropdown}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Select a fruit"
        className="dropdown-input"
      />
      {isOpen && (
        <ul className="dropdown-list">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={inputValue === option}
              tabIndex={0} // Make the list item focusable
              className="dropdown-option"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleOptionClick(option);
                }
              }} // Key listener for accessibility
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
