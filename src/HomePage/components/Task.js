import React, { useState } from "react";
// import { FaCaretDown } from 'react-icons/fa';
import "./Task.css";

const Task = ({
  name,
  dueDate,
  creator,
  completed,
  timestamp,
  onInputChange,
  index,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={`task-container ${index % 2 === 0 ? "even" : "odd"}`}>
      <div className={`task ${dropdownVisible ? "task-expanded" : ""}`}>
        <div className="task-header">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) =>
              onInputChange(index, "completed", e.target.checked)
            }
            className="task-checkbox"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => onInputChange(index, "name", e.target.value)}
            placeholder="Task Name"
            className="task-name"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => onInputChange(index, "dueDate", e.target.value)}
            className="task-due-date"
          />
          <input
            type="text"
            value={creator}
            onChange={(e) => onInputChange(index, "creator", e.target.value)}
            placeholder="Creator"
            className="task-creator"
          />
          <div className="timestamp-container">
            <p className="task-timestamp">
              {new Date(timestamp).toLocaleTimeString()}
            </p>
          </div>
          {/* <FaCaretDown
            onClick={toggleDropdown}
            className={`caret-icon ${
              index % 2 === 0 ? "even-caret" : "odd-caret"
            }`}
          /> */}
        </div>
        {dropdownVisible && (
          <div className="task-dropdown">
            <input
              type="text"
              placeholder="Viewer Name"
              className="viewer-name"
            />
            <textarea placeholder="Comments" className="comments"></textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
