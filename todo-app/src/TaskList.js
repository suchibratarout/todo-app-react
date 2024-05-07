import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (index) => {
        dispatch(deleteTask(index));
    };

    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div key={index} className="task-item">
                    <span>{task}</span>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;