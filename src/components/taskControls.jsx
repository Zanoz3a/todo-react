

export default function TaskControls({doneTasksCount, allTasksCount, deleteTodoAll}) {
    return(
        <>
            <div>Выполнено: {doneTasksCount}/{allTasksCount}</div>
            <button
                className="toDoButtonMainAllDelete"
                onClick={deleteTodoAll}
            >Удалить все</button>
        </>
    )
}