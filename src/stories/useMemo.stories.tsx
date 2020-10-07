import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++){
            let fake = 0
            while(fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])



    for (let i = 1; i <= b; i++){
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map( (u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret) // при изменении стейта в Example компонента User не будет перересовываться

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sergeya", "Kitia", "Gleba"])

    const newUsersArr = useMemo(() => {
        const newUsersArr = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newUsersArr
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        <button onClick={ () => addUser()}>add user</button>
        {counter}
        <Users users={newUsersArr}/>
    </>
}