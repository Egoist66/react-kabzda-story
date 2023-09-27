import {FC, FormEvent, FocusEvent, useState, ChangeEvent, useEffect} from "react";
import '../styles/form.css'
import {useInput} from "../../hooks/useInput";


export const FormWithHooks: FC = () => {
    const email = useInput('', {
        minLength: 3
    })
    const password = useInput('', {
        minLength: 5
    })


    return (
        <div className={'form-wrapper'}>


            <form onSubmit={(e) => e.preventDefault()} id={'form'}>
                <h1>Регистрация</h1>

                <pre>
                    {JSON.stringify(email.state, null, 2)}
                </pre>

                <pre>
                    {JSON.stringify(password.state, null, 2)}
                </pre>

                <input
                    onChange={email.onChangeValue}
                    name={'email'}
                    value={email.value}
                    onBlur={email.onBlurChange}
                    placeholder={'Enter you email...'}
                    type="email"
                />
                {(email.isDirty && email.isEmpty) ? <div style={{color: "red"}}>
                    Поле не может быть пустым
                </div>: email.minLengthError ? <div style={{color: "red"}}>Минимальное значение 3</div> : null}

                <input
                    onChange={password.onChangeValue}
                    value={password.value}
                    onBlur={password.onBlurChange}
                    name={'password'}
                    placeholder={'Enter your password'}
                    type="password"
                />


                <button disabled={email.minLengthError} type={'submit'}>Зарегистрироваться</button>
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
