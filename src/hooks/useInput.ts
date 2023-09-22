import {ChangeEvent, FocusEvent, useState} from "react";

type useInputStateType = {
    value: string
    isDirty: boolean
}
export const useInput = (initialValue: string) => {

    const [state, setState] = useState<useInputStateType>({
        isDirty: false,
        value: ''
    })
    const {isDirty, value} = state
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            value: e.currentTarget.value,
            isDirty: true
        })
    }

    const onBlurChange = (e: FocusEvent<HTMLInputElement>) => {
        setState({
            ...state,
            isDirty: true
        })
    }

    return {
        onBlurChange,
        isDirty,
        value,
        onChangeValue
    }
}