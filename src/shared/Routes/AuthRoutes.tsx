import { Navigate } from 'react-router-dom'

interface IAuthProtectionProps {
  children: React.ReactNode
}

export const AuthProtection = ({ children }: IAuthProtectionProps) => {
  const isAuth = true

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
