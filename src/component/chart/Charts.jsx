import React from "react";
import { Chart } from "react-google-charts";

const dataPie = [
    ["Согласия", "Процент от общ. числа старообрядцев"],
    ["Адамантовы", 3],
    ["Бегуны", 7],
    ["Дырники", 12],
    ["Любушкино согласие", 18],
    ["Немоляки", 6],
    ["Нетовское согласие (Спасово)", 11],
    ["Поморское согласие", 5],
    ["Рябиновцы", 8],
    ["Федосеевское согласие", 9],
    ["Часовенное согласие", 6],
    ["Керженское согласие", 15],
];

const optionsPie = {
    title: "Согла́сие (Соглас) — группа объединений христиан в старообрядчестве, придерживающаяся той или иной разновидности вероучительной и обрядовой практики. В соотношении использованы цифры, не имеющие отношения к действительности, носят характер примера",
    PieChart: { textStyle: { fontSize: 6 } },
    is3D: true,
};

const Charts = () => {
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={dataPie}
                options={optionsPie}
                width={"100%"}
                height={"400px"}
            />
        </div>
    )
}

export default Charts


