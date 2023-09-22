import {FC, FormEvent, FocusEvent, useState, ChangeEvent, useEffect} from "react";
import '../styles/form.css'

type FormStateType = {
    password: string
    email: string,
    formStatus: {
        emailDirty: boolean,
        passwordDirty: boolean
    },
    formError: {
        emailError: string,
        passwordError: string
    }
}

type FormStatus = {
    emailDirty?: boolean,
    passwordDirty?: boolean
}
type FormError = {
    emailError?: string,
    passwordError?: string
}

export const FormWithoutHooks: FC = () => {

    const [state, setState] = useState<FormStateType>({
        email: '',
        password: '',
        formStatus: {
            emailDirty: false,
            passwordDirty: false
        },
        formError: {
            emailError: 'Email не может быть пустым',
            passwordError: 'Password не может быть пустым'
        }
    })

    const [validState, setValidState] = useState<{isFormValid: boolean}>({
        isFormValid: false
    })

    const {email, password, formError, formStatus} = state

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {



        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!regEmail.test(String(e.currentTarget.value).toLowerCase())){

            setState({
                ...state,
                email: e.currentTarget.value,
                formStatus: {
                    ...state.formStatus,
                    emailDirty: true
                },
                formError: {
                    ...state.formError,
                    emailError: 'Некорректный email'
                }
            })


        }
        else {
            setState({
                ...state,
                email: e.currentTarget.value,
                formStatus: {
                    ...state.formStatus,
                    passwordDirty: true
                },
                formError: {
                    ...state.formError,
                    emailError: ''
                }
            })
        }


    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length < 3 || e.currentTarget.value.length > 8){
            setState({
                ...state,
                password: e.currentTarget.value,
                formStatus: {
                    ...state.formStatus,
                    passwordDirty: true
                },
                formError: {
                    ...state.formError,
                    passwordError: 'Password должен быть не менее 3 но не более 8 символов'
                }
            })

            if(!e.currentTarget.value){
                setState({
                    ...state,
                    password: e.currentTarget.value,
                    formStatus: {
                        ...state.formStatus,
                        passwordDirty: true
                    },
                    formError: {
                        ...state.formError,
                        passwordError: 'Password не может быть пустым'
                    }
                })
            }
        }
        else {
            setState({
                ...state,
                password: e.currentTarget.value,
                formError: {
                    ...state.formError,
                    passwordError: ''
                }
            })
        }
    }

    const showErrors = (status: boolean, error: FormError, message: 'emailError' | 'passwordError') => {
        if (status && error) {
            return <div style={{color: 'red'}}>{error[message]}</div>
        }
    }


    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setState({
                    ...state,
                    formStatus: {
                        ...state.formStatus,
                        emailDirty: true
                    }
                })
                break;

            case 'password':
                setState({
                    ...state,
                    formStatus: {
                        ...state.formStatus,
                        passwordDirty: true
                    }
                })
                break;


        }
    }


    useEffect(() => {
            if(formError.emailError || formError.passwordError){
                setValidState({
                    isFormValid: false
                })
            }
            else {
                setValidState({
                    isFormValid: true
                })
            }
    }, [formError.passwordError, formError.emailError])
    return (
        <div className={'form-wrapper'}>

            <pre style={{fontSize: 18}}>
                <h2>Form State</h2>

                {JSON.stringify(state, null, 2)}
                {JSON.stringify(validState, null, 2)}
            </pre>


            <form onSubmit={(e) => e.preventDefault()} id={'form'}>
                <h1>Регистрация</h1>

                <input
                    onChange={emailHandler}
                    onBlur={blurHandler}
                    value={email}
                    name={'email'}
                    placeholder={'Enter you email...'}
                    type="email"
                />
                {showErrors(
                    formStatus.emailDirty,
                    formError,
                    "emailError"
                )}

                <input
                    onChange={passwordHandler}
                    value={password}
                    onBlur={blurHandler}
                    name={'password'}
                    placeholder={'Enter your password'}
                    type="password"
                />

                {showErrors(
                    formStatus.passwordDirty,
                    formError,
                    "passwordError"
                )}
                <button disabled={!validState.isFormValid} type={'submit'}>Зарегистрироваться</button>
            </form>
        </div>
    )
}


export default {
    title: 'Example/FormWithOutHooks',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}
