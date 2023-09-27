export type ButtonActionType = {
    type: 'BUTTON-MAKE-BLUE'
    flag: boolean
}

export const ButtonActionTypeAC = (flag: boolean): ButtonActionType => {
    return {type: 'BUTTON-MAKE-BLUE', flag}
}