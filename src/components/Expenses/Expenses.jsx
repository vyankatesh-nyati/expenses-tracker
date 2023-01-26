import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  
  const [filterYear, setFilterYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expenseItem => (expenseItem.date.getFullYear().toString() === filterYear));

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filterYear}
          onFilterChange={filterChangeHandler} 
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  )

}
export default Expenses;