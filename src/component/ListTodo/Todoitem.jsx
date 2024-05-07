import React, { useState } from "react";
import style from './Todoitem.module.css'

function Todoitem({ index, name, deleteTodo }) {

    // console.log(name, classNameLabel, typeof classNameLabel, checked);

    //состояние чекера задачи, по умолч - не отмечено
    const [checked, setChecked] = useState(false);

    //по умолчанию присваиваем стиль незачеркунутый
    const [classNameLabel, setClassNameLabel] = useState(false);

    //зачеркнуть выполненное
    const handleCheckedState = () => {
        setChecked(!checked);
        setClassNameLabel(!classNameLabel);
    }


    return (
        <li className={style.item}>
            <div>
                <span> {index + 1}</span>
                <input
                    type="checkbox"
                    onClick={handleCheckedState}
                    className={style.checkbox}
                ></input>
                <label className={checked === false && classNameLabel === false ? style.label : style.labelDone}> {name} что-то тут </label>

            </div>


            <button onClick={() => deleteTodo(index)} className={style.button}>удалить</button>
        </li >
    )
}

export default Todoitem; 