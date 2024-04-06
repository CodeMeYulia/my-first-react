import { useState } from 'react';
import style from './listitem.module.css'

function Listitem(props) {
    const [checked, setChecked] = useState(false);
    let classNameLabel = "label";
    const hadleCheckedState = () => {
        setChecked(!checked);
        classNameLabel += 'labelDone';
    }


    return (
        <div className={style.item} {...props}>
            <input
                type="checkbox"
                className={style.checkbox}
                checked={props.isChecked}
                onClick={hadleCheckedState}
            ></input>


            <label className={classNameLabel}
                style={
                    // checked ? { textDecorationLine: "line-through" } : { textDecorationLine: "none" }
                    { color: props.color }
                }>{props.name}</label>
            <button className={style.button}>удалить</button>
        </div >
    );
}

export default Listitem;

