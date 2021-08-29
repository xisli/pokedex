import { memo } from 'react'
import Link from 'next/link'

import styles from './header.module.css'

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/">
          <a aria-label="Navigate Home" className={styles.logo}>
            PokèDex
          </a>
        </Link>

        {title && <div className={styles.content}>{title}</div>}
      </div>
    </nav>
  )
}

Header.displayName = 'Header'
export default memo(Header)
