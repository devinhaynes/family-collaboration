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
            <thead key={`Thead_${title}`}>
                <tr key={`Title_${title}`}>
                    <th key={`Head_${title}`} colSpan='2' style={{ position: 'relative' }}>
                        <span className="text-center">{title}</span>
                        <button onClick={toggleCollapse} className="rounded-circle btn" style={{ background: 'white', color: '#f76890', position: 'absolute', bottom: 5, right: 5 }}><i className="fas fa-caret-down"></i></button>
                    </th>
                </tr>
            </thead>
            <tbody key={`Tbody_${title}`} className="collapse" id={title}>
                {rows.map((item, index) => {
                    return (
                        <tr key={`${title}_${index}`}>
                            <td key={`key_${item.name}_${index}`}>{item.name}</td>
                            <td key={`amount_${item.amount}_${index}`}><input type="number" className="form-control text-right" placeholder="0" defaultValue={item.amount.toFixed(2)} /></td>
                        </tr>
                    )
                })}
                <tr className="bg-light">
                    <td key={`${title}_Text`}>Total</td>
                    <td key={`${title}_Total`}><input type="text" className="form-control text-right" disabled value={total} /></td>
                </tr>
            </tbody>
        </table>
    )
}