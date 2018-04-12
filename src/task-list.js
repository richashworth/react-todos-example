import React from 'react';
import TaskItem from './task-item';

const TaskList = (props) => {

  const list = props.tasks.map (
    (task, index) => {
      return (
      <div>
        <TaskItem
          key={index}
          task={task}
          taskDesc={`${index + 1}. ${task}`}
          onDeleteBtn={props.onDeleteBtn}/>
      </div>
      );
    }
  )

  return (
    <ul>
      {list}
    </ul>
  );
}

export default TaskList;
