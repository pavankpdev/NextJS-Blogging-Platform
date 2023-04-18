import { SignIn } from '@clerk/nextjs'
import styles from '@/styles/Auth.module.scss'

const SignInPage = () => {
  return (
    <>
      <div className={styles.auth__container}>
        <SignIn path="/sign-in" routing="path" signUpUrl={'/sign-up'} />
      </div>
    </>
  )
}

export default SignInPage
