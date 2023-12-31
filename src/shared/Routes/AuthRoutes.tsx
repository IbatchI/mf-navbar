import { Navigate } from 'react-router-dom'

interface IAuthProtectionProps {
  children: React.ReactNode
}

export const AuthProtection = ({ children }: IAuthProtectionProps) => {
  const isAuth = false

  return (
    <>
      {isAuth ? (
        children
      ) : (
        <Navigate
          replace
          to={{
            pathname: '/',
          }}
        />
      )}
    </>
  )
}

export default AuthProtection
