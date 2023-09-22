import {FC, FormEvent, FocusEvent, useState, ChangeEvent, useEffect} from "react";
import '../styles/form.css'
import {useInput} from "../../hooks/useInput";


export const FormWithHooks: FC = () => {
    const email = useInput('')
    const password = useInput('')

    return (
        <div className={'form-wrapper'}>


            <form onSubmit={(e) => e.preventDefault()} id={'form'}>
                <h1>Регистрация</h1>

                <input
                    onChange={email.onChangeValue}
                    name={'email'}
                    value={email.value}
                    onBlur={email.onBlurChange}
                    placeholder={'Enter you email...'}
                    type="email"
                />


                <input
                    onChange={password.onChangeValue}
                    value={password.value}
                    onBlur={password.onBlurChange}
                    name={'password'}
                    placeholder={'Enter your password'}
                    type="password"
                />


                <button type={'submit'}>Зарегистрироваться</button>
            </form>
        </div>
    )
}


export default {
    title: 'Example/FormWithHooks',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}
