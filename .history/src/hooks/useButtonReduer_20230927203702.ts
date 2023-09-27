import { useReducer } from "react"
import { ButtonActionType, ButtonActionTypeAC } from "../actions/button-actions"

type StateType = {
    isColored: boolean

}


const reducer = (state: StateType, action: ButtonActionType) : StateType => {
    switch(action.type){
        
        case 'BUTTON-MAKE-COLORED': 
            return {
                isColored: !state.isColored
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
