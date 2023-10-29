import React from 'react';
import currencyFormat from '../../utils/currencyFormat';

function ExpenseTotal({ totalExpense }) {
  return (
    <div className="expense-total">
      EXPENSE:
      {' '}
      {currencyFormat(0 - totalExpense)}
    </div>
  );
}

export default ExpenseTotal;
