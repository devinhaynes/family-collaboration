import React from 'react';
import { addDate } from './Bills';
import { clearInputs } from './clearInputs';

export const TaskInput = ({ addTask }) => {
    let newTask = {};

    const handleSubmit = e => {
        e.preventDefault();
        if (!newTask) return;
        addTask(newTask);
        clearInputs('task-input');
    }

    const handleChange = e => {
        let el = e.target.name;
        switch (el) {
            case 'task':
                newTask.newTask = e.target.value;
                break;
            case 'priority':
                newTask.priority = e.target.value;
                break;
            case 'dueDate':
                newTask.dueDate = addDate(new Date(e.target.value));
                break;
            default:
                break;
        }
    }

    return (
        <tr>
            <td>
                <input onChange={handleChange} className="form-control task-input" type="text" name="task" placeholder="Enter new task..." />
            </td>
            <td className="text-center"><button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-circle"><i className="fas fa-plus"></i></button></td>
        </tr >
    )
}