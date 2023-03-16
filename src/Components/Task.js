import React from "react";

const Task = ({task}) => {
const [style, setStyle] = React.useState({});
    return <div id="taskInfo" style={style}>
        <p>{task.name} </p>
        <button id="donebtn" type="button" onClick={() => setStyle({ textDecoration: 'line-through' })}>Mark As Done</button>
    </div>
}

export default Task;