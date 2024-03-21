import React from "react";
import Form from "../formInput/Form";
import Charts from "../chart/Charts";
import CardList from "../cardlist/CardList"
import HeroList from "../heroes/HeroList"

const Main = () => {
    return (
        <div className="main">
            <h1>Изучаем React</h1>
            <HeroList />
            <br />
            <CardList />
            <Charts />
            <div className="myForm">
                <Form />
            </div>
        </div>
    )
}

export default Main