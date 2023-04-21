import { useAuth, UserButton, SignInButton } from '@clerk/nextjs'

// STYLES
import styles from '@/styles/Navbar.module.scss'
const Navbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <>
      <nav className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <h1>Logo</h1>
        </div>
        <div className={styles.navbar__cta}>
          {isSignedIn ? <UserButton /> : <SignInButton />}
        </div>
      </nav>
    </>
  )
}

export default Navbar
