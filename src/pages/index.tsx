import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import styles from '../../src/styles/home.module.css'
import Image from 'next/image' // usando image de next 
import heroImage from '../../public/assets/hero.png'
import { GetStaticProps } from 'next'
import { db } from '@/services/firebaseConnection'
import {
  collection, // No Firestore uma coleção (collection) é um agrupamento de documentos que neste caso será comments e tarefas
  getDocs, // para pegar varios documentos
} from 'firebase/firestore'

interface HomeProps {

  posts: number;
  comments:  number;

}


export default function Home( { posts, comments }: HomeProps ) {
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

        <div className={styles.infoContent}>

          <section className={styles.box}>
            <span>
              +{posts} posts 
            </span>
          </section>
          <section className={styles.box}>
            <span>
              +{comments} comentarios
            </span>
          </section>

        </div>
      </main>
    </div>
  )
}
//
// Pegando la no db a quantidade "comments" e "tarefas" e adiciona no
// props posts('tarefas') e comments'comentarios' somente a quantidade de ambos para ser usado na section box 
export const getStaticProps: GetStaticProps = async () => {
  /* O getStaticProps é uma função utilizada no Next.js para gerar páginas estáticas com conteúdo dinâmico. 
      O getStaticProps sabe que essa página é uma página estática e pode ser pré-renderizada no momento da build. 
      Isso significa que quando o usuário acessar essa página, o conteúdo já estará disponível e carregará mais rapidamente do que se a página fosse gerada dinamicamente no momento do acesso.
  
  .*/
  
  // Buscar do banco de dados os numeros e mandar pro componente
  const commentRef = collection(db, "comments") // pegando todas as  collection  comments
  const postRef = collection(db, "tarefas") // pegando todas as collection tarefas

  const commentSnapshot = await getDocs(commentRef) // pega todos os docs e joga na const
  const postSnapshot = await getDocs(postRef) // pega todos os docs e joga na const
 
  return {
    props: {
      posts: postSnapshot.size || 0,  // repassa a props apenas a quantidade de tarefas, senão tiver nenhum será 0
      comments: commentSnapshot.size || 0 // repassa a props apenas a quantidade de comments

    },
    revalidate: 60 // será revalidada(atualizada) a cada 60 segundos
  }

}