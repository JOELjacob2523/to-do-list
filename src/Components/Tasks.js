import Task from "./Task"

const Tasks = ({taskList}) => {
    return <div>
        {taskList.map((task, index) => {
            return <Task key={index} task={task} />
        })}
    </div>
}

export default Tasks