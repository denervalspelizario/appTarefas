
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina

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