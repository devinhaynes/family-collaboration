import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BillItem } from './BillItem';
import { BillInput } from './BillInput';

export const addDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${month + 1}/${day + 1}/${year}`;
}

export const Bills = () => {
    const apiUrl = 'http://localhost:3001/api/bills';
    const [bills, setBills] = useState([]);

    useEffect(() => {
        getBills();
    }, [])

    const addBills = bill => {
        axios.post(apiUrl, bill)
            .then(() => getBills());
    }

    const removeBill = name => {
        axios.delete(`${apiUrl}/${name}`, { params: { name: name } })
            .then(() => getBills())
    }

    const getBills = () => {
        axios.get(apiUrl)
            .then(billList => setBills(billList.data))
    }

    return (
        <div className="Bills component">
            <table className="table" id="billsTable">
                {
                    bills.length <= 0 ? (
                        <thead>
                            <tr>
                                <th colSpan='3' style={{ background: '#f76890' }}>Bills</th>
                            </tr>
                        </thead>
                    ) : ''
                }
                {bills.map((bill, index) => <BillItem completed={removeBill} key={index} index={index} bill={bill} />)}
                <BillInput addBill={addBills} addDate={addDate} />
            </table>
        </div>
    )
}