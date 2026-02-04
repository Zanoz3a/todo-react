
// Здесь все, что связано с отдельным окном редактирования таска

import { useState, useEffect } from 'react';
import { RiCloseLargeLine } from "react-icons/ri";
import CopyDescriptionBlock from "./copyDescriptionBlock.jsx";
import './page.css'

export default function DetailedWindow({todo, onClose, onComplete, onDelete, onUpdTitle, onUpdDesc}) {
    const [title, setTitle] = useState(todo.text.toString());
    const [description, setDescription] = useState(todo.description.toString());

    const handleChangeTitle = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        onUpdTitle(todo.id, newTitle);
    }
    // const handleChangeTitleApp = () => onUpdTitle(todo.id, title);

    const handleChangeDescription = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
        onUpdDesc(todo.id, newDescription)
    }
    // const handleChangeDescriptionApp = () => onUpdDesc(todo.id, description);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose()}
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [onClose]);

    return (
        <div
            className={"overlay"}
             onClick={onClose}>
            <div className={"details-window"} onClick={(e) => e.stopPropagation()}>
                <div className={"top-container"}>
                    <div className={"title-container"}>
                        <input
                            type="text"
                            value={title}
                            onClick={(e) => e.stopPropagation()}
                            onChange={handleChangeTitle}
                            className={"title-input"}
                        />
                        <span className={"title-legend"}>Имя таска</span>
                    </div>
                    <button onClick={onClose} className={"closePageBtn"}> <RiCloseLargeLine /> </button>
                </div>

                {/*
                <div className="tag-container">
                    <p>Добавить тэг</p>
                    {todo.tag.map((item, index) => (
                        <div key = {index} className="tag">
                            <span
                                className={"tag-color"}
                                // onClick={() => handleChangeColor(index)}
                            />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                */}

                <div className={"description-all"}>
                    <div className={"description-container"}>
                        <textarea
                            value={description}
                            placeholder={"Начните вводить описание здесь..."}
                            onClick={(e) => e.stopPropagation()}
                            onChange={handleChangeDescription}
                            className={"description-input"}
                        />

                        <span className={"description-legend"}>Описание</span>
                    </div>


                    <CopyDescriptionBlock description={description} />
                    {/*<button
                        className={"copyDescButton"}
                        onClick={(e) => {
                            alert("message")
                            e.stopPropagation();
                            copyDescFunction()
                                .then(() => {
                                    alert("Copied!");
                                })
                            console.log("Copied!")}
                        }
                        tabIndex={-1}
                    >Копировать описание</button>*/}
                </div>

                <div className={"marks-container"}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        onComplete()}}
                            className={"marks-container-complete"}
                    >{ todo.completed
                        ? "Отметить как невыполненное"
                        : "Отметить как выполненное" }</button>

                    <button onClick={(e) => {
                        e.stopPropagation();
                        onDelete()}}
                            className={"marks-container-delete"}
                    >Удалить</button>
                </div>


            </div>
        </div>
    )
}