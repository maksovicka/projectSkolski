import React from 'react';

function ExpenseItem({ description, value }) {
  return (
    <div>
      EXPENSES:
      { ' ' }
      { description }
      {' '}
      { value }
    </div>
  );
}

export default ExpenseItem;
