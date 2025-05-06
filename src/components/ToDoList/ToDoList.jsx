export const ToDoList = ({todos}) => {
    return (
        <ul>
        {todos.map(({id, text, completed}) => (
                <li key={id}>
                    <input type="checkbox" checked={completed}/>
                    <p>{text}</p>
                </li>
                
            ))}
        </ul>
    )
}