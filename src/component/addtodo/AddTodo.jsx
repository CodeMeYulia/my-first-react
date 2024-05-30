import React, { useRef } from "react";
import style from './AddTodo.module.css';

export default function AddTodo({ inputValue, setInputValue, addTodo }) {

    const ref = useRef()

    return (
        <form>
            <input type="text" ref={ref} value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
            <br />
            <button type="submit" className={style.button} onClick={addTodo} >
                добавить задачку
            </button>
        </form>

    )
}