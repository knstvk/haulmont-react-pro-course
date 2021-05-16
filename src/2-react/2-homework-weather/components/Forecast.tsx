import {Day, DayProps} from "./Day";

import data from '../mock-data/forecast.json';

export const Forecast = () => {
    const daysData: DayProps[] = data.slice(0, 6).map(it => {
        return {
            name: getDayName(new Date(it.day)),
            temperature: it.temperature,
            condition: it.type
        }
    })

    return (
        <div className="forecast">
            {daysData.map((it, idx) => {
                const dayProps = {...it, isSelected: idx === 0}
                return (<Day {...dayProps}/>)
            })}
        </div>
    )
}

function getDayName(date: Date) {
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return weekDays[date.getDay()];
}