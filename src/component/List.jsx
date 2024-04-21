import React from "react";
import Listitem from "./Listitem";
import Addbutton from './addbutton/Addbutton';

function List() {

    const items = [
        { id: 1, name: "посмотреть урок", isChecked: "true", color: "yellow" },
        { id: 2, name: "сделать домашку", isChecked: "false", color: "green" },
        { id: 3, name: "сделать зарядку", isChecked: "false", color: "red" },
        { id: 4, name: "помедитировать", isChecked: "false", color: "blue" }
    ];

    return (
        <React.Fragment>
            <ul className="todoblock">
                {
                    items.map((item) => {
                        return <Listitem name={item.name} color={item.color} checked={item.isChecked} />
                    })
                }
            </ul>
            <Addbutton />
        </React.Fragment>
    );
}

export default List;