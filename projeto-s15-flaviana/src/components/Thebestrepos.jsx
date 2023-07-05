import Styles from "../styles/components/thebestrepos.module.css"
import { ArrowBendDownRight } from 'phosphor-react'
import Subtitle from "./Subtitle"
import Text from "./Text"

const Thebestrepos = ({name, src, alt, description, language, html_url}) => {
    return  (
            <div className={Styles.repository}>
                <Subtitle className={Styles.thebestTitle} content={name}/>
                <img className={Styles.thebestImg} src={src} alt={alt}/>
                <Text className={Styles.repositoryDescription} description = {description}/>
                <div className={Styles.language}>
                    <Text className={Styles.languageText} description="Linguagem: "/>
                    <Text className={Styles.repositoryText} description = {language}/>
                </div>
                <div >
                    <a href={html_url} target="_blank" rel="noreferrer" ><Text className={Styles.repositoryLink} description = "Acesse aqui"/></a>
                    <ArrowBendDownRight size={32} />
                </div>
                
            </div>
        )
    }    

export default Thebestrepos