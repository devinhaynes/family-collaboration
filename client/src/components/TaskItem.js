import React from 'react';
import { CompletedButton } from './Buttons';
import '../styles/taskItem.css';

export const TaskItem = ({ task, removeTask }) => {

    return (
        <tr className={task.isCompleted ? 'completed' : ''}>
            <td >{task.task}</td>
            <td className='text-center'><CompletedButton completed={removeTask} obj={task.task} /></td>
        </tr >
    )
}