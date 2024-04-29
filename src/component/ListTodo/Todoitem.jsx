import React from "react";
import style from './Todoitem.module.css'

function Todoitem({ index, name, deleteTodo, handleCheckedState, classNameLabel, handleClick, checked }) {

    console.log(name, classNameLabel, typeof classNameLabel, checked);

    return (
        <li className={style.item} onClick={handleCheckedState}>
            <div>
                <span> {index + 1}</span>
                <input
                    type="checkbox"
                    onClick={handleClick}
                    className={style.checkbox}
                ></input>
                <label className={checked === false && classNameLabel === false ? style.label : style.labelDone}> {name} что-то тут </label>

            </div>


            <button onClick={() => deleteTodo(index)} className={style.button}>удалить</button>
        </li >
    )
}

export default Todoitem; 