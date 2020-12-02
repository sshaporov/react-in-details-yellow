import React from "react"
import {ClockViewPropsType} from "./Clock";

const get2digitsString = (value: number) => {
    return  value < 10 ? '0' + value : value
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            {get2digitsString(date.getHours())}:{get2digitsString(date.getMinutes())}:{get2digitsString(date.getSeconds())}
        </>
    )
}