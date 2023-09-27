export type ButtonActionType = {
    type: 'BUTTON-MAKE-COLORED'
    color: boolean
}

export const ButtonActionTypeAC = (color: boolean): ButtonActionType => {
    return {type: 'BUTTON-MAKE-COLORED', color}
}