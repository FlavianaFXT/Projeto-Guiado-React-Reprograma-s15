import Header from "../components/Header"
import sobre from '../assets/woman_1184386.png'
import myphoto from "../assets/curiosidades-sobre-mim-removebg-preview.png"
import Styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
        <Header title="Minha História" image={sobre}/>
        <main className={Styles.aboutContainer}>

          <div className={Styles.curiositysContainer}>
            <img className={Styles.curiositysImg} src={myphoto} alt="foto de Flaviana" />
          </div>

          <div className={Styles.aboutmeContainer}>
            <h2>Quem é Flaviana?</h2>
            <p className={Styles.aboutmeText}>Sertaneja do interior de Pernambuco, formada em Gestão Ambiental, mestre em Recursos Hídricos, iniciou sua transição de carreira com 34 anos. Morou 14 anos em Recife-PE onde investiu nos seus estudos e iniciou sua vida profissional. Voltou pro interior devido a uma oportunidade de trabalho e lá ficou. Devido as poucas oportunidades de emprego em sua área, decidiu se aventurar pela tecnologia, pela qual se apaixona cada dia mais. Se encontrou no desenvolvimento Front End, o qual já estuda há quase um ano e espera, esperançosamente, uma oportunidade na área. Enquanto a oportunidade não chega, está empreendendo numa Hamburgueria na cidade em que mora hoje, no estado da Paraíba.</p>
          </div>

        </main>
    </>
  )
}

export default Sobre