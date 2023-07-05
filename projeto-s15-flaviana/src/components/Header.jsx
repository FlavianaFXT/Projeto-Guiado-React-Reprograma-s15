import styles from '../styles/components/header.module.css'

const Header = ({title, image, alt}) => {
  return (
   <header className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <img className={styles.headerImg} src={image} alt={alt} />
   </header>
  )
}

export default Header