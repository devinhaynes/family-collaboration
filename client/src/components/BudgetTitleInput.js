import React from 'react';

export const BudgetTitleInput = ({ change }) => {
    return (
        <div className='input-group my-2'>
            <input onChange={change} name='title' className='form-control input-group-input' type="text" placeholder='Enter Budget Title' />
        </div>
    )
}