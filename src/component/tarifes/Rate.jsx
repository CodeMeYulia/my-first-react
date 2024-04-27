import React from "react";
import style from './Rate.module.css'

export default function Rate(props) {
    let { id, title, price, currency, volume, note, classCard, isActive, handleSelect } = props;

    let colorBackHeader;
    let colorBackBody;

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

    classCard = isActive ? style.activeTarif : style.tarif;
    console.log(id, classCard, isActive);

    return (
        <div id={id} onClick={handleSelect} className={classCard}>
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