export type ButtonActionType = {
    type: 'BUTTON-MAKE-BLUE' | 'BUTTON-MAKE-RED'
    color: boolean
}

export const ButtonActionTypeAC = (color: boolean): ButtonActionType => {
    return {type: 'BUTTON-MAKE-BLUE', color}
}