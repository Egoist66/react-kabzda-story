import { useReducer } from "react"
import { ButtonActionType, ButtonActionTypeAC } from "../actions/button-actions"

export type StateType = {
    isColored: boolean

}


export const reducer = (state: StateType, action: ButtonActionType) : StateType => {
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

type CreatePortalProps = {
    domNode: HTMLElement
    position: 'beforeend' | 'beforebegin' | 'afterbegin' | 'afterend'
    children: string[]
}

export const createPortal = ({domNode, position, children} : CreatePortalProps) => {
    children.forEach((child: any) => {
        domNode.insertAdjacentHTML(position, child)
    })
}

