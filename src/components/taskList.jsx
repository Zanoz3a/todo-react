
// Здесь внешний div таска, раскрытие, кнопки и тп

import { FaTrash, FaCheck} from 'react-icons/fa'
import './taskList.css'

export default function TaskList({todos, toggleTodo, deleteTodo, openDetailed}) {
    return (
        <ul className="taskList">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    style={{textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? 'rgba(45,27,105,0.37)' : '#2D1B69',
                        transition: 'ease all 0.5s'}}
                    id = "detailed" onClick={() => openDetailed(todo.id)}
                >
                    <span>{todo.text }</span>
                    <div>
                        <button id="complete" onClick={(e) => {
                            e.stopPropagation();
                            toggleTodo(todo.id);
                        }}> <FaCheck /> </button>
                        <button id="delete" onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo.id);
                        }}> <FaTrash /> </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}