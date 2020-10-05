// pages/404.js
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <img
      className={`${utilStyles.container}`}
      src='/images/pageNotFound.gif'
      onClick={() => window.location.href = `${window.location.origin}/`}
    />
  )
}