import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterUser } from '../hooks/useRegisterUser'
import { useLoginUser } from '../hooks/useLoginUser'


export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context)

    const { register, data : dataRegister, loading:  loadingRegister, error: errorRegister} = useRegisterUser('')    
    const { login, data: dataLogin, loading: loadingLogin, error: errorLogin} = useLoginUser('')    
    
    const errorMsgRegister = errorRegister && 'El usuario ya existe o hay algún problema';
    const errorMsgLogin = errorLogin && 'La contraseña no es correcta o el usuario no existe';

    const registerAction = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        register({ variables })
        .then(({data}) => {
            const { signup } = data
          activateAuth(signup)
        })
    }

    const loginAction = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        login({ variables })
        .then(({data}) => {
            const { login } = data
          activateAuth(login)
        })
    }
    
    return (
      <>
        <UserForm
          disabled={loadingRegister}
          error={errorMsgRegister}
          onSubmit={registerAction}
          title="Registrarse"
        />
        <UserForm
          disabled={loadingLogin}
          error={errorMsgLogin}
          onSubmit={loginAction}
          title="Iniciar Sesion"
        />
      </>
    );
}




