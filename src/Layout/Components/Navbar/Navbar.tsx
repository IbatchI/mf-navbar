import { Link } from 'react-router-dom'

import { routes } from '../../../shared/constants/router'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>YPF</div>
      <ul className={styles.linksList}>
        {routes.map(({ name, path = '' }) => (
          <li className={styles.listItem} key={path}>
            <Link className={styles.link} to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
