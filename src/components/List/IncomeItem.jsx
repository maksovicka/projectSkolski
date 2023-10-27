const IncomeItem = ({data}) => {
console.log(data)

    return (
        <>
        {data.description}
        {data.value}
        </>
    )
}
export default IncomeItem;