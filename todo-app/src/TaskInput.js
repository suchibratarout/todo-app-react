import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <input type="text" value={task} onChange={handleInputChange} placeholder="Enter task" />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
