import React from "react";

//импортируем компонент
import Card from '../card/Card';

//функциональный компонент
function CardList() {
    return (
        <div className="cards">
            <Card
                title="Зимние ботинки"
                price={99}
                description="Такие только у нас"
                imgLink="images/01.jpg"
            />
            <Card
                title="Тапки пляжные"
                price={19}
                description="Такие только у вас"
                imgLink="images/02.jpg"
            />
            <Card
                title="Туфли на корпоратив"
                price={2088}
                description="Таких нет, забудьте"
                imgLink="images/03.jpg"
            />
        </div>
    )
}

export default CardList;