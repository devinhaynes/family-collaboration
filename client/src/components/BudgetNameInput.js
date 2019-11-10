import React from 'react';

export const BudgetNameInput = ({ change }) => {
    return (
        <div className='input-group my-2'>
            <input onChange={change} name='name' className='form-control input-group-input' type="text" placeholder='Enter Budget Name' />
        </div>
    )
}