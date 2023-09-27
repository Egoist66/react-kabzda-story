import { FC } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";

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