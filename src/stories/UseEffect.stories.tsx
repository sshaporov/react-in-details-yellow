import React, {useEffect, useMemo, useState} from "react";
import {clearTimeout} from "timers";
import Timeout = NodeJS.Timeout;

export default {
    title: 'useEffect demo'
}

// export const useEffectExample = () => {
//
//     console.log('useEffectExample')
//
//     // api.getUsers()
//     // setInterval
//     // indexedDB
//     // document.getElementId
//     // document.title = 'Users '
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     useEffect(() => {
//         console.log('useEffect every render')
//         document.title = counter.toString()
//     })
//
//     useEffect(() => {
//         console.log('useEffect only first render (componentDidMount)')
//         document.title = counter.toString()
//     }, [])
//
//     useEffect(() => {
//         console.log('useEffect first render end every counter change')
//         document.title = counter.toString()
//     }, [counter])
//
//     return <>
//         <button onClick={ () => {setCounter(counter + 1)}}>Counter +</button>
//         {counter}
//         <button onClick={ () => {setFake(fake + 1)}}>Fake +</button>
//         {fake}
//         </>
// }

// export const setTimeoutExample = () => {
//     console.log('setTimeoutExample')
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             console.log('use Effect -> setTimeout')
//             document.title = counter.toString()
//         }, 1000)
//
//         return () => {clearTimeout(timeoutId)}
//
//
//     }, [counter])
//
//
//     return <>
//         <button onClick={ () => {setCounter(counter + 1)}}>Counter +</button>
//         <button onClick={ () => {setFake(fake + 1)}}>Fake +</button>
//     </>
// }
//
// export const setIntervalExample = () => {
//     console.log('setIntervalExample')
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//
//     useEffect(() => {
//
//         const intervalId = setInterval(() => {
//             console.log('use Effect -> setInterval')
//             setCounter(state => state + 1)
//         }, 1000)
//
//         return () => {clearInterval(intervalId)}
//     }, [counter])
//
//     return <>
//         <div>counter: {counter}</div>
//         <div>fake: {fake}</div>
//     </>
// }

export const KeysTrackerExample = () => {
    console.log('KeysTrackerExample')

    const [text, setText] = useState('')

    console.log('Rendered with text: ', text)

    // отписка с функцией колбэком в setText
    // useEffect(() => {
    //     const handler = (e: KeyboardEvent) => {
    //         console.log(e.key)
    //         setText((state) => state + e.key)
    //     }
    //     window.addEventListener('keypress', handler)
    //     return () => window.removeEventListener('keypress', handler)
    // },[])

    // отписка с замыканием и зависимостью от text
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => window.removeEventListener('keypress', handler)
    },[text])


    return <>
        Typed text: {text}
    </>
}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [text, setText] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText('3sec expired')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    },[text])


    return <>
        Typed text: {text}
    </>
}


