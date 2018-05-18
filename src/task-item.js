import React from 'react';

const TaskItem = (props) => {

  const handleDelete = (task) => {
    console.log('handling delete for '+task);
    props.onDeleteBtn(task);
  }

  return (
      <tr>
        <td>
          {props.taskDesc}
        </td>
        <td>
          <button onClick={() => handleDelete(props.task)}>
            Delete
          </button>
        </td>
      </tr>
  );
};

export default TaskItem;
