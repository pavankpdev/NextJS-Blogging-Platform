import { SignUp } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <>
      <SignUp path="/sign-up" routing="path" signInUrl={'/sign-in'} />
    </>
  )
}

export default SignInPage
