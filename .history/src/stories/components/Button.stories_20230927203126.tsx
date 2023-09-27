import { FC } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";

export const Button: FC = () => {

  const {makeButtonBlue, makeButtonRed} = useButtonReducer({
    background: 'red'
  })

  return (

    <button>
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