import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        
      </Head>
      <main className={styles.main}>
        <h1>Hello World Inicio de Projeto</h1>
      </main>
    </>
  )
}
