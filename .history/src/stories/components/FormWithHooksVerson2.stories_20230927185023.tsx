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
                    onChange={email.OnChangeValue}
                    name={'email'}
                    value={email.value}
                    onBlur={email.OnChangeBlurDirty}
                    placeholder={'Enter you email...'}
                    type="email"
                />
                
                <div style={{color: 'red'}}>{email.errorFieldsMessage}</div>

                <input
                    onChange={password.OnChangeValue}
                    value={password.value}
                    onBlur={password.OnChangeBlurDirty}
                    name={'password'}
                    placeholder={'Enter your password'}
                    type="password"
                />

                    <div style={{color: 'red'}}>{password.errorFieldsMessage}</div>


                <button disabled={email.isFormDisabled || password.isFormDisabled} type={'submit'}>Зарегистрироваться</button>
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