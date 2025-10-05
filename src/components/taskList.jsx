import { FaTrash, FaCheck} from 'react-icons/fa'
import './taskList.css'

export default function TaskList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="taskList">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                >
                    <span>{todo.text }</span>
                    <div>
                        <button id="complete" onClick={() => toggleTodo(todo.id)}> <FaCheck /> </button>
                        <button id="delete" onClick={() => deleteTodo(todo.id)}> <FaTrash /> </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}