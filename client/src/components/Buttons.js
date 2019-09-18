import React from 'react';

export const CompletedButton = ({ completed, obj }) => {
    const removeObj = (e) => {
        e.preventDefault();
        completed(obj);
    }
    return (
        <button onClick={removeObj} className="rounded-circle btn" style={{ border: '1px solid #f76890', color: '#f76890' }}><i className="fas fa-check"></i></button>
    )
}

export const RemoveButton = ({ task, remove }) => {
    const removeTaskObject = (e) => {
        e.preventDefault();
        remove(task);
    }
    return (
        <button onClick={removeTaskObject} className="rounded-circle btn btn-outline-danger"><i className="fas fa-window-close"></i></button >
    )
}