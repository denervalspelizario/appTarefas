import Head from 'next/head'
import styles from '../../src/styles/home.module.css'
import Image from 'next/image' // usando image de next 
import heroImage from '../../public/assets/hero.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          
          <Image // Estrututa de Imagem do Next
            className={styles.hero} // estilos
            alt='Logo Tarefas+'
            src={heroImage} // indicando qual imagem será carregada
            priority  // indicando que esta imagem tem prioridade no carregamento
          />

        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>
      </main>
    </div>
  )
}
