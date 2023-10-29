import React from 'react';
import AvailableBudget from './AvailableBudget';
import ExpenseTotal from './ExpenseTotal';
import IncomeTotal from './IncomeTotal';
import Remainder from './Remainder';

function BudgetOverview({ budgetExpensesList, budgetIncomeList }) {
  const totalExpense = budgetExpensesList.reduce((sum, item) => sum + item.value, 0);
  const totalIncome = budgetIncomeList.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <AvailableBudget />
      <Remainder
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      <IncomeTotal totalIncome={totalIncome} />
      <ExpenseTotal totalExpense={totalExpense} />
    </>
  );
}

export default BudgetOverview;
