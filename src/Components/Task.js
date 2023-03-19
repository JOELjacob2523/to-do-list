import React from "react";

const Task = ({task}) => {
const [style, setStyle] = React.useState({});
    return ( 
        <form id="taskInfo">
    <div>
        <p style={style}>{task.name} 
        <button id="donebtn" type="button" onClick={() => 
        setStyle({ textDecoration: 'line-through' })}>Mark As Done</button>
        </p>
    </div>
    </form>
    );
}

export default Task;