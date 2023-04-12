import {  ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import { getSession } from 'next-auth/react' // importando o getSession para verificar se a sessão ativa
import { Textarea } from '../../components/textArea'

import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
// comando para instalar icons yarn add react-icons

export default function Dashboard(){

  const [input, setInput] = useState("") // 
  const [checkbox, setCheckbox ] = useState(false) // state que armazenará click da checkbox iniciará como false



  // FUNCAO QUE ADICINA NA STATE CHECKBOX A ÇAO DO CLICK NA CHECKBOX
  function dadoCheckbox(event: ChangeEvent<HTMLInputElement>){ // ChangeEvent<HTMLInputElement> é a tipagem,  event é o dado recebido do checkbox no caso um boolean  
    setCheckbox(event.target.checked)

  }


  function registrandoTarefas(event: FormEvent){
     event.preventDefault(); // garantindo que ao clicar não sera atualizada a pagina 

     if (input === '') return;  

     alert("TESTE")
  }


  return(
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            
            <h1 className={styles.title}>Qual a sua tarefa?</h1>

            <form  onSubmit={registrandoTarefas}>
              <Textarea
                placeholder="Digite qual a sua tarefa.."
                value={input}
                onChange={(event:ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)} //repassando dado digitado a state input
              />  
              <div className={styles.checkboxArea}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox} 
                  checked={checkbox} // marcação se inicia com false pois state se inica como false
                  onChange={dadoCheckbox}
                />
                <label className={styles.label}>Deixar tarefa publica </label>
              </div>

              <button className={styles.button} type="submit">
                Registrar
              </button>
            </form>

          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>
          <article className={styles.task}>
            
            <div className={styles.tagContainer}>
              <label className={styles.tag}>
                PUBLICO
              </label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color='#3183FF'/>
              </button>
            </div>

            <div className={styles.taskContent}>
              <p>Minha primeira tarefa de exempo show demais</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color='#ea3140' />
              </button>
            </div>

          </article>

          <article className={styles.task}>
            
            <div className={styles.tagContainer}>
              <label className={styles.tag}>
                PUBLICO
              </label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color='#3183FF'/>
              </button>
            </div>

            <div className={styles.taskContent}>
              <p>Minha primeira tarefa de exempo show demais</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color='#ea3140' />
              </button>
            </div>

          </article>
        </section>
      
      </main>
    </div>
  )
}


// VERIFICANDO SE TEM USUARIO E SE NÃO TIVER BLOQUEANDO TODAS A ROTA E REDIRECIONANDO PARA HOME 
export const getServerSideProps = async ({ req }) => {  // fica dando erro no vscode mais funciona

  const session = await getSession({ req })
  //console.log(session)
  if(!session?.user){  //se não tem usuario logado vamos redirecionar para '/' que é a home
    return{
      redirect: {
        destination: '/', //redirecionando para home
        permanent: false // false pq queremos somente redirecionar quando o user não esta logado
      },
    };
    
  }
  return{
    props: {},
  };
};