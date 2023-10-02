import { ReactElement } from 'react'

import Navbar from '../Navbar/Navbar'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Layout</h1>
        {children}
      </div>
    </>
  )
}

export default Layout
