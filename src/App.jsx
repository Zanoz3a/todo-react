import { useState } from 'react';

import TodoForm from './components/toDoForm.jsx';
import TaskList from './components/taskList.jsx';
import './App.css'

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            text,
            id: Date.now(),
            completed: false,
        }
        setTodos([newTodo, ...todos])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map(task =>
                task.id === id
                ? { ...task, completed: !task.completed }
                : task ))
    }

    return (
        <div className="App">
            <h2>To Do list на React</h2>
            <div className="todo_div">
                <TodoForm addTodo={addTodo} />
                <TaskList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={removeTodo} />
            </div>
        </div>
    )
}

