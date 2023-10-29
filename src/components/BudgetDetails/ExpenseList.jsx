import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ budgetExpensesList }) {
  return (
    <>
      {budgetExpensesList.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          description={item.description}
          value={item.value}
        />
      ))}
    </>

  );
}
export default ExpenseList;
