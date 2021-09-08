import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterUser } from '../hooks/useRegisterUser'
import { useLoginUser } from '../hooks/useLoginUser'


export const NotRegisteredUser = () => {
    const { register, data : dataRegister, loading:  loadingRegister, error: errorRegister} = useRegisterUser('')    
    const { login, data: dataLogin, loading: loadingLogin, error: errorLogin} = useLoginUser('')    
    
    const errorMsgRegister = errorRegister && 'El usuario ya existe o hay algún problema';
    const errorMsgLogin = errorLogin && 'La contraseña no es correcta o el usuario no existe';
    
    return (
      <Context.Consumer>
          {
              ({activateAuth}) => {
                  const registerAction = ({email, password}) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables })
                      .then(activateAuth)
                  }
                  const loginAction = ({email, password}) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables })
                      .then(activateAuth)
                  }
                  
                  return <>
                      <UserForm disabled={loadingRegister} error={errorMsgRegister} onSubmit={registerAction} title='Registrarse'/>
                      <UserForm disabled={loadingLogin} error={errorMsgLogin} onSubmit={loginAction} title='Iniciar Sesion'/>
                  </>
              }
          }
      </Context.Consumer>
  )
}




