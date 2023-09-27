import { useForm } from '../../hooks/useForm';
import '../styles/form.css'
import { FC, useEffect } from 'react';


export const FormWithHooks: FC = () => {
    const email = useForm({name: 'email'}, {
        maxLength: 25,
        minLength: 10
    })
    const password = useForm({name: 'password'}, {
        maxLength: 8,
        minLength: 3
    })

    useEffect(() => {
        email.requireField()
        password.requireField()

    }, [email.value, password.value])

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
    title: 'Example/FormWithHooksVersion2',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}
