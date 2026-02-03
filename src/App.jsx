import { useState } from 'react';

import TodoForm from './components/toDoForm.jsx';
import TaskList from './components/taskList.jsx';

import DetailedWindow from './components/detailed_page/page.jsx';
import './App.css'
import TaskControls from "./components/taskControls.jsx";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [endTasks, setEndTasks] = useState(false);

    // Функции для работы с таском в главном меню
    const addTodo = (text) => { // Добавление нового таска через стейт с тасками
        const newTodo = {
            text,
            id: Date.now(),
            completed: false,
            description: "",
            tag: [],
            subTasks: [],
        }
        setTodos([newTodo, ...todos])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const deleteTodoAll = () => {
        setTodos([]);
    }

    const doneTaskSort = () => { // Сортировка тасков по последнему + если выполнено, то в конец
        if(!endTasks) {
            setTodos(prev => [...prev].sort((a, b) => a.completed - b.completed));
        } else if (endTasks) {
            setTodos(prev => [...prev].sort((a, b) => b.id - a.id));
        }
    }

    const doneTasksGotoEnd = () => { // Переключатель + сортировка отдельной переменной
        setEndTasks((item) => !item);
        doneTaskSort();
    }

    const toggleTodo = (id) => { // Ставится обратный completed от того, что есть
        setTodos(
            todos.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );

        // if(endTasks) {
        //     setTodos(prev => [...prev].sort((a, b) => a.completed - b.completed));
        // } else if (!endTasks) {
        //     setTodos(prev => [...prev].sort((a, b) => b.id - a.id));
        // }
        // doneTaskSort(); // Вместо id поставить условие если чекбокс true, тогда выполнять
    };


    const openDetailed = (id) => setOpenId(id);
    const closeDetailed = () => setOpenId(null);

    // Функции для работы с таском в page

    const updateTodoTitle = (id, newTitle) => { // Аналогично выполнению таска
        setTodos(
            todos.map(task =>
                task.id === id
                    ? {...task, text: newTitle}
                    : task
        ))
    }

    const updateTodoDescription = (id, newDesc) => { // Аналогично выполнению таска
        setTodos(
            todos.map(task =>
                task.id === id
                    ? {...task, description: newDesc}
                    : task
            ))
    }


    const selectedTodo = todos.find(item => item.id === openId);
    return (
        <>
            <div className="App">
                <h2>To Do list на React</h2>
                <div className="todo_div">
                    <TodoForm addTodo={addTodo} />

                    <TaskControls
                        doneTasksCount={todos.filter((item) => item.completed === true).length}
                        allTasksCount={todos.length}
                        deleteTodoAll={deleteTodoAll}
                        doneTasksGotoEnd={doneTasksGotoEnd}
                    />

                    <TaskList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        openDetailed={openDetailed}
                    />
                </div>
            </div>

            {selectedTodo && (
                <DetailedWindow
                    todo={selectedTodo}
                    onClose={closeDetailed}
                    onComplete={() => toggleTodo(selectedTodo.id)}
                    onDelete={() => deleteTodo(selectedTodo.id)}
                    onCopy={() => console.log("Copied!")}
                    onUpdTitle={updateTodoTitle}
                    onUpdDesc={updateTodoDescription}
                />
            )}
        </>

    )
}

