import { useReducer } from "react"
import { ButtonActionType, ButtonActionTypeAC } from "../actions/button-actions"

type StateType = {
    background: 'red' | 'blue'
    isColored: boolean

}


const reducer = (state: StateType, action: ButtonActionType) : StateType => {
    switch(action.type){
        
        case 'BUTTON-MAKE-BLUE': 
            return {
                background: 'blue',
                isColored: false
            }
        
        case 'BUTTON-MAKE-RED':
            return {
                background: 'red',
                isColored: true
            }

        default: 
            return state
    }
}

export const useButtonReducer = (initialState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const makeButtonRed = () => {
        dispatch(ButtonActionTypeAC('red'))
    }

    const makeButtonBlue = () => {
        dispatch(ButtonActionTypeAC('blue'))
    }

    return {
        makeButtonBlue,
        makeButtonRed,
        ...state,

    }

}
