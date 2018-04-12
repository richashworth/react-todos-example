import React from 'react';

const TaskItem = (props) => {

  const handleDelete = (task) => {
    console.log('handling delete for '+task);
    props.onDeleteBtn(task);
  }

  return (
    <div>
      {props.taskDesc}
      <button onClick={() => handleDelete(props.task)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
