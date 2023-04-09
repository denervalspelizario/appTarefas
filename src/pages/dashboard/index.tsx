
import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import { getSession } from 'next-auth/react' // importando o getSession para verificar se a sessão ativa


export default function Dashboard(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Pagina Painel</h1>
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