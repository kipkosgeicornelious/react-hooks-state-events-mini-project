import React from "react";

function Task({ text, category, deletedItem }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deletedItem}>X</button>
    </div>
  );
}

export default Task;