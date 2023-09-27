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

    const makeButtonColor = () => {
        dispatch(ButtonActionTypeAC())
    }

   

    return {
        makeButtonColor,
        ...state,

    }

}
