import React from 'react';

export const BudgetTitleInput = ({ change }) => {
    return (
        <div className='input-group my-2'>
            <input onChange={change} name='title' className='form-control' type="text" placeholder='Enter Budget Title' />
        </div>
    )
}