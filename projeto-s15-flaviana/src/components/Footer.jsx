import Styles from '../styles/components/footer.module.css'
import logoReprograma from '../assets/reprograma-fundos-claros.png'

const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
        <p className={Styles.footerContent}> Feito por Flaviana durante o projeto guiado de React JS na </p>
        <img className={Styles.logoReprograma} src={logoReprograma}/>
    </footer>
  )
}

export default Footer