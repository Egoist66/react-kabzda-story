import {reducer, StateType} from "../hooks/useButtonReduer";
import {ButtonActionTypeAC} from "../actions/button-actions";

export  {}

test('reducer should change value to opposite', () => {

    const state:StateType = {
        isColored: false
    }

    const endState = reducer(state, ButtonActionTypeAC())

   expect(endState.isColored).toEqual(true)
})