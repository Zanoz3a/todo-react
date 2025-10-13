import { useState } from 'react'
import './copyDescriptionBlock.css'

export default function CopyDescriptionBlock({description}) {
    const [showMessage, setShowMessage] = useState(false);

    const handleShowButton = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    }

    const copyDescFunction = async() => {
        try {
            await navigator.clipboard.writeText(description);
            handleShowButton()
        } catch (error) {
            console.error("Не удалось скопировать описание");
            alert("Ошибка копирования описания")
        }
    }

    return (
        <div className="copyDescription">
            <button
                className={"copyDescButton"}
                onClick={(e) => {
                    e.stopPropagation();
                    copyDescFunction().then()}}
                tabIndex={-1}
            >Копировать описание</button>
            <div className={`copyMessage ${showMessage ? 'show' : 'hide'}`}>
                Описание скопировано!
            </div>
        </div>
    )
}