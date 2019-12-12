import React from 'react';

export const BudgetAmountInput = ({ change, click }) => {
    return (
        <div className='input-group my-2'>
            <input onChange={change} name='amount' className='form-control input-group-input' type="text" placeholder='Enter Budget Amount' />
            {/* <button onClick={click} type='button' className="btn btn-outline-primary rounded-circle text-right"><i className="fas fa-plus"></i></button> */}
        </div>
    )
}