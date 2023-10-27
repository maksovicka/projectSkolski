import React from 'react'
import ExpenseItem from './IncomeItem'

const ExpenseList = ({inputs}) => {
    console.log(inputs);
  return (
    <div>{inputs.map((e) =>{
        return <ExpenseItem data={e}/>
    })}</div>
  )
}

export default ExpenseList;