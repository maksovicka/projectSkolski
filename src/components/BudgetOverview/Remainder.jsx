import React from 'react';
import currencyFormat from '../../utils/currencyFormat';

function Remainder({ totalIncome, totalExpense }) {
  const remainder = currencyFormat(totalIncome - totalExpense);

  return (
    <div className="remainder">
      {remainder}
    </div>
  );
}

export default Remainder;
