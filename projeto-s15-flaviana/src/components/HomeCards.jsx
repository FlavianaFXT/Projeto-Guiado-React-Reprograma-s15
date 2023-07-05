import styles from '../styles/components/homecards.module.css'

const HomeCards = ({icon, title, text}) => {
    return(
        <div className={styles.cardContainer}>
            {icon}
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{text}</p>
        </div>
    )
}

export default HomeCards