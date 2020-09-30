import React from "react";

export default {
    title: 'React MEMO Demo'
}

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map( (u,i) => <div>{u}</div>)}
    </div>
}