import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BudgetItem } from './BudgetItem';
import { BudgetInput } from './BudgetInput';

export const Budget = () => {
    let summaryTotal = 0;
    const [income, updateIncome] = useState({
        'title': 'Income',
        'rows': [
            {
                'name': 'Jannil Work',
                'amount': 7000
            },
            {
                'name': 'Devin Work',
                'amount': 6000
            }
        ]
    })

    const [housing, updateHousing] = useState({
        'title': 'Housing',
        'rows': [
            {
                'name': 'Mortgage',
                'amount': -1300
            },
            {
                'name': 'Rent',
                'amount': -2800
            }
        ]
    })

    const [food, updateFood] = useState({
        'title': 'Food',
        'rows': [
            {
                'name': 'Groceries',
                'amount': -700
            },
            {
                'name': 'Fast Food',
                'amount': -50
            }
        ]
    })

    const [cars, updateCars] = useState({
        'title': 'Cars',
        'rows': [
            {
                'name': 'Maxda CX-5',
                'amount': -50
            },
            {
                'name': 'Honda CR-V',
                'amount': -60
            }
        ]
    })

    const budgetItems = [income, housing, food, cars];


    budgetItems.map(item => {
        item.rows.map(row => {
            summaryTotal += row.amount;
        })
    })

    const addBudgetItem = (obj) => {
        const title = obj.title;
        switch (title) {
            case 'Cars':
                updateCars([...cars, obj]);
                break;
            case 'Housing':
                updateHousing([...housing, housing.rows.push({ 'name': obj.name, 'amount': obj.amount })]);
                break;
            case 'Food':
                updateFood([...food, obj]);
                break;
            case 'Income':
                updateIncome([...income, obj]);
                break;
            default:
                break;
        }
    }


    const apiUrl = 'http://192.168.1.10:3001/api/budget';
    // const [budget, setBudget] = useState([
    //     {
    //         'title': 'Cars',
    //         'rows': [
    //             {
    //                 'name': 'Mazda',
    //                 'amount': -50
    //             }
    //         ]
    //     },
    //     {
    //         'title': 'Housing',
    //         'rows': [
    //             {
    //                 'name': 'Rent',
    //                 'amount': 2800
    //             },
    //             {
    //                 'name': 'Mortgage',
    //                 'amount': 1300
    //             }
    //         ]
    //     }
    // ]);

    // useEffect(() => {
    //     axios.get(apiUrl)
    //         .then(res => console.log(res.data))
    // }, [])

    // const addBudgetItem = budgetItem => {
    //     let title = budgetItem.title;

    //     budget.filter(obj => {
    //         if (obj.title === title) {
    //             console.log(`Object sent with a title of ${title}. Matches current state configuration`);
    //             obj.rows.push({ name: budgetItem.name, amount: budgetItem.amount })
    //             obj.rows.map(row => console.log(row));
    //             setBudget([...budget, obj])
    //         }
    //     })
    // }

    return (
        <div className="Budget component">
            {budgetItems.map(item => {
                return <BudgetItem title={item.title} rows={item.rows} />
            })}
            <BudgetInput addItem={addBudgetItem} />
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