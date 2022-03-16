import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

  const navigate = useNavigate()
  const { dispatch } = useContext( AuthContext )

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Pedro'}
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button onClick={ handleLogin } className='btn btn-primary'>Login</button>
    </div>
  )
}
