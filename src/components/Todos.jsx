import React, { useState } from "react";

const Todos = (props) => {
    const [tasks, setTasks] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            title: todoTitle,
            isDone: false
        };

        setTasks([...tasks, newTask]);

        setTodoTitle("");
    };

    const handleDelete = (delIdx) => {

        const filteredTasks = tasks.filter((task, idx) => {
            return idx !== delIdx;
        });

        setTasks(filteredTasks);
    };
    const toggleIsComplete = (idx) => {
        const copiedTask = {...tasks[idx]};
        copiedTask.isDone = !copiedTask.isDone;
        tasks[idx] = copiedTask;

        setTasks([...tasks]);
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <input type="text"
                    value={todoTitle}
                    onChange={(event) => {
                        setTodoTitle(event.target.value);
                    }}
                />{" "}
                <button>New Task</button>
            </form>

            {tasks.map((task, idx) => {
                return (
                    <div key={idx}>
                        {task.isDone === true ? (
                            <span style={{color:"green"}}>&#10003; </span>
                        ) : (
                            ""
                        )}
                        <span className={task.isDone ? "text-green" : ""}>{task.title}</span>{" "}
                        <input 
                        type="checkbox" 
                        onChange={(event) => {
                            toggleIsComplete(idx);
                        }} 
                        />
                        <button
                        onClick={(event) => {
                            handleDelete(idx);
                        }}
                        >
                            Eliminate Task
                        </button>
                    </div>
                )
            })}
        </div>
    )

}

export default Todos;