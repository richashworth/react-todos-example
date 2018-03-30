import React from 'react';
import TaskItem from './task-item';

const TaskList = (props) => {
  const list = props.tasks.map (
    (task, index) => {
      return (
        <TaskItem key={index} task={`${index + 1}. ${task}`}/>
      );
    }
  );
  return (
    <ul>
      {list}
    </ul>
  );
};

export default TaskList;
