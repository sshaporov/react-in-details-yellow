import React, {useCallback, useMemo, useState} from "react";

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

export const LikeUseMemo = () => {
    console.log('LikeUseMemo')
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


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["css", "html", "react"])

    // const addBook = () => {
    //     const newBooks = [...books, 'Angular' + new Date().getTime()]
    //     setBooks(newBooks)
    // }

    // const memoizedAddBook = useMemo(() => {
    //     return addBook
    // }, [books])

    const memoizedAddBook = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])


    return <>
        <button onClick={ () => {setCounter(counter + 1)}}>+</button>
        {counter}
       <Book addBook={memoizedAddBook}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => {props.addBook()}}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)