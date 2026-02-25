import { useState } from "react";
function TodoApp(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if(task.trim() === '') return;
        setTasks([...tasks,task]);
        setTask('');
    };

        return (
            <div className="todo-container">
                <h2 title="todo-title">To Do App</h2>
                <input className="input-box" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
            
                <button className="todo-add-btn" onClick={addTask}>Add</button>
                <ul className="to-lists">
                    {tasks.map((t,index) =>(
                        <li  className="todo-task-item" key={index}>{t}</li>
                    ))}
                </ul>
            </div>
        )
    

}

export default TodoApp;