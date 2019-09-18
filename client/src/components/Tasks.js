import React, { useState, useEffect } from 'react';
import { TaskItem } from './TaskItem';
import { TaskInput } from './TaskInput';
import axios from 'axios';
import '../styles/mainComponent.css';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const apiUrl = 'http://192.168.1.10:3001/api/tasks'

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setTasks(res.data))
    }, [])

    const addTask = task => {
        const newTask = [task];
        axios.post(apiUrl, { newTask })
            .then(res => console.log(res.body))
        setTasks([...tasks, task]);
    }

    const removeTask = (task) => {
        axios.delete(`${apiUrl}/${task}`, { params: { task: task } })
            .then(res => setTasks(res.data));
    }

    return (
        <div className="Tasks component">
            <table className="table" id="billsTable">
                <thead>
                    <tr className='flex-row'>
                        <th className='col-lg-10'>Task</th>
                        <th className='col-lg-2'>Completed</th>
                        {/* <th>Priority</th>
                        <th>Due Date</th>
                        <th>Remove</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return <TaskItem key={index} index={index} task={task} removeTask={removeTask} />
                    })}
                    <TaskInput addTask={addTask} />
                </tbody>
            </table>
        </div>
    );
}