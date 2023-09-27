import { FC, useState } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";



type ButtonProps = {
  isColoredBtn?: boolean
  isDisabled?: boolean
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

  const [isColored, setColor] = useState<boolean>(false)

  return (
    <div>


      <Button isColoredBtn={isColoredBtn} />

    </div>
  )
}


export default {
  title: 'Example/ReducerButton',
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],
}