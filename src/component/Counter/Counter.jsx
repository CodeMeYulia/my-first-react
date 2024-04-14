import React, { useState } from "react";
import style from './Counter.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div className={style.counter}>
            <button type="button" className={style.btnAdd}
                onClick={handleClick}>
                +плюс один
            </button>
            Вы нажали {count} раз.
        </div>
    )
}


