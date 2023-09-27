import { error } from 'console';
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

    // useEffect(() => {
    //     email.requireField()
    //     password.requireField()

    // }, [email.value, password.value])

    password.WatchFields({
        callbacks: [password.requireField],
        values: [password.value]
    })
    email.WatchFields({
        callbacks: [email.requireField],
        values: [email.value]
    })

    // email.watchFields([email.value], email.requireField)
    // password.watchFields([password.value], password.requireField)

    return (
        <div className={'form-wrapper'}>


            <form onSubmit={(e) => e.preventDefault()} id={'form'}>
                <h1>Регистрация</h1>

                <pre>
                    {JSON.stringify(email.state, null, 2)}
                    {JSON.stringify(password.state, null, 2)}
                </pre>

                <pre>
                    password - isDirty: { password.isDirty.toString()}
                    <br />
                    email - isDirty: { email.isDirty.toString()}
                </pre>

                <pre>
                    password - Error: {password.errorFieldsMessage}
                    <br />
                    email - Error: { email.errorFieldsMessage}
                </pre>

             

                <input
                    onChange={email.OnChangeValue}
                    name={'email'}
                    value={email.value}
                    onBlur={email.OnChangeBlurDirty}
                    placeholder={'Enter you email...'}
                    type="email"
                />
                
            {email.isDirty ? <div style={{color: 'red'}}>{email.errorFieldsMessage}</div>: null}
                <input
                    onChange={password.OnChangeValue}
                    value={password.value}
                    onBlur={password.OnChangeBlurDirty}
                    name={'password'}
                    placeholder={'Enter your password'}
                    type="password"
                />

                {password.isDirty ? <div style={{color: 'red'}}>{password.errorFieldsMessage}</div>: null}


                <button disabled={email.isFormDisabled || password.isFormDisabled} type={'submit'}>Зарегистрироваться</button>
            </form>
        </div>
    )
}


export default {
    title: 'Example/FormWithHook',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}
