import React, { useState } from "react";
import style from './Counter.module.css';
import Charts from "../chart/Charts";
// import Form from "../formInput/Form";
import CardList from "../cardlist/CardList"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <div className={style.counter}>
                <button type="button" className={style.btnAdd}
                    onClick={handleClick}>
                    +плюс один
                </button>
                Вы нажали {count} раз.
            </div>
            <CardList />
            <hr />
            <Charts />
            <hr />
            {/* <div className="myForm">
                <Form />
            </div> */}


        </div>
    )
}


