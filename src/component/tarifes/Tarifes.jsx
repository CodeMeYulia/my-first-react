import React, { useState } from "react"
import style from './tarifes.module.css'
import styles from './Rate.module.css'
import Rate from "./Rate"

export default function Tarifes() {
    const rates = [
        { id: 1, title: "Безлимитный 300", price: "300", currency: "руб", volume: "10", note: "Объем включенного трафика не ограничен" },
        { id: 2, title: "Безлимитный 450", price: "450", currency: "руб", volume: "50", note: "Объем включенного трафика не ограничен" },
        { id: 3, title: "Безлимитный 550", price: "550", currency: "руб", volume: "100", note: "Объем включенного трафика не ограничен" },
        { id: 4, title: "Безлимитный 1000", price: "1000", currency: "руб", volume: "200", note: "Объем включенного трафика не ограничен" }
    ]

    const [isActive, setActive] = useState(false);

    const handleSelect = (e) => {
        setActive(!isActive);
        console.log(e.target);
    }

    return (
        <div className='tarifes'>
            {
                rates.map((item, index) => {
                    return (
                        <Rate
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            currency={item.currency}
                            volume={item.volume}
                            note={item.note}
                            isActive={isActive}
                            handleSelect={handleSelect}
                        />
                    )
                })
            }
        </div>
    )
}