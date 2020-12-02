import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const useEffectExample = () => {

    console.log('useEffectExample')

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
        {counter}
        <button onClick={ () => {setFake(fake + 1)}}>Fake +</button>
        {fake}
        </>
}

// export const setTimeoutExample = () => {
//
//     console.log('setTimeoutExample')
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     // пример setTimeout:
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         console.log('setTimeout')
//     //         document.title = counter.toString()
//     //     }, 1000)
//     // }, [counter])
//
//     // пример setInterval
//     // useEffect(() => {
//     //     setInterval(() => {
//     //         console.log('tick')
//     //         setCounter(state => state + 1)
//     //     }, 1000)
//     // }, [])
//
//
//
//     return <>
//         {/*<button onClick={ () => {setCounter(counter + 1)}}>Counter +</button>*/}
//         <div>counter: {counter}</div>
//         {/*<button onClick={ () => {setFake(fake + 1)}}>Fake +</button>*/}
//         <div>fake: {fake}</div>
//     </>
// }
