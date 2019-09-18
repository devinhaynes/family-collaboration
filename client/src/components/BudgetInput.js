import React from 'react';
import { clearInputs } from './clearInputs';

export const BudgetInput = ({ addItem }) => {
    let newBudget = {};

    const handleSubmit = e => {
        e.preventDefault();
        if (newBudget) {
            addItem({ title: newBudget.title, name: 'Default', amount: 0 })
        }
    }

    const handleChange = e => {
        e.preventDefault();
        newBudget.title = e.target.value;
    }

    return (
        <div className='input-group my-2'>
            <input onChange={handleChange} className='form-control' type="text" placeholder='Enter Budget Category Header' />
            <button onClick={handleSubmit} type='button' className="btn btn-outline-primary rounded-circle"><i className="fas fa-plus"></i></button>
        </div>
    )
}