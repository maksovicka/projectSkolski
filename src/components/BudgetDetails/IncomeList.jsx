import React from 'react';
import IncomeItem from './IncomeItem';

function IncomeList({ budgetIncomeList }) {
  return (
    <>
      {budgetIncomeList.map((item) => (
        <IncomeItem
          key={item.id}
          id={item.id}
          description={item.description}
          value={item.value}
        />
      ))}
    </>
  );
}

export default IncomeList;
