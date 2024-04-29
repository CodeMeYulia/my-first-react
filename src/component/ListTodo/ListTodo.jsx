import React, { useState } from "react";
import style from './ListTodo.module.css'
import Todoitem from "./Todoitem";

function ListTodo() {
    //состояние массива задач, по умолч  - пустое
    const [todos, setTodos] = useState([]);
    //состояние поля ввода задачи, по умолч  - пустое
    const [inputValue, setInputValue] = useState("");
    //состояние чекера задачи, по умолч  - не отмечено
    const [checked, setChecked] = useState(false);
    //по умолчанию присваиваем стиль незачеркунутый
    const [classNameLabel, setClassNameLabel] = useState(false);

    //кнопка добавления задачи
    const addTodo = () => {
        if (inputValue !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("")
        }
    }

    //кнопка удаления задачи
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    //зачеркнуть выполненное
    const handleCheckedState = (e) => {
        const { checked } = e.target;
        if (e.target) {
            setChecked(!checked);
            setClassNameLabel(!classNameLabel);
        }
    }

    // const crossTodo = (e) => {
    //     if (e.target.checked) {
    //         setClassNameLabel(true);
    //     }
    // }

    return (
        <React.Fragment>
            <h1>Todo List</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addTodo}>добавить</button>
            <ul className={style.todoblock}>
                {
                    todos.map((todo, index) => {
                        return (
                            <Todoitem
                                key={index}
                                name={todo}
                                index={index}
                                deleteTodo={deleteTodo}
                                handleCheckedState={handleCheckedState}
                                checked={checked}
                                // handleClick={crossTodo}
                                classNameLabel={classNameLabel}
                            />
                        )
                    })
                }
            </ul>

        </React.Fragment>
    );
}

export default ListTodo;