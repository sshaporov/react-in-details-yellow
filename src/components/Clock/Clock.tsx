import React, {useEffect, useState} from "react"

const get2digitsString = (value: number) => {
    return  value < 10 ? '0' + value : value
}

export const Clock = () => {
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

    return (
        <>
            {get2digitsString(date.getHours())}:{get2digitsString(date.getMinutes())}:{get2digitsString(date.getSeconds())}
        </>
    )
}