import React from "react";

export interface DayProps {
    name: string;
    condition: string;
    temperature: number;
    isSelected?: boolean;
}

export const Day: React.FC<DayProps> = ({name, condition, temperature, isSelected}) => {
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