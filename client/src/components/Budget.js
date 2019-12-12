import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BudgetItem } from './BudgetItem';
import { BudgetInput } from './BudgetInput';
import Modal from 'react-modal';
import '../styles/budget.css';

Modal.setAppElement('#root');

export const Budget = () => {
  const apiUrl = 'http://localhost:3001/api/budget';
  const [budget, setBudget] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyles = {
    content: {
      top: '50%',
      bottom: 0,
      right: 0,
      left: 0,
      background: 'white',
      opacity: 1,
      zIndex: 500
    }
  };

  const getBudget = () => axios.get(apiUrl)
    .then(res => {
      return res.data.map(obj => {
        let { title, name, amount } = obj;
        return {
          title,
          rows: [
            {
              name,
              amount
            }
          ]
        }
      })
    })
    .then(structuredData => {
      let groupedData = [];
      //Set groupedData to unqiue titles
      structuredData.forEach(data => {
        if (groupedData.length <= 0) {
          groupedData.push(data);
        } else {
          if (!groupedData.some(gData => gData.title === data.title)) {
            groupedData.push(data);
          }
        }
      })

      //Once unique titles are set, loop over them again to check if rows need to be added.
      groupedData.forEach((gData, i) => {
        structuredData.forEach(data => {
          //Titles must match & rows must not contain the same name
          if (gData.title === data.title && !gData.rows.some(row => row.name === data.rows[0].name)) {
            groupedData[i].rows.push(data.rows[0]);
          }
        })
      })
      setBudget(groupedData);
    })

  useEffect(() => {
    getBudget();
  }, [])

  const addBudget = budget => {

    //For sending to DB
    const newBudget = budget;
    axios.post(apiUrl, { newBudget })
      .then(() => {
        getBudget();
      })
  }

  return (
    <div className="Budget component">
      {budget.map(item => {
        return <BudgetItem title={item.title} rows={item.rows} />
      })}
      {/* <BudgetInput addItem={addBudget} /> */}
      <div className="d-flex">
        <div className='flex-grow-1 mx-3'>
          <h3>Summary</h3>
        </div>
        <div className="flex-grow-1">
          <input type="text" className="form-control text-right" style={{ border: '1px solid #f76890' }} value='0' disabled />
        </div>
      </div>
      <div className="form-btn">
        <div className="form-btn-border">
          <button onClick={openModal} type='button' className="btn btn-outline-primary rounded-circle my-2">
            <i className="fas fa-caret-up"></i>
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Budget Form Modal"
      >
        <button onClick={closeModal} className="btn btn-outline-primary rounded-circle my-1"><i className="fas fa-times"></i></button>
        <BudgetInput addItem={addBudget} />
      </Modal>
    </div>
  )
}