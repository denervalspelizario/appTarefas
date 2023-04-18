import Head from 'next/head' // importando a tag de head que será o cabeçario
import styles from './styles.module.css'
import { GetServerSideProps } from 'next' // importando o getserver para acessar o lado do cliente sider
import { db } from '../../services/firebaseConnection'
import {
  doc, //O "doc" no Firestore se refere a um documento individual dentro de uma coleção. Cada documento contém uma chave única (ID) e um conjunto de campos, que podem ser valores simples (como strings ou números) 
  getDoc,
  collection,
  query, 
  where // para filtrar
} from 'firebase/firestore'


// o componente foi criado com [id] pois o id sera dinamico de acordo com id que foi clicada logo esse componente sera dinamico e url tambem será dinamica

interface TaskProps { // criando a tipagem de  item( obejto que formata dados da tarefa do usuario la da funcao getServerSideProps)
  item: {
    tarefa: string,
    created: string,
    public: boolean,
    user: string,
    taskId: string
  }
}

export default function Task({ item }: TaskProps){  // recendo item(objeto com dados da tarefa formatado) la da funcao abaixo getServerSideProps
  return(
    <div className={styles.container}>
      <Head>
        <title>Tarefa - {item.tarefa}</title>
      </Head>

      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{item.tarefa}</p>
        </article>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {  // recebendo os params(id da tarefa do usuario logado) do servidor que esta rodando

  const id = params?.id as string;  // garantindo e ja tipando que este id da tarefa será uma string

  const docRef = doc(db, "tarefas", id) // docRef é referenciando por db > tarefas > id  para poder chegar na id exata da tarefa ou seja pega um doc especifico

  const snapshot = await getDoc(docRef) // repassando o doc para o snapshot

  // CONDICIONAL  SE ELE DIGITAR UMA URL QUE NÃO EXISTE SERÁ REDIRECIONANDO PARA HOME
  if(snapshot.data() === undefined){ // se no snapshot não tiver dado estiver undefined
    return{
      redirect:{
        destination: '/',  // vai ser redirecionando para '/'
        permanent: false // apenas um vez
      }
    }
  }

  //CONDICIONAL QUE PERMITE ACESSAR URL APENAS DE TAREFAS PUBLICAS
  if(!snapshot.data()?.public){ // se no snapshot o dado for diferente(!) de public ou seja privado
    return { 
      redirect: {
        destination: '/',  // será redirecionando para home
        permanent: false // apenas 1 vez
      }
    }
  }

  const miliseconds = snapshot.data()?.created?.seconds * 1000  // adicionando em milisecods o valor de seconds * 1000 virando milisegundos msm

  // task esse objeto vai recber todos os dados de maneira organizada 
  const task = {
    tarefa: snapshot.data()?.tarefa,
    public: snapshot.data()?.public,
    created: new Date(miliseconds).toLocaleDateString(), // transformando os milisegundos em data
    user: snapshot.data()?.user,
    taskId: id,
  }
  console.log(task)

  // RETORNANDO A TAREFA TODA FORMATADA
  return {
    props: {
      item: task
    }
  }
}