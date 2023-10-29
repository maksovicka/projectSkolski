import React, { useState } from 'react';
import './App.css';
import BudgetOverview from './components/BudgetOverview/BudgetOverview';
import BudgetInput from './components/BudgetInput/BudgetInput';
import BudgetDetails from './components/BudgetDetails/BudgetDetails';

function App() {
  // const [budgetItemList, setBudgetItemList] = useState([]);
  const [budgetIncomeList, setBudgetIncomeList] = useState([]);
  const [budgetExpensesList, setBudgetExpensesList] = useState([]);

  const addItemToList = (item) => {
    // setBudgetItemList([...budgetItemList, item]);

    if (item.type === '-') {
      setBudgetExpensesList([...budgetExpensesList, item]);
    } else {
      setBudgetIncomeList([...budgetIncomeList, item]);
    }
  };

  // useEffect(() => {
  //   console.log(budgetItemList);
  // }, [budgetItemList]);

  return (
    <div className="App">
      <BudgetOverview
        budgetExpensesList={budgetExpensesList}
        budgetIncomeList={budgetIncomeList}
      />
      <BudgetInput addItemToList={addItemToList} />
      <BudgetDetails
        budgetExpensesList={budgetExpensesList}
        budgetIncomeList={budgetIncomeList}
      />
    </div>
  );
}

export default App;
