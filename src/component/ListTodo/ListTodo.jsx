import React, { useState } from "react";
import style from './ListTodo.module.css'
import Todoitem from "./Todoitem";
import Button from "../../Button";

function ListTodo() {
    //состояние массива задач, по умолч  - пустое
    const [todos, setTodos] = useState([]);
    //состояние поля ввода задачи, по умолч  - пустое
    const [inputValue, setInputValue] = useState("");



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

    const [ShowTranslate, setShowTranslate] = useState(false);

    function handlePush() {
        setShowTranslate(!ShowTranslate);
    }

    let marking = <Button sayHi={handlePush}></Button>

    if (ShowTranslate) {
        marking = <p>Hi!</p>
    }
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
                            // handleCheckedState={handleCheckedState}
                            // checked={checked}
                            // handleClick={crossTodo}
                            // classNameLabel={classNameLabel}
                            />
                        )
                    })
                }
            </ul>

            <div>
                <h3>Заголовок</h3>
                {marking}
            </div>

        </React.Fragment >
    );
}

export default ListTodo;