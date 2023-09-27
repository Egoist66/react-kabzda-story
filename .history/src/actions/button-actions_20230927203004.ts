export type ButtonActionType = {
    type: 'BUTTON-MAKE-BLUE' | 'BUTTON-MAKE-RED'
    color: 'red' | 'blue'
}

export const ButtonActionTypeAC = (color: 'red' | 'blue'): ButtonActionType => {
    return {type: 'BUTTON-MAKE-BLUE', color}
}