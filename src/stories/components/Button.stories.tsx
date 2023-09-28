import { FC } from "react";
import {useButtonReducer } from "../../hooks/useButtonReduer";
import '../styles/button.scss'



type ButtonProps = {
  isColoredBtn?: boolean
  isDisabled?: boolean
  color1: string
  color2: string
}

export const Button: FC<ButtonProps> = ({isColoredBtn = false, color1, color2, isDisabled = false}) => {
  
  const {isColored, makeButtonColor} = useButtonReducer({
    isColored: isColoredBtn
  })

  return (

    <button
        disabled={isDisabled}
        style={{backgroundColor: isColored ? color1 : color2}}
        onClick={makeButtonColor}>
      Click me
    </button>
  )
}


export const _Button:FC = () => {
  return (
      <Button color1={'yellow'} color2={'violet'} />
  )
}

export const StoryButton: FC<ButtonProps> = ({isColoredBtn, isDisabled, color1, color2}) => {

  return (
    <div>


      <Button
          color1={color1}
          color2={color2}
          isDisabled={isDisabled}
          isColoredBtn={isColoredBtn}
      />

   

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