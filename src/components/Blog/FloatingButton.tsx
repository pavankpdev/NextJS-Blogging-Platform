import { useRouter } from 'next/router'

// STYLES
import UtilityStyles from '@/styles/Utility.module.scss'
import Styles from '@/styles/FloatingBtn.module.scss'
const FloatingButton = () => {
  const router = useRouter()

  const toCreateNewBlog = () => {
    router.push('/blog/create')
  }
  return (
    <>
      <div className={Styles.floating__btn}>
        <button
          className={UtilityStyles.primary__btn}
          onClick={toCreateNewBlog}
        >
          Create New Blog
        </button>
      </div>
    </>
  )
}

export default FloatingButton
