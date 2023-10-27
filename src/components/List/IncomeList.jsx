import React from 'react'
import IncomeItem from './IncomeItem'

const IncomeList = ({inputs}) => {
  return (
    <div>{inputs.map((e) => <IncomeItem key={e.id} data={e} />
    )}</div>
  )
}

export default IncomeList;