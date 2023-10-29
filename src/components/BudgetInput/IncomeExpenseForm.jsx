import React, { useState } from 'react';

function IncomeExpenseForm({ addItemToList }) {
  const [type, setType] = useState('-');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const typeHandler = (e) => {
    setType(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const valueHandler = (e) => {
    setValue(parseFloat(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      type,
      description,
      value,
    };
    addItemToList(item);
    setType('-');
    setDescription('');
    setValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={typeHandler}
        value={type}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="description"
        onChange={descriptionHandler}
        value={description}
      />
      <input
        type="number"
        name="value"
        id="value"
        placeholder="value"
        onChange={valueHandler}
        value={value}
        min={0}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default IncomeExpenseForm;
