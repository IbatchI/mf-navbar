// import { LazyExoticComponent, lazy } from 'react'
// import loginRoutes from 'login/LoginRoutes'

import { Home } from '../../Home'
import { IRoute } from '../sharedTypes'

// import Layout from '../../Layout/Components/Layout/Layout'

// const LoginPage = lazy(
//   () => import(/* webpackChunkName: "LoginPage" */ 'login/Login'),
// ) as LazyExoticComponent<JSXComponents>

// const LoginPage2 = lazy(
//   () => import(/* webpackChunkName: "LoginPage" */ 'login/LoginPage2'),
// ) as LazyExoticComponent<JSXComponents>

export const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    needAuth: false,
  },
  // ...loginRoutes,
] satisfies IRoute[]

export const getRoutes = async (): Promise<IRoute[]> => {
  try {
    const loginRoutes = await import('login/LoginRoutes')

    return [...routes, ...loginRoutes]
  } catch (_e) {
    return routes
  }
}

// console.log(loginRoutes)
