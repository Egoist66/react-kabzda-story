import {ChangeEvent, FocusEvent, useRef, useState} from "react";
import {Button} from "../components/Button";
import {action} from '@storybook/addon-actions'

export const UncontrolledInput = () => <input placeholder={'enter text'} type="text"/>
export const ControlledFixedInputWithDefault = () => <input defaultValue={'Hello'} placeholder={'enter text'} type="text"/>
export const ControlledFixedInputWithHardCode = () => <input value={'Helloo'} placeholder={'enter text'} type="text"/>
export const UnControlledInputWithState = () => {

    const [text, setText] = useState<string>('')

    return (
        <>

            <input
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
                placeholder={'enter text'}
                type="text"
            />

            <div>{text}</div>

        </>
    )
}

export const ControlledInputWithRef = () => {

    const [value, setValue] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    const getValue = () => {
        if(ref.current){
            setValue(ref.current.value)
            ref.current.value = ''

        }
    }

    return (
        <>

            <input ref={ref} placeholder={'enter text'} type="text"
            />

            <Button text={'Get Value'} onClickHandler={getValue} />


            <div>{value}</div>
        </>
    )
}

export const ControlledDoubleFlowInput = () => {
    const [value, setValue] = useState<string>('')
    const [isFocused_one, setFocusOne] = useState<boolean>(false)
    const [isFocused_second, setFocusSecond] = useState<boolean>(false)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }


    return (
        <div>

            <input id={'one'} value={value}
                   onFocus={() => setFocusOne(true)}
                   onBlur={() => setFocusOne(false)}
                   onChange={onChangeValue}
                   placeholder={isFocused_one ? 'Enter value' : 'OutValue'}
                   type="text"
            />

            <input
                id={'second'}
                onFocus={() => setFocusSecond(true)}
                onBlur={() => setFocusSecond(false)}
                value={value}
                onChange={onChangeValue}
                placeholder={isFocused_second ? 'Enter value' : 'OutValue'}
                type="text"
            />

        </div>
    )
}

export const OutControlledInput = () => {

    const [parentValue, setParentValue] = useState<string>('dfdf')


    return (
        <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)} type="text"/>
    )
}

export const OutControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)


    return (

        <>

            <input
                checked={parentValue}
                onChange={(e) => setParentValue(e.currentTarget.checked)}
                type="checkbox"
            />

            <p>{parentValue.toString()}</p>

        </>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    return (
        <>

            <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)}
                value={value} name="select" >
                <option>Выберите значение</option>
                <option value="1">Minsk</option>
                <option value="2">New York</option>
                <option value="3">Vegas</option>
            </select>

            {value}

        </>
    )
}







export default {
    title: 'Example/Inputs',
    //component: UncontrolledInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

