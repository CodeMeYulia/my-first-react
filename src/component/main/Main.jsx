import React from "react";
import HeroList from "../heroes/HeroList"

const Main = () => {
    return (
        <div className="main">
            <h1>Изучаем React</h1>
            <HeroList />
            <br />
            {/* <div className="divide"></div> */}

        </div>
    )
}

export default Main