import React from 'react';
import { addDate } from './Bills';
import { clearInputs } from './clearInputs';

export const TaskInput = ({ addTask }) => {
    let newTask = {
        'isCompleted': false
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!newTask) return;
        addTask(newTask);
        clearInputs();
    }

    const handleChange = e => {
        let el = e.target.name;
        switch (el) {
            case 'task':
                newTask.task = e.target.value;
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
            {/* <td></td> */}
            <td>
                <input onChange={handleChange} className="form-control" type="text" name="task" placeholder="Enter new task..." />
            </td>
            {/* <td>
                <input onChange={handleChange} className="form-control" type="number" name="priority" placeholder="Assign priority level" />
            </td>
            <td>
                <input onChange={handleChange} className="form-control" type="date" name="dueDate" />
            </td> */}
            <td className="text-center"><button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-circle"><i className="fas fa-plus"></i></button></td>
        </tr >
    )
}