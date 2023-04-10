
import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import { getSession } from 'next-auth/react' // importando o getSession para verificar se a sessão ativa
import { Textarea } from '../../components/textArea'


export default function Dashboard(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            
            <h1 className={styles.title}>Qual a sua tarefa?</h1>

            <form>
              <Textarea
                placeholder="Digite qual a sua tarefa.."
              
              />  
              <div className={styles.checkboxArea}>
                <input type="checkbox" className={styles.checkbox} />
                <label className={styles.label}>Deixar tarefa publica </label>
              </div>

              <button className={styles.button} type="submit">
                Registrar
              </button>
            </form>

          </div>
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