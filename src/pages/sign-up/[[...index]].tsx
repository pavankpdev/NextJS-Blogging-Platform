import { SignUp } from '@clerk/nextjs'
import styles from '@/styles/Auth.module.scss'

const SignInPage = () => {
  return (
    <>
      <div className={styles.auth__container}>
        <SignUp path="/sign-up" routing="path" signInUrl={'/sign-in'} />
      </div>
    </>
  )
}

export default SignInPage
