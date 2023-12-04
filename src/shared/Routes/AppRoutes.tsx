import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getRoutes } from '../constants/router'
import { IRoute } from '../sharedTypes'

import { AuthProtection } from './AuthRoutes'

export const AppRoutes = () => {
  const [routes, setRoutes] = useState<IRoute[]>([])

  useEffect(() => {
    getRoutes().then((rs) => setRoutes(rs))
  }, [])

  return (
    <Routes>
      {routes.map(({ path, needAuth, Component }) => (
        <Route
          //    Aca se me ocurre que el mf que maneja la authenticacion comparta este componente Auth protection porque
          //     en todos los MF vamos a tener que controlar esto, se chequerea dos veces?
          // no deberia igual porque no renderizamos el App del otro MF
          // Asi tambien compartiria los permisos del usuario ese array de siempre
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
