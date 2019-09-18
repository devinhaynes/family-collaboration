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
    const apiUrl = 'http://192.168.1.10:3001/api/bills';
    const [bills, setBills] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(billList => setBills(billList.data))
    }, [])

    const addBills = bill => {
        const newBill = [bill];

        axios.post(apiUrl, { newBill })
            .then(res => console.log(res.body));
        setBills([...bills, bill]);

    }

    const removeBill = name => {
        axios.delete(`${apiUrl}/${name}`, { params: { name: name } })
            .then(res => setBills(res.data))
    }

    return (
        <div className="Bills component">
            <table className="table" id="billsTable">
                {bills.map((bill, index) => <BillItem completed={removeBill} key={index} index={index} bill={bill} />)}
                <BillInput addBill={addBills} />
            </table>
        </div>
    )
}