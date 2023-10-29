import React from 'react';

function AvailableBudget() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return (
    <p>
      Available Budget in
      {' '}
      {month}
      {' '}
      {year}
    </p>
  );
}

export default AvailableBudget;
