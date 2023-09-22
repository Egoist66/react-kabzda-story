import {useEffect, useState} from "react";

type ValidationsType = {
    minLength: number,
    isEmpty: boolean
}

type useValidationStateType = {
    isEmpty: boolean
    minLengthError: boolean,


}

export const useValidation = (value: string, validations: ValidationsType) => {
    const [state, setState] = useState<useValidationStateType>({
        isEmpty: true,
        minLengthError:false
    })

    useEffect(() => {

        for(const validation in validations){
          switch (validation){
              case 'minLength':
                  value.length < validations[validation] ? setState({
                      ...state,
                      minLengthError: true
                  }): setState({
                      ...state,
                      minLengthError: false
                  })
                  break;

              case  'isEmpty':
                    value ? setState({
                        ...state,
                        isEmpty: false
                    }): setState({
                        ...state,
                        isEmpty: true
                    })
                  break;
          }
        }

    }, [value])
}