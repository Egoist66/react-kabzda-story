import {OnOff} from "../../components/OnOff";
import {memo, useState} from "react";
export default  {
    title: 'Memo/MemoComponents',
    tags: ['autodocs'],
}

const NewMessagesCounter = (props: {count: number}) => {
    return <h2>{props.count}</h2>
}
const UsersDeault = (props: {users: string[]}) => {
    console.log('users')
    return <div>{props.users.map((u, i: number) => <div key={u}>{u}</div>)}</div>

}

const UsersMemo = memo(UsersDeault)

export const MemoСomponent = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>([
        'Farid', 'Nastya', 'Nikita'
    ])


    return (
        <>
            <button onClick={() => {
                setCounter(counter => counter + 1)
            }}>Increment</button>

            <button onClick={() => setUsers([...users, crypto.randomUUID()])}>Add user</button>

            <NewMessagesCounter count={counter} />
            <UsersMemo users={users} />

        </>
    )
}