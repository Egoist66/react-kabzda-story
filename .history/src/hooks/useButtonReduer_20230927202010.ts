import { useReducer } from "react"
import { ButtonActionType } from "../actions/button-actions"

type InitialStateType = {
    background: 'red' | 'blue' |

}

const intialState = {
    background: ''
}

const reducer = (state, action: ButtonActionType) => {
    switch(action.type){

    }
}

const useButtonReducer = () => {
    const [state, dispatch] = useReducer(reducer)
}