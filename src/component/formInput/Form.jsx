import React from "react";
import Button from "../button/Button";
import style from './form.module.css';

const Form = () => {
    return (
        <form className="myForm">
            <h2>Моя форма</h2>
            <label htmlFor="myForm">введите текст</label>
            <input type="text" id="myForm" />
            <Button />
            <button className={style.btn1}>кнопка форм</button>
        </form >
    );
}

export default Form;