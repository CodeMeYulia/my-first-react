import style from './listitem.module.css'

function Listitem(props) {
    return (
        <div className={style.item}>
            <input type="checkbox" className={style.checkbox}></input>
            <label className={style.label}> {props.name} </label>
            <button className={style.button}>удалить</button>
        </div >
    );
}

export default Listitem;
