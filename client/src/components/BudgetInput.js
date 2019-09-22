import React, { useState, useRef } from 'react';
import { clearInputs } from './clearInputs';

import { BudgetNameInput } from './BudgetNameInput';
import { BudgetAmountInput } from './BudgetAmountInput';
import { BudgetTitleInput } from './BudgetTitleInput';

export const BudgetInput = ({ addItem }) => {
    let newBudget = {};


    const handleSubmit = e => {
        e.preventDefault();

        addItem(newBudget);
        clearInputs();
    }

    const handleChange = e => {
        e.preventDefault();
        let name = e.target.name;
        switch (name) {
            case 'title':
                newBudget.title = e.target.value;
                break;
            case 'name':
                newBudget.name = e.target.value;
                break;
            case 'amount':
                newBudget.amount = e.target.value;
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <BudgetTitleInput change={handleChange} click={handleSubmit} />
            <BudgetNameInput change={handleChange} click={handleSubmit} />
            <BudgetAmountInput change={handleChange} click={handleSubmit} />
        </div>

    )
}

