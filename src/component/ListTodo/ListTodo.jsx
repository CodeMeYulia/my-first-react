import React, { useState } from "react";
import style from './ListTodo.module.css'
import Todoitem from "./Todoitem";
import Button from "../../Button";
import useLocalStorage from "../../hooks/useLocalStorage";
import AddTodo from "../addtodo/AddTodo";
import Form from "../form/Form";

function ListTodo() {

    //кнопка перевода приветсвия
    const [ShowTranslate, setShowTranslate] = useState(false);
    function handlePush() {
        setShowTranslate(!ShowTranslate);
    }
    let marking = <Button sayHi={handlePush}></Button>

    if (ShowTranslate) {
        marking = <p> Привет, котик!</p>
    }

    //состояние массива задач, по умолч  - пустое
    const [todos, setTodos] = useLocalStorage("toDoList", [])
    //состояние поля ввода задачи, по умолч  - пустое
    const [inputValue, setInputValue] = useState("");

    //кнопка удаления задачи
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem("toDoList", JSON.stringify(newTodos))
    }

    //кнопка добавления задачи
    const addTodo = () => {
        // e.prevenDefault();
        console.log(inputValue);
        if (inputValue !== "") {
            setTodos([...todos, inputValue]);
        }
        setInputValue("")
    }
    //выбор любимого вкуса
    const [flavor, setFlavor] = useState("grapefruit");
    const handleChange = (e) => {
        setFlavor(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your favorite flavor is: ${flavor}`);
    };

    return (
        <React.Fragment>
            <h1>Todo List</h1>
            <div>
                <h3>Заголовок</h3>
                {marking}
            </div>
            <Form />
            <ul className={style.todoblock}>
                {
                    todos.map((todo, index) => {
                        return (
                            <Todoitem key={index}
                                name={todo}
                                index={index}
                                deleteTodo={deleteTodo}
                            >
                            </Todoitem>
                        )
                    })
                }
            </ul>
            <AddTodo addTodo={addTodo} inputValue={inputValue} setInputValue={setInputValue} />
            <form onSubmit={handleSubmit}>
                <select value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Грейпфрут</option>
                    <option value="lime">Лайм</option>
                    <option value="coconut">Кокос</option>
                    <option value="mango">Манго</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment >
    );
}

export default ListTodo;