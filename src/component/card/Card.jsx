import React from "react";

function Card(props) {

    return (
        <div className="card">
            <div className="card-body">
                <img src={props.imgLink} alt={props.title} />
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <span className="card-price">${props.price}</span>
                <button className="card-add">Заказать</button>
            </div>
        </div>
    )
}

export default Card