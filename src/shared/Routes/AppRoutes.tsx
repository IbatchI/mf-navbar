import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from '../constants/router'

import { AuthProtection } from './AuthRoutes'

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, needAuth, Component }) => (
        <Route
          element={needAuth ? <AuthProtection>{<Component />}</AuthProtection> : <Component />}
          key={path}
          path={path}
        />
      ))}

      {/* Ruta predeterminada en caso de que no se encuentre ninguna ruta */}
      <Route element={<Navigate replace to={'/'} />} path='/*' />
    </Routes>
  )
}
