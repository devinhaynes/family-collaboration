import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BudgetItem } from './BudgetItem';
import { BudgetInput } from './BudgetInput';

export const Budget = () => {
    let summaryTotal = 0;
    const [income, setIncome] = useState([]);
    const [housing, setHousing] = useState([]);
    const [food, setFood] = useState([]);
    const [cars, setCars] = useState([]);
    const [test, setTest] = useState([]);
    const apiUrl = 'http://192.168.1.10:3001/api/budget';

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => res.data.map(obj => {
                let objToAdd = {
                    name: obj.name,
                    amount: obj.amount
                }
                switch (obj.title) {
                    case 'Income':
                        setIncome([...income, objToAdd]);
                        break;
                    case 'Housing':
                        setHousing([...housing, objToAdd]);
                        break;
                    case 'Food':
                        setFood([...food, objToAdd]);
                        break;
                    case 'Cars':
                        setCars([...cars, objToAdd]);
                        break;
                    case 'testing':
                        setTest([...test, objToAdd]);
                        break;
                    default:
                        break;
                }
            }))
    }, [])

    const addBudget = budget => {
        const title = budget.title;

        //For sending to DB
        const newBudget = budget;
        axios.post(apiUrl, { newBudget })
            .then(res => console.log(res.body))

        //For adding to state
        const budgetToAdd = {
            name: budget.name,
            amount: budget.amount
        };
        switch (title) {
            case 'income':
                setIncome([...income, budgetToAdd]);
                break;
            case 'housing':
                setHousing([...housing, budgetToAdd]);
                break;
            case 'food':
                setFood([...food, budgetToAdd]);
                break;
            case 'cars':
                setCars([...cars, budgetToAdd]);
                break;
            default:
                setHousing([...income, { name: 'Test', amount: 1000 }]);
                break;
        }

    }

    const budgetItems = [
        { title: 'Income', rows: income },
        { title: 'Testing', rows: test },
        { title: 'Housing', rows: housing },
        { title: 'Cars', rows: cars },
        { title: 'Food', rows: food }
    ]

    const getSummaryTotal = () => {
        console.log('Summary Total calculating...');
        budgetItems.map(budgetItem => budgetItem.rows.map(row => {
            summaryTotal += row.amount;
        }))
    }
    return (
        <div className="Budget component">
            {budgetItems.map(item => {
                return <BudgetItem title={item.title} rows={item.rows} />
            })}
            <BudgetInput addItem={addBudget} />
            <div className="d-flex">
                <div className='flex-grow-1 mx-3'>
                    <h3>Summary</h3>
                </div>
                <div className="flex-grow-1">
                    <input type="text" className="form-control text-right" style={{ border: '1px solid #f76890' }} value={`$${summaryTotal.toFixed(2)}`} disabled />
                </div>
            </div>
        </div>
    )
}