import {ChangeEvent, FC, useMemo, useState, memo} from "react";


export default {
    title: 'Memo/MemoComponents',
    tags: ['autodocs'],
}

const NewMessagesCounter = (props: { count: number }) => {
    return <h2>{props.count}</h2>
}
const UsersDeault = (props: { users: string[] }) => {
    console.log('users')
    return <div>{props.users.map((u, i: number) => <div key={u}>{u}</div>)}</div>

}

const UsersMemo = memo(UsersDeault)


const heavyCacl = (number: number) => {
    let res = 3
    for (let i = 0; i < 1000000000; i++) {
        res = res + number
    }

    return res
}

export const useMemoComponent: FC = () => {
    const [a, setA] = useState<number>(3)
    const [text, setText] = useState<string>('')
    const result = useMemo(() => {
        return heavyCacl(a)
    }, [a]);

    //const result = heavyCacl(a)
    const setNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }

    let resultA = 1
    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }


    return (
        <>

            <div>
                <input value={a}
                       onChange={setNumber}
                       type="number"
                />
            </div>

            <input
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
                type="text"
            />


            <hr/>

            <div>Result for A: {resultA}</div>
            <div>Memo result: {result}</div>
            <div>Text: {text}</div>


        </>
    )
}

export const useMemoComponent2: FC = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>([
        'Farid', 'Nastya', 'Nikita', 'Edot', 'Dymich'
    ])


    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > - 1)
    }, [users]);
    return (
        <>
            <button onClick={() => {
                setCounter(counter => counter + 1)
            }}>Increment
            </button>

            <button onClick={() => setUsers([...users, crypto.randomUUID()])}>Add user</button>

            <NewMessagesCounter count={counter}/>
            <UsersMemo users={newUsers}/>

        </>
    )
}