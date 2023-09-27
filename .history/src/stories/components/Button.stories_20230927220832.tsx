import { FC } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";



type ButtonProps = {
  isColoredBtn?: boolean
}

const Button: FC<ButtonProps> = ({isColoredBtn = false}) => {
  

  const {isColored, makeButtonColor} = useButtonReducer({
    isColored: isColoredBtn
  })

  return (

    <button style={{backgroundColor: isColored ? 'red' : 'blue'}} onClick={makeButtonColor}>
      Click me
    </button>
  )
}

export const StoryButton: FC<ButtonProps> = ({isColoredBtn}) => {

  return <Button isColoredBtn={isColoredBtn} />
}


export default {
  title: 'Example/ReducerButton',
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],
}