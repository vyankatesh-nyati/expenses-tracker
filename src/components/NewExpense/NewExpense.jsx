import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    
  const [isEditing,setEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenses) => {
        const expenseData = {
            ...enteredExpenses,
            id: Math.random().toString()
        }
        props.onAddExpenses(expenseData);
    }
  
  const startEditing = () => {
    setEditing(true);
  }

  const stopEditing = () => {
    setEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditing}>Add new Expenses</button>}
      { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  )
}

export default NewExpense