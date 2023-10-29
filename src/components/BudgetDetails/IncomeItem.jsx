import React from 'react';

function IncomeItem({ description, value }) {
  return (
    <div>
      INCOME:
      { ' ' }
      { description }
      { ' ' }
      { value }
    </div>
  );
}
export default IncomeItem;
