

export default function TaskControls({doneTasksCount, allTasksCount, deleteTodoAll, doneTasksGotoEnd}) {
    if (allTasksCount !== 0) {
        return(
            <>

                <button
                    className="toDoButtonMainAllDelete"
                    onClick={deleteTodoAll}
                >Удалить все</button>

                <div className="sortTasksDiv">
                    <span className="sortTaskText">Убрать выполненные в конец</span>
                    <input
                        type="checkbox"
                        className="sortTaskCheckbox"
                        onChange={doneTasksGotoEnd}
                    />
                </div>
                <div>Выполнено: {doneTasksCount}/{allTasksCount}</div>
            </>
        )
    }

}