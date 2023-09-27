import { useReducer } from "react"
import { ButtonActionType } from "../actions/button-actions"

type InitialStateType = {
    background: 'red' | 'blue'

}

const intialState: InitialStateType = {
    background: 'red'
}

const reducer = (state: InitialStateType, action: ButtonActionType) => {
    switch(action.type){
        

        default: 
            return state
    }
}

const useButtonReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)


}
