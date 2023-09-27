import { useReducer } from "react"
import { ButtonActionType } from "../actions/button-actions"

type StateType = {
    background: 'red' | 'blue'

}

const intialState: StateType = {
    background: 'red'
}

const reducer = (state: StateType, action: ButtonActionType) : StateType => {
    switch(action.type){
        
        case 'BUTTON-MAKE-BLUE': 
            return {
                background: 'blue'
            }
        
        case 'BUTTON-MAKE-RED':
            return {
                background: 'red'
            }

        default: 
            return state
    }
}

const useButtonReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)


}
