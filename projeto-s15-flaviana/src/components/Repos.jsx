import { useState, useEffect} from "react"
import Axios from 'axios'
import Styles from '../styles/components/repos.module.css'
import { ArrowBendDownRight } from 'phosphor-react'

const Repos = () => {
    const [repositories, setRepositories] = useState([])
    const url = 'https://api.github.com/users/flavianafxt/repos'

    useEffect(() => {
        async function getRepositories(){
        const response = await Axios.get(url)
        setRepositories(response.data)
        } 
        getRepositories()
     }, [])

     return(
        <div className={Styles.cardRepo}>
          {repositories.map((repository)=>{
             return (
                <div key={repository} className={Styles.repository}>
                    <h3 className={Styles.repositoryTitle}>{repository.name}</h3>
                    <p className={Styles.repositoryDescription}>{repository.description}</p> 
                    <div className={Styles.language}>
                        <p className={Styles.languageText}>Linguagem: </p> 
                        <p className={Styles.repositoryText}>{repository.language ? repository.language:"-"}</p> 
                    </div>
                    <a href={repository.html_url} target="_blank" rel="noreferrer" ><p className={Styles.repositoryLink}>Acesse o repositório</p></a>
                    <ArrowBendDownRight size={32} />
                </div>
             )            
            })
            }  
        </div>
     )
}
       

    export default Repos