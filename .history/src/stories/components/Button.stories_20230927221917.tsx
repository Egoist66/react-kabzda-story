import { FC, useId, useState } from "react";
import { useButtonReducer } from "../../hooks/useButtonReduer";




type ButtonProps = {
  isColoredBtn?: boolean
  isDisabled?: boolean
}

const Button: FC<ButtonProps> = ({isColoredBtn = false, isDisabled = false}) => {
  
  const {isColored, makeButtonColor} = useButtonReducer({
    isColored: isColoredBtn
  })

  return (

    <button disabled={isDisabled} style={{backgroundColor: isColored ? 'red' : 'blue'}} onClick={makeButtonColor}>
      Click me
    </button>
  )
}

export const StoryButton: FC<ButtonProps> = ({isColoredBtn}) => {

  const [isColored, setColor] = useState<boolean>(false)


  return (
    <div>

      <div>
        <label htmlFor={useId() + 'color'}>Red</label>
        <input id={useId() + 'color'} type="radio" name="color" />
        <input id={useId() + 'color'} type="radio" name="color" />
      </div>

      <Button isDisabled={true} isColoredBtn={isColored ?? isColoredBtn} />

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