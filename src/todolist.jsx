import { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function AddTask() {
    if(newTask!==""){
      setTasks(t=>[...t, newTask]);
      setNewTask("");
    }
   
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => index !== i));
  }
  function movetaskup(index){
   
   if(index>0){   
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
    setTasks(updatedTasks)
  }

  }
  function movetaskdown(index){
    if(index<tasks.length-1){   
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="enter a task...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={AddTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>{" "}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn"  onClick={() => movetaskup(index)}>☝️</button>
            <button className="move-btn"  onClick={() => movetaskdown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
