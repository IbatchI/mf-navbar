import { LazyExoticComponent, lazy } from 'react'

// import Layout from '../../Layout/Components/Layout/Layout'

type JSXComponents = () => JSX.Element
export interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponents> | JSXComponents
  name: string
  needAuth: boolean
}

const LoginPage = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ 'login/Login'),
) as LazyExoticComponent<JSXComponents>

export const routes = [
  {
    path: '/',
    name: 'Home',
    Component: () => <h1>Soy el por defecto</h1>,
    needAuth: false,
  },
  {
    path: '/login',
    name: 'Login',
    Component: LoginPage,
    needAuth: false,
  },
] satisfies Route[]
