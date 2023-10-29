import React from 'react';
import IncomeExpenseForm from './IncomeExpenseForm';

function BudgetInput({ addItemToList }) {
  return (
    <IncomeExpenseForm addItemToList={addItemToList} />
  );
}
export default BudgetInput;
