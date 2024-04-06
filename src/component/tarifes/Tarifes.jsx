import React from "react"
import style from './tarifes.module.css'
import tarifbase from './tarifbase.module.css'
import tarifSelected from './tarifSelected.module.css'

export default function Rate(props) {
    const { title, price, currency, volume, note, id } = props;
    let colorBackHeader;
    let colorBackBody;
    let size;

    if (id === 1) {
        colorBackHeader = style.cardHeaderBlue
        colorBackBody = style.cardBodyBlue
        size = tarifbase.tarif
    } else if (id === 2) {
        colorBackHeader = style.cardHeaderGreen
        colorBackBody = style.cardBodyGreen
        size = tarifbase.tarif
    } else if (id === 3) {
        colorBackHeader = style.cardHeaderPink
        colorBackBody = style.cardBodyPink
        size = tarifSelected.tarif
    } else {
        colorBackHeader = style.cardHeaderBlack
        colorBackBody = style.cardBodyBlack
        size = tarifbase.tarif
    }

    return (
        <div className={size} id={id}>
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