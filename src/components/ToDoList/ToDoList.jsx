import { Item } from './ToDoList.styled'
export const ToDoList = ({ todos, ondeleteTodo, onToggleCompleted }) => {

    return (
        <ul>
            {todos.map(({ id, text, completed }) => (
                <Item key={id}>
                    <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)} />
                    <p>{text}</p>
                    <button onClick={() => ondeleteTodo(id)} type='button'>Delete</button>
                </Item>

            ))}
        </ul>
    )
}