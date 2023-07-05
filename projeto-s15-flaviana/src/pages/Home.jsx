import home from '../assets/give-love_5709742.png'
import Header from '../components/Header'
import * as Icon from 'phosphor-react'
import styles from '../styles/pages/home.module.css'
import HomeCards from '../components/HomeCards'


const Home = () => {
  return (
    <>
        <Header title="Meu site" image={home}/>
        <main className={styles.homeContainer}> 
          <HomeCards
            icon={<Icon.Star size={150} color="#686AAC" weight="thin"/>}
            title="Vida"
            text="Um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades."
          />

          <HomeCards
            icon={<Icon.BracketsCurly size={150} color="#686AAC" weight="thin"/>}
            title="Código"
            text="Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação."
          />

          <HomeCards
            icon={<Icon.Laptop size={150} color="#686AAC" weight="thin"/>}
            title="Contato"
            text="Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos ou mesmo para mandar mensagens inspiradoras e de incentivo."
          />

        </main>
    </>
  )
}

export default Home