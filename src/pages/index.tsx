import Head from 'next/head'
import styles from '../../src/styles/home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        
      </Head>
      <main className={styles.main}>
        <h1>Hello World Inicio de Projeto</h1>
      </main>
    </div>
  )
}
