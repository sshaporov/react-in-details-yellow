import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const Example1 = () => {

    console.log('Example1')

    // api.getUsers()
    // setInterval
    // indexedDB
    // document.getElementId
    // document.title = 'Users '

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render end every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={ () => {setCounter(counter + 1)}}>Counter +</button>
        <button onClick={ () => {setFake(fake + 1)}}>Fake +</button>
        {counter}
        </>
}
