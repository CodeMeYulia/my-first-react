import React, { useState } from "react";
import style from './ListTodo.module.css'
import Todoitem from "./Todoitem";
import Button from "../../Button";
import useLocalStorage from "../../hooks/useLocalStorage";

function ListTodo() {
    //состояние массива задач, по умолч  - пустое
    const [todos, setTodos] = useLocalStorage("toDoList", [])
    //состояние поля ввода задачи, по умолч  - пустое
    const [inputValue, setInputValue] = useState("");

    // useEffect(() => {
    //     setTodos(JSON.parse(localStorage.getItem("toDoList")))
    //     setTodos([])
    // }, [])

    //кнопка добавления задачи
    const addTodo = () => {
        if (inputValue !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("")
            // localStorage.setItem("toDoList", JSON.stringify(todos))
        }
    }

    //кнопка удаления задачи
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem("toDoList", JSON.stringify(newTodos))
    }

    const [ShowTranslate, setShowTranslate] = useState(false);

    function handlePush() {
        setShowTranslate(!ShowTranslate);
    }

    let marking = <Button sayHi={handlePush}></Button>

    if (ShowTranslate) {
        marking = <p> Привет, котик!</p>
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