const { useState } = require("react")

const AddTask = (addTaskToList) => {
    const [taskName, setTaskName] = useState("");
    return <div>
        <input name="taskName"
            value={taskName} placeholder="Title..."
            onChange={({ target }) => setTaskName(target.value)} />

        <button type="button" onClick={() => {
            addTaskToList({ name: taskName })
            setTaskName("");
        }}>Add Title</button>
    </div>
}

export default AddTask;