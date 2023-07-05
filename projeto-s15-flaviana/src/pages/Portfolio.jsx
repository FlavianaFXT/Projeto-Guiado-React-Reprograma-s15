import Header from "../components/Header"
import portfolio from '../assets/sobre.svg'
import star from '../assets/star.png'
import digimon from '../assets/digimon.gif'
import caatinga from '../assets/caatinga-ilustrada.gif'
import githubsearch from '../assets/githubsearch.gif'
import Repos from "../components/repos"
import Styles from "../styles/pages/portfolio.module.css"
import Thebestrepos from "../components/Thebestrepos"


const Portfolio = () => {
  return (
    <>
    <Header title="Meu portfólio" image={portfolio}/>
    <main className={Styles.repositoriesContainer}>
      <div>
        <div>
            <h2 className={Styles.title}>Favoritos</h2>
            <div className={Styles.stars}>
              <img className={Styles.star} src={star} alt="desenho de estrela" />
              <img className={Styles.star}  src={star} alt="desenho de estrela" />
              <img className={Styles.star}  src={star} alt="desenho de estrela" />
              <img className={Styles.star}  src={star} alt="desenho de estrela" />
              <img className={Styles.star}  src={star} alt="desenho de estrela" />
            </div>
        </div>
        
        <div className={Styles.theBestRepos}>
            <Thebestrepos 
            name="DIGIMON-PAGE" 
            src={digimon} 
            alt="gif da página digimon-list" 
            description="Página com todos os digimons, com acesso a cada um, onde aparece foto e seus dados. Projeto desenvolvido com Javascript." 
            language="Javascript" 
            html_url="https://digimons-list.netlify.app/" />

            <Thebestrepos 
            name="CAATINGA-ILUSTRADA" 
            src={caatinga} 
            alt="gif do site caatinga ilustrada" 
            description="Dicionário da Fauna, Flora e Paisagens da Caatinga, utilizando Javascript" 
            language="Javascript" 
            html_url="https://caatinga-ilustrada.netlify.app/" />
            
            <Thebestrepos 
            name="GITHUB-SEARCH" 
            src={githubsearch} 
            alt="gif do site githubsearch" 
            description="Mecanismo de Busca de usuários e repositórios do Github, utilizando Javascript" 
            language="Javascript" 
            html_url="https://search-github-users-and-repos.netlify.app/" />
        </div>
      </div>
      
      <h2 className={Styles.title}>Repositórios Públicos</h2>
      <Repos/>
      
    </main>
    </>
  )
}

export default Portfolio