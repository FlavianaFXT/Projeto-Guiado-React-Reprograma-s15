import Header from "../components/Header"
import contato from '../assets/contact.png'
import database from "../service/firebase"
import { ref, push, set } from 'firebase/database'

import { useState } from "react"


import styles from '../styles/pages/contact.module.css'

const Contato = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[mensage, setMensage] = useState('')

    function handleInputName(e){
        setName(e.target.value)
    }

    function handleInputEmail(e){
        setEmail(e.target.value)
    }

    function handleInputMensage(e){
        setMensage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        const messageListRef = ref(database,'mensagens')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            nome: name,
            email: email,
            texto: mensage
        })
        setName('')
        setEmail('')
        setMensage('')
    }

  return (
    <>
    <Header title="Entre em contato" image={contato}/>
    <main>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.formInput}
            type="text" 
            placeholder="Digite seu nome"
            onChange = {handleInputName}
            value={name}
            />
            <input className={styles.formInput}
            type="email" 
            placeholder="Digite seu email"
            onChange = {handleInputEmail}
            value={email}
            />
            <textarea className={styles.formInput}
            placeholder="Digite sua mensagem"
            onChange = {handleInputMensage}
            value={mensage}
            />
            <button className={styles.formButton} type="submit">Enviar Mensagem</button>
        </form>
    </main>
   
    </>
  )
}

export default Contato