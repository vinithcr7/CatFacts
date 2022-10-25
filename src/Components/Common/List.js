const List = ({ data }) => {
    return (
        <ul>
            {data.map((entry, index) => {
                return <li key={index}>{entry}</li>
            })}
        </ul>
    )
}

export default List;