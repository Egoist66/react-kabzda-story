import { FC } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";


// type StateType = {
//   isColored: boolean

// }


// const reducer = (state: StateType, action: ButtonActionType) : StateType => {
//   switch(action.type){
      
//       case 'BUTTON-MAKE-COLORED': 
//           return {
//               isColored: !state.isColored
//           }
      

//       default: 
//           return state
//   }
// }

// export const useButtonReducer = (initialState: StateType) => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const makeButtonColor = () => {
//       dispatch(ButtonActionTypeAC())
//   }

 

//   return {
//       makeButtonColor,
//       ...state,

//   }

// }


export const Button: FC = () => {

  const {isColored, makeButtonColor} = useButtonReducer({
    isColored: false
  })

  return (

    <button style={{backgroundColor: isColored ? 'red' : 'blue'}} onClick={makeButtonColor}>
      Click me
    </button>
  )
}

export default {
  title: 'Example/ReducerButton',
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],
}