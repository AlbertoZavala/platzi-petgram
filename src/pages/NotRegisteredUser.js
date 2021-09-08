import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterUser } from '../hooks/useRegisterUser'


export const NotRegisteredUser = () => {
    const { register, data, loading, error} = useRegisterUser('')
    
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    const onSubmit = ({email, password}) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables })
                        .then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algún problema';

                    return <>
                        <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse'/>
                        <UserForm disabled={loading} error={errorMsg} onSubmit={activateAuth} title='Iniciar Sesión'/>
                    </>
                }
            }
        </Context.Consumer>
        // <h1>NotRegisteredUser</h1>
    )
}


