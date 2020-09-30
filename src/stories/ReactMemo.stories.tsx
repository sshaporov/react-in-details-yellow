import React, {useState} from "react";

export default {
    title: 'React.MEMO'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map( (u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret) // при изменении стейта в Example компонента User не будет перересовываться

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sergey", "Kiti", "Gleb"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={ () => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
        </>
}