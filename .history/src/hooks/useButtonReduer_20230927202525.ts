import { useReducer } from "react"
import { ButtonActionType } from "../actions/button-actions"

type InitialStateType = {
    background: string

}

const intialState = {
    background: ''
}

const reducer = (state: InitialStateType, action: ButtonActionType) => {
    switch(action.type){

    }
}

const useButtonReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)


}
