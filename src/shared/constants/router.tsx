import { LazyExoticComponent, lazy } from 'react'

import { Home } from '../../Home'

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

const LoginPage2 = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ 'login/LoginPage2'),
) as LazyExoticComponent<JSXComponents>

export const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    needAuth: false,
  },
  {
    path: '/login',
    name: 'Login',
    Component: LoginPage,
    needAuth: false,
  },
  {
    path: '/loginPage',
    name: 'Login Page 2',
    Component: LoginPage2,
    needAuth: false,
  },
] satisfies Route[]
