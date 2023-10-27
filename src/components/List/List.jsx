import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

const List = ({inputs}) => {
    return (
    <div>
        <IncomeList inputs={inputs} />
        <ExpenseList inputs={inputs} />
    </div>
    )
}

export default List;