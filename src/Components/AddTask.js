import React from "react";
const { useState } = require("react");


const AddTask = ({ addTaskToList }) => {
    const [taskName, setTaskName] = useState("");
    return <div>
        <h1>To Do List</h1>
        <form>
            <input type="textarea" id="taskName" name="taskName"
                value={taskName} placeholder="Title..."
                onChange={({ target }) => setTaskName(target.value)} />

            <button id="addbtn" type="button" onClick={() => {
                addTaskToList({ name: taskName })
                setTaskName("");
            }}>Add Title</button>
        </form>
    </div>
}

export default AddTask;