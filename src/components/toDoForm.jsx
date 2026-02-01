import { useState } from 'react'
import './toDoForm.css'

export default function TodoForm({addTodo}) {
    const [todos, setTodos] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if (!todos.trim()) return;

        addTodo(todos);
        setTodos("");
    }

    return (
        <>
            <form onSubmit={handleChange} className="toDoForm">
                <input
                    type="text"
                    value={todos}
                    placeholder={"Введите задачу"}
                    onChange={(e) => setTodos(e.target.value)}
                />
                <button type="submit" className="toDoButtonMainAdd">Добавить</button>
            </form>
        </>

    )

}