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

  const id1 = useId() + 'color'
  const id2 = useId() + 'color'

  return (
    <div>

      <div style={{display: 'flex', gap: 30}}>
        <div>
          <label htmlFor={id1}>Red</label>
          <input id={id1} type="radio" name="color" />
        </div>

        <div>
          <label htmlFor={id2}>Blue</label>
          <input id={id2} type="radio" name="color" />
        </div>
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