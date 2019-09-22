import React from 'react';

export const BudgetItem = ({ title, rows }) => {
    let total = 0;

    rows.map(item => total += item.amount);

    const toggleCollapse = (e) => {
        e.preventDefault();
        let el = document.getElementById(title);
        el.classList.contains('collapse') ? el.classList.remove('collapse') : el.classList.add('collapse');
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan='2' style={{ position: 'relative' }}>
                        <span className="text-center">{title}</span>
                        <button onClick={toggleCollapse} className="rounded-circle btn" style={{ background: 'white', color: '#f76890', position: 'absolute', bottom: 5, right: 5 }}><i className="fas fa-caret-down"></i></button>
                    </th>
                </tr>
            </thead>
            <tbody className="collapse" id={title}>
                {rows.map((item, index) => {
                    return (<tr>
                        <td key={index}>{item.name}</td>
                        <td key={index}><input type="number" className="form-control text-right" placeholder="0" defaultValue={item.amount.toFixed(2)} /></td>
                    </tr>
                    )
                })}
                <tr className="bg-light">
                    <td>Summary</td>
                    <td><input type="text" className="form-control text-right" disabled value={total} /></td>
                </tr>
            </tbody>
        </table>
    )
}