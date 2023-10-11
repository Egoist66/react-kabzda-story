import {FC, useState} from "react";
import '../styles/select.scss'
import {Select} from "../../components/Select";

type OptionsType = {
    data: Array<{ name: string, id: string }>
    setValue: (() => void) | undefined
}

function Options({data, setValue}: OptionsType) {
    return (
        <>
            {data.map(d => (
                <div id={d.id} className={'options'} onClick={setValue}
                     key={d.id}>{d.name}</div>
            ))}

        </>
    )
}

type CustomSelectStateType = {
    data: Array<{ name: string, id: string }>
}

export const CustomSelect: FC = () => {
    const [state, setState] = useState<CustomSelectStateType>({
        data: [
            {name: 'Jack', id: crypto.randomUUID()},
            {name: 'Peter', id: crypto.randomUUID()},
            {name: 'Andrew', id: crypto.randomUUID()},
            {name: 'Viktor', id: crypto.randomUUID()},
            {name: 'Petya', id: crypto.randomUUID()},
            {name: 'Anakin', id: crypto.randomUUID()},

        ]
    })


    return (
        <Select
            render={
            (setValue) =>
                <Options data={state.data} setValue={setValue}/>
            }
        />

    )
}


export default {
    title: 'Example/Select',
    parameters: {},
    component: CustomSelect,
    tags: ['autodocs'],
}
