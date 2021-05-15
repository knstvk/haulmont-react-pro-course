import {Day} from "./Day";

export const Forecast = () => {
    return (
        <div className="forecast">
            <Day name={'Пятница'} condition={'cloudy'} temperature={17} isSelected={true}/>
            <Day name={'Суббота'} condition={'cloudy'} temperature={19}/>
            <Day name={'Понедельник'} condition={'cloudy'} temperature={18}/>
            <Day name={'Вторник'} condition={'cloudy'} temperature={21}/>
            <Day name={'Среда'} condition={'rainy'} temperature={16}/>
            <Day name={'Четверг'} condition={'rainy'} temperature={19}/>
            <Day name={'Пятница'} condition={'sunny'} temperature={26}/>
        </div>
    )
}