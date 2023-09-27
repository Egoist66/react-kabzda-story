import { FC, useEffect, useId, useState } from "react";
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



  return (
    <div>


      <Button isDisabled={true} isColoredBtn={isColoredBtn} />


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