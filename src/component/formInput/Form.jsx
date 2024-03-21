import React from "react";
import Button from "../button/Button";

const Form = () => {
    return (
        <form className="form">
            <h2>Моя форма</h2>
            <label htmlFor="myForm">введите текст</label>
            <input type="text" id="myForm" />
            <Button />
        </form>
    );
}

export default Form;