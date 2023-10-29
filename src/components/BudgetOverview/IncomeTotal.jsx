import React from 'react';
import currencyFormat from '../../utils/currencyFormat';

function IncomeTotal({ totalIncome }) {
  return (
    <div className="income-total">
      INCOME:
      {' '}
      {currencyFormat(totalIncome)}
    </div>
  );
}

export default IncomeTotal;
