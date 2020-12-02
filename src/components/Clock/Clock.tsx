import React, {useEffect, useState} from "react"
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ModeType = {
    mode: 'digital' | 'analog'
}

export const Clock: React.FC<ModeType> = ({mode}) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // зачистка интервала после умирания уомпоненты
        return () => {
            clearInterval(intervalId)
        }
    },[])

    switch (mode) {
        case 'analog':
            return <AnalogClockView date={date}/>
        case 'digital':
        default:
            return <DigitalClockView date={date}/>
    }
}

export type ClockViewPropsType = {
    date: Date
}
