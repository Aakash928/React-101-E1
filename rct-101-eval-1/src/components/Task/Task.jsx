import React from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter/Counter";

const Task = ({task, handleUpdateTask,handleRemoveTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  function toggleTaskStatus(){
    handleUpdateTask({
      ...task,
      done: !task.done,
    })
  }
  const updateCount =(newCount)=>{
    if(newCount>0){
      handleUpdateTask({
        ...task,
        count:newCount
      })
    }
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
      onChange={toggleTaskStatus}
      checked={task.done} />
      <div data-cy="task-text"></div>
      <Counter taskId={task.id} count={task.count} updateCount={updateCount} />

      <button data-cy="task-remove-button" onClick={()=>handleRemoveTask(task.Id)}
      title= "Remove item"></button>
    </li>
  );
};

export default Task;
