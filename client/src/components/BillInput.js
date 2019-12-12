import React, { useState } from 'react';
import { clearInputs } from './clearInputs';

export const BillInput = ({ addBill, addDate }) => {
    const [view, updateView] = useState(1);
    const [name, updateName] = useState();
    const [amount, updateAmount] = useState(0);
    const [dueDate, updateDate] = useState('');
    const [autoPay, updateAutoPay] = useState(false);

    let updatedValue = '';
    let inputType = 'text';

    if (view === 1) {
        updatedValue = 'Name';
    } else if (view === 2) {
        updatedValue = 'Amount';
        inputType = 'number'
    } else if (view === 3) {
        updatedValue = 'Due Date';
        inputType = 'date';
    } else if (view === 4) {
        updatedValue = 'Auto Pay';
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (view === 4) {
            addBill({
                name,
                amount,
                dueDate,
                autoPay
            });
            updateView(1);
        } else {
            updateView(view + 1);
        }
        clearInputs('budget-input');
    }

    const handleChange = e => {
        if (view === 1) {
            updateName(e.target.value);
        } else if (view === 2) {
            updateAmount(e.target.value);
        } else if (view === 3) {
            updateDate(addDate(new Date(e.target.value)));
        } else if (view === 4) {
            updateAutoPay(e.target.value || false);
        }
    }

    return (
        <tbody>
            {

            }
            <tr>
                <td colSpan='2'><input onChange={handleChange} className='form-control budget-input' type={inputType} placeholder={`Enter ${updatedValue} of Bill`} /></td>
                <td className="text-center"><button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-circle"><i className="fas fa-plus"></i></button></td>
            </tr >
        </tbody>
    )
}