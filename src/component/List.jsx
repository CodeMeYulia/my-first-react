import React from "react";
import Listitem from "Listitem";

function List() {

    return (
        <React.Fragment>
            <Listitem name=" поздравить всех с д.р. Ламы" />
            <Listitem name=" посмотреть урок по реакт-компонентам" />
            <Listitem name=" отправить отклик на вакансию" />
            <Listitem name=" укусить за бочок ..." />
            {/* <Charts /> */}
        </React.Fragment>
    );
}

export default List;