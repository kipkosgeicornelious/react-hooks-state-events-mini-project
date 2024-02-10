import React from "react";
import Task from "./Task";

function TaskList({ tasks, deletedItem }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          deletedItem={() => deletedItem(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;