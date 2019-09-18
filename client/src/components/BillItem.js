import React from 'react';
import { CompletedButton } from './Buttons';

export const addDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${month}/${day}/${year}`;
}

export const BillItem = ({ bill, completed }) => {
    return (
        <tbody>
            <tr className='flex-row'>
                <th colSpan='3' style={{ background: '#f76890' }}>{bill.name}</th>
            </tr >
            <tr className='bg-light'>
                <th className='col-lg-2'>Amount</th>
                <th className='col-lg-2'>Due Date</th>
                {/* <th>AutoPay?</th> */}
                <th className='col-lg-2'>Completed</th>
            </tr>
            <tr>
                <td>${parseFloat(bill.amount).toFixed(2)}</td>
                <td>{addDate(new Date(bill.dueDate))}</td>
                {/* <td>{bill.autoPay ? 'Yes' : 'No'}</td> */}
                <td className="text-center"><CompletedButton completed={completed} obj={bill.name} /></td>
            </tr>
        </tbody>
    )
}