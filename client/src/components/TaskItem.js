import React from 'react';
import { CompletedButton } from './Buttons';
import '../styles/taskItem.css';

export const TaskItem = ({ task, removeTask }) => {

    const toggleCompleted = (e) => {
        e.preventDefault();
        let row = e.target.parentElement.parentElement;
        row.classList.contains('completed') ? row.classList.remove('completed') : row.classList.add('completed');
    }

    return (
        <tr className={task.isCompleted ? 'completed' : ''}>
            {/* <td ><input type="checkbox" onClick={toggleCompleted} /></td> */}
            <td >{task.task}</td>
            {/* <td>{task.priority}</td>
            <td>{task.dueDate}</td> */}
            {/* <td className="text-center"><RemoveButton task={task.task} remove={removeTask} /></td> */}
            <td className='text-center'><CompletedButton completed={removeTask} obj={task.task} /></td>
        </tr >
    )
}