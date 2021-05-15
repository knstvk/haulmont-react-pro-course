import React from "react";

interface Props {
    name: string;
    condition: 'sunny' | 'cloudy' | 'rainy';
    temperature: number;
    isSelected?: boolean;
}

export const Day: React.FC<Props> = ({name, condition, temperature, isSelected}) => {
    let classname = 'day ' + condition
    if (isSelected) {
        classname += ' selected'
    }
    return (
        <div className={classname}>
            <p>{name}</p>
            <span>{temperature}</span>
        </div>
    )
}