import React, { useState } from "react";
import style from './tarifes.module.css'

export default function Rate(props) {
    let { title, price, currency, volume, note, id } = props;

    let colorBackHeader;
    let colorBackBody;
    let classCard = style.tarif

    if (id === 1) {
        colorBackHeader = style.cardHeaderBlue
        colorBackBody = style.cardBodyBlue
    } else if (id === 2) {
        colorBackHeader = style.cardHeaderGreen
        colorBackBody = style.cardBodyGreen
    } else if (id === 3) {
        colorBackHeader = style.cardHeaderPink
        colorBackBody = style.cardBodyPink
    } else {
        colorBackHeader = style.cardHeaderBlack
        colorBackBody = style.cardBodyBlack
    };

    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
        console.log('mao');
        classCard = isActive ? style.tarif : style.activeTarif;
    };

    return (
        <div id={id} onClick={handleClick} className={classCard}>
            <div className={colorBackHeader}>
                <h4 className={style.cardTitle}>{title}</h4>
            </div>
            <div className={colorBackBody}>
                <p className={style.cardMoney}>{currency}</p>
                <p className={style.cardPrice}>{price}<span className={style.text}>/мес</span></p>
                <div className={style.cardFooter}>
                    <p className={style.intVolume}>До {volume} Мбит/сек</p>
                    <p className={style.cardNote}>{note}</p>
                </div>
            </div>
        </div>
    )
}