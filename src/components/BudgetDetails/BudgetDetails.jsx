import React from 'react';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

function BudgetDetails({ budgetExpensesList, budgetIncomeList }) {
  return (
    <>
      <ExpenseList budgetExpensesList={budgetExpensesList} />
      <IncomeList budgetIncomeList={budgetIncomeList} />
    </>
  );
}
export default BudgetDetails;
