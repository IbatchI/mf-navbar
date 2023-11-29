import { LazyExoticComponent } from 'react'

export interface IUserInfo {
  id: number
  name: string
  lastaName: string
  userName: string
}

export type JSXComponents = () => JSX.Element
export interface IRoute {
  path: string
  Component: LazyExoticComponent<JSXComponents> | JSXComponents
  name: string
  needAuth: boolean
}
