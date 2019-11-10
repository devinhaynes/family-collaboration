import React from 'react';
import { clearInputs } from './clearInputs';

export const BillInput = ({ addBill }) => {
    let newBill = {};

    const handleSubmit = e => {
        e.preventDefault();
        if (!newBill) return;
        addBill(newBill);
        newBill = {};
        clearInputs('budget-input');
    }

    return (
        <tbody>
            <tr>
                <td colSpan='2'><input className='form-control budget-input' type="text" placeholder='Enter Name of Bill' /></td>
                <td className="text-center"><button type="submit" onClick={handleSubmit} className="btn btn-outline-primary rounded-circle"><i className="fas fa-plus"></i></button></td>
            </tr >
        </tbody>

    )
}