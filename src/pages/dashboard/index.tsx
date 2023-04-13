import {  ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import { getSession } from 'next-auth/react' // importando o getSession para verificar se a sessão ativa
import { Textarea } from '../../components/textArea'
import { db } from '../../services/firebaseConnection' // importando dados do db
import { addDoc, collection } from 'firebase/firestore' // importando os metodos do firestore

import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'

interface HomeProps { // homeProps  tem uma propriedade user que dentro é um objeto email que é uma string
  user: {
    email: string
  }
}


// comando para instalar icons yarn add react-icons

export default function Dashboard({ user }: HomeProps){ // user usando a estrutura da interface HomeProps 

  const [input, setInput] = useState("") // 
  const [checkbox, setCheckbox ] = useState(false) // state que armazenará click da checkbox iniciará como false



  // FUNCAO QUE ADICINA NA STATE CHECKBOX A ÇAO DO CLICK NA CHECKBOX
  function dadoCheckbox(event: ChangeEvent<HTMLInputElement>){ // ChangeEvent<HTMLInputElement> é a tipagem,  event é o dado recebido do checkbox no caso um boolean  
    setCheckbox(event.target.checked)

  }

  //FUNÇÃO QUE REGISTRA DADOS DO USER NO BANCO DE DADOS - CRIA UMA CHILD 'tarefas' E ADICONA UM OBJETO COM /EMAIL DO USER/DATA DO REGISTRO/SE REGISTO É PUBLICO OU NÃO/TAREFA DIGITADA NA TEXTAREA   
  async function registrandoTarefas(event: FormEvent){ // lembrando tipagem do event FormEvent, como essa funcao tem que esperar dados do firebase então é assincrona
     event.preventDefault(); // garantindo que ao clicar não sera atualizada a pagina 

     if (input === '') return; // ao clicar se estiver vazio return nada   

     // DEU CERTO
     try{ // deu certo usuario ta logado && tem dados digitados no input do textarea entao vamos registrar no banco de dados 
        await addDoc(collection(db, 'tarefas'), { // tarefas é o child do usuario logado la no direbase e db é o banco de dados que vai ser registrado, o addDoc gera a key aleatoria
          tarefa : input, // registarndo a tarefa com a state input( dados digitados na textarea)
          created: new Date(),  // registrando a data que foi criado a tarefa
          user: user?.email, // registrando o email do usuario logado 
          public: checkbox // registrando se é publica ou não com dados da state checkbox 
        });

      setInput('');  // após o registro limpa  a state 
      setCheckbox(false) // e altera a checkbox para desmarcada/false  

     // DEU ERRO   
     } catch(err){ // se der erro mostre o erro
      console.log(err)
     }

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
                                                                                                    // estamos usando typescript entao event: esta usando a interface ChengeEvent e tipo HTMLTextAreaElement       
              />                                                                                      
              <div className={styles.checkboxArea}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox} 
                  checked={checkbox} // marcação se inicia com false pois state se inica como false - obs o checked indica true/marcado - false/desmarcado 
                  onChange={dadoCheckbox} // funçao que pega o dado true/false de checkbox
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


// VERIFICANDO SE TEM USUARIO E SE NÃO TIVER BLOQUEANDO TODAS A ROTA E REDIRECIONANDO PARA HOME COM RETORNO DE EMAIL DO USUARIO
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
    props: {
      user: { // esse user que sera retornado será usado la em cima no dashboad
        email: session?.user.email  // se estiver logado retorna o email do usuario logado
      }
    },
  };
};